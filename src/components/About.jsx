import React from 'react'
import { FaGithub, FaCode, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <h1 className="text-3xl font-bold text-center mb-8 text-white pt-10">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img 
              src="https://github.com/shreeteja172.png" 
              alt="Profile" 
              className="w-40 h-40 rounded-full mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Shreeteja</h2>
            <p className="text-gray-700 mb-4">
              I'm a developer passionate about creating web applications. This Pexel-Pin project is a clone of Pexels built with React.
            </p>
            
            <div className="flex items-center mb-2">
              <FaGithub className="mr-2 text-gray-800" />
              <a 
                href="https://github.com/shreeteja172" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/shreeteja172
              </a>
            </div>
            
            <div className="flex items-center mb-2">
              <FaCode className="mr-2 text-gray-800" />
              <a 
                href="https://github.com/shreeteja172/Pexel-Pin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Source Code: Pexel-Pin
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">About This Project</h3>
          <p className="text-gray-700 mb-4">
            Pexel-Pin is a React application that mimics the functionality of Pexels, 
            allowing users to search and browse high-quality images. The project uses 
            modern React features and responsive design principles.
          </p>
          <p className="text-gray-700">
            This project was built with React.js, Tailwind CSS, and utilizes various 
            APIs to deliver a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About