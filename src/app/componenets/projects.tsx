import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resume from '../public/resume.png';
import countdowntimer from '../public/countdowntimer.png';
import todolist from '../public/todolist.png';
import idcard from '../public/idcard.png';
import pizzapic from '../public/pizzapic.png';

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gradient-to-r from-black to-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            Explore some of my recent work, crafted with a focus on functionality and user experience.
          </p>
        </div>
        {/* Flex container for wrapping projects in a row */}
        <div className="flex flex-wrap -m-4">
          {/* Project 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="Resume Builder"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={resume}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Resume Builder
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Resume Builder
                </h1>
                <p className="leading-relaxed">
                  A user-friendly tool that enables seamless resume creation with customizable templates, shareable links, and download options.
                </p>
                <Link href="https://uniquepathshareand-download.vercel.app" className="text-indigo-500 inline-flex items-center mt-3 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="Countdown Timer"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={countdowntimer}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Countdown Timer
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Countdown Timer
                </h1>
                <p className="leading-relaxed">
                  A countdown timer app to track time precisely and enhance productivity.
                </p>
                <Link href="https://countdowntimer1.vercel.app" className="text-indigo-500 inline-flex items-center mt-3 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="To-do List"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={todolist}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  To-Do List
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  To-Do List
                </h1>
                <p className="leading-relaxed">
                  A streamlined to-do list app for efficient task management and daily productivity.
                </p>
                <Link href="https://todolistnextjs-six.vercel.app" className="text-indigo-500 inline-flex items-center mt-3 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="ID Card"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={idcard}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  ID Card
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Governor ID Card
                </h1>
                <p className="leading-relaxed">
                  An ID card generator for the Governor Sindh IT Initiative, designed for quick and professional identification.
                </p>
                <Link href="https://id-card-1-sanakhalid1521s-projects.vercel.app" className="text-indigo-500 inline-flex items-center mt-3 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="Pizza E-commerce"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pizzapic}
                layout="fill"
                objectFit="cover"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  E-Commerce Website
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Pizza E-Commerce
                </h1>
                <p className="leading-relaxed">
                  A flavorful pizza e-commerce site offering delicious variety and seamless ordering.
                </p>
                <Link href="https://pizzaecommercrwebsite.vercel.app" className="text-indigo-500 inline-flex items-center mt-3 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
