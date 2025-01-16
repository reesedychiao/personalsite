import { ExperienceType } from "@/app/types";
import React from "react";

const Experience: React.FC<ExperienceType> = ({
  date,
  title,
  link,
  description,
}) => {
  return (
    <div className="flex py-6 px-4 border-t-4">
      <div className="mr-16 whitespace-nowrap">
        <h2 className="font-lato font-[300] text-sm">{date}</h2>
      </div>
      <div>
        <h1 className="font-lato text-blue-500 tracking-wide font-[700] text-xl mb-4">
          {title}
          <a href={link} className="ml-8">
            🔗
          </a>
        </h1>
        {description.map((item, index) => (
          <div key={index} className="flex items-start gap-2 mb-1">
            <p className="font-lato text-gray-600">
              <span className="mr-4">📌</span>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
