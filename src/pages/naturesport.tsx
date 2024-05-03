import AppHeader from "./components/Header";

type Props = {};

const NatureSport = (props: Props) => {
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------NatureSport---------------------- */}
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 lg:mt-32 sm:mt-24 bg-gray-200">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/static/images/naturesport.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="lg:my-32 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none">
              Nature&apos;s therapy:
              <br className="hidden md:block" /> I find{" "}
              <span className="inline-block text-[#89ABE3] py-4">solace</span>{" "}
              and <span className="inline-block text-[#89ABE3]">strength</span>{" "}
              through outdoor adventures.
            </h2>
            <p className="pr-5 mb-5 text-justify text-gray-600 md:text-lg font-medium">
              Approximately 7-8 years ago, I developed an interest in outdoor
              sports, and I became a member of the &apos;Aydın Doğa
              Sporları&apos; club, which is a nature sports club in Aydın, the
              city where I live. We have participated in nature hikes in various
              cities in Turkey and have done mountain climbing in many cities. I
              believe that these activities are extremely beneficial both for
              being in harmony with nature and for maintaining physical health,
              and I still continue to engage in outdoor sports regularly with
              the club.
            </p>
          </div>
        </div>
      </div>
      {/* // -------------------NatureSport---------------------- */}
    </>
  );
};

export default NatureSport;
