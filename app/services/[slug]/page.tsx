import { notFound } from 'next/navigation';

interface ServiceDetail {
  title: string;
  headline: string;
  description: string;
  offer?: string;
  bullets: string[];
  price?: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "practice-health-checkup": {
    title: "Practice Health Checkup",
    headline: "Understand your practice. Grow with data.",
    description: "Receive a monthly report that combines your financial, operational, and marketing data for an honest assessment of your practice. Get insights usually only available through pricey consultants or CPAs, so you can make informed decisions.",
    offer: "We offer a free one-time checkup if your practice participates in our podcast review (with final approval on what's shared).",
    bullets: [
      "Track performance across key metrics",
      "Evaluate vendors and optimize expenses",
      "Provider and team productivity metrics"
    ],
    price: "$100/month"
  },
  "reputation-management": {
    title: "Reputation Management",
    headline: "Reviews that fuel growth.",
    description: "Focus on generating and leveraging Google reviews to boost your practice's reputation. Our approach is not just cheaper than big-agency solutions, but also more innovative.",
    offer: "50% of your monthly fee is pooled into a rewards fund for giveaways to practices that hit stretch goals – turning reviews into team excitement!",
    bullets: [
      "Comprehensive review generation and monitoring",
      "Experiments to maximize positive feedback",
      "Team incentive program tied to review goals"
    ],
    price: "$200/month"
  },
  "team-engagement": {
    title: "Team Engagement",
    headline: "Retain great people, without breaking the bank.",
    description: "Keep your team motivated with thoughtful rewards and recognition. We start by integrating with the Snappy platform to send gifts to employees when monthly or quarterly targets are met.",
    offer: "All logistics are handled via Snappy, making it easy and affordable. In the future, we aim to offer improved benefits like better health insurance and training through collective bargaining for member practices.",
    bullets: [
      "Automated gift rewards for hitting targets",
      "Affordable options that delight your team",
      "Roadmap to enhanced benefits as a group"
    ],
    price: "Starting at no cost apart from gifts (varies)"
  }
};

interface ServicePageProps {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = serviceDetails[params.slug];
  if (!service) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <h2 className="text-xl font-semibold text-teal-700 mb-6">{service.headline}</h2>
      <p className="text-gray-800 mb-4">
        {service.description}
      </p>
      {service.offer && (
        <p className="text-gray-800 mb-4">{service.offer}</p>
      )}
      <ul className="list-disc pl-5 mb-4">
        {service.bullets.map((point, idx) => (
          <li key={idx} className="text-gray-800 mb-2">{point}</li>
        ))}
      </ul>
      {service.price && (
        <p className="font-medium">Fee: {service.price}</p>
      )}
    </main>
  );
}