import React from 'react';

export const FounderLetter: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Running a practice is hard.<br />
          <span className="block">I want to make it easier.</span>
        </h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Running a healthcare practice is one of the hardest things you can do. Unlike other industries, you’re juggling multiple full-time jobs being both the clinician and the CEO.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed">
            The journey is lonely. There's a lack of accessible support, and there's an overwhelming number of vendors claiming they can help -- if you're willing to pay a lot.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The kicker... far too many of these vendors either overcharge or simply don’t deliver on what they promise. <strong>This is what I get frustrated by, and it’s exactly why I want to change things.</strong>
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I started Practices.fyi because <strong>I believe that practice owners and their teams deserve a partner who is fair, transparent, and genuinely interested in their success.</strong> My goal is to take what I’ve learned helping owners build their dream practices and provide tools, knowledge, and support without hidden agendas, and at a fair price whenever it applies.
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