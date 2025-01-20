import { HiOutlineArrowUpRight } from "react-icons/hi2";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

const Home = () => {
  const OPTIONS = { dragFree: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="">
      <div className="max-w-5xl mx-auto lg:py-20 lg:px-11">
        <section className="">
          <div className="">
            <h1 className="font-bebas lg:text-7xl tracking-wider space-y-3 mb-6">
              <span className="block">Hey, I'm Sonam</span>
              <span className="block">Frontend Developer</span>
            </h1>
            <p className="max-w-xl text-sm font-semibold uppercase tracking-wider text-dark-100">
              Transforming complex ideas into seamless digital experiences
              through innovative frontend solutions
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mb-8">
            <h2 className="font-bebas text-4xl tracking-wider mb-3 relative">
              <span className="relative z-10">Selected Project</span>
              <span className="inline-block w-11 h-11 bg-[#EF6848]/90 rounded-full absolute -top-1.5 -left-3 "></span>
            </h2>
            <p className="max-w-md text-dark-100">
              Explore a curated collection of my most impactful and innovative
              projects.
            </p>
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section className="pb-24">
          <div className="mb-8">
            <h2 className="font-bebas text-4xl tracking-wider mb-3 relative">
              <span className="relative z-10">Work Experience</span>
              <span className="inline-block w-11 h-11 bg-[#EF6848]/90 rounded-full absolute -top-1.5 -left-3 "></span>
            </h2>
            <p className="max-w-md text-dark-100">
              More than 7 years of experiences
            </p>
          </div>

          <div className="">
            <ul>
              <li className="text-sm flex items-start lg:gap-44">
                <h4 className="text-dark-100">2021 - 2022</h4>
                <div className="">
                  <h4 className="flex gap-1">
                    <span>Selise Digital Platforms</span>
                    <HiOutlineArrowUpRight size={12} />
                  </h4>
                  <p className="max-w-md mt-2 text-dark-100">
                    Lead UI Engineer handling three projects, building
                    interactive themes, website and responsive website.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
