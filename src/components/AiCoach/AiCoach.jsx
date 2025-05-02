import React from "react";
import Container from "../Container/Container";
import { FaArrowUpLong } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegClipboard } from "react-icons/fa6";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { BsClipboard2DataFill } from "react-icons/bs";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const AiCoach = () => {
  return (
    <div className="bg-gradient-to-r from-sky-900 to-blue-700 pt-[37px] pb-[71px]">
      <Container>
        <h3 className=" text-amber-200 text-2xl font-normal font-Questrial mb-[20px]">
          Live Ai Coach
        </h3>
        <h2 className="text-white text-6xl font-normal font-Questrial leading-[72px] mb-[60px]">
          Take a Suggestion Coaching{" "}
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <div className="w-[787px] h-[577px] relative bg-zinc-100 rounded-xl outline-stone-300 overflow-hidden">
              <div className="w-full pt-4 absolute bg-white flex flex-col gap-6">
                <div className="pl-8 flex flex-col gap-2.5">
                  <div className="flex items-center gap-4">
                    <h2 className="text-zinc-900 text-lg font-bold font-Manrope leading-snug">
                      AI Sales Coach
                    </h2>
                  </div>
                </div>
                <div className="w-full h-px bg-neutral-400/40"></div>
              </div>

              <div className="w-[calc(100%-40px)] left-[20px] top-[86px] absolute flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-zinc-300 rounded-full"></div>
                  <div className="w-[calc(100%-76px)] px-6 py-2 bg-white rounded-lg flex items-center">
                    <p className="text-neutral-900 text-lg font-lato leading-loose">
                      Hello! I'm your AI sales coach. How can I help you improve
                      your sales performance today?
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 pt-4 left-0 bottom-0 absolute bg-white w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-wrap justify-center gap-3">
                    <button className="px-3 py-2 bg-blue-950/10 hover:bg-blue-950/20 rounded-full transition-colors">
                      <span className="text-blue-950 text-sm font-geist">
                        How do I handle objections?
                      </span>
                    </button>
                    <button className="px-3 py-2 bg-blue-950/10 hover:bg-blue-950/20 rounded-full transition-colors">
                      <span className="text-blue-950 text-sm font-geist">
                        Give me a cold email template
                      </span>
                    </button>
                    <button className="px-3 py-2 bg-blue-950/10 hover:bg-blue-950/20 rounded-full transition-colors">
                      <span className="text-blue-950 text-sm font-geist">
                        Closing techniques
                      </span>
                    </button>
                    <button className="px-3 py-2 bg-blue-950/10 hover:bg-blue-950/20 rounded-full transition-colors">
                      <span className="text-blue-950 text-sm font-geist">
                        Negotiation tips
                      </span>
                    </button>
                  </div>

                  <div className="flex justify-center gap-3 w-full">
                    <div className="w-[600px] px-6 py-4 bg-white/25 rounded outline outline-gray-200">
                      <input
                        type="text"
                        placeholder="Ask anything you need"
                        className="w-full bg-transparent text-neutral-400 text-sm font-Manrope focus:outline-none focus:text-neutral-900 tracking-wide"
                      />
                    </div>
                    <button className="p-3.5 bg-blue-950 hover:bg-blue-900 rounded-lg flex items-center gap-3 transition-colors">
                      <span className="text-white text-lg font-medium font-geist">
                        Send
                      </span>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <FaArrowUpLong className="text-white" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-full h-px bg-neutral-400/40"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-[24px] rounded-[57px] outline-offset-[-1px] outline-neutral-600/10 backdrop-blur-lg flex flex-col justify-center items-center gap-10 bg-white max-md:flex-row">
              <TfiReload className="text-[24px] font-bold " />
              <BiLike className="text-[24px] font-bold " />
              <BiDislike className="text-[24px] font-bold " />
              <FaRegClipboard className="text-[24px] font-bold " />
              <AiOutlineSound className="text-[24px] font-bold " />
            </div>
          </div>
          <div>
            <div className="w-[535px] p-7 bg-zinc-100 rounded-[20px] flex flex-col gap-5">
              <h2 className="text-zinc-800 text-3xl font-bold font-Manrope">
                Real-time Analysis
              </h2>
              <div className="w-full p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 bg-zinc-300 rounded-full"></div>
                    <div className="absolute rounded-full">
                      <IoIosCheckmarkCircle className="text-green-600 rounded-full text-[24px]" />
                    </div>
                  </div>
                  <h3 className="text-gray-900 text-lg font-semibold font-Manrope">
                    Confidence Level
                  </h3>
                </div>
                <div className="w-full flex items-center gap-2">
                  <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-lime-600 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span className="text-gray-500 text-xs font-inter">60%</span>
                </div>
              </div>
              <div className="w-full p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <VscGraphLine className="font-semibold text-[24px] text-blue-500" />
                  <h3 className="text-gray-900 text-lg font-semibold font-Manrope">
                    Improvement
                  </h3>
                </div>
                <p className="text-neutral-400 text-lg font-lato">
                  85% improvement in objection handling
                </p>
              </div>
            </div>
            <div className="w-[535px] p-7 bg-zinc-100 rounded-[20px] flex flex-col gap-5 mt-[24px]">
              <h2 className="text-zinc-800 text-3xl font-bold font-Manrope">
                Quick Actions
              </h2>
              <div className="w-full flex gap-5">
                <button className="flex-1 p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2 hover:bg-zinc-50 transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="w-8 h-8 relative">
                      <BsClipboard2DataFill className="text-[32px] font-semibold text-blue-900"  />

                    </div>
                    <h3 className="text-gray-900 text-lg font-semibold font-Manrope">
                      Generate Script
                    </h3>
                  </div>
                </button>
                <button className="flex-1 p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2 hover:bg-zinc-50 transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="w-8 h-8 relative">
                    <IoChatbubbleEllipsesSharp  className="text-[32px] font-semibold text-blue-900"   />

                    </div>
                    <h3 className="text-gray-900 text-lg font-semibold font-Manrope">
                      Practice Pitch
                    </h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AiCoach;
