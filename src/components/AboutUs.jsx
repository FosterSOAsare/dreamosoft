import teamIllustration from "../assets/icons/team-illustration.svg";

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section
        className="py-12 pt-24 bg-white dark:bg-gray-900 px-10"
        data-aos="fade-up"
        style={{ background: "#F5F6FB" }}
      >
        <h2 className="text-4xl md:mb-14 font-bold text-gray-900 dark:text-white  text-center">
          About Us
        </h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Illustration */}
          <div className="flex justify-center md:justify-start">
            <img
              src={teamIllustration}
              alt="Team Illustration"
              className="h-96 md:w-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Us
        </h2> */}
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Dreamsoft is a dynamic company specializing in innovative software
              solutions. We empower businesses worldwide through innovative,
              reliable, and user-centric software solutions.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Additionally, we offer comprehensive courses to equip individuals
              with the skills needed to thrive in the digital world.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Our team’s expertise delivers innovative software solutions that
              exceed expectations. With a relentless focus on quality and
              efficient project management, we ensure timely delivery and client
              satisfaction.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
