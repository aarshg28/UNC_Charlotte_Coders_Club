import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

function Cards(props) {
  return (
    <div
      className="flex flex-col w-full overflow-hidden shadow-sm
   mt-4 border border-gray-700  md:flex-row md:m-4"
    >
      <div className="md:shrink-0">
        <img
          className="w-full h-44 min-w-ful md:h-full md:w-40"
          src={props.imgSrc}
        />
      </div>
      <div className="flex flex-col pt-2 px-4 justify-between">
        <p className="block text-lg leading-tight font-medium text-gray-900">
          {props.title}
        </p>
        <p className="mt-1 text-slate-500">{props.content}</p>
        <div className="py-2 text-base font-semibold leading-4 justify-end">
          <p>
            <a
              href={props.link}
              className="text-gray-900 items-center flex flex-row hover:text-red-500"
            >
              <span class="mr-2">Read more</span>
              <ArrowSmallRightIcon className="h-5 w-5" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
