const templatesByCategory: Record<string, { title: string; description: string; file: string; }[]> = {
  "Finance": [
    { title: "Budget Planner", description: "Plan your practice's budget with monthly and annual projections.", file: "/templates/budget-planner.pdf" },
    { title: "P&L Statement Template", description: "A Profit & Loss spreadsheet template to track income and expenses.", file: "/templates/profit-loss.xlsx" }
  ],
  "Marketing": [
    { title: "Social Media Calendar", description: "Schedule and organize your social media posts for consistent marketing.", file: "/templates/social-media-calendar.xlsx" },
    { title: "Patient Testimonial Guide", description: "Template for collecting and using patient testimonials ethically.", file: "/templates/testimonial-guide.pdf" }
  ],
  "Operations": [
    { title: "Clinic Opening Checklist", description: "Step-by-step checklist for opening a new practice or location.", file: "/templates/clinic-opening-checklist.pdf" },
    { title: "Staff Scheduling Template", description: "Weekly staff schedule template to manage team shifts.", file: "/templates/staff-schedule.xlsx" }
  ]
};

export default function TemplatesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Templates & Guides</h1>
      {Object.entries(templatesByCategory).map(([category, templates]) => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map(template => (
              <div key={template.title} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">{template.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{template.description}</p>
                <a
                  href={template.file}
                  download
                  className="inline-block mt-auto text-teal-600 font-medium hover:underline"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}