import React from 'react';

export const FounderLetter: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
          Building a practice is hard.<br />
          <span className="block">I want to make it easier.</span>
        </h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Building your own healthcare practice is one of the hardest — yet most rewarding — things you can do.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The journey can feel lonely, with limited support and too many moving parts to manage at once. 
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
          That&apos;s why I started Practices.fyi — <strong>to be a partner that genuinely cares about you and to make success more accessible.</strong>
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is simple: <strong>create tools that help practices thrive — while giving back to practice owners and their teams, more than any other company.</strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I invite you to explore our tools and join me in creating a world where practice ownership is easier and less lonely. We&apos;re honored to have you here and excited to be part of your journey.
          </p>

          <div className="mt-6">
            <img
              src="/signature_1.png"
              alt="Sean&apos;s signature"
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
