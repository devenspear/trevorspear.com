"use client";

const expertise = [
  {
    icon: "📅",
    title: "Project Management",
    desc: "Overseeing projects from inception to completion, ensuring timelines and budgets are met.",
  },
  {
    icon: "💰",
    title: "Cost Estimation",
    desc: "Providing accurate cost projections to optimize financial planning.",
  },
  {
    icon: "⚠️",
    title: "Risk Assessment",
    desc: "Identifying and mitigating potential risks to keep your project on track.",
  },
  {
    icon: "📜",
    title: "Regulatory Compliance",
    desc: "Navigating complex building codes and regulations to ensure full compliance.",
  },
  {
    icon: "🌿",
    title: "Sustainability Consulting",
    desc: "Implementing eco-friendly practices to enhance project value and environmental impact.",
  },
  {
    icon: "🤝",
    title: "Contract Negotiation",
    desc: "Securing favorable terms with contractors and suppliers.",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    desc: "Ensuring the highest standards of construction quality and safety.",
  },
];

export default function Expertise() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 sm:mb-12 text-center">My Expertise <span className="align-middle">🔨</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadein w-full max-w-sm"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </section>
  );
} 