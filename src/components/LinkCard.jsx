function LinkCard(props) {
  const { image, title, link } = props;
  console.log(props);
  return (
    <div className="w-full my-4  h-fit overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-scale-down md:w-48"
            src={image.url}
            alt={image.discription}
          />
        </div>
        <div className="p-2">
          <a
            href={link}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline hover:text-red-600"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
