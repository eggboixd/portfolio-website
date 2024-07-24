import React, { useEffect } from 'react';
import profilepic from './assets/profilepic.JPG';
import proj1 from './assets/proj1.png';
import proj2 from './assets/proj2.png';
import proj3 from './assets/proj3.png';
import './App.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll
        header.classList.add('header-hidden');
      } else {
        // Upscroll
        header.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop;
    };

    let lastScrollTop = 0;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="headerbar">
        <header className="header" id="header">
          <a href="/" className="logo">FRH</a>
          <nav className="navbar">
            <a href="#homecontent">Home</a>
            <a href="#aboutcontent">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </div>

      <div className="homecontent-container">
        <div className="profilepic">
          <img 
            src={profilepic}
            alt="pfp"
          />
        </div>
        <div id="homecontent" className="homecontent">
          <h1 className="hctitle">Who Am I ?</h1>
          <p>
            Fadhil Revinno Hairiman. An 18-year-old undergraduate student at Institut Teknologi Sepuluh Nopember (ITS) in Surabaya, soon will be starting my second year studying Informatics/Computer Science. I have a strong passion for creating innovative solutions using available technologies. My academic journey has equipped me with a solid foundation in programming, software development, and problem-solving skills. I am eager to apply my knowledge in real-world projects and collaborate with like-minded individuals to make meaningful contributions to the tech industry. As a dedicated and driven individual, I continuously seek opportunities to learn and grow, aiming to make a positive impact through technology.
          </p>
        </div>
      </div>

      <div id="aboutcontent" className="about-container">
        <div className="aboutcontent">
          <h1 className="skillstitle">Tech Stacks</h1>
          <div className="skills">
            <div className="programminglanguage">
              <h2 className="skill1">Data Structures</h2>
              <ul>
                <li>C</li>
                <li>C++</li>
              </ul>
            </div>

            <div className="frameworks">
              <h2 className="skill1">Web Dev</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>


            <div className="frameworks">
              <h2 className="skill1">Database Management</h2>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Vertabelo</li>
              </ul>
            </div>

            <div className="multimedia">
              <h2 className="skill1">Multimedia</h2>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Premiere Pro</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="projects-container">
        <h1 className="projectstitle">Projects</h1>
        <div className="projects-content">
          <div className="proj1">
            <h1 className="project1title">Chrome Dinosaur Game Replica</h1>
            <img 
              src={proj1} 
              alt="proj1pic" 
              className="proj1pic"
            />
            <p>
              Lily's Lil Adventure is a school game project that implements fundamental frontend web knowledge and game logic, such as player movements and score counting using JavaScript. I contributed as the game developer & soundtrack artist in this project. The theme was inspired by my friend's pet husky named "Lily".
            </p>
          </div>
          <div className="proj2">
            <h1 className="project2title">Simple Operating System</h1>
            <img 
              src={proj2} 
              alt="proj2pic" 
              className="proj2pic"
            />
            <p>
              A group final project for the Operating Systems course at the Informatics Department of ITS. We implemented all the fundamental knowledge we learned about Operating Systems through BOCHS by using NASM, BCC Compiler, ld86, and make. We created basic Linux terminal commands in the shell, filesystem, and kernel files using C.
            </p>
          </div>
          <div className="proj3">
            <h1 className="project3title">Instrument Rental Service Database</h1>
            <img 
              src={proj3} 
              alt="proj3pic" 
              className="proj3pic"
            />
            <p>
              A group final project for the Database Systems course at ITS. We implemented fundamental Database Systems concepts to create an efficient system for renting music instruments for students on campus using PostgreSQL.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-container">
        <h1>Contact Me!</h1>

        <ul className="contact-list">
          <li className="contact-button">+62 85777168752</li>
          <li>
            <a 
              href="mailto:fadhil.revinno@gmail.com" 
              className="contact-button"
            >
              <FaEnvelope className="contact-icon" /> Email Me
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/fadhilrevinnoh/" 
              className="contact-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/eggboixd" 
              className="contact-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
