import React, { useRef } from "react";
import { PROJECT } from "../constants/constantParagraph";
import { motion, useInView } from "framer-motion";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div className="lg:p-8 " id="project">
      <div>
        <h1 className="text-center text-5xl my-16 font-bold text-gray-100">
          Projects
        </h1>
      </div>
      <div className="space-y-10">
        {PROJECT.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center   hover:scale-105 p-6 m-5"
          >
            <div className="w-full md:w-1/3 m-2">
              <img
                className="w-full h-full hover:scale-150"
                src={e.image}
                alt={e.title}
              />
            </div>
            <h1 className="m-4 text-2xl">⸺</h1>
            <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
              <h2 className="lg:text-2xl font-bold text-gray-100 mb-4">
                {e.title}
              </h2>
              <p className="text-gray-100 lg:text-lg mb-4">{e.description}</p>
              <p className="text-gray-100 lg:text-lg mb-4">{e.technologie}</p>
              <div className="flex space-x-4">
                <a href={e.live_link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    LIVE LINK
                  </button>
                </a>
                <a
                  href={e.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                    GITHUB LINK
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
