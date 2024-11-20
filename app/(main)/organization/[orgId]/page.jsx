import { getOrganization } from "@/actions/onganization";
import OrgSwitcher from "@/components/OrgSwitcher";
import ProjectList from "./_components/ProjectList";

const Organization = async ({ params }) => {
  const { orgId } = params;
  const organization = await getOrganization(orgId);

  if (!organization) {
    return <div>Organization not found</div>;
  }
  return (
    <div className="container mx-auto">
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
      <div className="mt-8">Show user assigned and reported issues here</div>
    </div>
  );
};

export default Organization;
