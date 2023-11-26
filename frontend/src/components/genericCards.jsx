import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function GenericCard(props) {
  const { staticFields, webLinks, imageUrl } = props.data;
  return (
    <div className="flex flex-col divide-y mx-2 shadow-sm px-2 border border-gray-700 rounded">
      <div className="m-2 md:shrink-0">
        <img
          className="h-40 w-40 object-cover mx-auto rounded-full aspect-w-1 aspect-h-1"
          src={imageUrl}
          alt=""
        />
        <h2 className="font-bold text-xl tracking-wide text-center w-full my-2">
          {staticFields["name"]}
        </h2>
      </div>

      {staticFields["currentCompany"] ? (
        <div className="flex flex-col grow my-2 p-2">
          <ul className="list-inside text-gray-500 text-lg">
            <li className="px-2">
              <label className="text-gray-900">Current Company</label>{" "}
              {staticFields["currentCompany"]}
            </li>
            <li className="px-2">
              <label className="text-gray-900">Year</label>{" "}
              {staticFields["year"]}
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col grow my-2 p-2">
          <ul className="list-inside text-gray-500 text-lg">
            <li className="px-2">
              <label className="text-gray-900">University</label>{" "}
              {staticFields["university"]}
            </li>
          </ul>
        </div>
      )}

      <div className="flex flex-row w-full pt-2 space-x-2">
        <p>
          <a href="#" className="text-black hover:text-red-500">
            <FontAwesomeIcon className="h-6 w-6" icon={["fab", "linkedin"]} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default GenericCard;
