"use client";

export default function WhyChooseKlyro5() {
  const features = [
    {
      title: "Performance-Driven Development",
      desc: "We build blazing-fast, optimized websites and platforms that scale effortlessly.",
    },
    {
      title: "Design That Converts",
      desc: "Modern, intuitive UI/UX that engages users and drives real results.",
    },
    {
      title: "Full-Service Expertise",
      desc: "From branding to full-stack development, we handle it all in-house.",
    },
    {
      title: "User-First Approach",
      desc: "We design around your users, ensuring every experience is smooth and effective.",
    },
    {
      title: "Custom-Built Solutions",
      desc: "No templates — only tailored, unique solutions built to match your brand.",
    },
    {
      title: "Results You Can Measure",
      desc: "Our work is focused on generating growth, conversions, and long-term ROI.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Why Choose <span className="text-blue-600">Klyro5</span>?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
