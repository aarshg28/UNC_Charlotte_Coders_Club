import React, { useState, useEffect } from 'react';
import initFontAwesome from "./../initIcons";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import MenuBar from "./../components/menubar";
import Cards from "./../components/cards";
import Footer from "./../components/footer";
import ImageSlider from "../components/imageSlider";
import java from "../assets/java.jpeg";
import python from "../assets/python.jpeg";
import cplus from "../assets/cplus.jpeg";
import go from "../assets/go.jpeg";
import ruby from "../assets/ruby.jpeg";
import js from "../assets/js.jpeg";
import { getFromUrl } from '../util';

initFontAwesome();

const virology_card = [
  {
    title: "Go",
    imgSrc: go,
    content:
      "Welcome to the Go-Go Gophers Club, a one-of-a-kind haven for UNC students passionate about Go (Golang) programming. We're not just any coding club; we're a dynamic community of innovators, pioneers, and technology enthusiasts. Our mission is to harness the power of Go to transform the way we approach software development and problem-solving.",
    link: "/human",
  },
  {
    title: "Ruby",
    imgSrc: ruby,
    content:
      "The Ruby Revelers Club is a unique UNC community dedicated to the art of Ruby programming. We reimagine Ruby as a powerful tool for creativity and innovation, emphasizing elegant solutions and the art of storytelling. Whether you're a seasoned Ruby developer or a curious novice, join us in celebrating Ruby's beauty and embarking on an exciting journey of creativity, innovation, and mastery.",
    link: "/whatwedo",
  },
  {
    title: "Java Script",
    imgSrc: js,
    content:
      "We're unlocking the full potential of JavaScript. JavaScript isn't just a language; it's a key to building interactive, dynamic, and immersive web experiences that shape the digital world. Our mission is to empower students to see JavaScript as a canvas for innovation, a tool to bring ideas to life, and a means to transform the web.",
    link: "/bats",
  },
];



const Home = () => {
  const [clubs, setClubs] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get an object by imgId
  function getImageObjectById(imgId) {
    return images.find(image => image.imgId === imgId);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubsResult = await getFromUrl('http://localhost:8080/getClubs');
        setClubs(clubsResult)

        const images = await getFromUrl('http://localhost:8080/getImages');
        setImages(images)

        setLoading(false)
      } catch (error) {
        setError(error)
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

 

  return (
    <div className="flex flex-col gap-2 underline-offset-8">
      {/* MENU */}
      <div className="flex w-full sticky top-0 z-50">
        <MenuBar />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col">
        <ImageSlider />
        <div className="flex px-4">
          <div className="flex flex-col h-full mx-auto min-w-full w-1/8 md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col py-4  break-word text-slate-500 md:mx-4">
                <div
                  className="flex font-extrabold underline text-gray-900 my-2 py-2
                  decoration-4 decoration-red-600 capitalize pt-2 tracking-wide md:px-4 mr-4"
                >
                  We are
                </div>
                <p className="p-2 text-justify">
                  At the UNCC Coding Club, we are on a mission to make coding
                  accessible, exciting, and informative for all students. Our
                  club's primary objectives revolve around fostering a
                  community of passionate coders and providing a supportive
                  environment where students can learn, grow, and explore the
                  world of coding. Our club was founded by a group of five
                  dedicated UNCC students who share a common goal: to empower
                  fellow students with coding skills and ignite their passion
                  for technology. We firmly believe that coding is not just a
                  skill but a gateway to endless opportunities in the digital
                  world. With a strong emphasis on inclusivity, we welcome all
                  UNCC students, regardless of their coding experience.
                </p>
                <div className="py-2 text-base font-semibold leading-4 justify-end">
                  <p>
                    <a
                      href="/whatwedo"
                      className="text-gray-900 items-center flex flex-row hover:text-red-500"
                    >
                      <span className="mr-2">Read more</span>
                      <ArrowSmallRightIcon className="h-5 w-5" />
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="flex font-extrabold underline
                  decoration-4 decoration-red-600 capitalize pt-2 tracking-wide md:px-4"
              >
                Renowned Coding Groups
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap">
                {clubs.map((card) => (
                  <Cards
                    title={card.clubName}
                    content={card.clubDesc}
                    imgSrc={getImageObjectById(card.clubId).imgPath}
                    link={card.link}
                    key={card.clubName}
                  />
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row min-w-full">
        <Footer key="1" />
      </div>
    </div>
  );
};

export default Home;
