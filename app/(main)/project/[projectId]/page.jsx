import { getProject } from "@/actions/project";
import { notFound } from "next/navigation";
import SprintCreationForm from "../_components/CreateSprints";

const ProjectPage = async ({ params }) => {
  const { projectId } = params;

  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }
  return (
    <div className="container mx-auto">
      <SprintCreationForm
        projectTitle={project.name}
        projectId={projectId}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
      />
      {project.sprints.length > 0 ? (
        <></>
      ) : (
        <div>Create a sprint from button above</div>
      )}
    </div>
  );
};

export default ProjectPage;
