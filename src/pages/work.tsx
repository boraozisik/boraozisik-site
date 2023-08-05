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

const Work = (props: Props) => {
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
                className="md:h-9 sm: h-8 w-auto"
                src="/static/logos/main-logo.svg"
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
              className="text-sm font-medium leading-6 text-[#8cbeef] hover:text-[#fde047] "
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>

            <ClickAwayListener onClickAway={() => setIsShowing(false)}>
              <Popover className="relative">
                <Popover.Button
                  className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-sm font-medium leading-6 text-[#8cbeef]"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span>About</span>
                  {isShowing === true ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#8cbeef]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#8cbeef]"
                      aria-hidden="true"
                    />
                  )}
                </Popover.Button>

                <Transition
                  show={isShowing}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {about.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-[#8cbeef]"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <button
                                onClick={item.onClick}
                                className="font-medium text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </button>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </ClickAwayListener>
            <button
              className="text-sm font-medium leading-6 text-[#8cbeef] hover:text-[#fde047] "
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
                    onClick={() => handleClickMobileMenuItem("/my-work")}
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
      {/* // -------------------Work----------------------  */}
      <section className="bg-gray-800 text-gray-100 py-16">
        <div className="container max-w-6xl p-6 mx-auto text-justify">
          <Stack direction={"row"} alignItems={"center"}>
            <img
              className="h-7 w-auto ml-2"
              src="/static/handDraw/undraw_command-line.svg"
              alt=""
            />
            <h2 className="ml-2 relative mb-4 font-medium text-3xl tracking-tight text-[#8cbeef] sm:text-4xl sm:leading-none">
              My Work
            </h2>
          </Stack>

          <p className="mx-auto font-medium text-gray-200">
            I&apos;ve uploaded a few of my works here, but if you&apos;d like to
            see more, you can visit my GitHub address at the bottom.
            Additionally, I&apos;ve been working on a few projects in
            &apos;private&apos; mode, but unfortunately, I can&apos;t share them
            here.
          </p>
        </div>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="https://www.shipmind.tech/"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
          >
            <img
              src="/static/images/shipmind-logo-far.PNG"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-medium sm:text-4xl group-hover:underline group-focus:underline text-gray-200">
                ShipMind
              </h3>
              <span className="text-xs text-gray-400">March, 2022</span>
              <p className="font-medium text-justify text-gray-200">
                ShipMind is an Freight Management Platform that greatly improves
                the Freight Quotation Process of Exporters & Importers and
                Logistics service providers.In August-2022, the development
                process of ShipMind has been finalized and ready to be used
                online.And currently, together with my team, we continue to work
                to make this wonderful product even better.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            <a
              rel="noopener noreferrer"
              href="https://github.com/boraozisik/working-hours-tracing-ui"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gray-200">
                  Working Hours Tracing UI
                </h3>
                <span className="text-xs text-gray-400">July 4, 2022</span>
                <p className="text-gray-200 text-justify">
                  An application where I solidified the use of the backend I
                  designed with NestJS in the presentation part with React. In
                  short, to summarize, I designed an application that calculates
                  the working hours of employees in a company, ranks them, and
                  organizes fun activities.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/boraozisik/working-hours-tracing-api"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gray-200">
                  Working Hours Tracing API
                </h3>
                <span className="text-xs text-gray-400">Jun 29, 2022</span>
                <p className="text-gray-200 text-justify">
                  I created the backend structure with NestJS to design an
                  application that calculates the working hours of employees in
                  a company, ranks them, and organizes fun activities. I learned
                  the NestJS structure in detail.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://zbdmovies.netlify.app/"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="/static/images/movie-app.PNG"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gray-200">
                  TMDB Movie App
                </h3>
                <span className="text-xs text-gray-400">May 4, 2022</span>
                <p className="text-gray-200 text-justify">
                  A movie guide with TMDB
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/boraozisik/WatchingPlatform"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gary-200">
                  Watching Platform
                </h3>
                <span className="text-xs text-gray-400">February 7, 2022</span>
                <p className="text-gray-200 text-justify">
                  A platform that user can make list of his/her watching films,
                  tv shows...User can add friends,get suggestion for watch,join
                  competitions.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/boraozisik/PirateGame"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gray-200">
                  Pirate Game
                </h3>
                <span className="text-xs text-gray-400">February 19, 2022</span>
                <p className="text-gray-200 text-justify">
                  A pirate game with using swing.In this game a pirate ship
                  trying to hit an enemy pirate with cannonballs.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/boraozisik/Algorithm-Problems"
              target="_blank"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block lg:w-[22rem]"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-medium group-hover:underline group-focus:underline text-gray-200">
                  Algorithm Problems
                </h3>
                <span className="text-xs text-gray-400">March 25, 2022</span>
                <p className="text-gray-200 text-justify">
                  I solved some good algorithm problems with python.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* // -------------------Work----------------------  */}
    </>
  );
};

export default Work;
