import React from "react"
import Header from "../components/header"

const Page = ({ data, location }) => {
  return (
    <>
      <Header />
      <main className="font-firago hyphens-manual">
        <div className="p-6 mx-auto max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 print:p-4 bg-white md:pt-4">
          <header className="flex items-center mb-3 md:mb-7 flex-col print:mb-0">
            <h1 className="text-2xl font-semibold pb-px mb-3 print:mb-0">
              Sanket Dasgupta
            </h1>
            <p className="mt-1 text-s leading-normal">
              <a
                style={{ fontWeight: "400" }}
                href="https://snkt.tech"
                className="group"
              >
                snkt.tech↗
              </a>{" "}
              •{" "}
              <a
                style={{ fontWeight: "400" }}
                href="mailto:sanketdasgupta@gmail.com"
                className="group"
              >
                sanketdasgupta@gmail.com
              </a>{" "}
              •{" "}
              <a
                style={{ fontWeight: "400" }}
                href="https://github.com/SanketDG"
                className="group"
              >
                {" "}
                github.com/SanketDG ↗
              </a>
            </p>
          </header>

          <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">
            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-3 font-bold tracking-widest text-lg print:font-normal">
                  EXPERIENCE
                </h2>

                <section className="mb-3.5 print:mb-2 break-inside-avoid">
                  <header>
                    <h3 className="text-md font-semibold leading-snugish mb-3 print:mb-0">
                      Persistent Systems
                    </h3>
                    <p className="leading-normal text-resume mb-3">
                      Aug 2018 – Present • Full Stack Developer • Pune, India
                    </p>
                  </header>
                  <ul className="">
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Developed a Chrome extension that bought an archaic email
                      encryption product to the cloud, on modern web
                      technologies. Webpack, ES6, HTML/CSS.
                    </li>
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Developed an Outlook Web Addin for Outlook suite of
                      products and refactored to use modern tooling and bundling
                      techniques to improve performance by 4x. The addin code
                      was deployed to AWS Cloudfront CDN served over HTTP/2,
                      which led to an additional boost in performance.
                    </li>
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Separated a monolithic Django codebase that was consumed
                      by the above two client side applications into two smaller
                      services and containerized them using Docker improving
                      both the development and deploying experience.
                    </li>
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Refactored I/O intensive co de in the Django application
                      to be processed by an asynchronous worker queue that used
                      Redis to store tasks and green threads to interleave tasks
                      which resulted in 17x improvement over response times.
                    </li>
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Implemented centralized logging for all web services by
                      writing an intermediary web service in Go that publishes
                      all logs to ElasticSearch and visualized important data
                      points using Kibana.
                    </li>
                    <li className="mt-2.1 text-resume leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Developed, tested and migrated an legacy application to
                      modern web technologies and maintained full compatibility
                      with the legacy application. TypeScript and OpenUI5.
                    </li>
                  </ul>
                </section>
              </div>

              <section className="mb-3.5 print:mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold leading-snugish mb-3 print:mb-0">
                    Google Summer of Code
                  </h3>
                  <p className="leading-normal text-resume mb-3">
                    Apr 2016 - Aug 2016 • Open Source Contract Developer
                  </p>
                </header>
                <ul className="">
                  <li className="mt-2.1 text-resume leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Participated with the Python Software Foundation under coala
                    (https://coala.io)
                  </li>
                  <li className="mt-2.1 text-resume leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Created a language independent documentation extraction
                    system.
                  </li>
                  <li className="mt-2.1 text-resume leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Wrote a language independent plugin that automatically fixes
                    inline code comments and documentation.
                  </li>
                  <li className="mt-2.1 text-resume leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Gained maintainer access for contribution to the project.
                  </li>
                </ul>
              </section>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-3 font-bold tracking-widest text-lg print:font-normal">
                  ACHIEVEMENTS
                </h2>

                <section className="mb-3.5 break-inside-avoid">
                  <header>
                    <h3 className="text-sm font-semibold leading-snugish uppercase mt-3 mb-3">
                      Mentor for Google Summer of Code 2017 and 2020.
                    </h3>
                    <p className="leading-normal text-resume mb-3">
                      Mentored a GSoC student for the coala and Anita-B
                      organization in respective years.
                    </p>
                  </header>
                  <header>
                    <h3 className="text-sm font-semibold leading-snugish uppercase mb-3">
                      Runner up at HackerEarth IndiaHacks Open Source Hackathon
                    </h3>
                    <p className="leading-normal text-resume mb-3">
                      Contributed to various open source projects to reach the
                      leaderboard on the basis of difficulty of issues triaged.
                    </p>
                  </header>
                </section>
              </div>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-3 font-bold tracking-widest text-lg print:font-normal">
                  PROJECTS
                </h2>

                <section className="mb-3.5 break-inside-avoid">
                  <header>
                    <h3 className="text-md font-semibold leading-snugish mb-1">
                      <a
                        href="https://github.com/SanketDG/djurl"
                        className="group"
                      >
                        djurl
                        <span className="inline-block print:text-black font-normal group-hover:transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-resume mb-1">
                      Python • Django • Docker
                    </p>
                  </header>
                  <p className="mt-2.1 text-resume leading-normal">
                    A minimal self-hosted URL shortener built using Django built
                    with modern tooling for Python and best practices in mind.
                    <br />
                    <br />
                    This is also the reference application for{" "}
                    <a
                      href="https://github.com/SanketDG/djurl/tree/master/modern-django-tooling"
                      className="group"
                    >
                      modern-django-tooling↗
                    </a>
                  </p>
                </section>
              </div>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold leading-snugish mb-1">
                    <a
                      href="https://github.com/SanketDG/khol"
                      className="group"
                    >
                      khol (খোল)
                      <span className="inline-block print:text-black font-normal group-hover:transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-resume mb-1">C</p>
                </header>
                <p className="mt-2.1 text-resume leading-normal">
                  A minimalistic shell written in C with support for
                  redirection, history and pipes.
                  <br />
                </p>
              </section>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold leading-snugish mb-1">
                    <a
                      href="https://github.com/SanketDG/extenstart"
                      className="group"
                    >
                      extenstart
                      <span className="inline-block print:text-black font-normal group-hover:transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-resume mb-1">Javascript</p>
                </header>
                <p className="mt-2.1 text-resume leading-normal">
                  Opinionated Boilerplate for Web Extensions
                </p>
              </section>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold leading-snugish mb-1">
                    <a
                      href="https://github.com/awsomsauce/hugo-theme-sauce"
                      className="group"
                    >
                      hugo-theme-sauce
                      <span className="inline-block print:text-black font-normal group-hover:transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-resume mb-1">
                    Hugo • Tachyons • Netlify
                  </p>
                </header>
                <p className="mt-2.1 text-resume leading-normal">
                  The Hugo theme that runs{" "}
                  <a href="https://awsomsauce.tech" className="group">
                    awsomsauce.tech!
                  </a>
                </p>
              </section>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold leading-snugish mb-1">
                    Open Source Contributions
                  </h3>
                </header>
                <p className="mt-2.1 text-resume leading-normal">
                  Contributions to{" "}
                  <a
                    href="https://github.com/networkx/networkx/pulls?q=is%3Apr+author%3ASanketDG+is%3Amerged"
                    className="group"
                  >
                    NetworkX↗
                  </a>{" "}
                  (a graph library for Python),{" "}
                  <a
                    href="https://github.com/coala/coala/pulls?q=is%3Apr+author%3ASanketDG+is%3Amerged"
                    className="group"
                  >
                    coala↗
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/coala/coala-bears/pulls?q=is%3Apr+author%3ASanketDG+is%3Amerged"
                    className="group"
                  >
                    coala-bears↗
                  </a>{" "}
                  (an opinionated language agnostic linting tool),{" "}
                  <a
                    href="https://github.com/PostHog/PostHog/pulls?q=is%3Apr+author%3ASanketDG+is%3Amerged"
                    className="group"
                  >
                    PostHog↗
                  </a>{" "}
                  (Open Source Product Analytics),{" "}
                  <a
                    href="https://github.com/pypa/bandersnatch/pulls?q=is%3Apr+author%3ASanketDG+is%3Amerged"
                    className="group"
                  >
                    PyPA↗
                  </a>{" "}
                  (Python Packaging Authority) and{" "}
                  <a
                    href="https://github.com/search?l=&q=is%3Apr+author%3ASanketDG+is%3Amerged&type=Issues"
                    className="group"
                  >
                    many more↗
                  </a>
                </p>
              </section>
            </section>

            <section className="mt-7 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-3 font-bold tracking-widest text-lg print:font-normal">
                  SKILLS
                </h2>

                <section className="mb-3.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snugish mb-2">
                      Proficient In
                    </h3>
                  </header>
                  <div className="my-3.1 last:pb-1.5">
                    <ul className="flex flex-wrap text-resume leading-relaxed -mr-1.6 -mb-1.6">
                      <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                        Python
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                        Javascript
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snugish mb-2">
                    Frameworks
                  </h3>
                </header>
                <div className="my-3.1 last:pb-1.5">
                  <ul className="flex flex-wrap text-resume leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Django
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Flask
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      React
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snugish mb-2">
                    Tools • Databases
                  </h3>
                </header>
                <div className="my-3.1 last:pb-1.5">
                  <ul className="flex flex-wrap text-resume leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Webpack
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Redis
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Docker
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Elastic (ELK)
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-3.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snugish mb-2">
                    Other
                  </h3>
                </header>
                <div className="my-3.1 last:pb-1.5">
                  <ul className="flex flex-wrap text-resume leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      PHP
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Node.js
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm print:bg-white border-solid border-2 border-black">
                      Go
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-3 font-bold tracking-widest text-lg print:font-normal">
                  EDUCATION
                </h2>

                <section className="mb-3.5 break-inside-avoid">
                  <header>
                    <h3 className="text-md font-semibold leading-snugish mb-2">
                      Academy of Technology
                    </h3>
                    <p className="leading-normal text-resume mb-3">
                      2014 – 2018 • Computer Science • Kolkata, India
                    </p>
                  </header>
                </section>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
