"use client";

const reasons = [
  {
    icon: "📈",
    title: "Proven Track Record",
    desc: "Successfully managed projects ranging from small offices to large-scale commercial complexes.",
  },
  {
    icon: "🛡️",
    title: "Cost Savings",
    desc: "My expertise in cost management and negotiation reduces expenses without compromising quality.",
  },
  {
    icon: "⏱️",
    title: "Time Efficiency",
    desc: "Streamlined processes and proactive problem-solving keep your project on schedule.",
  },
  {
    icon: "🔗",
    title: "Industry Connections",
    desc: "Strong relationships with top contractors, architects, and suppliers ensure the best resources for your project.",
  },
  {
    icon: "🎯",
    title: "Tailored Solutions",
    desc: "I customize my services to align with your specific goals and project requirements.",
  },
  {
    icon: "💬",
    title: "Transparent Communication",
    desc: "Regular updates and clear reporting keep you informed at every stage.",
  },
  {
    icon: "😌",
    title: "Peace of Mind",
    desc: "My comprehensive approach minimizes stress and maximizes results.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-12 sm:py-20 bg-blue-50 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 sm:mb-12 text-center">Why Hire Me? <span className="align-middle">⭐</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadein w-full max-w-sm"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-4xl mb-3 transition-transform duration-200 hover:scale-125">{item.icon}</div>
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