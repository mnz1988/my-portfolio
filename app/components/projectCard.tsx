"use client";
import React from "react";
import { ImageLightbox } from "./ImageLightbox";

export interface ProjectCardProps {
  projectTitle: string;
  projectCountry: string;
  projectDescription: string;
  projectTags: string[];
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectCountry,
  projectDescription,
  projectTags,
  images
}) => (
  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-lg">{projectTitle}</h2>
        <p className="mt-2">
          {projectTags.map((tag, index) => (
            <span key={index} className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">
              {tag}
            </span>
          ))}
        </p>
      </div>
      <span className="italic font-normal">{projectCountry}</span>
    </div>

    <p>{projectDescription}</p>
    
    {/* <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600"> */}
    <div className="mt-4 text-gray-600">
      <ImageLightbox images={images} />
    </div>
  </div>
);

export default ProjectCard;