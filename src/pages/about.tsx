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
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

type Props = {};

const About = (props: Props) => {
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
              className="text-sm font-medium leading-6 text-[#0077b6] hover:text-[#ff4081] "
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>

            <ClickAwayListener onClickAway={() => setIsShowing(false)}>
              <Popover className="relative">
                <Popover.Button
                  className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-sm font-medium leading-6 text-[#0077b6]"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span>About</span>
                  {isShowing === true ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#0077b6]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#0077b6]"
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
                                className="h-6 w-6 text-gray-600 group-hover:text-[#0077b6]"
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
              className="text-sm font-medium leading-6 text-[#0077b6] hover:text-[#ff4081] "
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
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Story
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Journey
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Passions
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                  <a
                    href="https://www.shipmind.tech/"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
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
      {/* // -------------------Story---------------------- */}
      <section className="bg-white mt-8 lg:mt-0">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl text-gray-800 capitalize lg:text-3xl lg:ml-16 font-medium">
              Embracing the Chapters of Life:{" "}
              <span className="text-[#0077b6]">My Story</span>
              <div className="-mt-4">
                <span className="inline-block w-40 h-1 bg-[#0077b6] rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-[#0077b6] rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-[#0077b6] rounded-full"></span>
              </div>
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96 lg:ml-16"
                src="/static/images/myStory-bg.jpg"
                alt=""
              />

              <div className="mt-8 lg:px-24 lg:mt-0">
                <p className="max-w-lg text-gray-500 text-justify font-medium">
                  I was born on November 7, 2000, in the city of Aydın, Turkey.
                  I attended primary school, middle school, and high school in
                  Aydın. I graduated from high school with a GPA of 96.24 and
                  ranked third in my school. After taking the university
                  entrance exam, I earned the opportunity to study Computer
                  Engineering at Celal Bayar University.
                </p>
                <p className="max-w-lg mt-6 text-gray-500 text-justify font-medium">
                  I spent a year in preparatory school, improving my English
                  skills and also took the initiative to learn German. Once I
                  moved on to the first year of university, alongside my regular
                  classes, I successfully completed two courses to learn the
                  Java programming language. I then solidified my knowledge by
                  working on several personal projects.Next, I pursued a similar
                  path by taking courses to learn the Python language and
                  developed applications.
                </p>
                <p className="max-w-lg mt-6 text-gray-500 text-justify font-medium">
                  By the middle of my second year, I realized that I wanted to
                  put my skills into practice and work.Therefore, I started a
                  voluntary internship at &apos;Nautilica Software
                  Services&apos; company. During the six-month voluntary
                  internship, I developed myself towards becoming a Fullstack
                  Developer.I gained expertise in various technologies,
                  including TypeScript, React, Next.js, Nest.js, PostgreSQL, and
                  GraphQL.
                </p>
                <p className="max-w-lg mt-6 text-gray-500 text-justify font-medium">
                  After this six-month journey, I was offered a job at the same
                  company as a Full Stack Developer. Currently, I am working
                  while continuing my studies. Additionally, I am actively
                  working on improving my foreign language skills by my own
                  initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Story----------------------  */}
      {/* // -------------------Timeline----------------------  */}
      <section>
        <a href="#timeline" id={"timeline"}></a>
        <div className="bg-gray-800 text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-[#0077b6] uppercase tracking-loose font-medium">
                My Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-medium">
                Process of Work
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4 font-medium">
                Here’s my guide to the school and business process. Go through
                all the steps to know the exact process of my work.
              </p>
              <button
                onClick={() => router.push("/#brabout")}
                className="font-medium bg-transparent mr-auto hover:bg-[#0077b6] text-[#0077b6] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#0077b6] hover:border-transparent"
              >
                Explore Now
              </button>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-[#0077b6] absolute h-full border right-1/2 border-2 border-solid border-[#0077b6] rounded-1"></div>
                  <div className="border-2-2 border-[#0077b6] absolute h-full border left-1/2 border-2 border-solid border-[#0077b6] rounded-1"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#0077b6] font-medium">
                        August, 2019
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        University Started
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium text-justify">
                        I started preparatory class at Celal Bayar University
                        and I started to improve my foreign languages.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#0077b6] font-medium">
                        September, 2020
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        C.eng Department Started
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium text-justify">
                        I started my first year in Computer Engineering
                        Department and this year, I started to be busy with
                        school lessons and also my studies to improve myself.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#0077b6] font-medium">
                        February, 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Volunteer Internship
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium text-justify">
                        I started to work as a Full Stack Developer intern at
                        &apos;Nautilica Software Services&apos; and I gained
                        expertise in various technologies, including TypeScript,
                        React, Next.js, Nest.js, PostgreSQL, and GraphQL.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#0077b6] font-medium">
                        August, 2022
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Started to Work
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium text-justify">
                        After a long internship period of 6 months, I was
                        offered a job and I accepted it.Currently, while working
                        at &apos;Nautilica Software Services&apos;, I continue
                        to study at the Computer Engineering Department of Celal
                        Bayar University.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-24 lg:-mt-24 w-[24rem] h-[24rem]"
                  src="../static/illustrations/rocket-maker.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Timeline----------------------  */}
    </>
  );
};

export default About;
