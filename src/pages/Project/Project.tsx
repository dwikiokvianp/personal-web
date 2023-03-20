import { BiLink } from "react-icons/all";
import ProjectCard from "./molecules/ProjectCard";

const Project = () => {
  return (
    <div className="m-10 mt-20">
      {/*//header section*/}
      <section className="w-full md:w-[60%]">
        <div className="text-5xl font-bold">
          Things I’ve made trying to put my dent in the universe.
        </div>
        <div className="text-slate-600 mt-10">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </div>
      </section>

      {/*//project section*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
