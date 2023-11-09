function PositionCard(props) {
  const { title, data, positionLink } = props.item;

  return (
    <div className="flex flex-col p-2 m-2">
      {/* HEADING */}
      <div className="flex flex-col p-1">
        <h1 className="font-bold tracking-wide uppercase">
          <a href={positionLink} className="hover:underline hover:text-red-600">
            {title}
          </a>
        </h1>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col p-2">
        {data.map((item) => (
          <>
            <h2 className="font-thin tracking-wide">{item.header}</h2>
            {item.paragraphs.map((para, index) => (
              <p key={index} className="flex m-2 p-1 text-justify">
                {para}
              </p>
            ))}
            <h1 className="font-bold tracking-wide uppercase">
              Experience Requirement
            </h1>
            <ul className="list-inside m-2 p-2 list-disc">
              {item.experienceRequirement.map((expriment, index) => (
                <li key={index}>{expriment}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
      {/* <div className="flex flex-col bg-sky-400 p-1">FOOTER</div> */}
    </div>
  );
}

export default PositionCard;
