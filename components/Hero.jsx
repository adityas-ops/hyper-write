import Link from "next/link";
import React from "react";
import {ResizableDiv} from "./ResizableDiv";
// import ResizableDiv from "./ResizableDiv";

function Hero() {
  return (
    <>
      <div className=" bg-[url(/images/light-accent.png)]  hero-image  ">
        <div className=" w-full h-[300vh] relative flex flex-col   items-center">
          <div className="py-[4.5rem]  px-[3%]">
            <div className="mb-[5rem] max-w-[48rem]">
              <div className=" mb-[1rem] text-center font-[600] ">
                Personal Assistant - Alpha v0.01
              </div>
              <div className="mb-[1.5rem] ">
                <h1 class=" text-[5rem] font-[700] leading-[1.2] text-center tracking-[-2px]">
                  Your <span class="text-[#3A6FF8]">assistant</span> for
                  everyday tasks
                </h1>
              </div>
              <div className=" mx-auto max-w-[35rem] text-center">
                <p class=" text-[1.25rem] leading-[1.4]  opacity-80">
                  An AI agent designed to handle tasks from booking flights to
                  conducting in-depth research, and everything in between.
                </p>
              </div>
              <div className=" mt-[3rem] w-full h-full">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 justify-center items-center">
                    <div className="">
                    <Link href="/" className=" py-[1rem] px-[1.75rem] mx-2  bg-[linear-gradient(#3a6ff8,#3052cd)]  rounded-[0.6rem] font-[600]">
                        Try it
                    </Link>
                    </div>
                    <div>
                    <Link
                    href="/"
                    className=" rounded-[0.6rem] bg-[#fcfbf5cc] mx-2 py-[1rem] px-[1.75rem] text-black font-[600]  ">
                        Get Extenstion
                    </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex  justify-center">
          <ResizableDiv/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
