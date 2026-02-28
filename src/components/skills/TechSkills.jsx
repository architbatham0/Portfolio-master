import React from "react";
import "./techskills.scss";
import { forwardRef } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SwipeLeftAltRoundedIcon from "@mui/icons-material/SwipeLeftAltRounded";
import SwipeRightAltRoundedIcon from "@mui/icons-material/SwipeRightAltRounded";


const TechSkills = forwardRef((props, ref) => {
  return (
    <div className="hover">
      <div className="title2" ref={ref}>
        Design Skills
      </div>

      <div className="tech">
        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
          <div className="skill-title">
            <div className="html">Figma</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Figma is the leading collaborative design tool for bulding meaningfull product.
            Allow viewing and ineracting with figma prototype inreal time on mobile and tablet
            Design.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="js">Jitter</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://webflow.com/?r=0">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Jitter is a collaborative motion design tool that lets you create professional animations in minutes.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="node">UX research</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://www.interaction-design.org/literature/topics/ux-research">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
           Gathering insights about users' behaviors, needs, and pain points through observation techniques 
           and feedback methodologies
          </div>
        </div>

        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
          <div className="skill-title">
            <div className="css">Illustrator</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://en.wikipedia.org/wiki/Illustrator">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Design amazing graphic with ease choose from thousands of beautiful template for Social 
            graphics, logo, flyers and more
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
          <div className="skill-title">
            <div className="react">Design System</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://rive.app/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
          A design system is a centralized, living library of reusable components, standards, and documentation that ensures consistency and efficiency across digital products.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="mongo">CSS</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://en.wikipedia.org/wiki/CSS">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            It is a stylesheet language used for describing the presentation of
            a document written in HTML, including colors, fonts, layouts, and
            animations.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="redux">Javascript</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://en.wikipedia.org/wiki/JavaScript">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Javascript is programing language used for creating dynamic content on website.
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
          <div className="skill-title">
            <div className="strapi">Notion</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://www.notion.com/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Notion is a versatile all-in-one workspace helping designers streamline workflows and collaborate in real time.{" "}
          </div>
        </div>
      </div>
      <div className="mobilescroll" style={{ textAlign: "center" }}>
        {" "}
        <SwipeLeftAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
        <p style={{ fontSize: "0.6rem", fontWeight: "500" }}>SCROLLABLE</p>
        <SwipeRightAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
      </div>
    </div>
  );
});

export default TechSkills;
