import React from "react";
import Container from "../Container/Container";
import CourseImage1 from "../../assets/CourseImage1.jpg";
import CourseImage2 from "../../assets/CourseImage2.jpg";
const Courses = () => {
  return (
    <div className="pt-[49px] pb-[30px]">
      <Container>
        <h3 class="justify-start text-neutral-800 text-5xl font-semibold font-Manrope leading-[72px]">
          Our Courses
        </h3>
        <div className="flex justify-between mb-[48px]">
          <p className='"self-stretch justify-start text-zinc-600 text-lg font-normal font-Manrope leading-relaxed max-w-[1029px]'>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className="p-3.5 bg-blue-950 hover:bg-blue-900 rounded-lg flex items-center gap-3 transition-colors text-white text-lg font-medium font-geist fobnt-Manrope">
            View All
          </button>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="max-w-[705px] p-12 bg-zinc-100 rounded-2xl border border-zinc-100 flex flex-col gap-7">
            <img
              className="w-full h-96 rounded-lg object-cover"
              src={CourseImage1}
              alt="Web Design Fundamentals Course"
            />
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2.5">
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100">
                    <span className="text-neutral-600 text-lg font-medium font-manrope">
                      4 Weeks
                    </span>
                  </div>
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100">
                    <span className="text-neutral-600 text-lg font-medium font-manrope">
                      Beginner
                    </span>
                  </div>
                </div>
                <span className="text-neutral-800 text-xl font-medium font-manrope">
                  By John Smith
                </span>
              </div>
              <div className="w-full flex flex-col gap-3.5">
                <h3 className="text-neutral-800 text-2xl font-semibold font-manrope leading-9">
                  Web Design Fundamentals
                </h3>
                <p className="text-neutral-600 text-lg font-normal font-manrope leading-relaxed">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full px-6 py-4 bg-blue-950 hover:bg-blue-900 rounded-lg border border-zinc-100 flex justify-center items-center gap-2 transition-colors">
              <span className="text-white text-lg font-medium font-be-vietnam-pro leading-relaxed">
                Get it Now
              </span>
            </button>
          </div>
          <div className="max-w-[705px] p-12 bg-zinc-100 rounded-2xl border border-zinc-100 flex flex-col gap-7">
            <img
              className="w-full h-96 rounded-lg object-cover"
              src={CourseImage2}
              alt="Web Design Fundamentals Course"
            />
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2.5">
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100">
                    <span className="text-neutral-600 text-lg font-medium font-manrope">
                      4 Weeks
                    </span>
                  </div>
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100">
                    <span className="text-neutral-600 text-lg font-medium font-manrope">
                      Beginner
                    </span>
                  </div>
                </div>
                <span className="text-neutral-800 text-xl font-medium font-manrope">
                  By John Smith
                </span>
              </div>
              <div className="w-full flex flex-col gap-3.5">
                <h3 className="text-neutral-800 text-2xl font-semibold font-manrope leading-9">
                  Web Design Fundamentals
                </h3>
                <p className="text-neutral-600 text-lg font-normal font-manrope leading-relaxed">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full px-6 py-4 bg-blue-950 hover:bg-blue-900 rounded-lg border border-zinc-100 flex justify-center items-center gap-2 transition-colors">
              <span className="text-white text-lg font-medium font-be-vietnam-pro leading-relaxed">
                Get it Now
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
