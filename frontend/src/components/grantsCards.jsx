import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
function GrandCard(props) {
  return (
    <div className="flex flex-col m-2 p-4 w-full">
      <h2 className="m-1 mb-6 text-base md:text-xl font-medium text-gray-800 underline decoration-4 decoration-red-600">
        {props.title}
      </h2>
      <h3 className="pb-2 text-black">{props.sunNote}</h3>
      <h3 className="pb-2 text-black italic">{props.subject}</h3>
      <p className="text-justify mb-4">{props.content}</p>
      <a
        href={props.linkTo}
        className="text-gray-900 items-center flex flex-row hover:text-red-500"
      ></a>
    </div>
  );
}

export default GrandCard;
