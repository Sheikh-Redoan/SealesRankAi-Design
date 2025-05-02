import React from "react";
import Container from "../Container/Container";
import banner from "../../assets/banner.png";
import bannerRobo from "../../assets/bannerRobo.png";
import bannerIcon1 from "../../assets/bannerIcon1.png";
import bannerIcon2 from "../../assets/bannerIcon2.png";
const Banner = () => {
  return (
    <div className="pt-[208px] pb-[85px]">
      <Container>
        <div className="flex justify-between flex-wrap items-start">
          <div className="">
            <h1 className="w-[461px] mt-[18px] text-start text-neutral-900 text-7xl font-medium font-Manrope">
              Your AI-Powered Sales Coach
            </h1>
            <div className="flex gap-[68px] items-center mt-[26px] mb-[92px]">
              <img src={bannerRobo} alt="" />
              <p className="justify-start text-slate-950/70 text-xl font-medium font-Manrope leading-loose max-w-[346px] text-start">
                Get real-time coaching, script suggestions, and deal-closing
                strategies powered by advanced AI technology.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={banner} alt="Banner" />
            <div class="w-[467px] absolute top-[391px] left-[-200px] bg-white rounded-3xl shadow-[-9px_11px_38.099998474121094px_0px_rgba(0,0,0,0.05)] px-[30px] py-[50px] flex flex-col justify-start items-start">
              <div className="flex justify-between items-center w-full">
                <h3 className=" justify-start text-blue-950 text-5xl font-semibold font-Manrope">
                  721+
                </h3>
                <h3 className=" justify-start text-blue-950 text-5xl font-semibold font-Manrope">
                  1000+
                </h3>
              </div>
              <h4 className="mt-[23px] mb-[39px] text-start text-slate-950 text-3xl font-semibold font-Manrope">
                Growth is our priority.
              </h4>
              <p className=" justify-start text-slate-950/70 text-base font-medium font-Poppins leading-7 text-start">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[55px]">
          <div className="flex justify-center items-center">
            <img src={bannerIcon1} alt="" />
            <div>
                <h4 className="justify-start text-slate-950 text-4xl font-semibold font-Manrope leading-10">2000+</h4>
                <p className="text-slate-950/70 text-xl font-medium font-Manrope leading-loose">Your protection</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={bannerIcon2} alt="" />
            <div>
                <h4 className="justify-start text-slate-950 text-4xl font-semibold font-Manrope leading-10">7001+</h4>
                <p className="text-slate-950/70 text-xl font-medium font-Manrope leading-loose">Provide tailored</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
