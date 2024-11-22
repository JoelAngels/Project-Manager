"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug) {
  // get user from clerk auth

  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  //Check if user exists in our database or not
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  //User does not exist
  if (!user) {
    throw new Error("User not found");
  }

  //Get organization details
  const organization = await clerkClient().organizations.getOrganization({
    slug,
  });

  if (!organization) {
    return null;
  }

  //Check User if he or she is member of the organization
  const { data: membership } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: organization.id,
    });

  const userMembership = membership.find(
    (member) => member.publicUserData.userId === userId
  );

  if (!userMembership) {
    return null;
  }

  return organization;
}

export async function getOrganizationUsers(orgId) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  //Check if user exists in our database or not
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const organizationMemberShips =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: orgId,
    });

  const userIds = organizationMemberShips.data.map(
    (membership) => membership.publicUserData.userId
  );

  const users = await db.user.findMany({
    where: {
      clerkUserId: {
        id: userIds,
      },
    },
  });

  return users;
}
