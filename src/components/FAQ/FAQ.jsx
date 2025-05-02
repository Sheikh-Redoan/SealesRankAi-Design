import React, { useState } from "react";
import Container from "../Container/Container";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      id: 1,
      question: "Why should I choose Humestic?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      id: 2,
      question: "I like your works, how do we start a project?",
      answer: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      id: 3,
      question: "What info is required to get a quotation?",
      answer: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
  ];

  return (
    <div className="pt-[134px] pb-[40px]">
      <Container>
        <div className="relative mb-[80px]">
          <h3 class="w-72 absolute top-0 left-0 justify-start text-sky-950 text-2xl font-normal font-Questrial">
            Frequently asked questions
          </h3>
          <h2 class="max-w-[920px] mx-auto self-stretch justify-start text-neutral-900 text-6xl font-normal font-Questrial leading-[72px]">
            Constant collaboration is how we roll. Let's see if we are a good
            fit.
          </h2>
        </div>
        <div>
          <div className="w-full flex flex-col gap-0">
            {accordionItems.map((item, index) => (
              <div key={item.id} className="w-full">
                <div
                  className={`w-full py-6 flex justify-between items-center gap-10 cursor-pointer hover:bg-gray-50 transition-colors ${
                    index !== accordionItems.length - 1
                      ? "border-b border-stone-300"
                      : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="w-10 text-stone-500 text-3xl font-Questrial">
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-neutral-900 text-4xl font-normal font-Questrial">
                      {item.question}
                    </h3>
                    {activeIndex === index && item.answer && (
                      <p className="mt-3 text-zinc-600 text-base font-light font-inter leading-snug">
                        {item.answer}
                      </p>
                    )}
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center">
                    <div
                      className={`w-7 h-[2.5px] bg-neutral-900 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-[2.5px] h-7 bg-neutral-900 transition-opacity duration-300 absolute ${
                        activeIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
