import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-full my-auto grid grid-cols-1 md:grid-cols-3 mx-14 md:mx-20 lg:mx-60 gap-8">
      <div className="col-span-2">
        <h2 className="text-3xl font-semibold my-4">
          Hi there, I'm <span className="text-cyan-600">Ash</span> 👋
        </h2>
        <p className="text-xl my-4 tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore.
        </p>

        <div className="">
          <button className="transformn hover:translate-y-1">
            <Image
              src="/twitter-icon.png"
              alt="Twitter icon"
              width={50}
              height={0}
            />
          </button>
          <button className="transformn hover:translate-y-1">
            <Image
              src="/facebook-icon.png"
              alt="Facebook icon"
              width={50}
              height={0}
            />
          </button>
          <button className="transformn hover:translate-y-1">
            <Image
              src="/linkedin-icon.png"
              alt="Linkedin icon"
              width={50}
              height={0}
            />
          </button>
          <button className="transformn hover:translate-y-1">
            <Image
              src="/youtube-icon.png"
              alt="Youtube icon"
              width={50}
              height={0}
            />
          </button>
        </div>
      </div>

      <div className="col-span-1 mx-auto">
        <Image
          src="/avatar.svg"
          alt="Avatar"
          width={240}
          height={0}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
