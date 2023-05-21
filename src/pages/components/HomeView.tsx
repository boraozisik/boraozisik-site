import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

type Props = {};

const HomeView = (props: Props) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  //When I'm not designing,I'm also passionate about

  const about = [
    {
      name: "Story",
      description: "Learn about my way and see my thoughts",
      onClick: () => console.log("xdxdxd"),
      icon: AutoStoriesOutlinedIcon,
    },
    {
      name: "Journey",
      description: "Explore my path",
      onClick: () => console.log("xdxdxd"),
      icon: RouteOutlinedIcon,
    },
    {
      name: "Passions",
      description: "Discover my passions",
      onClick: () => console.log("xdxdxd"),
      icon: CelebrationOutlinedIcon,
    },
    {
      name: "Contact",
      description: "Connect me anytime",
      onClick: () => console.log("xdxdxd"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

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
              className="text-sm font-medium leading-6 text-[#00bbf9] hover:text-[#f72585] "
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>

            <ClickAwayListener onClickAway={() => setIsShowing(false)}>
              <Popover className="relative">
                <Popover.Button
                  className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-sm font-medium leading-6 text-[#00bbf9]"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span>About</span>
                  {isShowing === true ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#00bbf9]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#00bbf9]"
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
                                className="h-6 w-6 text-gray-600 group-hover:text-[#00bbf9]"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <button
                                onClick={item.onClick}
                                className="font-semibold text-gray-900"
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
              className="text-sm font-medium leading-6 text-[#00bbf9] hover:text-[#f72585] "
              onClick={() => router.push("/#contact")}
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
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Story
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Journey
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Passions
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                  <a
                    href="https://www.shipmind.tech/"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Work
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Hero----------------------  */}
      <div className="px-6 py-20 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
                <h1 className="text-4xl md:text-3xl xl:text-4xl font-medium tracking-tight mb-12">
                  Bora Özışık{" "}
                  <span className="font-mono xl:text-2xl text-1xl">
                    (Full Stack Developer)
                  </span>
                  <img
                    className="w-44 lg:ml-0 h-auto -mb-12"
                    src="/static/handDraw/handdraw-funUnderlineTiny.svg"
                    alt=""
                  />
                  <br />
                  <Stack direction={"row"} alignItems={"center"}>
                    <span className="text-[#00bbf9]">
                      Empowering myself and others to reach new heights.{" "}
                    </span>
                    <img
                      className="h-12 w-auto -mb-28"
                      src="/static/handDraw/handdrawHeart.svg"
                      alt=""
                    />
                  </Stack>
                </h1>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-[#00bbf9] to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  My Projects
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#f72585] to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200">
                  <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    My Resume
                  </span>
                </button>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <img
                src="/static/images/my-image-hero.jpg"
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* // -------------------Hero----------------------  */}
      {/* // -------------------Briefly About----------------------  */}
      <section className="bg-gray-800">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#00bbf9] capitalize lg:text-3xl ">
              Hello!
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-200">
              I&apos;m a Full Stack Developer who wants to learn new things and
              improve himself. I like teamwork, so I always want to be included
              projects that help people&apos;s daily life. My main motivation is
              communicate the people that carrying the same ideas with me and
              prepare useful contents and products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="/static/images/software.jpg"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-gray-900 rounded-md shadow">
                <Stack direction={"row"} alignItems={"center"}>
                  <a
                    href="#"
                    className="font-semibold text-[#00bbf9] hover:underline  md:text-xl"
                  >
                    Nautilica Software Services
                  </a>
                  <img
                    className="h-7 w-auto ml-2"
                    src="/static/handDraw/handdraw-code.svg"
                    alt=""
                  />
                </Stack>

                <p className="mt-3 text-sm text-gray-200 md:text-sm">
                  I am currently working as Full Stack Developer at Nautilica
                  Software Services. We are working on a project called
                  Shipmind, which started with the motto &quot;Simplest Way of
                  Organizing your Freight&quot; with our team.
                </p>

                <p className="mt-3 text-sm text-[#f72585] ">
                  Mar 2022 - Present
                </p>
              </div>
            </div>

            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="/static/images/working.jpg"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-gray-900 rounded-md shadow ">
                <Stack direction={"row"} alignItems={"center"}>
                  <a
                    href="#"
                    className="font-semibold text-[#00bbf9] hover:underline md:text-xl"
                  >
                    Celal Bayar University
                  </a>
                  <img
                    className="h-7 w-auto ml-2"
                    src="/static/handDraw/handdraw-stickyNote.svg"
                    alt=""
                  />
                </Stack>

                <p className="mt-3 text-sm text-gray-200 md:text-sm">
                  At the same time, I am currently a 3rd year student at the
                  Department of Computer Engineering at Celal Bayar University.
                  <br />
                  <span>I work hard !</span>
                </p>

                <p className="mt-2 text-sm text-[#f72585]">2019 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Briefly About----------------------  */}
      {/* // -------------------Skills----------------------  */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-[#f72585]" />
                <span className="relative text-white">Skill</span>
              </span>{" "}
              and{" "}
              <span className="relative inline-block">
                <span className="relative text-gray-800">Passion</span>

                <img
                  src="../static/handDraw/handdraw-underlinetiny.svg"
                  alt=""
                  className="w-32"
                />
              </span>
              working together...
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 md:text-lg">
              With my skills, I am confident in my ability to meet and exceed
              expectations.I am passionate about what I do and I am trying to
              improve myself day by day. Here you can have a look at my skills.
            </p>
          </div>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="13" fill="none" r="9" stroke="#00bbf9" />
                <path
                  d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                  stroke="#00bbf9"
                  fill="none"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Frontend</h6>
            <p className="mb-3 text-sm text-gray-900">
              Areas I have mastered in frontend
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Next Js
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                React - TypeScript
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                GraphQL
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinecap="round"
              >
                <path
                  d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                  fill="none"
                  strokeWidth="2"
                  stroke="#00bbf9"
                />
                <path
                  d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="#00bbf9"
                />
                <path
                  d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="#00bbf9"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Backend</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lets check my backend skills
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Nest Js
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                PostgreSQL
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                GraphQL
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                  fill="none"
                  stroke="#00bbf9"
                />
                <ellipse
                  cx="19.078"
                  cy="4.922"
                  fill="none"
                  rx="2.5"
                  ry="4.95"
                  stroke="#00bbf9"
                  transform="translate(2.107 14.932) rotate(-45)"
                />
                <path
                  d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                  fill="none"
                  stroke="#00bbf9"
                />
                <path
                  d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                  fill="none"
                  stroke="#00bbf9"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Programming Languages
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              PL&apos;s ​​I know, starting from the best
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                TypeScript
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Java
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Python
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                  fill="none"
                  stroke="#00bbf9"
                />
                <polyline
                  fill="none"
                  points="10 11 10 6 6 2 3 5 7 9"
                  stroke="#00bbf9"
                />
                <polyline
                  fill="none"
                  points="15 12 15 17 19 21 22 18 18 14"
                  stroke="#00bbf9"
                />
                <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="#00bbf9" />
                <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="#00bbf9" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">General</h6>
            <p className="mb-3 text-sm text-gray-900">
              Also I think I&apos;m good at these skills
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Teamwork
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Algorithms
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#00bbf9"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* // -------------------Skills----------------------  */}
      {/* // -------------------Languages----------------------  */}
      <section className="text-gray-100 body-font bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font text-[#00bbf9] mb-16">
            <span className="relative inline-block">
              <span className="relative text-[#00bbf9]">LANGUAGES</span>

              <img
                src="../static/handDraw/handdraw-doubleunderlinetiny.svg"
                alt=""
                className="w-32 mx-auto mt-1"
              />
            </span>
          </h1>

          <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img
                src="/static/flags/tr-circle-flag.png"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#00bbf9] text-lg title-font font-medium mb-2">
                Turkish
              </h2>
              <p className="leading-relaxed text-base">
                Turkish is my native language and also, since I live in Turkey,
                I speak this language in my daily life.
              </p>
              <a className="mt-3 text-[#f72585] inline-flex items-center">
                Native or bilingual proficiency
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#00bbf9] text-lg title-font font-medium mb-2">
                English
              </h2>
              <p className="leading-relaxed text-base">
                I have a very good command of the English language and I am very
                confident in my English abilities.Also I&apos;m still constantly
                trying to improve myself.
              </p>
              <a className="mt-3 text-[#f72585] inline-flex items-center">
                Professional working proficiency
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src="/static/flags/en-circle-flag.png" alt="" />
            </div>
          </div>
          <div className="flex items-center lg:w-full mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img
                src="/static/flags/ger-circle-flag.png"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#00bbf9] text-lg title-font font-medium mb-2">
                German
              </h2>
              <p className="leading-relaxed text-base">
                I&apos;m in the process of studying German. It hasn&apos;t been
                long since I started learning but I&apos;m working on improving
                my German language skills.
              </p>
              <a className="mt-3 text-[#f72585]  inline-flex items-center">
                Elementary proficiency
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Languages----------------------  */}
      {/* // -------------------Footer----------------------  */}
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <p className="text-body-color mb-7 text-base">
                  Designing the Extraordinary, Every Step of the Way.
                </p>
                <p className="text-dark flex items-center text-sm font-medium hover:text-[#00bbf9]">
                  <span className="text-primary mr-3">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      className="fill-current"
                    >
                      <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                      <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                      <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                    </svg>
                  </span>
                  <span>+90 554 595 99 05</span>
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold hover:text-[#00bbf9]">
                  Ouick Link
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Who am I ?
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Languages
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold hover:text-[#00bbf9]">
                  About
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Hometown
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Journey
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Passions
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold hover:text-[#00bbf9]">
                  Business
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      My Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      My Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold hover:text-[#00bbf9]">
                  Contact Me On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-[#00bbf9] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-[#00bbf9] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-[#00bbf9] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      fill="none"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-[#00bbf9] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]">
            <svg
              width="217"
              height="229"
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1="281"
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" stop-opacity="0.08" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-10 right-10 z-[-1]">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2="75"
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#13C296" stop-opacity="0.31" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
      {/* // -------------------Languages----------------------  */}
    </>
  );
};

export default HomeView;
