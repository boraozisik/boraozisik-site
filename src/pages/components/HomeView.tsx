import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import AppHeader from "../components/Header";

type Props = {};

const HomeView = (props: Props) => {
  const router = useRouter();

  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Hero----------------------  */}
      <div className="bg-white mt-16">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-20  lg:py-24">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div>
              <img
                className="animated-image"
                src="/static/images/my-hero-img.png"
                alt=""
              />
              {/* <img
                  className="w-full"
                  src="/static/images/my-image-hero.jpg"
                  alt=""
                /> */}
            </div>
            <div>
              <p className="text-base font-medium tracking-wider text-[#8cbeef] uppercase">
                Full Stack Developer
              </p>
              <h1 className="mt-4 text-4xl font-bold text-gray-700 lg:mt-8 sm:text-6xl xl:text-6xl">
                Bora Özışık
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Empowering myself and others to reach new heights.
              </p>

              <a
                onClick={() => router.push("/about")}
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-medium text-white transition-all duration-200 bg-[#8cbeef]  rounded-full lg:mt-16 hover:bg-blue-400 focus:bg-blue-400"
                role="button"
              >
                About
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
              <a
                onClick={() => router.push("/work")}
                title=""
                className="ml-4 inline-flex items-center px-6 py-4 mt-8 font-medium text-black transition-all duration-200 bg-[#fde047] rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                My Work
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* // -------------------Hero----------------------  */}
      {/* // -------------------Briefly About----------------------  */}

      <section className="bg-gray-800">
        <a href="#brabout" id={"brabout"}></a>
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-[#8cbeef] capitalize lg:text-3xl ">
              Greetings...
            </h1>

            <p className="mx-auto mt-4 text-gray-200 font-medium">
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
                src="/static/images/shipmind-logo.PNG"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-gray-900 rounded-md shadow lg:h-[12rem]">
                <Stack direction={"row"} alignItems={"center"}>
                  <a
                    href="https://www.shipmind.tech/"
                    target="_blank"
                    className="font-medium text-[#8cbeef] hover:underline  md:text-xl underline"
                  >
                    ShipMind
                  </a>
                  <img
                    className="h-7 w-auto ml-2"
                    src="/static/handDraw/handdraw-code.svg"
                    alt=""
                  />
                </Stack>

                <p className="mt-3 text-sm text-gray-200 md:text-sm font-medium">
                  I am currently working as Full Stack Developer at ShipMind
                  which started with the motto &quot;Simplest Way of Organizing
                  your Freight&quot;.
                </p>

                <p className="mt-3 text-sm text-[#fde047] font-medium">
                  Mar 2022 - Present
                </p>
              </div>
            </div>

            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="/static/images/cbü.png"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-gray-900 rounded-md shadow lg:h-[12rem]">
                <Stack direction={"row"} alignItems={"center"}>
                  <a
                    href="https://www.mcbu.edu.tr/"
                    target="_blank"
                    className="font-medium text-[#8cbeef] hover:underline md:text-xl underline"
                  >
                    Celal Bayar University
                  </a>
                  <img
                    className="h-7 w-auto ml-2"
                    src="/static/handDraw/handdraw-stickyNote.svg"
                    alt=""
                  />
                </Stack>

                <p className="mt-3 text-sm text-gray-200 md:text-sm font-medium">
                  At the same time, I am currently a 4th year student at the
                  Department of Computer Engineering.
                </p>

                <p className="mt-2 text-sm text-[#fde047] font-medium">
                  2019 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Briefly About----------------------  */}
      {/* // -------------------Skills----------------------  */}
      <a href="#skills" id={"skills"}></a>
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-medium text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-[#8cbeef]" />
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
            {/* <div className="lg:w-1/2">
              <p className="text-base text-gray-700 md:text-lg font-medium">
                With my skills, I am confident in my ability to meet and exceed
                expectations.I am passionate about what I do and I am trying to
                improve myself day by day. Here you can have a look at my
                skills.
              </p>
            </div> */}
          </div>
          <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <fieldset className="text-xl max-w-sm border-4 border-[#8cbeef] rounded-lg p-2">
              <legend className="px-2 text-xl font-semibold underline decoration-[#fde047] decoration-2">
                Hard Skills
              </legend>
              <div className="flex flex-col gap-2 px-2 text-md font-serif">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-2 h-auto w-6 text-[#fde047] sm:w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    ></path>
                  </svg>
                  <a href="#">NextJS</a>
                </div>
                <hr />

                <a href="#">React - TypeScript</a>
                <hr />
                <a href="#">NestJS</a>
                <hr />
                <a href="#">GraphQL</a>
                <hr />
                <a href="#">PostgreSQL</a>
                <hr />
                <a href="#">Tailwind CSS - Material UI</a>
              </div>
            </fieldset>
            <fieldset className="text-xl max-w-sm border-4 border-[#8cbeef] rounded-lg p-2">
              <legend className="px-2 text-xl font-semibold underline decoration-[#fde047] decoration-2">
                Soft Skills
              </legend>
              <div className="flex flex-col gap-2 px-2 text-md font-serif">
                <a href="#">Teamwork</a>
                <hr />
                <a href="#">Problem Solving</a>
                <hr />
                <a href="#">Algorithms</a>
                <hr />
                <a href="#">Communication</a>
                <hr />
                <a href="#">Collaboration</a>
                <hr />
                <a href="#">Negotiation</a>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      {/* // -------------------Skills----------------------  */}
      {/* // -------------------Languages----------------------  */}
      <a href="#languages" id={"languages"}></a>
      <section className="text-gray-100 body-font bg-gray-800">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font text-[#8cbeef] mb-16">
            <span className="relative inline-block">
              <span className="relative text-[#8cbeef] font-medium">
                LANGUAGES
              </span>

              <img
                src="../static/handDraw/handdraw-doubleunderlinetiny.svg"
                alt=""
                className="w-32 mx-auto mt-1"
              />
            </span>
          </h1>

          <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img
                src="/static/flags/tr-circle-flag.png"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#8cbeef] text-lg title-font font-medium mb-2">
                Turkish
              </h2>
              <p className="leading-relaxed text-base font-medium">
                Turkish is my native language and also, since I live in Turkey,
                I speak this language in my daily life.
              </p>
              <a className="mt-3 text-[#fde047] inline-flex items-center font-medium">
                Native or bilingual proficiency
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#8cbeef] text-lg title-font font-medium mb-2 font-medium">
                English
              </h2>
              <p className="leading-relaxed text-base font-medium">
                I have a very good command of the English language and I am very
                confident in my English abilities.Also I&apos;m still constantly
                trying to improve myself.
              </p>
              <a className="mt-3 text-[#fde047] inline-flex items-center font-medium">
                Professional working proficiency
              </a>
            </div>
            <div className="sm:w-24 sm:h-24 sm:order-none order-first h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src="/static/flags/en-circle-flag.png" alt="" />
            </div>
          </div>
          <div className="flex items-center lg:w-full mx-auto sm:flex-row flex-col">
            <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img
                src="/static/flags/ger-circle-flag.png"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-[#8cbeef] text-lg title-font font-medium mb-2 font-medium">
                German
              </h2>
              <p className="leading-relaxed text-base font-medium">
                I&apos;m in the process of studying German. It hasn&apos;t been
                long since I started learning but I&apos;m working on improving
                my German language skills.
              </p>
              <a className="mt-3 text-[#fde047]  inline-flex items-center font-medium">
                Elementary proficiency
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Languages----------------------  */}
      {/* // -------------------Footer----------------------  */}
      <footer className="relative z-10 bg-gray-100 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <p className="text-body-color mb-7 text-base">
                  Designing the Extraordinary, Every Step of the Way.
                </p>
                <p className="text-dark flex items-center text-sm font-medium hover:text-[#8cbeef]">
                  <span className="text-primary mr-3">
                    <svg
                      width="15"
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
                    <a
                      onClick={() => router.push("/work")}
                      style={{ cursor: "pointer" }}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
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

export default HomeView;
