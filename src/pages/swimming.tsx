import AppHeader from "./components/Header";

type Props = {};

const Swimming = (props: Props) => {
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Swimming----------------------  */}
      <div>
        <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32 lg:flex-row">
          <div className="mb-5 w-full lg:mb-0 lg:mr-20">
            <h2 className="relative mb-4 font-medium text-3xl tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#fde047"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Swimming</span>
              </span>{" "}
              is not just a skill, it&apos;s a{" "}
              <span className="text-[#8cbeef]">way of life</span> for me.
            </h2>
            <p className="mx-auto font-medium text-gray-900">
              Swimming is not simply a hobby or sport for me. It is my calling
              and my ultimate pursuit of perfection. From the moment I dive into
              the water, an aura of confidence and determination engulfs me.
              With each stroke, I showcase my unwavering commitment to mastering
              the art of swimming. I relish in the challenge of pushing my
              limits, and my results speak for themselves. In the realm of
              swimming, I am unapologetically exceptional and relentlessly
              driven.
            </p>
          </div>
        </div>
        <div className="relative lg:-mt-8">
          <img
            className="object-cover w-full sm:h-86"
            src="/static/images/bg-swim.jfif"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        </div>
      </div>
      {/* // -------------------Swimming----------------------  */}
    </>
  );
};

export default Swimming;
