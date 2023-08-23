import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

type Props = {};

const Music = (props: Props) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [isShowing, setIsShowing] = useState(false);

  const about = [
    {
      name: "Story",
      description: "Learn about my way and see my thoughts",
      onClick: () => router.push("/about"),
      icon: AutoStoriesOutlinedIcon,
    },
    {
      name: "Working Path",
      description: "Lets see my steps on working",
      onClick: () => router.push("/about#timeline"),
      icon: RouteOutlinedIcon,
    },
    {
      name: "Passions",
      description: "Discover my passions",
      onClick: () => router.push("/about#passions"),
      icon: CelebrationOutlinedIcon,
    },
    {
      name: "Contact",
      description: "Connect me anytime",
      onClick: () => console.log("xdxdxd"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
  ];

  const handleMenuItem = (path: string | undefined) => {
    if (path) router.push(path);
  };
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleClickAboutUs = (
    section: string | undefined,
    isMobile: boolean
  ) => {
    if (isMobile) {
      setMobileMenuOpen(false);
      router.push(`/about#${section}`);
    } else {
      setIsShowing((isShowing) => !isShowing);

      router.push(`/aboutUs#${section}`);
    }
  };
  const handleClickMobileMenuItem = (section: string | undefined) => {
    setMobileMenuOpen(false);
    handleMenuItem(section);
  };
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <header
        className={`fixed w-full  inset-x-0 top-0 z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <nav
          className="flex items-center justify-between p-3 lg:px-8 lg:container lg:mx-auto"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <button onClick={() => router.push("/")} className="-m-1.5 p-1.5">
              <img
                className="h-12 w-auto"
                src="/static/logos/boraozisik-header-logo.png"
                alt=""
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <button
              className="text-sm font-medium leading-6 text-blue-400 hover:text-[#fde047]"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>

            <ClickAwayListener onClickAway={() => setIsShowing(false)}>
              <div className="relative text-center">
                <button
                  className="flex items-center justify-center gap-x-1 text-sm font-medium leading-6 text-[#8cbeef] focus:outline-none"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span className="text-blue-400">About</span>
                  <span className="ml-1">
                    {isShowing ? (
                      <ChevronUpIcon
                        className="h-5 w-5 text-blue-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="h-5 w-5 text-blue-400"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>

                <Transition
                  show={isShowing}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 transform -translate-x-1/2 scale-95"
                  enterTo="opacity-100 transform translate-x-0 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 transform translate-x-0 scale-100"
                  leaveTo="opacity-0 transform -translate-x-1/2 scale-95"
                >
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[280px] rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {about.map((item) => (
                        <button
                          key={item.name}
                          onClick={item.onClick}
                          className="group w-full flex items-start gap-x-4 p-2 rounded-lg hover:bg-gray-50 focus:outline-none text-left"
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-[#8cbeef]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </Transition>
              </div>
            </ClickAwayListener>

            <button
              className="text-sm font-medium leading-6 text-blue-400 hover:text-[#fde047] "
              onClick={() => router.push("/work")}
            >
              Work
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button className="-m-1.5 p-1.5" onClick={() => router.push("/")}>
                <img
                  className="h-10 w-auto"
                  src="/static/logos/main-logo.svg"
                  alt=""
                  onClick={() => setMobileMenuOpen(false)}
                />
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickMobileMenuItem("/")}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Story
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("timeline", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Journey
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("passions", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Passions
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("contact", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => handleClickMobileMenuItem("/work")}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Work
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Music---------------------- */}
      <section className="bg-gray-800 py-16">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-medium capitalize lg:text-3xl text-white">
            Ears <span className="text-[#fde047]">Attuned</span>, Soul{" "}
            <span className="text-[#fde047]">Ignited:</span> A Lifelong Melody.
          </h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="/static/images/music-cover.jpg"
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="mt-3 text-sm text-gray-300 md:text-sm font-medium text-justify tracking-normal">
                Since I can remember myself, I have always loved listening to
                music. I mostly listen to music in the Rock genre, but I also
                enjoy Rap and Hip-Hop styles. When I&apos;m in a very lively
                mood, I might even listen to Pop music, and if I feel a bit
                down, I can quickly switch to Arabesque music :).
              </p>
              <p className="mt-3 text-sm text-gray-300 md:text-sm font-medium text-justify tracking-normal">
                Furthermore, I often attend concerts and music festivals. These
                kinds of activities not only help me socialize more but also
                nourish my musical soul. In short, listening to music is a
                significant passion for me, and I don&apos;t think I&apos;ll
                ever reduce it, no matter how old I get.
              </p>
              <p className="mt-3 text-sm text-gray-300 md:text-sm font-medium text-justify tracking-normal">
                I also took that photo from a festival held on a beautiful beach
                by the sea. There are many more photos like this, but I
                especially wanted to add this one because I liked it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Music---------------------- */}
      {/* // -------------------Artists---------------------- */}
      <>
        <Divider color={"gray"} />
        <section className="bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-medium text-center capitalize lg:text-3xl text-white">
              Here you can check my{" "}
              <span className="text-[#fde047]">favorite</span> artists
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/queen-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Queen
                </h1>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/travis-scott-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Travis Scott
                </h1>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/bon-jovi-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Bon Jovi
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/pilli-bebek-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Pilli Bebek
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/depeche-mode-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Depeche Mode
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/alphaville-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Alphaville
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/sebnem-ferah-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Şebnem Ferah
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#8cbeef] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/linkin-park-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Linkin Park
                </h1>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* // -------------------Artists---------------------- */}
    </>
  );
};

export default Music;
