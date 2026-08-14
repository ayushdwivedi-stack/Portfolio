import { projects } from "@/data/projects"
import SectionHeading from "@/components/ui/SectionHeading"
import ProjectCard from "@/components/projects/ProjectCard"

export default function Projects() {
  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading number="—" label="Full Archive" title="All Projects" className="mb-16" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
