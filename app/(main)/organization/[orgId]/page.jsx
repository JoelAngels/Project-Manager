import { getOrganization } from "@/actions/onganization";
import OrgSwitcher from "@/components/OrgSwitcher";
import ProjectList from "./_components/ProjectList";
import UserIssues from "./_components/UserIssues";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Organization = async ({ params }) => {
  const { orgId } = params;
  const organization = await getOrganization(orgId);
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!organization) {
    return <div>Organization not found</div>;
  }
  return (
    <div className="container mx-auto dotted-background">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start pt-10">
        <h1 className="text-5xl font-bold gradient-title pb-2">
          {organization.name}&rsquo;s Project
        </h1>
        {/* ORG Switcher */}
        <OrgSwitcher />
      </div>
      <div className="mb-4">
        <ProjectList orgId={organization.id} />
      </div>
      <div className="mt-8">
        <UserIssues userId={userId} />
      </div>
    </div>
  );
};

export default Organization;

//assign an issue to me
// report made by me
