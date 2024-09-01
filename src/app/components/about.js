'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import CountUp from 'react-countup';

export default function About(){
    return(
        <section className="relative md:py-24 py-16" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src='/images/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-full shadow dark:shadow-gray-700" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-red-500 text-2xl font-semibold mb-0 block"><CountUp className="counter-value text-6xl font-semibold" start={0} end={15}/>+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-red-500 text-sm font-semibold uppercase mb-2">Who Are We ?</h6>
                            <h3 className="font-semibold text-2xl leading-normal mb-4">Your Gateway to Ancient Wisdom</h3>

                            <p className="text-slate-400 max-w-xl mb-6">
                                At Zi Wei Feng Shui, we are a team of dedicated feng shui masters and astrologers with a passion for helping individuals and businesses navigate life's complexities through the profound insights of Zi Wei Dou Shu.<br/><br/>With years of experience in Chinese metaphysics, we blend traditional wisdom with modern application, offering personalized guidance that empowers our clients to make informed decisions and achieve harmony in all aspects of life.
                            </p>

                            <Link href="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-red-500 text-white">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}