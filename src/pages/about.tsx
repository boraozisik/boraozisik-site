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
      {/* // -------------------Story---------------------- */}
      <section className="bg-white mt-8 lg:mt-0">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block lg:h-[48rem]"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl text-gray-800 capitalize lg:text-3xl lg:ml-16 font-medium mt-8">
              Embracing the Chapters of Life:{" "}
              <span className="text-[#8cbeef]">My Story</span>
              <div className="-mt-4">
                <span className="inline-block w-40 h-1 bg-[#8cbeef] rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-[#8cbeef] rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-[#8cbeef] rounded-full"></span>
              </div>
            </h1>

            <div className="mt-10 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96 lg:ml-16"
                src="/static/images/my-story.jpg"
                alt=""
              />

              <div className="mt-8 lg:-mt-8 lg:px-40">
                <p className="max-w-lg text-gray-500 lg:text-justify font-medium lg:mb-6">
                  I was born on November 7, 2000, in the city of Aydın, Turkey.
                  I attended primary school, middle school, and high school in
                  Aydın. I graduated from high school with a GPA of 96.24 and
                  ranked third in my school. After taking the university
                  entrance exam, I earned the opportunity to study Computer
                  Engineering at Celal Bayar University.
                </p>
                <p className="max-w-lg  text-gray-500 lg:text-justify font-medium lg:mb-6">
                  I spent a year in preparatory school, improving my English
                  skills and also took the initiative to learn German. Once I
                  moved on to the first year of university, alongside my regular
                  classes, I successfully completed two courses to learn the
                  Java programming language. I then solidified my knowledge by
                  working on several personal projects.Next, I pursued a similar
                  path by taking courses to learn the Python language and
                  developed applications.
                </p>
                <p className="max-w-lg text-gray-500 lg:text-justify font-medium lg:mb-6">
                  By the middle of my second year, I realized that I wanted to
                  put my skills into practice and work.Therefore, I started a
                  voluntary internship at &apos;Nautilica Software
                  Services&apos; company. During the six-month voluntary
                  internship, I developed myself towards becoming a Fullstack
                  Developer.I gained expertise in various technologies,
                  including TypeScript, React, Next.js, Nest.js, PostgreSQL, and
                  GraphQL.
                </p>
                <p className="max-w-lg text-gray-500 lg:text-justify font-medium">
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
              <p className="ml-2 text-[#fde047] uppercase tracking-loose font-medium">
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
                className="font-medium bg-transparent mr-auto hover:bg-[#fde047] text-[#fde047] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#fde047] hover:border-transparent"
              >
                Explore Now
              </button>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-[#fde047] absolute h-full border right-1/2 border-2 border-solid border-[#fde047] rounded-1"></div>
                  <div className="border-2-2 border-[#fde047] absolute h-full border left-1/2 border-2 border-solid border-[#fde047] rounded-1"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#fde047] font-medium">
                        August, 2019
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        University Started
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium lg:text-justify">
                        I started preparatory class at Celal Bayar University
                        and I started to improve my foreign languages.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#fde047] font-medium">
                        September, 2020
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Comp. Eng. Department Started
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium lg:text-justify">
                        I started my first year in Computer Engineering
                        Department and this year, I started to be busy with
                        school lessons and also my extra study to improve
                        myself.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#fde047] font-medium">
                        February, 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Volunteer Internship
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium lg:text-justify">
                        I started to work as a Full Stack Developer Intern at
                        &apos;Nautilica Software Services&apos; and I gained
                        expertise in various technologies, including TypeScript,
                        React, Next.js, Nest.js, PostgreSQL, and GraphQL.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#fde047] font-medium">
                        August, 2022
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Started to Work
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-medium lg:text-justify">
                        After a long internship period of 6 months, I was
                        offered a job and I happily and willingly accepted this
                        job.Currently, while working at &apos;Nautilica Software
                        Services&apos;, I continue to study at the Computer
                        Engineering Department of Celal Bayar University.
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
      {/* // -------------------Passions----------------------  */}
      <section className="body-font text-gray-600 bg-gray-100">
        <a href="#passions" id={"passions"}></a>
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                Beyond the Office:{" "}
                <span className="text-[#8cbeef]">My Passions</span>
              </h1>
              <div className="h-1 w-20 rounded bg-[#8cbeef]"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2 lg:text-justify font-medium">
              Beyond the confines of the office, I am a vibrant soul fueled by
              an array of passions. From exploring the great outdoors to diving
              into the world of literature, my life is a canvas painted with
              diverse interests. Whether immersing myself in artistic endeavors,
              engaging in adventurous pursuits, or delving into the depths of
              knowledge, my passion-fueled pursuits breathe life into every
              moment, making each experience a vibrant tapestry of
              possibilities.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/travel.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Travel
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  At the same time, I am interested in traveling and seeing
                  historical and beautiful places. I recently visited Italy.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/travel")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/climbing-mountaineering.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Climbing - Mountaineering
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  I do mountaineering and nature sports with the &apos;Aydın
                  Doğa Sporları&apos; club, of which I am an active member.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/naturesport")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/lösev.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Lösev
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  I voluntarily support &apos;Lösev&apos;, which is a foundation
                  that helps children and adults with leukemia and cancer and
                  meets their many needs.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/losev")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/swimming.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Swimming
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  Since my childhood, I have loved swimming and it has been an
                  integral part of my life. I also have great confidence in my
                  swimming abilities and I demonstrate a competitive spirit. I
                  make an effort to swim whenever I find the opportunity.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/swimming")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/reading-book.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Reading Book
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  In addition, I love reading books. I make it a point to read
                  books every day, unless there is a significant obstacle.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/books")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 xl:w-1/3">
              <div className="rounded-lg bg-gray-100 p-6 lg:h-[30rem]">
                <img
                  className="mb-6 h-64 w-full rounded object-cover object-center"
                  src="/static/images/music.jpg"
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Music
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  I love listening to music and believe that it softens my soul
                  and brings me calmness. I mostly listen to rock music, but
                  there are also times when I enjoy listening to rap music.
                </p>
                <button
                  className="text-[#8cbeef] inline-flex items-center font-medium"
                  onClick={() => router.push("/music")}
                >
                  Explore More
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke="#8cbeef"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Passions----------------------  */}
      {/* // -------------------Contact----------------------  */}
      <section className="bg-gray-800">
        <a href="#contact" id={"contact"}></a>
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-xl text-[#fde047]">Contact me</p>

            <h1 className="mt-2 text-2xl font-medium md:text-3xl text-white">
              I’d love to hear from you
            </h1>

            <p className="mt-3 text-gray-400">
              Feel free to reach out to me whenever you like; I&apos;m here to
              chat and help you unwind.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="p-4 rounded-lg  md:p-6 bg-gray-700">
              <a
                href={"mailto:ozisikbora@gmail.com"}
                className="inline-block p-3 text-[#fde047] rounded-lg  bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>

              <h2 className="mt-4 text-base font-medium text-white">Mail</h2>
              <p className="mt-2 text-sm text-gray-400">
                Reach to me on my mail.
              </p>
              <a href={"mailto:ozisikbora@gmail.com"}>
                <p className="mt-2 text-sm text-[#fde047]">
                  ozisikbora@gmail.com
                </p>
              </a>
            </div>
            <div className="p-4 rounded-lg  md:p-6 bg-gray-700">
              <a
                href="tel:0554-595-99-05"
                className="inline-block p-3 text-[#fde047] rounded-lg bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </a>

              <h2 className="mt-4 text-base font-medium text-white">Call me</h2>
              <p className="mt-2 text-sm text-gray-400">Every day 24/7</p>
              <a href="tel:0554-595-99-05">
                <p className="mt-2 text-sm text-[#fde047]">+90 554 595 99 05</p>
              </a>
            </div>
            <div className="p-4 rounded-lg md:p-6 bg-gray-700">
              <a
                href="https://www.linkedin.com/in/boraozisik/"
                target="_blank"
                className="inline-block p-3 text-[#fde047] rounded-lg bg-gray-600"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </a>

              <h2 className="mt-4 text-base font-medium text-white">
                LinkedIn
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                You can also check and chat to me on LinkedIn.
              </p>
              <a href="https://www.linkedin.com/in/boraozisik/" target="_blank">
                <p className="mt-2 text-sm text-[#fde047]">Lets explore</p>
              </a>
            </div>

            <div className="p-4 rounded-lg  md:p-6 bg-gray-700">
              <a
                href="https://www.instagram.com/borazsk_/"
                target="_blank"
                className="inline-block p-3 text-[#fde047] rounded-lg bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <h2 className="mt-4 text-base font-medium text-white">
                Instagram
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Get to know the me outside of work as well.
              </p>
              <a href="https://www.instagram.com/borazsk_/" target="_blank">
                <p className="mt-2 text-sm text-[#fde047]">
                  Follow me and message to me
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Contact----------------------  */}
      {/* // -------------------Footer----------------------  */}
      <footer className="relative z-10 bg-gray-100 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <p className="text-body-color mb-7 text-base">
                  Designing the Extraordinary, Every Step of the Way.
                </p>
                <p className="text-dark flex items-center text-sm font-medium hover:text-[#8cbeef]">
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
                  <span className="font-medium">+90 554 595 99 05</span>
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-4 text-lg font-medium hover:text-[#8cbeef]">
                  Quick Link
                </h4>
                <ul>
                  <li>
                    <a
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      onClick={() => router.push("/")}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/#brabout")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Who am I ?
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/#skills")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/#languages")}
                      style={{ cursor: "pointer" }}
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
                <h4 className="text-dark mb-4 text-lg font-medium hover:text-[#8cbeef]">
                  About
                </h4>
                <ul>
                  <li>
                    <a
                      onClick={() => router.push("/about")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Story
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/about#timeline")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Journey
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/about#passions")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Passions
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push("/about#contact")}
                      style={{ cursor: "pointer" }}
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
                <h4 className="text-dark mb-4 text-lg font-medium hover:text-[#8cbeef]">
                  Business
                </h4>
                <ul>
                  <li>
                    <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                      My Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                      My Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-4 text-lg font-medium hover:text-[#8cbeef]">
                  Contact Me On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="https://github.com/boraozisik"
                    target="_blank"
                    className="text-dark hover:bg-[#8cbeef] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/boraozisik/"
                    target="_blank"
                    className="text-dark hover:bg-[#8cbeef] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
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
                  <a
                    href={"mailto:ozisikbora@gmail.com"}
                    className="text-dark hover:bg-[#8cbeef] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      fill="none"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/borazsk_/"
                    target="_blank"
                    className="text-dark hover:bg-[#8cbeef] hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
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
                fill="#8cbeef"
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
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
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
                fill="#fde047"
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
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
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

export default About;
