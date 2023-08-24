"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Three Starts ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                  src="/images/about/profile-light.png"
                  alt="About"
                  className="dark:hidden"
                  fill
              />
              <Image
                  src="/images/about/profile-dark.png"
                  alt="About"
                  className="hidden dark:block"
                  fill
              />
            </motion.div>
            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                {/*<span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">*/}
                {/*  New*/}
                {/*</span>{" "}*/}
                Know your data
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                {/*&nbsp;*/}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Data Profile
                </span>
              </h2>
              <p>
                Detailed statistics, charts & distributions of values to accurately get familiar with your data.
              </p>

              <div className="mt-2 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  {/*<p className="text-black dark:text-white font-semibold text-metatitle2">*/}
                  {/*  01*/}
                  {/*</p>*/}

                  {/*checkmark icon instead of number circled as above*/}
                  <Image
                      src="./images/icon/check-mark-dark.svg"
                      alt="v"
                      className="dark:hidden pl-1"
                      width={26} height={26}
                      // fill
                  />
                  <Image
                      src="./images/icon/check-mark-light.svg"
                      alt="About"
                      className="hidden dark:block pl-1"
                      width={26} height={26}
                      // fill
                  />
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Statistics
                  </h5>
                  {/*<p>Ut ultricies lacus non fermentum ultrices.</p>*/}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  {/*<p className="text-black dark:text-white font-semibold text-metatitle2">*/}
                  {/*  02*/}
                  {/*</p>*/}
                  {/*checkmark icon instead of number circled as above*/}
                  <Image
                      src="./images/icon/check-mark-dark.svg"
                      alt="v"
                      className="dark:hidden pl-1"
                      width={26} height={26}
                      // fill
                  />
                  <Image
                      src="./images/icon/check-mark-light.svg"
                      alt="About"
                      className="hidden dark:block pl-1"
                      width={26} height={26}
                      // fill
                  />
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Frequency distribution
                  </h5>
                  {/*<p>consectetur adipiscing elit fermentum ultricies.</p>*/}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  {/*<p className="text-black dark:text-white font-semibold text-metatitle2">*/}
                  {/*  03*/}
                  {/*</p>*/}
                  {/*checkmark icon instead of number circled as above*/}
                  <Image
                      src="./images/icon/check-mark-dark.svg"
                      alt="v"
                      className="dark:hidden pl-1"
                      width={26} height={26}
                      // fill
                  />
                  <Image
                      src="./images/icon/check-mark-light.svg"
                      alt="About"
                      className="hidden dark:block pl-1"
                      width={26} height={26}
                      // fill
                  />
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Distinct, Unique, Duplicate profiling
                  </h5>
                  {/*<p>consectetur adipiscing elit fermentum ultricies.</p>*/}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Three End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5 ">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2 "
            >
              <div className="ml-22">
                <h4 className="text-black dark:text-white font-medium uppercase ">
                  Measure Your data
                </h4>
                <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-2">
                  {/*Data*/}
                  <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                   Data Quality
                  </span>
                </h2>
                <p>
                  Measure all dimensions of data quality
                  {/*<br/> 1. Freshness*/}
                  {/*<br/> 3. Completeness*/}
                  {/*<br/> 2. Validity*/}
                  {/*<br/> 4. Consistency*/}
                  {/*<br/> 5. Uniqueness*/}
                  {/*<br/> 6. Accuracy <span className="text-xs"> *coming soon!</span>*/}

                </p>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Freshness
                    </h5>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Completeness
                    </h5>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Validity
                    </h5>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Consistency
                    </h5>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Uniqueness
                    </h5>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                    <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Accuracy <span className="text-xs"> *coming soon!</span>
                    </h5>
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="hover:pr-2 duration-500">Know More</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:hidden"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      className="hidden dark:block"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/quality-light.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/quality-dark.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                  src="/images/about/contract-light.png"
                  alt="About"
                  className="dark:hidden"
                  fill
              />
              <Image
                  src="/images/about/contract-dark.png"
                  alt="About"
                  className="hidden dark:block"
                  fill
              />
            </motion.div>
            <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  New
                </span>{" "}
                Best Implementation
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-2">
                {/*&nbsp;*/}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Data Contracts
                </span>
              </h2>
              <p>
                Evaluate your data validity as per your set of rules & agreements.
              </p>

              <div className="mt-1 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                  <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Data Schema Agreements
                  </h5>
                </div>
              </div>
              <div className="mt-1 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                  <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Data Types agreements
                  </h5>
                </div>
              </div>
              <div className="mt-1 flex items-center gap-5">
                <div className="w-10 h-10 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <Image width={26} height={26} src="./images/icon/check-mark-dark.svg" alt="v" className="dark:hidden pl-1"/>
                  <Image width={26} height={26} src="./images/icon/check-mark-light.svg" alt="v" className="hidden dark:block pl-1"/>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Data Quality Agreements
                  </h5>
                </div>
              </div>

              {/*<div className="mt-7.5 flex items-center gap-5">*/}
              {/*  <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">*/}
              {/*    <p className="text-black dark:text-white font-semibold text-metatitle2">*/}
              {/*      01*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*  <div className="w-3/4">*/}
              {/*    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">*/}
              {/*      React 18, Next.js 13 and TypeScript*/}
              {/*    </h5>*/}
              {/*    <p>Ut ultricies lacus non fermentum ultrices.</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
