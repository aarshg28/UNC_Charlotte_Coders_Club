const images = [
  "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
];

export default function Slider() {
  // const [currentImage, setCurrentImage] = React.useState(0);

  // const refs = images.reduce((acc, val, i) => {
  //   acc[i] = React.createRef();
  //   return acc;
  // }, {});

  // const scrollToImage = (i) => {
  //   setCurrentImage(i);
  //   refs[i].current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "start",
  //   });
  // };

  // const totalImages = images.length;

  // const nextImage = () => {
  //   if (currentImage >= totalImages - 1) {
  //     scrollToImage(0);
  //   } else {
  //     scrollToImage(currentImage + 1);
  //   }
  // };

  // const previousImage = () => {
  //   if (currentImage === 0) {
  //     scrollToImage(totalImages - 1);
  //   } else {
  //     scrollToImage(currentImage - 1);
  //   }
  // };

  // const arrowStyle =
  //   "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="p-4 flex justify-center w-screen h-96 items-center bg-green-200  md:p-2">
      {/* <div className="relative w-full">
        <div className="carousel">
          <div className="w-full flex-shrink-0" key={images[0]}>
            <img src={images[0]} className="w-full object-contain" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
