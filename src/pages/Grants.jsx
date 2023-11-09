import React, { Component } from "react";
import MenuBar from "./../components/menubar";
import Footer from "./../components/footer";
import GrandCard from "../components/grantsCards";

const grantsList = [
  {
    title: "FUNDED PROJECTS",
    sunNote: "Code Tonic Club Project (2023 - 2024)",
    subject: "Developing an AI-Driven Platform for Enhancing Coding Education",
    content:
      "This project aims to create an advanced AI-driven platform that personalizes the learning experience for coding students. It will utilize machine learning algorithms to adapt to individual learning styles and pace. The platform will serve as a supplemental tool for coding bootcamps and university courses, with the intent to improve student engagement and coding proficiency. The project will gather data from diverse learning environments to ensure the AI's teaching strategies are inclusive and effective for a wide range of students.",
  },
  {
    sunNote: "Code Tonic Club Project (2022 - 2023)",
    subject:
      "Integrating Open-Source Contributions into Computer Science Curriculum",
    content:
      "This initiative focuses on integrating real-world open-source project contributions into the computer science curriculum. The goal is to provide students with hands-on experience in software development, version control, and collaboration in a distributed environment. The project will partner with existing open-source projects and guide students through the process of contributing meaningful code, documentation, or translations, thus preparing them for the collaborative nature of modern software development.",
    linkTo: "https://jgi.doe.gov/csp-2021-viruses-in-the-rhizosphere/",
  },
  {
    sunNote: "Code Tonic Club Project (2021 - 2022)",
    subject: "Building a Secure, Scalable Online Voting System",
    content:
      " The objective of this project is to develop a secure and scalable online voting system that can be deployed for university elections. It will involve designing a system architecture that ensures voter anonymity, election integrity, and resistance to tampering or fraud. The project will conduct thorough testing, including penetration testing, to validate the security of the system. Furthermore, it will explore blockchain technology as a means to transparently and immutably record votes, thereby enhancing trust in the digital election process.",
  },
];

class Grants extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col gap-2 underline-offset-8">
        {/* MENU */}
        <div className="flex w-full sticky top-0 z-50">
          <MenuBar />
        </div>
        {/* CONTENT */}
        <div className="flex px-4">
          <div className="flex flex-col h-full mx-auto min-w-full w-1/8 md:flex-row">
            <div className="flex flex-col ">
              <div className="flex flex-col divide-y py-4 break-word text-slate-500 md:mx-4">
                {grantsList.map((grant) => (
                  <GrandCard
                    title={grant.title}
                    sunNote={grant.sunNote}
                    subject={grant.subject}
                    content={grant.content}
                    linkTo={grant.linkTo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-row min-w-full">
          <Footer key="1" />
        </div>
      </div>
    );
  }
}

export default Grants;
