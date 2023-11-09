import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

function PeopleCard(props) {
  const {
    name,
    experiences,
    educations,
    areaOfExpertise,
    email,
    linkedin,
    github,
    twitter,
    website,
    hobbies,
  } = props.people;
  return (
    <div className="flex flex-col divide-y mx-2 shadow-sm px-2 border border-gray-700">
      <div className="m-2 md:shrink-0">
        <img
          className="h-40 w-40 object-cover mx-auto rounded-full aspect-w-1 aspect-h-1"
          src={props.imgSrc}
          alt=""
        />
        <h1 className="font-bold text-xl tracking-wide text-center w-full my-2">
          {name}
        </h1>
      </div>
      <div className="flex flex-col grow my-2 py-2">
        {experiences.length === 0 ? (
          <></>
        ) : (
          <ul className="list-disc list-inside  text-gray-500 m-2">
            <label className="text-gray-900">Experience</label>
            {experiences.map((experience, index) => (
              <li key={index} className="px-2">
                {experience}
              </li>
            ))}
          </ul>
        )}

        <ul className="list-disc list-inside  text-gray-500 m-2">
          <label className="text-gray-900">Education</label>
          {educations.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>

        <ul className="list-disc list-inside  text-gray-500 m-2">
          <label className="text-gray-900">Area of Expertise</label>
          {areaOfExpertise.map((aoe, index) => (
            <li key={index}>{aoe}</li>
          ))}
        </ul>

        {hobbies.length === 0 ? (
          <></>
        ) : (
          <ul className="list-disc list-inside  text-gray-500 m-2">
            <label className="text-gray-900">Hobbies</label>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row w-full pt-2 space-x-2">
        <p>
          <a href={linkedin} className="text-black hover:text-red-500">
            <FontAwesomeIcon className="h-6 w-6" icon={["fab", "linkedin"]} />
          </a>
        </p>
        <p>
          <a href={github} className="text-black hover:text-red-500">
            <FontAwesomeIcon className="h-6 w-6" icon={["fab", "github"]} />
          </a>
        </p>
        {twitter !== "" && (
          <p>
            <a href={twitter} className="text-black hover:text-red-500">
              <FontAwesomeIcon className="h-6 w-6" icon={["fab", "twitter"]} />
            </a>
          </p>
        )}
        <p>
          <a href={`mailto:${email}`} className="text-black hover:text-red-500">
            <FontAwesomeIcon className="h-6 w-6" icon={faEnvelope} />
          </a>
        </p>
        {website !== "" && (
          <p>
            <a href={website} className="text-black hover:text-red-500">
              <FontAwesomeIcon className="h-6 w-6" icon={faGlobe} />
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default PeopleCard;
