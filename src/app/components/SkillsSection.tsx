const skills = [
  {
    title: "HTML & CSS",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <ellipse
          cx="28"
          cy="28"
          rx="24"
          ry="10"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="10"
          ry="24"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="18"
          ry="7"
          transform="rotate(45 28 28)"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="3.5"
          fill="#C6FF4A"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    ),
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.",
  },
  {
    title: "Javascript",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <ellipse
          cx="28"
          cy="28"
          rx="24"
          ry="10"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="10"
          ry="24"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="18"
          ry="7"
          transform="rotate(45 28 28)"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="3.5"
          fill="#C6FF4A"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    ),
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.",
  },
  {
    title: "Webflow",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <ellipse
          cx="28"
          cy="28"
          rx="24"
          ry="10"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="10"
          ry="24"
          stroke="#fff"
          strokeWidth="2"
        />
        <ellipse
          cx="28"
          cy="28"
          rx="18"
          ry="7"
          transform="rotate(45 28 28)"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="3.5"
          fill="#C6FF4A"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    ),
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative bg-black text-white py-12 px-2 md:px-8 rounded-3xl overflow-hidden max-w-6xl mx-auto my-8 shadow-xl">
      {/* Blurred green/yellow gradient at bottom right */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/3 bg-gradient-to-br from-lime-300 via-lime-200 to-transparent rounded-full blur-3xl opacity-80 pointer-events-none z-0" />
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 z-10 relative gap-6 md:gap-0">
        {/* Left: Button and Heading */}
        <div className="flex flex-col items-start gap-6 w-full md:w-auto">
          <button className="flex items-center gap-2 border border-white rounded-full px-5 py-2 text-white text-base font-medium hover:bg-white hover:text-black transition-all">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="inline align-middle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M12 16l4-4-4-4" />
            </svg>
            Why Choose me
          </button>
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-left"
            style={{ fontFamily: "inherit", letterSpacing: "-0.02em" }}
          >
            My Extensive
            <br />
            List of Skills
          </h2>
        </div>
        {/* Right: Subtitle and Arrows */}
        <div className="flex flex-col items-end w-full md:w-auto mt-6 md:mt-0">
          <div className="text-base md:text-lg text-gray-200 font-medium mb-2 text-right max-w-xs">
            Building the worlds best marketing Your
            <br />
            trusted partner for strategy, design, and dev.
          </div>
          <div className="w-32 h-px bg-gray-400 mb-3" />
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 8l-4 4 4 4" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9 8l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Skills Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center z-10 relative">
        {skills.map((skill, idx) => (
          <div
            key={skill.title}
            className={`bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 rounded-2xl p-8 flex flex-col items-center w-full md:w-1/3 shadow-lg border border-zinc-700 transition-transform duration-300 animate-fade-in ${
              idx === 1 ? "md:-rotate-3" : ""
            }`}
            tabIndex={0}
            role="region"
            aria-label={skill.title}
            style={{ minHeight: 260 }}
          >
            {skill.icon}
            <h3 className="mt-2 text-2xl font-bold text-white text-center">
              {skill.title}
            </h3>
            <p className="mt-3 text-base text-gray-300 text-center">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
