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
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-[#00bbf9] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#f72585] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Get started
                </a>
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
                Next Js-React
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
    </>
  );
};

export default HomeView;
