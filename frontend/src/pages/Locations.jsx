import MenuBar from "../components/menubar";
import Footer from "../components/footer";
import MapAccordion from "../components/mapAccordion";
function Locations() {
  const domesticLocations = [
    {
      title: "Woodward Hall",
      lat: 35.30781,
      lng: -80.73476,
    },
    {
      title: "Student Union",
      lat: 35.30865,
      lng: -80.73365,
    },
  ];
  const internationalLocations = [
    {
      title: "Shark Bay, Australia",
      lat: -25.69477814564825,
      lng: 113.29389298032214,
    },
    {
      title: "Pavilion Lake, Canada",
      lat: 50.86462137047651,
      lng: -121.7412334524729,
    },
    {
      title: "Kelly Lake, Canada",
      lat: 55.2625023774992,
      lng: -120.0330726674602,
    },
  ];
  return (
    <div className="flex flex-col gap-2 underline-offset-8">
      {/* MENU */}
      <div className="flex w-full sticky top-0 z-50">
        <MenuBar />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col m-auto divide-y p-4 w-full md:w-4/5">
        {/* {locations.map((position, index) => (
          <Map key={index} position={position} />
          ))} */}
        {<MapAccordion type={"Locations"} locations={domesticLocations} />}
        {/* {<MapAccordion type={"International Sites"} locations={internationalLocations} />} */}
      </div>
      <div className="flex flex-row min-w-full">
        <Footer key="1" />
      </div>
    </div>
  );
}

export default Locations;
