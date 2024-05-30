import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row xl:flex-row items-center justify-between md:pt-8 xl:pt-16 xl:pb-24">
          <div className="text-center md:text-left xl:text-left xl:w-1/2 order-2 md:order-1 xl:order-none">
            <span className="text-3xl text-white font-semibold">
              Software Developer
            </span>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-accent mt-2 md:mt-4 xl:mt-6">
              Hello, I'm <br />
              <span className="text-4xl md:text-4xl xl:text-6xl text-white font-bold">
                Manish Kumar
              </span>
            </h1>
            <p className="max-w-md md:max-w-lg xl:max-w-xl mt-4 md:mt-6 xl:mt-8 text-white/80">
              I specialize in creating polished digital experiences, leveraging
              my expertise in a diverse array of programming languages and
              technologies.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-8 xl:mt-10">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray uppercase flex items-center gap-2"
                type="button"
              >
                <span className="text-accent">Download CV</span>
                <FiDownload
                  className="text-xl text-accent"
                  aria-hidden="true"
                />
              </Button>
              <Social
                containerStyles="flex gap-6 mt-4 md:mt-0"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-white hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
