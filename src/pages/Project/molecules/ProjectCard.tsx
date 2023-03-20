const ProjectCard = () => {
  return (
    <section className="max-w-sm hover:bg-gray-50 p-3 rounded-xl hover:scale-110 transform transition duration-300 ">
      <div className="my-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
          alt=""
          className="w-20 h-20 p-1 border rounded-full hover:p-0 "
        />
      </div>
      <h1 className="font-bold text-slate-700 text-xl">Starbucks</h1>
      <div className="text-slate-500 text-sm mt-1">
        Created a clone of Starbucks website using React, Redux, and Tailwind
      </div>
    </section>
  );
};

export default ProjectCard;
