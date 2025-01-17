import { ProjectType } from "@/app/types";
import React from "react";

const Project: React.FC<ProjectType> = ({ title, link, description, tech }) => {
  return (
    <div className="flex border-t-4 py-6">
      <div className="ml-8">
        <h1 className="font-lato font-[700] text-xl tracking-wide text-blue-500">
          {title}
          <a href={link} target="_blank">
            <span className="ml-4">🔗</span>
          </a>
        </h1>
        <h3 className="font-lato text-md my-4 text-gray-600">
          <span className="mr-4 text-2xl">💡</span>
          {description}
        </h3>
        <div className="flex mt-6 flex-wrap gap-y-2">
          {tech.map((item, index) => (
            <p
              key={index}
              className="py-1 px-3 font-lato text-sm border rounded-full mx-1 border-teal-600 bg-teal-600 bg-opacity-20 whitespace-nowrap"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
