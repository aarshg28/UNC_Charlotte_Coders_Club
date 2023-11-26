import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { LinkIcon } from "@heroicons/react/24/outline";

export default function PublicationAccordion(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const {
    year,
    Preprints,
    Patents,
    Theses,
    BookChapters,
    yearPublications = [],
    PreprintPublications = [],
    PatentsPublications = [],
    ThesesPublications = [],
    BookChaptersPublications = [],
  } = props.items;

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader
          className="transition duration-700 uppercase bg-rose-50 p-2 tracking-wide text-xl text-red-600 font-semibold md:hover:bg-rose-300 md:hover:text-black"
          onClick={() => handleOpen(1)}
        >
          {year}
          {Preprints}
          {Patents}
          {Theses}
          {BookChapters}
        </AccordionHeader>
        <AccordionBody>
          {yearPublications.length > 0 && (
            <Fragment>
              <h3 className="text-lg font-medium mt-4 mb-2">Publications</h3>
              {yearPublications.map((item) => (
                <ul className="list-none">
                  <li className="flex flex-row m-2 p-2  divide-x">
                    <span className=" items-center p-y-4 m-2">
                      {item.publicationNo}
                    </span>
                    <h2 className="flex flex-col m-2 p-2 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: item.heading }} />
                      <a href={item.link} className="mt-2">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </h2>
                  </li>
                </ul>
              ))}
            </Fragment>
          )}
          {PreprintPublications.length > 0 && (
            <Fragment>
              <h3 className="text-lg font-medium mt-4 mb-2">
                Preprint Publications
              </h3>
              {PreprintPublications.map((item) => (
                <ul className="list-none">
                  <li className="flex flex-row m-2 p-2  divide-x">
                    <span className=" items-center p-y-4 m-2">
                      {item.publicationNo}
                    </span>
                    <h2 className="flex flex-col m-2 p-2 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: item.heading }} />
                      <a href={item.link} className="mt-2">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </h2>
                  </li>
                </ul>
              ))}
            </Fragment>
          )}
          {PatentsPublications.length > 0 && (
            <Fragment>
              <h3 className="text-lg font-medium mt-4 mb-2">
                Patent Publications
              </h3>
              {PatentsPublications.map((item) => (
                <ul className="list-none">
                  <li className="flex flex-row m-2 p-2  divide-x">
                    <span className=" items-center p-y-4 m-2">
                      {item.publicationNo}
                    </span>
                    <h2 className="flex flex-col m-2 p-2 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: item.heading }} />
                      <a href={item.link} className="mt-2">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </h2>
                  </li>
                </ul>
              ))}
            </Fragment>
          )}
          {ThesesPublications.length > 0 && (
            <Fragment>
              <h3 className="text-lg font-medium mt-4 mb-2">
                Theses Publications
              </h3>
              {ThesesPublications.map((item) => (
                <ul className="list-none">
                  <li className="flex flex-row m-2 p-2  divide-x">
                    <span className=" items-center p-y-4 m-2">
                      {item.publicationNo}
                    </span>
                    <h2 className="flex flex-col m-2 p-2 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: item.heading }} />
                      <a href={item.link} className="mt-2">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </h2>
                  </li>
                </ul>
              ))}
            </Fragment>
          )}
          {BookChaptersPublications.length > 0 && (
            <Fragment>
              <h3 className="text-lg font-medium mt-4 mb-2">
                Book Chapters Publications
              </h3>
              {BookChaptersPublications.map((item) => (
                <ul className="list-none">
                  <li className="flex flex-row m-2 p-2  divide-x">
                    <span className=" items-center p-y-4 m-2">
                      {item.publicationNo}
                    </span>
                    <h2 className="flex flex-col m-2 p-2 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: item.heading }} />
                      <a href={item.link} className="mt-2">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </h2>
                  </li>
                </ul>
              ))}
            </Fragment>
          )}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
