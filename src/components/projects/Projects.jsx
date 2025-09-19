import React from "react";
import { useEffect, useRef, useState } from "react";
import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PublicIcon from "@mui/icons-material/Public";
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import PlayCircleFilledWhiteSharpIcon from '@mui/icons-material/PlayCircleFilledWhiteSharp';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import DownloadIcon from '@mui/icons-material/Download';
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleProjects = () => {
      setShowMoreProjects(!showMoreProjects);
    };
//Hello world
  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((project, index) => {
        const projectTop = project.offsetTop;
        const imageTop = imageRefs.current[index].offsetTop;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > projectTop + 100) {
          project.classList.add("appear");
        }

        if (scrollTop + windowHeight > imageTop + 100) {
          imageRefs.current[index].classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="projects">
      <h1 ref={ref} className="project_title">
        Projects I've worked on
      </h1>
      <div className="mobile">
        
        
          {/* 1 Project */}


        <div className="projectstop p1">
          <div className="project" ref={(el) => (projectRefs.current[0] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Figma</div>
                <div className="one">02 Adobe Illustrator</div>
              </div>
              <StayPrimaryPortraitIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
              
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p rev">
              Dream Interpretation 
            </h1>

            <div className="description">
              This app helps users understand the true meaning behind their dreams by connecting them with expert dream interpreters. 
              Users can chat with experts or schedule a one-on-one call for deeper insights 
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <ArticleSharpIcon />
                Case Study
              </a>
              <a
                className="demo"
                href="https://play.google.com/store/apps/details?id=com.ahlami.ahlamidreams&pli=1"
                target="_blank"
              >
                <DownloadIcon />
                Download 
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[0] = el)}>
            <img
              loading="lazy"
              src="../Dream.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
                                                                                     {/* 1.1project */}

         <div className="projectstop p1">
          <div className="project" ref={(el) => (projectRefs.current[10] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Figma</div>
                <div className="one">02 Adobe Illustrator</div>
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
              
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p rev">
              Adams Ale 
            </h1>

            <div className="description">
            Admas Ale Web Design is a contemporary food restaurant and bar located in the heart of Indore, offering a unique dining experience with a blend of exquisite local and international cuisines
          </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[10] = el)}>
            <img
              loading="lazy"
              src="../adams final.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>

    

                                                                                      {/* 2nd project */}


        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
              <div className="zero">01 Figma</div>
              <div className="one">02 Adobe Illustrator</div>
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              Threds Web
            </h1>
            <div className="description">
            Threds website is a modern and stylish e-commerce platform that offers a seamless shopping experience for faition enthusiasts.
            The UI is design with a clean layout intuitiv navigation and user friendly.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[1] = el)}>
            <img
              loading="lazy"
              src="../threds.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>


        
                                                           {/* 2.1.0 rd project */}




        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[2] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
              <div className="zero">01 Figma</div>
                <div className="zero">02 Adobe Illustrator</div>
                
                
              </div>
              <StayPrimaryPortraitIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              Threds App
            </h1>
            <div className="description">
            Threds App is a modern and stylish e-commerce platform that offers a seamless shopping experience for faition enthusiasts.
            The UI is design with a clean layout intuitiv navigation and user friendly.  
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[2] = el)}>
            <img
              loading="lazy"
              src="../threds app.jpg"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>

        
                                         {/* 3rd project */}



        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[9] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Figma</div>
                <div className="zero">02 Adobe Illustrator</div>
                

              </div>
              <StayPrimaryPortraitIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
            Epicsord
            </h1>
            <div className="description">
            The Epicsord App is design to orivide user with a personalized and engaging way to track their favorite TV shows, Discover new content and manage episord release schedules seamless.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[9] = el)}>
            <img
              loading="lazy"
              src="../epicsord.jpg"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
                                                                           {/* nect project */}

        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[3] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Figma</div>
                <div className="zero">02 Adobe Illustrator</div>
                

              </div>
              <StayPrimaryPortraitIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              IRCTC Redesigne
            </h1>
            <div className="description">            
            The current design is cluttered interface makingit difficult for user to quickly find train select dates and book ticket efficiently. 

            </div>
            <br />
            <div className="links">
            <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://medium.com/@architbatham64/case-study-redesigning-the-irctc-train-booking-experience-4ad45bc24744"
                target="_blank"
              >
                <ArticleSharpIcon />
                Prototype
              </a>
              
                
      
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[3] = el)}>
            <img
              loading="lazy"
              src="../IRCTC.jpg"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>

                                                                                   {/* Recruit CRM */}

                                                                                   <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[19] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Figma</div>
                <div className="zero">02 Adobe Illustrator</div>
                

              </div>
              <StayPrimaryPortraitIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
            Recruit CRM Redesigne
            </h1>
            <div className="description">            
            My newly redesigned Recruit CRM is built with user-centric design at its core, ensuring that recruiters can focus on what truly matters
            </div>
            <br />
            <div className="links">
            <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <ArticleSharpIcon />
                Prototype
              </a>
              
                
      
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[19] = el)}>
            <img
              loading="lazy"
              src="../Mockup Recruit Crm.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>

        
                                                                                      {/* 4th Project */}


        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[4] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
              <div className="zero">01 Figma</div>
                <div className="zero">02 Adobe Illustrator</div>
                
                
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 className="title_p">Digital Agency</h1>

            <div className="description">
            Agency website sleek and responsive interface is crafted to elevate any creative Agency online presecne. 
            </div>
            <br />
            <div className="links">
            <a
                className="source"
                href="/"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
              
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[4] = el)}>
            <img
              loading="lazy"
              src="../Digital123.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div> 

        
      </div>
    </div>
  );
});

export default Projects;
