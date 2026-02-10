import React from 'react';
import Image from 'next/image';

export const FounderLetter: React.FC = () => {
  return (
    <section className="pt-8 pb-8 px-4 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-black tracking-tight leading-tight">
          Founder Letter<br />
          {/* <span className="block">I want to make it easier.</span> */}
        </h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
          Building a financially successful practice is harder than ever. Being a great clinician isn&apos;t enough anymore. To succeed today, you also have to be a great CEO.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
          Great CEOs rely on data. Data shows you how your practice is really doing. It helps you make better decisions, set impactful goals, and improve systems without being in the weeds every day. It&apos;s the key to building your dream practice and finally having a business that works for you, not because of you.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
          Think about professional athletes. The best ones track everything: training, nutrition, sleep. They do this because guessing doesn&apos;t lead to consistent results or top-level performance. As a practice owner, you&apos;re a professional too. The same rule applies.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
          But most practice owners don&apos;t even know their core business numbers. That&apos;s understandable. Data can feel overwhelming. It&apos;s hard to know what to track, how to track it, and how to turn it into action. With so many other responsibilities, there&apos;s rarely time to figure it all out. So owners end up guessing and flying blind.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
          At Practices.fyi, you get the kind of support an executive team would provide. We handle the data, show you what&apos;s working, what&apos;s not, and guide you on exactly what to do next. We don&apos;t hand you spreadsheets and walk away. Your time is better spent acting on insights, not trying to learn analytics.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
          We turn your data into clarity, direction, and confidence so you can build a practice you&apos;re proud of.
          </p>

          <div className="mt-6">
            <Image
              src="/signature_1.png"
              alt="Sean&apos;s signature"
              width={240}
              height={112}
              className="h-28 w-60 -ml-8 -mt-2 -mb-10"
            />
          </div>

          <dl className="mt-2">
            <dt className="text-lg text-gray-900">
              <strong>Sean</strong><br />{' '}
              {/* <a
                href="mailto:sean@practices.fyi"
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                sean@practices.fyi
              </a> */}
            </dt>
            <dd className="text-gray-600 italic mt-1">
              {/* <em>Founder &amp; CEO</em> */}
              <em>Founder</em>
            </dd>
          </dl>
        </div>
      </article>
    </section>
  );
};
