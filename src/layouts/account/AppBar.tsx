import { useState, useContext, Fragment } from "react";
import { ThemeContext } from "../../context/theme";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import React from "react";




const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Appbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(theme === "dark");
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (theme === "light") {
      var newTheme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      newTheme = "light";
      document.documentElement.classList.remove("dark");
    }
    setEnabled(!enabled);
    setTheme(newTheme);
  };

  const auth = !!localStorage.getItem("authToken");

  const userNavigation = auth
    ? [
      { name: "Preferences", href: "/home/preferences" },
      { name: "Reset Password", href: "/home/resetPassword" },
      { name: "Sign out", href: "/logout" },
    ]
    : [
      { name: "Sign In", href: "/signin" },
      { name: "Sign Up", href: "/signup" },
    ];

  return (
    <>

      <Disclosure as="nav" className="border-b border-slate-300">
        {({ }) => (
          <div>
            <div className="flex px-6 justify-between">
              <div className="flex items-center">
                <Link to="/">
                  {" "}
                  <div className="flex py-2">
                    <img className="h-8 w-auto" src={Logo} alt="Sports Prime" />

                    <h1 className="text-justify px-2 font-bold text-xl font-sans">
                      Sports Savvy
                    </h1>
                  </div>{" "}
                </Link>
              </div>
              <div className="py-2">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={25}
                />
              </div>
              <div>

                <div className="ml-4 flex items-center md:ml-6">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600 dark:bg-black">
                        <UserCircleIcon
                          className="h-6 w-6 dark:bg-black dark:text-white"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1  ring-1 ring-black ring-opacity-5 focus:outline-none  dark:bg-black dark:text-white">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.href}
                                className={classNames(
                                  active ? "bg-gray-300  rounded dark:bg-white dark:text-black" : "",
                                  "block px-4 py-2 text-sm text-gray-700 dark:bg-black dark:text-white hover:dark:text-black",
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default Appbar;