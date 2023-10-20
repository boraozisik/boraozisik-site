import AppHeader from "./components/Header";

type Props = {};

const Travel = (props: Props) => {
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Travel---------------------- */}
      <section className="text-gray-600 body-font mt-8">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 lg:w-1/3 lg:mb-0 mb-4">
              Travel <span className="text-[#8cbeef] py-4">far</span>, travel{" "}
              <span className="text-[#8cbeef] py-4">wide</span>, travel{" "}
              <span className="text-[#8cbeef] py-4">deep</span>. Find myself.
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-justify font-medium">
              From the breathtaking landscapes to the vibrant cultures, I
              believe that every destination has a story to tell. Get inspired,
              plan your next adventure, and let the world become your
              playground.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/static/images/travel-5.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/static/images/travel-1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/static/images/travel-4.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/static/images/travel-6.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/static/images/travel-2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/static/images/travel-3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // -------------------Travel---------------------- */}
    </>
  );
};

export default Travel;
