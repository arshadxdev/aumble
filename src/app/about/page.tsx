import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="mx-auto container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10">About</h1>
          <p className="mx-3 text-gray-200">
            Aumble is a technology solutions provider specializing in custom web
            application development, end-to-end software testing services, and
            enterprise resource planning (ERP) systems. We help businesses
            streamline operations, improve user experiences, and scale
            effectively through tailored digital solutions. With a strong focus
            on innovation and quality, we develop robust web applications that
            are secure, responsive, and built to meet the specific needs of our
            clients. Our comprehensive testing services ensure software
            reliability, performance, and compliance across platforms and
            environments. We also deliver ERP solutions that centralize business
            processes, enhance productivity, and enable data-driven
            decision-making. Whether integrating existing systems or building
            from the ground up, we provide scalable ERP platforms that grow with
            your business. At Aumble, we combine technical expertise with
            strategic insight to deliver solutions that not only work — they
            drive results.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10">
            Contact Us
          </h1>
          <div className="flex max-md:flex-col flex-wrap">
            <a href="mailto:contact@aumble.com" className="mx-3">
              <span className="font-bold mr-1">Mail: </span> contact@aumble.com
            </a>
            <address className="mx-3">
              <span className="font-bold mr-1">Address: </span> Johri Enclave,
              Uttar Pradesh, India
            </address>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
