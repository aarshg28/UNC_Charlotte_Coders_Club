const getImageById = (imageObj, id) => {
  return id ? imageObj.filter((image) => image.imageId === id) : false;
};

const getImage = (images) => {
  if (images == false) return <></>;

  const image = images.pop();
  return (
    <div className=" flex flex-shrink-0 justify-center p-2">
      <img
        className="h-64 md:h-96 w-auto object-contain"
        src={image.url}
        alt={image.discription}
      />
    </div>
  );
};

function Article(props) {
  const { images, content, title, sunNote } = props.article;
  const paragraphs = Array.isArray(content) ? content : [];
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-col justify-start items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          <div className="text-base md:text-lg font-medium text-black italic text-justify">
            <div dangerouslySetInnerHTML={{ __html: sunNote }} />
          </div>
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              {getImage(getImageById(images, paragraph.imageId))}
              <p
                key={index}
                className="text-base md:text-lg text-gray-700 text-justify"
                dangerouslySetInnerHTML={{ __html: paragraph.para }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
