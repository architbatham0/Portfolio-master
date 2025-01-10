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
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleProjects = () => {
      setShowMoreProjects(!showMoreProjects);
    };

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
              BITE ME APP
            </h1>

            <div className="description">
              Bite Me is a food delivery Service focusd on bringing local flavors to users through a simple
              user frindly app
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://root-pigment-963.notion.site/Case-study-s-16ca80f2b48280518884ec0b7a4bcd0c"
                target="_blank"
              >
                <ArticleSharpIcon />
                Case Study
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/LPVoV9wmUK1wFDS2E926oX/Bite-Me-Food-Delivery?page-id=0%3A1&node-id=2-66&viewport=514%2C275%2C0.06&t=57t7XhUxcszBqP3K-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A66&show-proto-sidebar=1"
                target="_blank"
              >
                <PlayCircleFilledWhiteSharpIcon />
                Prototype
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[0] = el)}>
            <img
              loading="lazy"
              src="../bitme.png"
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
                href="https://www.figma.com/design/gdSqDjQfxGRxWZxHZY9s92/Adams?node-id=6-5688&t=pcwi165xgbSDT4iV-1"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/gdSqDjQfxGRxWZxHZY9s92/Adams?page-id=3%3A108&node-id=6-5688&viewport=7987%2C7288%2C0.11&t=1GAI1mX0wxp5mZKq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A5688"
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
                href="https://www.figma.com/design/6BhbHt8YUgHa6S6WFbgHJx/Web-Design-THREDS?node-id=0-1&t=Sqzt2XIQEY8DSAaN-1"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/6BhbHt8YUgHa6S6WFbgHJx/Web-Design-THREDS?page-id=0%3A1&node-id=1-18&p=f&viewport=536%2C387%2C0.77&t=nKaT4KuQFwN4iXso-1&scaling=min-zoom&content-scaling=fixed"
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
                href="https://www.figma.com/design/l3ATk2jpvQvy6MLp9sdD73/E-Commerce?node-id=10-42&t=mSOVhBorUxscir1K-1"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/l3ATk2jpvQvy6MLp9sdD73/E-Commerce?page-id=0%3A1&node-id=10-42&viewport=82%2C272%2C0.25&t=AQDdmN3V3z2RUAc9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A42&show-proto-sidebar=1"
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
                href="https://www.figma.com/design/tlZxdx9KUfOoO7CTVqSB54/Episode-Tracker?node-id=15-416&t=JRdXByxCgRIIoiap-1"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/tlZxdx9KUfOoO7CTVqSB54/Episode-Tracker?page-id=7%3A283&node-id=15-416&viewport=517%2C273%2C0.13&t=GmXfSavCjXfuwjqa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15%3A416&show-proto-sidebar=1"
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
                href="https://www.figma.com/design/7bzHGSWs6rlRg9zvuFg379/IRCTC-Redesigned?node-id=2-4&t=yVxKTTvAIp03NKMu-1"
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
                href="https://www.figma.com/design/vKIOh1pcXD1Aumh3QXG0pl/Recruitcrm?node-id=11-13&t=X4tRKXzbAzfnM05x-1"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://www.figma.com/proto/vKIOh1pcXD1Aumh3QXG0pl/Recruitcrm?page-id=8%3A89&node-id=11-13&viewport=611%2C250%2C0.22&t=2YXGmXiYldXeT7gE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A13"
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
                href="https://github.https://www.figma.com/design/Dzt7Yz94bWTcrM48nzupjB/Digital-Agency-Landing-page?node-id=1-2&t=JSLUCddSF7H1YO4N-1/architbatham/Netflix_clone"
                target="_blank"
              >
                <AutoFixHighIcon />
                Figma
              </a>
              <a
                className="demo"
                href="https://https://www.figma.com/proto/Dzt7Yz94bWTcrM48nzupjB/Digital-Agency-Landing-page?page-id=0%3A1&node-id=1-2&viewport=458%2C254%2C0.12&t=O58qxxMCfJL6xyej-1&scaling=min-zoom&content-scaling=fixed.github.io/Netflix_clone/Logo_Netflix/netflix2.html"
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
