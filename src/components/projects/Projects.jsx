import React from "react";
import { useEffect, useRef, useState } from "react";
import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PublicIcon from "@mui/icons-material/Public";
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import PlayCircleFilledWhiteSharpIcon from '@mui/icons-material/PlayCircleFilledWhiteSharp';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import DownloadIcon from '@mui/icons-material/Download';
import { forwardRef } from "react";
import CodeIcon from '@mui/icons-material/Code';
import AppleIcon from '@mui/icons-material/Apple';

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



        {/* Video Project */}

<div className="projectstop">
  <div className="project" ref={(el) => (projectRefs.current[20] = el)}>
    <div style={{ display: "flex", gap: "2rem" }}>
      <div className="techstack">
        <div className="zero">01 Figma</div>
        <div className="zero">02 Adobe Illustrator</div>
      </div>
      <DevicesRoundedIcon
        style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
      />
    </div>

    <h1 data-scroll data-scroll-speed="0.02" className="title_p">
      Trimify Health App
    </h1>

    <div className="description">
      Trimify is a health and wellness app designed to help users achieve their personal health goals, including weight management, diabetes care, and overall wellbeing, through a simple and user-focused experience.
    </div>

    <br />

    <div className="links">
      <a className="source" href="/" target="_blank">
        <AutoFixHighIcon />
        Figma
      </a>
      <a className="demo" href="https://apps.apple.com/in/app/trimify/id6738946874" target="_blank">
        <AppleIcon />
        Download 
      </a>
    </div>
  </div>

  {/* VIDEO instead of IMAGE */}
  <div className="image video" ref={(el) => (imageRefs.current[20] = el)}>
    <video
      src="../Trimify.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  </div>
</div>
        




        
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
                href="https://dribbble.com/shots/26555654-Dream-Interpretation-App-UI-UX-Case-Study"
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
             HooHa
            </h1>

            <div className="description">
            Astrology Zodiac Dating App – A dating platform that matches users based on zodiac signs and horoscope compatibility, with personalized insights and easy chatting features.
          </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="/"
                target="_blank"
              >
                <SportsBasketballIcon />
                Dribble
              </a>
              <a
                className="demo"
                href="/"
                target="_blank"
              >
                <CodeIcon />
                Under Dev
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[10] = el)}>
            <img
              loading="lazy"
              src="../HooHa.png"
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
              Helath App Landing page
            </h1>
            <div className="description">
            Designed a clean landing page for a health app, showcasing features like fitness tracking, nutrition monitoring, and progress insights. The layout focuses on simplicity, motivation, and user-friendly design to engage users and boost conversions.
            </div>
            <br />
            <div className="links">

              <a
                className="source"
                href="https://dribbble.com/shots/26555809-Health-App-landing-Page?utm_source=Clipboard_Shot&utm_campaign=architbatham&utm_content=Health%20App%20landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=architbatham&utm_content=Health%20App%20landing%20Page&utm_medium=Social_Share"
                target="_blank"
              >
                <SportsBasketballIcon />
                Dribble
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
              src="../health.png"
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
              My Travel Kaki
            </h1>
            <div className="description">
           The Malaysia Tour App is a simple travel booking application designed to help users explore and select tour packages across Malaysia. The app focuses on providing a smooth and easy experience for users to browse destinations.
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
              src="../mytravelkaki.png"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>



                                   {/* Event app */}


        {/* <div className="projectstop">
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
        </div> */}

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
              Make It Happen Event App
            </h1>
            <div className="description">            
            Make it happen is an event management app designed to streamline the process of organizing and attending events.
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
          <div className="image" ref={(el) => (imageRefs.current[3] = el)}>
            <img
              loading="lazy"
              src="../Makeithappen.png"
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
