import AppHeader from "./components/Header";

type Props = {};

const Losev = (props: Props) => {
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      <section className="bg-gray-800">
        <div className="container px-6 py-20 mx-auto">
          <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-[#EA738D] underline">
            Lösev
          </h1>
          <p className="font-medium text-white text-justify mx-auto max-w-lg mt-8">
            Lösev is a foundation that provides assistance to children and
            adults with leukemia and cancer, meeting many of their needs. I also
            contribute to this cause by volunteering for Lösev events whenever I
            have the opportunity.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('/static/images/losev-1.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                  Tangerine Harvesting Event
                </h2>
                <p className="mt-2 text-lg tracking-wider text-yellow-400 ">
                  İzmir
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('/static/images/losev-2.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                  Karşıyaka Çarşı Caravan
                </h2>
                <p className="mt-2 text-lg tracking-wider text-yellow-400 ">
                  İzmir
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('/static/images/losev-3.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold  capitalize text-white">
                  Hilltown AVM
                </h2>
                <p className="mt-2 text-lg tracking-wider text-yellow-400 ">
                  İzmir
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('/static/images/losev-4.jpg')]">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold  capitalize text-white">
                  Karşıyaka Çarşı Caravan
                </h2>
                <p className="mt-2 text-lg tracking-wider text-yellow-400 ">
                  İzmir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Losev;
