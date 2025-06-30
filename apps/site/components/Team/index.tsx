"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

const TeamInfo = () => {
  return (
      <>
        <section>
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top text-center mx-auto">
              <SectionHeader
                  headerInfo={{
                    title: `Company`,
                    subtitle: `Data Oculus Team`,
                    description: `DataOculus wants to revolutionalize data reliability via proactive monitoring, prevention and auto remediation. Our mission is to make this entire problem easily solvable by purely configuration without much dev effort.`,
                  }}
              />
            </div>
            {/* <!-- Section Title End --> */}
          </div>

          <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
          >
            {/* <!-- Slider main container --> */}
            <div className="swiper testimonial-01 pb-22.5 mb-20">
              {/* <!-- Additional required wrapper --> */}
              {/*<Swiper*/}
              {/*    spaceBetween={50}*/}
              {/*    slidesPerView={2}*/}
              {/*    autoplay={{*/}
              {/*      delay: 2500,*/}
              {/*      disableOnInteraction: false,*/}
              {/*    }}*/}
              {/*    pagination={{*/}
              {/*      clickable: true,*/}
              {/*    }}*/}
              {/*    modules={[Autoplay, Pagination]}*/}
              {/*    breakpoints={{*/}
              {/*      // when window width is >= 640px*/}
              {/*      0: {*/}
              {/*        slidesPerView: 1,*/}
              {/*      },*/}
              {/*      // when window width is >= 768px*/}
              {/*      768: {*/}
              {/*        slidesPerView: 2,*/}
              {/*      },*/}
              {/*    }}*/}
              {/*>*/}
                <SwiperSlide className="pt-5">
                  <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-24 pt-7.5 ">
                    <div className="flex border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                      <Image
                          width={200}
                          height={200}
                          className=""
                          src="/images/team/jaysen.png"
                          // src="./images/user/user-01.svg"
                          alt="User"
                      />
                      <div className="pl-20">
                        <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                          Jay Sen
                        </h4>
                        <p>Co-Founder & CEO</p>
                        <p className="max-w-2xl">
                          Jay is a CEO of data oculus, leading the team to solve data reliability issues for the enterprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="pt-5">
                  <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-24 pt-7.5 ">
                    <div className="flex border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                      <Image
                          width={200}
                          height={200}
                          className=""
                          src="/images/team/deval.png"
                          alt="User"
                      />
                      <div className="pl-20">
                        <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                          Jay Sen
                        </h4>
                        <p>Co-Founder</p>
                        <p className="max-w-2xl">
                          Deval is a co-founder and senior software engineer leading control plane of the data oculus platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="pt-5">
                  <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-24 pt-7.5 ">
                    <div className="flex border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                      <Image
                          width={200}
                          height={200}
                          className=""
                          src="/images/team/naitik.jpeg"
                          alt="User"
                      />
                      <div className="pl-20">
                        <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                          Jay Sen
                        </h4>
                        <p>Founding Engineer</p>
                        <p className="max-w-2xl">
                          Jay is a Data infrastructure expert with 15+ years of experience across enterprise and startup companies, he is strong believer in open-source and high-scale systems. He has first hand experience on solving large scale data related problems. He also invest and advices to startups and is obsessed with solving data chaos across teams, systems, and AI eco system.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              {/*</Swiper>*/}
            </div>
          </motion.div>
        </section>
      </>
  );
};

export default TeamInfo;