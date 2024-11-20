"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data) {
  // get user and auth id from clerk
  const { userId, orgId } = auth();
  // console.log("Auth details:", { userId, orgId });

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  //Check User if he or she is member of the organization
  const { data: membership } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: orgId,
    });
  // console.log("Membership:", membership);
  const userMembership = membership.find(
    (member) => member.publicUserData.userId === userId
  );

  // check if user membership does not exist or user member.role is not an admin
  if (!userMembership || userMembership.role != "org:admin") {
    throw new Error("Only organizations admins can create projects");
  }

  try {
    const project = await db.project.create({
      data: {
        name: data.name,
        key: data.key,
        description: data.description,
        organizationId: orgId,
      },
    });
    return project;
  } catch (error) {
    // console.error("Error creating project:", error);
    throw new Error("Error creating project: " + error.message);
  }
}

export async function getProjects(orgId) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const projects = await db.project.findMany({
    where: { organizationId: orgId },
    orderBy: { createdAt: "desc" },
  });

  return projects;
}
