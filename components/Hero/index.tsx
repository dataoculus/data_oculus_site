"use client";
import React, {useState} from "react";
import Image from "next/image";

import {TypeAnimation} from "react-type-animation";
import TextTransition, { presets } from 'react-text-transition';
import Link from "next/link";
import {Button, ConfigProvider, Space} from "antd";
import { createStyles } from 'antd-style';
// import {AntDesignOutlined} from "@ant-design/icons";


const Hero = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const personas = ['Data Engineers', 'Data Scientist', 'Data Operations', 'Business Analyst', 'Everyone !'];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const useStyle = createStyles(({prefixCls, css}) => ({
        linearGradientButton: css`
            &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
                > span {
                    position: relative;
                }

                &::before {
                    content: '';
                    background: linear-gradient(135deg, #6253e1, #04befe);
                    position: absolute;
                    inset: -1px;
                    opacity: 1;
                    transition: all 0.3s;
                    border-radius: inherit;
                }

                &:hover::before {
                    opacity: 0;
                }
            }
        `,
    }));

    const { styles } = useStyle();

    return (
        <>
            <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex lg:items-center lg:gap-4.5 xl:gap-18">
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
                                        style={{borderRadius: '1rem'}}
                                    />
                                    <Image
                                        className="hidden dark:block shadow-solid-l"
                                        src="/images/hero/dataoculus-summary-dark.png"
                                        alt="Hero"
                                        fill
                                        style={{borderRadius: '1rem'}}
                                    />
                                </div>
                            </div>

                            {/* <p className="text-black dark:text-white mt-5 text-right text-xs">
                                Datadog is trademark of <a href="https://www.datadoghq.com/" >Datadog Inc </a>
                            </p> */}

                            <div className="mt-5  flex float-right mr-50">
                                {/*<Link*/}
                                {/*    href="https://cal.com/data-oculus"*/}
                                {/*    className="flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"*/}
                                {/*>*/}
                                {/*    Setup Demo 🔥*/}
                                {/*</Link>*/}
                                {/*<div className="w-20">*/}

                                {/*</div>*/}

                                {/*<Link*/}
                                {/*    href="https://public.dataoculus.app"*/}
                                {/*    className="flex items-center justify-center bg-meta hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"*/}
                                {/*>*/}
                                {/*    Public Data Observability*/}
                                {/*</Link>*/}
                                <ConfigProvider
                                    button={{
                                        className: styles.linearGradientButton,
                                    }}
                                >
                                <Button href="https://public.dataoculus.app/dataset/GCS.kaggle.life-expectancy-who-updated.Life-Expectancy-Data-Updated/summary" type="primary" size="large" >
                                    Public Dataset Observability
                                </Button>
                                </ConfigProvider>

                            </div>
                        </div>

                        <div className="pl-8 md:w-1/2 ">
                            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                                🔥 Real-Time & End to End
                            </h4>
                            {/*<h4 className="text-black dark:text-white text-xl xl:text-2xl font-medium pr-10 ">*/}
                            {/*    */}
                            {/*</h4>*/}
                            {/*<h1 className="text-black dark:text-white text-xl xl:text-hero font-bold pr-10 ">*/}
                            {/*    Shift-left (at source),*/}
                            {/*</h1>*/}
                            <br/>
                            <h1 className="pl-12 text-black dark:text-white text-xl xl:text-4xl font-bold pr-10 ">
                                Data
                                <span
                                    className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                                    {/*<TypeAnimation*/}
                                    {/*    style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}*/}
                                    {/*    sequence={[*/}
                                    {/*        `Data Profiling\nData Quality\nData Contract\nData Anomaly\nData Observability !`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces*/}
                                    {/*        1000,*/}
                                    {/*        '',*/}
                                    {/*    ]}*/}
                                    {/*    speed={2}*/}
                                    {/*    deletionSpeed={5}*/}
                                    {/*    repeat={3}*/}
                                    {/*/>*/}

                                    <TypeAnimation
                                        sequence={[
                                            'Profiling', 3000,
                                            'Quality', 3000,
                                            'Contract', 3000,
                                            'Anomaly', 3000,
                                            'Observability!', 5000]}
                                        // style={{ fontSize: '2em' }}
                                        repeat={2}
                                    />
                                </span>
                            </h1>

                            <br/>
                            <h1 className="text-black dark:text-white text-base xl:text-4xl font-bold mb-5 text-center">
                                <span className="text-base xl:text-2xl"> for </span>
                                {/*<span*/}
                                {/*    className="inline-block text-3xl relative before:absolute before:bottom-2.5 before:left-0 before:w-full  ml-2.5 ">*/}
                                {/*    Everyone !*/}
                                {/*</span>*/}
                                <span
                                    className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                                    <TextTransition
                                        springConfig={presets.wobbly}
                                        // inline={true}
                                        // direction={"down"}
                                    >
                                        {personas[index % personas.length]}
                                    </TextTransition>

                                    {/*<TypeAnimation*/}
                                    {/*    sequence={[*/}
                                    {/*        'Data Scientist', 5000,*/}
                                    {/*        'Data Engineers', 5000,*/}
                                    {/*        'Data Operations', 5000,*/}
                                    {/*        'Product Managers', 5000,*/}
                                    {/*        'Business Analyst', 5000,*/}
                                    {/*        'Everyone !', 5000]}*/}
                                    {/*    // style={{ fontSize: '2em' }}*/}
                                    {/*    // repeat={Infinity}*/}
                                    {/*/>*/}
                                </span>
                            </h1>
                            {/*<br/>*/}
                            {/*<div className="mt-5  flex float-right mr-50">*/}
                            {/*    /!*<Link*!/*/}
                            {/*    /!*    href="https://cal.com/data-oculus"*!/*/}
                            {/*    /!*    className="flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"*!/*/}
                            {/*    /!*>*!/*/}
                            {/*    /!*    Setup Demo 🔥*!/*/}
                            {/*    /!*</Link>*!/*/}
                            {/*    /!*<div className="w-20">*!/*/}

                            {/*    /!*</div>*!/*/}

                            {/*    /!*<Link*!/*/}
                            {/*    /!*    href="https://public.dataoculus.app"*!/*/}
                            {/*    /!*    className="flex items-center justify-center bg-meta hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"*!/*/}
                            {/*    /!*>*!/*/}
                            {/*    /!*    Public Data Observability*!/*/}
                            {/*    /!*</Link>*!/*/}
                            {/*    <ConfigProvider*/}
                            {/*        button={{*/}
                            {/*            className: styles.linearGradientButton,*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <Button href="https://public.dataoculus.app/dataset/GCS.kaggle.life-expectancy-who-updated.Life-Expectancy-Data-Updated/summary" type="primary" size="large" >*/}
                            {/*            Explore Public Dataset Demo*/}
                            {/*        </Button>*/}
                            {/*    </ConfigProvider>*/}

                            {/*</div>*/}
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
