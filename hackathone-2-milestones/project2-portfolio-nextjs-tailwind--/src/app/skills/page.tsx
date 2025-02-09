import React from "react";
const skills = [
  { name: "HTML", percentage: 90, color: "bg-orange-400", hover: "from-yellow-500 to-yellow-900" },
  { name: "CSS", percentage: 85, color: "bg-orange-400", hover: "from-green-500 to-green-700" },
  { name: "Tailwind CSS", percentage: 90, color: "bg-orange-400", hover: "from-purple-500 to-purple-700" },
  { name: "JavaScript", percentage: 65, color: "bg-orange-400", hover: "from-yellow-500 to-yellow-700" },
  { name: "TypeScript", percentage: 80, color: "bg-orange-400", hover: "from-blue-800 to-blue-600" },
  { name: "Next.js", percentage: 80, color: "bg-orange-400", hover: "from-black to-red-600" },
];

const SkillsProgress = () => {
  return (
    <div className="h-auto bg-deepPurple text-white flex flex-col items-center py-20 px-20">
      <h1
  className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
    font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 
    py-4 sm:py-6 md:py-8 lg:py-10 
    tracking-wide sm:tracking-wider md:tracking-widest 
    underline underline-offset-[6px] sm:underline-offset-[8px] md:underline-offset-[10px] lg:underline-offset-[12px]
    decoration-2 decoration-gray-500 
    hover:bg-gradient-to-r hover:from-blue-500 hover:to-black 
    hover:shadow-xl text-white px-4 sm:px-6 md:px-8 lg:px-10 
    inline-block transition-all duration-300 ease-in-out
  "
>
  <span className="text-white" data-aos="zoom-in-down">
    My{" "}
  </span>
  <span
    className="text-brightOrange"
    data-aos="zoom-in-down"
  >
    Skills
  </span>
</h1>
      <div className="w-full max-w-2xl space-y-4" data-aos="zoom-in-up">
        {/* USING MAP FUNCTION */}
        {skills.map((skill, index) => (
          <div key={index}>
            <h2
              className="text-lg font-semibold text-white"
              data-aos="zoom-in-up"
            >
              {skill.name}
            </h2>
            <p
              className=" text-right text-sm text-white font-semibold"
              data-aos="zoom-in-up"
            >
              {skill.percentage}%
            </p>

            <div className="relative w-full h-4 bg-white rounded-lg overflow-hidden">
              <div
                className={`h-full ${skill.color} rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-x-110 hover:shadow-2xl hover:ring-8 hover:bg-gradient-to-br hover:${skill.hover}`}
                style={{ width: `${skill.percentage}%` }}
                data-aos="zoom-in-up"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProgress;
