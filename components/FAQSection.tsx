"use client";
import React, { useState } from 'react';
import { faqData, faqTabs } from '../data/faqData';

export function FAQSection() {
  const [activeTab, setActiveTab] = useState('comp');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative bg-white box-border flex justify-center z-0 -my-9 px-5">
      <div className="[align-items:normal] box-border gap-x-5 flex flex-col max-w-[1000px] gap-y-5 w-full mx-0 py-14 md:items-start md:gap-x-20 md:flex-row md:gap-y-20 md:w-auto md:mx-20 md:py-40">
        <div className="items-center box-border gap-x-3 flex flex-col max-w-none gap-y-3 w-auto md:[align-items:normal] md:max-w-xs md:w-[33.3333%]">
          <img alt="Frequently asked questions" src="https://c.animaapp.com/mem94eikV9Okn1/assets/103.webp" className="text-transparent aspect-[auto_65_/_54] box-border max-w-full w-[65px]" />
          <h2 className="text-4xl font-medium box-border tracking-[-1.08px] leading-[33px] text-center font-medium_4efa9e md:text-5xl md:tracking-[-1.44px] md:leading-[43px] md:text-left">Frequently asked questions</h2>
          <p className="box-border leading-[22px] text-center md:text-left"></p>
        </div>
        <div className="sticky backdrop-blur-lg box-border gap-x-4 hidden gap-y-4 w-full z-20 overflow-auto p-4 rounded-[20px] top-20">
          {faqTabs.map((tab) => (
            <button
              key={tab.id}
              className={tab.id === activeTab ? "font-medium bg-teal-400 tracking-[-0.32px] text-center text-nowrap px-4 py-2 rounded-[50px] font-medium_4efa9e" : "font-medium bg-stone-50 tracking-[-0.32px] text-center text-nowrap px-4 py-2 rounded-[50px] font-medium_4efa9e"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ul className="box-border gap-x-2 flex flex-col list-none gap-y-2 w-auto mt-0 pl-0 md:w-[66.6667%] md:mt-16">
          {faqData.map((faq) => (
            <li key={faq.id} className="relative box-border flex flex-col text-left">
              <button
                className="bg-transparent block p-0"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="relative text-lg font-medium bg-stone-50 box-border leading-7 pl-5 pr-14 py-5 rounded-[20px] font-medium_4efa9e md:leading-[18px]">
                  {faq.question}
                  <img src="https://c.animaapp.com/mem94eikV9Okn1/assets/icon-16.svg" alt="Icon" className="absolute box-border h-[21px] leading-7 translate-y-[-10.5px] w-[21px] z-20 right-5 top-2/4 md:leading-[18px]" />
                </h3>
              </button>
              {openFAQ === faq.id && (
                <div className="box-border gap-x-5 flex flex-col tracking-[-0.32px] max-h-0 overflow-x-auto overflow-y-hidden gap-y-5 px-[15px]">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}