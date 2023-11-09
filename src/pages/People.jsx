import MenuBar from "../components/menubar";
import Footer from "../components/footer";
import PeopleCard from "../components/people";
import lohitha from "../assets/lohitha.jpeg";
import aarsh from "../assets/aarsh.jpeg";
import prashanth from "../assets/prashanth22.jpg";
import harika from "../assets/harika.jpeg";
import krithika from "../assets/krithika11.jpeg";

const peopleList = [
  {
    name: "Lohitha Byrraju",
    experiences: [
      "Graduate Assistant in Leadership and Community Engagement at UNC Charlotte",
    ],
    educations: [
      "Masters in Computer Science - University of North Carolina at Charlotte",
      "B.E in Computer Science - Anna University",
    ],
    areaOfExpertise: ["Leadership", "Communications"],
    email: "lbyrraju@charlotte.edu",
    imgSrc: lohitha,
    linkedin: "https://www.linkedin.com/in/lohitha-b-a31a2222a/",
    github: "https://github.com/lohitabyrraju",
    twitter: "",
    website: "",
    hobbies: [],
  },
  {
    name: "Aarsh Ghotra",
    experiences: [
      "Graduate Assistant in School of Data Science and Business Analytics",
    ],
    educations: [
      "Masters in Computer Science - University of North Carolina at Charlotte",
      "B.E in Computer Science - St. Martin's Engineering College",
    ],
    areaOfExpertise: ["Statistics", "Data Analytics"],
    email: "aghotra@charlotte.edu",
    imgSrc: aarsh,
    linkedin: "https://www.linkedin.com/in/aarsh-ghotra/",
    github: "https://github.com/aarshg28",
    twitter: "",
    website: "",
    hobbies: [],
  },
  {
    name: "Krithika Kasaragod",
    experiences: ["Graduate Assistant in System Integration at UNC Charlotte"],
    educations: [
      "Masters in Information Technology - University of North Carolina at Charlotte",
    ],
    areaOfExpertise: ["Mobile Application Development", "Leadership"],
    email: "kkasarag@charlotte.edu",
    imgSrc: krithika,
    linkedin: "https://www.linkedin.com/in/krithika-k-314576232/",
    github: "https://github.com/krithikak",
    twitter: "",
    website: "",
    hobbies: [],
  },
  {
    name: "Prashanth Sammanu",
    experiences: [],
    educations: [
      "M.S. Computer Science - University of North Carolina at Charlotte",
      "M.Tech(Integrated) Software Engineering - VIT University, Vellore, India",
    ],
    areaOfExpertise: [
      "Languages: Java, Javascript, Python, C++",
      "Databases: MySQL",
      "Framework: ReactJS, Git, Linux",
    ],
    email: "psammanu@uncc.edu",
    imgSrc: prashanth,
    linkedin: "https://www.linkedin.com/in/prashanthsammanu/",
    github: "https://github.com/prashanthsammanu",
    twitter: "",
    website: "https://prashanthsammanu.com/",
    hobbies: [],
  },
  {
    name: "Harika Priya Prathipati",
    experiences: [
      "Instructional Assistant for Network-based application and development",
    ],
    educations: [
      "Masters in Information Technology - University of North Carolina at Charlotte",
      "B.E in Computer Science - Presidency University",
    ],
    areaOfExpertise: ["Java", "Selenium"],
    email: "hprathip@charlotte.edu",
    imgSrc: harika,
    linkedin: "https://www.linkedin.com/in/harika-prathip/",
    github: "",
    twitter: "",
    website: "",
    hobbies: [],
  },
];

function People() {
  return (
    <div className="flex flex-col gap-2 underline-offset-8 mt-n4">
      {/* MENU */}
      <div className="flex w-full sticky top-0 z-50">
        <MenuBar />
      </div>
      {/* CONTENT */}
      <div>
        <h2 className="text-base md:text-xl font-medium text-gray-800 underline decoration-4 decoration-red-600 mx-10 mt-10">
          PEOPLE
        </h2>
        <div className="md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {peopleList.map((people) => (
            <PeopleCard
              key={people.name}
              people={people}
              imgSrc={people.imgSrc}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row min-w-full">
        <Footer key="1" />
      </div>
    </div>
  );
}

export default People;
