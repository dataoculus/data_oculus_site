"use client";
import React, {useState} from "react";
import Image from "next/image";

import {TypeAnimation} from "react-type-animation";
import Link from "next/link";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex lg:items-center lg:gap-4.5 xl:gap-18">
                        <div className="pl-32 md:w-1/2 ">
                            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                                🔥 Datadog for data !
                            </h4>
                            <h1 className="text-black dark:text-white text-xl xl:text-hero font-bold pr-10 ">
                                Real-Time,
                            </h1>
                            <h1 className="text-black dark:text-white text-xl xl:text-hero font-bold pr-10 ">
                                Multi-Dimensional,
                            </h1>
                            <h1 className="text-black dark:text-white text-xl xl:text-hero font-bold pr-10 ">
                                Data Observability,
                            </h1>
                            <h1 className="text-black dark:text-white text-xl xl:text-hero font-bold pr-10 ">
                                <span className="text-base xl:text-3xl"> with </span> Data Contracts
                            </h1>
                            <h1 className="text-black dark:text-white text-lg xl:text-hero font-bold mb-5 ">
                                <span className="text-base xl:text-3xl"> for </span>
                                <span
                                    className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                                    <TypeAnimation
                                        sequence={['Data Scientist', 500, 'Data Engineers', 500, 'Data Stewards', 500, 'Product Managers', 500, 'Business Analyst', 500, 'Everyone !', 500]}
                                        // style={{ fontSize: '2em' }}
                                        // repeat={Infinity}
                                    />
                                </span>
                            </h1>
                            {/*<h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">*/}
                            {/*    Realtime*/}
                            {/*    /!*<span*!/*/}
                            {/*    /!*    className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">*!/*/}
                            {/*    /!*    Realtime*!/*/}
                            {/*    /!*</span>*!/*/}
                            {/*    ,*/}
                            {/*    /!*<span*!/*/}
                            {/*    /!*className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">*!/*/}
                            {/*    /!*    Multi-Facet*!/*/}
                            {/*    /!*</span>*!/*/}
                            {/*    Multi-Dimensional Data Observability for*/}
                            {/*    <span*/}
                            {/*        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">*/}
                            {/*        <TypeAnimation*/}
                            {/*            sequence={['Data Scientist', 500, 'Data Engineers', 500, 'Data Stewards', 500, 'Product Managers', 500, 'Everyone !', 500]}*/}
                            {/*            // style={{ fontSize: '2em' }}*/}
                            {/*            // repeat={Infinity}*/}
                            {/*        />*/}
                            {/*    </span>*/}
                            {/*</h1>*/}
                            {/*<p>*/}
                            {/*    description*/}
                            {/*</p>*/}

                            {/*<div className="mt-10">*/}
                            {/*    <form onSubmit={handleSubmit}>*/}
                            {/*        <div className="flex flex-wrap gap-5">*/}
                            {/*            <input*/}
                            {/*                value={email}*/}
                            {/*                onChange={(e) => setEmail(e.target.value)}*/}
                            {/*                type="text"*/}
                            {/*                placeholder="Enter your email address"*/}
                            {/*                className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"*/}
                            {/*            />*/}
                            {/*            <button*/}
                            {/*                aria-label="signup to newsletter"*/}
                            {/*                className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"*/}
                            {/*            >*/}
                            {/*                Join !*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}

                            {/*    <p className="text-black dark:text-white mt-5">*/}
                            {/*        Try for free, no credit card required.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>

                        <div className="animate_right md:w-1/2 hidden lg:block pr-10">
                            <div className="relative 2xl:-mr-7.5">
                                <Image
                                    src="/images/shape/shape-01.png"
                                    alt="shape"
                                    width={46}
                                    height={246}
                                    className="absolute -left-11.5 top-0"
                                />
                                <Image
                                    src="/images/shape/shape-02.svg"
                                    alt="shape"
                                    width={36.9}
                                    height={36.7}
                                    className="absolute right-0 bottom-0 z-10"
                                />
                                <Image
                                    src="/images/shape/shape-03.svg"
                                    alt="shape"
                                    width={21.64}
                                    height={21.66}
                                    className="absolute -right-6.5 bottom-0 z-1"
                                />
                                <div className=" relative aspect-[700/444] w-full">
                                    <Image
                                        className="dark:hidden shadow-solid-l"
                                        src="/images/hero/dataoculus-summary-light.png"
                                        alt="Hero"
                                        fill
                                    />
                                    <Image
                                        className="hidden dark:block shadow-solid-l"
                                        src="/images/hero/dataoculus-summary-dark.png"
                                        alt="Hero"
                                        fill
                                    />
                                </div>
                            </div>

                            <p className="text-black dark:text-white mt-5 text-right text-xs">
                                Datadog is trademark of <a href="https://www.datadoghq.com/" >Datadog Inc </a>
                            </p>

                            <div className="mt-5 content-center">
                                {/*<form onSubmit={handleSubmit}>*/}
                                {/*    <div className="flex flex-wrap gap-5">*/}
                                {/*        <input*/}
                                {/*            value={email}*/}
                                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                                {/*            type="text"*/}
                                {/*            placeholder="Enter your email address"*/}
                                {/*            className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"*/}
                                {/*        />*/}
                                {/*        <button*/}
                                {/*            aria-label="signup to newsletter"*/}
                                {/*            className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"*/}
                                {/*        >*/}
                                {/*            Join !*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</form>*/}

                                <Link
                                    href="https://public.dataoculus.app"
                                    className="flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
                                >
                                    Try Demo on a public dataset & join a wait-list 🔥
                                </Link>

                                {/*<p className="text-black font-bold underline dark:text-white mt-5">*/}
                                {/*    Try Demo on a public dataset and join a waitlist !*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
