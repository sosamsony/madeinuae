import ProjectsPage from "../components/pages/ProjectsPage";
import { useProjects } from "../utils/projects";

export default async function Projects() {
  const { projects } = await useProjects(); // ✅ Await the async function

  return (
    <main>
      <title>Dev Projects | Made In UAE</title>
      <ProjectsPage repositories={projects} />
    </main>
  );
}
