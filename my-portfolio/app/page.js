export default function Home() {
  return (
    <section className="text-left mt-20">
      <div className="leading-tight">
        <h1 className="text-4xl font-bold font-heading">Olivia Albers</h1>
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">Software Engineer</h2>
      </div>
      <br></br>
      <div id="aboutMe">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">About Me</h2>
        <p className="text-base text-gray-500 tracking-wide">
          Motivated and results-driven Software Engineer at Oracle, working on the Service Automation Development team within Cloud Operations. With a background in Chemical 
          Engineering, I bring a strong analytical mindset and a passion for solving complex problems through technology. Experienced in Python, JavaScript, Java, SQL, and C++, 
          with a strong interest in applying AI to build intelligent, data driven solutions. Seeking to grow as a full stack developer while deepening expertise in AI and 
          modern technologies.
        </p>
      </div>
      <br></br>
      <div id="experience" className="scroll-mt-40">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading mb-6">
          Experience
        </h2>

        <div className="relative">

          {/* CONTINUOUS LINE */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-600"></div>

          <div className="space-y-10">

            {/* ITEM */}
            <div className="grid grid-cols-[24px_1fr] gap-4">
              
              {/* LEFT COLUMN (dot centered on line) */}
              <div className="relative flex justify-center">
                <div className="w-3 h-3 bg-white border border-gray-600 rounded-full mt-2 z-10"></div>
              </div>

              {/* RIGHT COLUMN (text) */}
              <div>
                <h3 className="text-base text-gray-500">
                  Software Engineer | Oracle | Austin, TX
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  January 2026 - Present
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-gray-500">
                    Build and maintain automated tests for a web application improving reliability and efficiency
                  </li>
                  <li className="text-gray-500">
                    Collaborate with other engineers to develop automation tools across cloud operations
                  </li>
                  <li className="text-gray-500">
                    Earned Oracle AI Foundations Certification, strengthening ability to apply AI/ML concepts within cloud-based solutions
                  </li>
                </ul>
              </div>

            </div>

            {/* ITEM */}
            <div className="grid grid-cols-[24px_1fr] gap-4">
              <div className="relative flex justify-center">
                <div className="w-3 h-3 bg-white border border-gray-600 rounded-full mt-2 z-10"></div>
              </div>

              <div>
                <h3 className="text-base text-gray-500">
                  Software Development Intern | Hurley Piano | Austin, TX
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  August 2024 - December 2024
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-gray-500">
                    Developed a backend for a Godot game designed to teach piano to children with special needs, incorporating features for leaderboards and user account management
                  </li>
                </ul>
              </div>
            </div>

            {/* ITEM */}
            <div className="grid grid-cols-[24px_1fr] gap-4">
              <div className="relative flex justify-center">
                <div className="w-3 h-3 bg-white border border-gray-600 rounded-full mt-2 z-10"></div>
              </div>

              <div>
                <h3 className="text-base text-gray-500">
                  Software Engineer Intern | Oracle | Austin, TX
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  May 2024 - August 2024
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-gray-500">
                    Collaborated with other engineers on the Service Automation Development Team within Cloud Operations to help design, build, and maintain internal tools that streamline workflows and enhance efficiency
                  </li>
                  <li className="text-gray-500">
                    Actively participated in Agile Scrum practices, including daily stand-ups and weekly scrum meetings to ensure timely project delivery and effective team collaboration                    
                  </li>
                  <li className="text-gray-500">
                    Contributed to the development of a web application, both frontend and backend, using Python, JavaScript, Angular, HTML, and SQL
                  </li>
                  <li className="text-gray-500">
                    Created comprehensive documentation for a PL/SQL package used in a web application detailing functional specifications and usage instructions to facilitate better understanding and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br></br>
      <div id="education">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">Education</h2>
        <h3 className="text-base text-gray-500 tracking-wide">Bachelor of Science - Software Development</h3>
        <h3 className="text-base text-gray-500 tracking-wide">Austin Community College | Austin, TX | Dec 2025</h3>
        <h3 className="text-base text-gray-500 tracking-wide">Associate of Science - Computer Programming</h3>
        <h3 className="text-base text-gray-500 tracking-wide">Austin Community College | Austin, TX | Dec 2024</h3>
        <h3 className="text-base text-gray-500 tracking-wide">Bachelor of Science - Chemical Engineering</h3>
        <h3 className="text-base text-gray-500 tracking-wide">Miami University | Oxford, OH | May 2019</h3>
      </div>
      <br></br>
      <div id="projects">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">Projects</h2>
        <p className="text-base text-gray-500 tracking-wide">coming soon</p>
      </div>
      <br></br>
      <div id="certifications">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">Certifications</h2>
        <p className="text-base text-gray-500 tracking-wide">Cypress Automation Testing Framework | Coursera | Mar 2026</p>
        <p className="text-base text-gray-500 tracking-wide">Oracle Cloud Infrastructure AI Foundations | Oracle | Feb 2026</p>
        <p className="text-base text-gray-500 tracking-wide">Oracle Cloud Infrastructure Foundations Associate | Oracle | Jan 2026</p>
        <p className="text-base text-gray-500 tracking-wide">Introduction To Programming with Python | Harvard University | Jun 2023</p>
        <p className="text-base text-gray-500 tracking-wide">Introduction to Computer Science | Harvard University | Nov 2022</p>
      </div>
      <br></br>
      <div id="skills">
        <h2 className="text-xl text-gray-400 tracking-wide font-heading">Skills</h2>
        <p className="text-base text-gray-500 tracking-wide">Languages: Python, JavaScript, Java, C++, SQL</p>
      </div>
      

      <div className="mt-6 space-x-4">
        <a
          href="/olivia_albers_resume.pdf"
          className="border px-6 py-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}