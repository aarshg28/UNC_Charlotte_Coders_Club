import MenuBar from "../components/menubar";
import Footer from "../components/footer";
import PositionCard from "../components/positionCard";
const positionsList = [
  {
    title: "Python Mentor",
    data: [
      {
        header: "Overview:",
        paragraphs: [
          "Are you a passionate Python enthusiast with a desire to mentor and inspire others in the art of Python programming? We are looking for a dedicated Python Mentor to join our coding community and guide fellow members in their Python journey. Your expertise will help shape the coding skills and confidence of others, fostering a vibrant environment of learning and innovation.",
        ],
        experienceRequirement: [
          "Proven work experience as a Python Developer or equivalent role.",
          "Proficiency in Python programming with a strong understanding of Python libraries, frameworks, and best practices.",
          "Ability to design interactive applications and develop software in Python.",
          "Knowledge of data science, coding, and data visualization using Python.",
          "Familiarity with machine learning, modeling, and statistics is a plus but not required.",
          "Experience in teaching, mentoring, or conducting coding workshops.",
          "Passion for sharing knowledge, problem-solving, and inspiring others in the world of Python.",
        ],
      },
    ],
    positionLink: "",
  },
  {
    title: "Ruby Mentor",
    data: [
      {
        header: "Overview:",
        paragraphs: [
          "Are you a passionate Ruby enthusiast with a desire to mentor and inspire others in the art of Ruby programming? We are seeking a dedicated Ruby Mentor to join our coding community and guide fellow members in their Ruby journey. Your expertise will play a pivotal role in shaping the coding skills and creativity of others, fostering a dynamic environment of learning and innovation.",
        ],
        experienceRequirement: [
          "Proven work experience as a Ruby Developer or equivalent role.",
          "Proficiency in Ruby programming with a strong understanding of Ruby libraries, frameworks, and best practices.",
          "Ability to design interactive applications and develop software in Ruby.",
          "Knowledge of web development, Ruby on Rails, and Ruby-based tools.",
          "Experience in teaching, mentoring, or conducting coding workshops.",
          "A deep passion for sharing knowledge, problem-solving, and inspiring others in the world of Ruby.",
        ],
      },
    ],
    positionLink: "",
  },
];

function Positions() {
  return (
    <div className="flex flex-col gap-2 underline-offset-8">
      {/* MENU */}
      <div className="flex w-full sticky top-0 z-50">
        <MenuBar />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col m-auto divide-y w-full place-content-center md:w-3/5">
        {positionsList.map((position, index) => (
          <PositionCard key={index} item={position} />
        ))}
      </div>
      <div className="flex flex-row min-w-full">
        <Footer key="1" />
      </div>
    </div>
  );
}

export default Positions;
