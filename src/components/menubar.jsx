import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Route, Routes, Link } from "react-router-dom";

const navigation = [
  // {
  //   name: "CLUBS",
  //   to: "/clubs",
  //   current: false,
  //   isDropDownMenu: false,
  // },
  { name: "GRANTS", to: "/grants", current: false, isDropDownMenu: false },
  { name: "PEOPLE", to: "/people", current: false, isDropDownMenu: false },

  {
    name: "POSITIONS",
    to: "/positions",
    current: false,
    isDropDownMenu: false,
  },
  {
    name: "LOCATIONS",
    to: "/locations",
    current: false,
    isDropDownMenu: false,
  },
  { name: "CONTACT", to: "/contact", current: false, isDropDownMenu: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const createDropDownMenu = (item) => {
  return (
    <>
      <Menu.Button>{item.name}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-0  w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            {item.dropDownMenu.map((menu) => (
              <Menu.Item key={menu.name}>
                {({ active }) => (
                  <Link
                    key={menu.name}
                    to={menu.to}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {menu.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </>
  );
};
export default function MenuBar() {
  return (
    <Disclosure as="nav" className=" bg-black min-w-full">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex mx-auto items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <Menu as="div" className="relative inline-block text-left">
                    <Link
                      key="rawLab"
                      to="/"
                      className={classNames(
                        "text-white",
                        "rounded-md px-3 py-2 text-sm font-medium",
                        "mr-5",
                        "hover:text-red-400"
                      )}
                    >
                      UNCC CODERS CLUB
                    </Link>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                          "mr-5"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.isDropDownMenu && item.isDropDownMenu == true
                          ? createDropDownMenu(item)
                          : item.name}
                      </Link>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                      "mr-5"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
