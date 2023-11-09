import { useState, Fragment } from "react";
import Map from "../components/map";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function MapAccordion(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const { type, locations } = props;
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === 0} animate={customAnimation}>
        <AccordionHeader
          className="transition duration-700 uppercase bg-rose-50 p-2 tracking-wide text-xl text-red-600 font-semibold
          md:hover:bg-rose-300 md:hover:text-black"
          onClick={() => handleOpen(1)}
        >
          {type}
        </AccordionHeader>
        <AccordionBody className="flex flex-wrap justify-center">
          {locations.map((position, index) => (
            <div key={index} className="h-[400px] w-[400px] m-6">
              <h1 className="font-black text-lg px-2 uppercase">
                {position.title}
              </h1>
              <Map position={position} />
            </div>
          ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
