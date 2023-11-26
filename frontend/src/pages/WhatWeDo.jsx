import React, { Component } from "react";
import MenuBar from "../components/menubar";
import Footer from "../components/footer";
import Article from "../components/articles";

const whatWeDoData = [
  {
    title: "WHAT WE DO",
    sunNote: "We are a renowned coding club in UNC Charlotte",
    content: [
      {
        para: "At the UNCC Coding Club, our activities encompass a wide range of initiatives to promote coding education and community development. Our first and foremost goal is to raise awareness about the importance of coding in today's world. We are dedicated to ensuring that every student at UNCC comprehends the significance of coding and how it can profoundly impact their future. In line with this mission, we aim to provide access to coding for students who may not be enrolled in the UNCC Coding Club. Our objective is to democratize coding education and make it accessible to all, fostering a culture of inclusivity and equal opportunity.",
      },
      {
        para: "We firmly believe that practical experience is the most effective way to learn coding. Therefore, our club offers hands-on coding experiences, workshops, and projects that allow students to apply their knowledge in real-world scenarios. In addition to practical experience, we have a dedicated team of mentors and coding specialists within our club who are committed to guiding and inspiring students, particularly those who are just embarking on their coding journey. These mentors serve as role models and help pave the way for the next generation of programmers.",
      },
      {
        para: "Furthermore, as members of the UNCC Coding Club, students gain access to a wealth of professional networking opportunities, online resources, coding challenges, and a vibrant community of like-minded individuals. We strive to create a supportive and thriving coding community that empowers students with the skills and knowledge they need to excel in the ever-evolving field of technology and coding.",
      },
    ],
  },
];

function WhatWeDo() {
  {
    return (
      <div className="flex flex-col gap-2 underline-offset-8">
        {/* MENU */}
        <div className="flex w-full sticky top-0 z-50">
          <MenuBar />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col m-auto divide-y w-full place-content-center md:w-3/5 ">
          {whatWeDoData.map((items) => (
            <Article article={items} />
          ))}
        </div>
        {/* FOOTER */}
        <div className="flex flex-row min-w-full">
          <Footer key="1" />
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
