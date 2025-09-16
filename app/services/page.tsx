import Link from "next/link";

const services = [
  {
    title: "Practice Health Checkup",
    slug: "practice-health-checkup",
    description: "A monthly report combining financial, operational, and marketing data to give you an honest assessment of your practice. Identify trends, track performance, and get actionable insights without hiring expensive consultants."
  },
  {
    title: "Reputation Management",
    slug: "reputation-management",
    description: "Review management service focused on Google reviews to fuel growth. Includes an innovative team rewards program: 50% of fees pooled toward giveaways for practices hitting stretch goals."
  },
  {
    title: "Templates & Guides",
    slug: "templates",
    description: "A library of downloadable templates and guides across Finance, Marketing, and Operations. Use these resources to instantly improve your practice processes."
  },
  {
    title: "Team Engagement",
    slug: "team-engagement",
    description: "Affordable ways to retain great people. Start with employee gifts via the Snappy platform triggered by achievements, and look ahead to better benefits through collective bargaining."
  }
];

export default function ServicesPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <ul className="space-y-6">
        {services.map(service => (
          <li key={service.slug} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link href={service.slug === "templates" ? "/templates" : `/services/${service.slug}`}>
              <span className="text-teal-600 font-medium hover:underline">
                Learn more &#8594;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}