import React from 'react';

export const FounderLetter: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Building a practice is hard.<br />
          <span className="block">I want to make it easier.</span>
        </h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Building your own healthcare practice is one of the hardest things you can choose to do.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed">
            The journey is lonely. There's a lack of accessible support, and there's an overwhelming number of vendors claiming they can help.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The kicker... far too many of these vendors either overcharge or simply don’t deliver on what they promise. <strong>I've seen too many owners</strong>, including my friends, <strong>get taken advantage of and that drives me crazy. It's why I want to change things.</strong>
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I started Practices.fyi because <strong>I believe that practice owners and their teams deserve a partner that genuinely cares about them and their success.</strong> My goal is to provide useful tools for practices at a fair price and give more back to owners and their teams than any other company.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
           I invite you to explore our tools and join me on this mission to make practice ownership easier and less lonely. We’re honored to have you here and excited to be part of your journey.
          </p>

          <div className="mt-6">
            <img
              src="/signature_1.png"
              alt="Sean's signature"
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