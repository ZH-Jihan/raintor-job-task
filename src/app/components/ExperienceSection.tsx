const companiesRow1 = [
  {
    name: "CSSWINNER",
    logo: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="inline align-middle mr-2"
      >
        <rect
          x="4"
          y="4"
          width="10"
          height="10"
          rx="2"
          fill="none"
          stroke="#222"
          strokeWidth="2"
        />
      </svg>
    ),
    color: "bg-white text-black",
    rotate: "-rotate-[10deg]",
    italic: false,
    bold: true,
    left: 0,
    z: "z-10",
  },
  {
    name: "/thoughtworks",
    logo: null,
    color: "bg-white text-black",
    rotate: "rotate-[2deg]",
    italic: true,
    bold: true,
    left: 210,
    z: "z-20",
  },
  {
    name: "AUTODESK",
    logo: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="inline align-middle mr-2"
      >
        <rect x="3" y="7" width="12" height="4" rx="1" fill="#222" />
      </svg>
    ),
    color: "bg-white text-black",
    rotate: "-rotate-[5deg]",
    italic: false,
    bold: true,
    left: 420,
    z: "z-10",
  },
];
const companiesRow2 = [
  {
    name: "awwwards.",
    logo: null,
    color: "bg-black text-white",
    rotate: "-rotate-[20deg]",
    italic: true,
    bold: true,
    left: 120,
    z: "z-30",
  },
  {
    name: "facebook",
    logo: null,
    color: "bg-white text-black",
    rotate: "rotate-[8deg]",
    italic: false,
    bold: true,
    left: 340,
    z: "z-20",
  },
  {
    name: "CSSDesignAwards",
    logo: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="inline align-middle mr-2"
      >
        <rect x="4" y="4" width="10" height="10" rx="2" fill="#222" />
      </svg>
    ),
    color: "bg-white text-black",
    rotate: "rotate-[15deg]",
    italic: false,
    bold: true,
    left: 540,
    z: "z-10",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-white py-16 px-2 md:px-8 overflow-x-clip">
      {/* More prominent blurred green/yellow gradient at top left */}
      <div className="absolute left-[-12vw] top-[-12vh] w-[70vw] h-[32vh] bg-gradient-to-br from-lime-200 via-lime-300 to-cyan-100 rounded-full blur-[100px] opacity-90 pointer-events-none z-0" />
      {/* Top Row: About button */}
      <div className="flex justify-end items-center mb-4 z-10 relative">
        <button
          className="flex items-center gap-2 border border-black rounded-full px-6 py-2 text-black text-base font-medium bg-white hover:bg-black hover:text-white transition-all shadow-sm"
          style={{ fontFamily: "inherit" }}
        >
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
          About
        </button>
      </div>
      {/* Heading */}
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2
          className="text-center font-extrabold leading-tight mb-2"
          style={{
            fontFamily: "inherit",
            fontSize: "clamp(2.2rem,7vw,4.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          I&apos;ve been{" "}
          <span
            className="bg-black text-white px-6 py-2 rounded-xl inline-block align-middle mx-2 text-[1.1em]"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Developing
          </span>
          <br />
          Websites since{" "}
          <span
            className="bg-black text-white px-6 py-2 rounded-xl inline-block align-middle mx-2 text-[1.1em]"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            2013
          </span>
        </h2>
      </div>
      {/* Subtitle */}
      <div className="max-w-3xl mx-auto">
        <p
          className="text-black text-base md:text-lg text-center mb-10 font-medium tracking-tight"
          style={{ fontFamily: "inherit", letterSpacing: "0em" }}
        >
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
      </div>
      {/* Companies Row */}
      <div className="flex flex-col md:flex-row items-end justify-between max-w-6xl mx-auto mt-8 gap-8 md:gap-0">
        {/* Left: Label */}
        <div className="w-full md:w-auto mb-6 md:mb-0 flex flex-col items-start justify-end">
          <span
            className="block text-black text-2xl md:text-3xl font-extrabold tracking-widest mb-2 md:mb-0 uppercase leading-tight"
            style={{
              letterSpacing: "0.08em",
              fontFamily: "inherit",
              lineHeight: 1.1,
            }}
          >
            PREVIOUSLY
            <br />
            WORKED ON
          </span>
        </div>
        {/* Right: Company cards, two rows, overlapping */}
        <div className="relative w-full md:w-[800px] h-[160px] flex flex-col items-center justify-center">
          {/* Row 1 */}
          <div className="absolute left-0 top-[70px] w-full flex flex-row justify-start items-center gap-0 md:gap-0">
            {companiesRow1.map((company) => (
              <div
                key={company.name}
                className={`border border-black rounded-[2.2rem] px-8 py-4 shadow-md select-none transition-transform duration-300 absolute ${company.color} ${company.rotate} ${company.z}`}
                style={{
                  minWidth: 200,
                  minHeight: 56,
                  left: company.left,
                  top: 0,
                  fontStyle: company.italic ? "italic" : "normal",
                  fontWeight: company.bold ? 700 : 400,
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.25rem",
                }}
              >
                {company.logo}
                {company.name}
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="absolute left-0 top-0 w-full flex flex-row justify-start items-center gap-0 md:gap-0">
            {companiesRow2.map((company) => (
              <div
                key={company.name}
                className={`border border-black rounded-[2.2rem] px-8 py-4 shadow-md select-none transition-transform duration-300 absolute ${company.color} ${company.rotate} ${company.z}`}
                style={{
                  minWidth: 200,
                  minHeight: 56,
                  left: company.left,
                  top: 0,
                  fontStyle: company.italic ? "italic" : "normal",
                  fontWeight: company.bold ? 700 : 400,
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.25rem",
                }}
              >
                {company.logo}
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
