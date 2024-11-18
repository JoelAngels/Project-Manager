"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data) {
  // get user and auth id from clerk
  const { userId, orgId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  //Check User if he or she is member of the organization
  const { data: membership } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: organization.id,
    });

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
        organization: orgId,
      },
    });
    return project;
  } catch (error) {
    throw new Error("Error creating project:" + error.message);
  }
}
