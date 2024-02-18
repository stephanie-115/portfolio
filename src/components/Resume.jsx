import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DownloadButton from "./DownloadButton";

const CustomQuestion = styled(Typography)({
  color: "#fffdd0",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
});

const CustomAnswer = styled(Typography)({
  color: "#fffdd0",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `3px solid #024542`,
  borderRadius: "15px !important",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "auto",
  },
  backgroundColor: "#567f6c",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "var(--color-light)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#567f6c",
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  borderRadius: "15px !important",
}));

export default function Resume() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section id="resume">
      <div className="resume-container">
        <div className="center-text">
          <h2>r é s u m é</h2>
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <CustomQuestion>GreenPets</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Implemented GraphQL for single-endpoint data retrieval, reducing
              over/under-fetching by 30% with efficient schemas, queries and
              resolvers. <br />
              <br />
              ● Integrated Redis to enhance frontend performance by 60% and
              reduced API costs, achieving faster data retrieval and reduced
              server load. <br />
              <br />
              ● Adopted TypeScript for a type-safe codebase, achieving a 15%
              reduction in production bugs and expedited feature development.
              <br />
              <br />● Spearheaded the adoption of agile methodologies,
              encompassing sprint planning, daily stand-ups, and rigorous code
              reviews, which improved team productivity by 25% and fostered
              better remote team collaboration and contributed to more efficient
              project delivery.
              <br /> <br />
              <div className="center-text">Check out our product <a href="https://greenpets.netlify.app/">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <CustomQuestion>Vista</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Partnered with OSLabs Beta on Vista's launch, which improved
              query refinement and cut developer debugging time by 20%. <br />
              <br />
              ● Developed a query generator using the json-to-graphql-query
              library, elevating user experience and streamlining query
              construction. <br />
              <br />
              ● Refined GraphQL schema analysis through introspection queries,
              ensuring more effective query construction and validation on the
              frontend. <br />
              <br />
              ● Incorporated TypeScript for type-checking, resulting in a 85%
              increase in application security, bolstering code reliability and
              maintenance. <br />
              <br />
              ● Carried out end-to-end Cypress tests, covering 95% of key user
              paths, reducing production bugs by 40%, enhancing user experience.
              <br />
              <br />● Conducted backend unit tests with Jest, achieving 80% code
              coverage, contributing to robust application functionality and
              stability. <br /> <br />
              <div className="center-text">Check out our product <a href="https://www.vistavisualizer.com/">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <CustomQuestion>NutriPup</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Leveraged OpenAI API for tailored canine diets, driving a 25%
              surge in user interaction and promoting pet health.
              <br />
              <br />
              ● Introduced a personalized profile system for dog nutrition,
              resulting in a 20% rise in user retention and increased community
              engagement. <br />
              <br />
              ● Designed a seamless UI with React and Node.js, resulting in a
              30% increase in navigation efficiency and enabling recipe
              customization. <br />
              <br />● Implemented Bcrypt to hash passwords with salts to encrypt
              sensitive user inputs and defend against possible rainbow table
              attacks. <br /> <br />
              <div className="center-text">Visit the GitHub Repo <a href="https://github.com/stephanie-115/nutripup">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <CustomQuestion>Wingman</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Engineered PostgreSQL database, enhancing data efficiency, and
              integrated real-time Amadeus flight info, raising user
              satisfaction by 30%. <br />
              <br />● Established OAuth using Passport for secure
              authentication, bolstering defenses, resulting in a 50% reduction
              in unauthorized access.              <br /> <br />
              <div className="center-text">Visit the GitHub Repo <a href="https://github.com/project-wing-man/wingman">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <CustomQuestion>Grandma's Cookbook</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Migrated the database from SQL to MongoDB, resulting in a 15%
              increase in data retrieval speeds and enabling scalable future
              growth. <br />
              <br />● Deployed Redux Toolkit for enhanced state management,
              streamlining data flow and reducing bug reports by 10%.
              <br /> <br />
              <div className="center-text">Visit the GitHub Repo <a href="https://github.com/Avatar-Group/Grandmas-Cookbook-v2">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <CustomQuestion>In Season Locally</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Curated a SPA (Single Page Application) with React Router,
              improving page transitions and contributing to a 20% uptick in
              user retention. <br />
              <br />● Customized webpack settings to quicken load times by 20%,
              injecting code-splitting, improving engagement with geo-specific
              produce data. <br /> <br />
              <div className="center-text">Visit the GitHub Repo <a href="https://github.com/inseasonlocally">here!</a></div>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <CustomQuestion>
              New York City Department of Education
            </CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● Transformed student data management by automating entry
              processes, reducing errors by 40%, and saving 260 hours annually.{" "}
              <br />
              <br />
              ● Led Google Classroom configurations, boosting classroom
              engagement by 15% and earning commendations from educational
              stakeholders.
              <br />
              <br />
              ● Headed the English as a New Language department, devised
              data-driven instructional strategies, improving language
              proficiency outcomes. <br />
              <br />● Served as a go-to IT support for 25+ staff, maintaining a
              seamless digital learning environment through Google Classroom.{" "}
              <br />
              <br />● Active member of leadership teams, influencing teaching
              strategies that positively impacted 300+ students school-wide.
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <CustomQuestion>Education</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ● <b>CUNY- Queens College</b> | Queens, NY |{" "}
              <i>Masters of Science</i> <br />
              <br />● <b>Siena College</b> | Loudonville, NY |{" "}
              <i>Bachelor of Arts</i>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
            <CustomQuestion>Talks & Publications</CustomQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <CustomAnswer>
              ●
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7098732087989428224/">
                Testing Tools and Frameworks
              </a>{" "}
              | <i>Hosted by Jeeny & Bractlet</i>
              <br />
              <br />●
              <a href="https://vistavisualizer.medium.com/vista-the-remedy-to-your-graphql-schema-woes-6a99e16e1fbf">
                Vista: The Remedy to Your GraphQL Woes
              </a>{" "}
              | <i>Medium</i>
            </CustomAnswer>
          </AccordionDetails>
        </Accordion>
        <div className="download-button-container">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
