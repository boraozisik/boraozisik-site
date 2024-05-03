import { Divider } from "@mui/material";
import AppHeader from "./components/Header";

type Props = {};

const Music = (props: Props) => {
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Music---------------------- */}
      <section className="bg-gray-800 py-16">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-medium capitalize lg:text-3xl text-white">
            Ears <span className="text-[#EA738D]">Attuned</span>, Soul{" "}
            <span className="text-[#EA738D]">Ignited:</span> A Lifelong Melody.
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
              <span className="text-[#EA738D]">favorite</span> artists
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/metallica-avatar.jpeg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Metallica
                </h1>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/travis-scott-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Travis Scott
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/bon-jovi-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Bon Jovi
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/rammstein-logo.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Rammstein
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/depeche-mode-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Depeche Mode
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/alphaville-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Alphaville
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/sebnem-ferah-avatar.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Şebnem Ferah
                </h1>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#89ABE3] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/static/images/queen-avatar.png"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-medium  capitalize text-white group-hover:text-white">
                  Queen
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
