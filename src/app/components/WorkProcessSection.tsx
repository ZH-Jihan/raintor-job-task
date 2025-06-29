const process = [
  {
    title: "Discovery",
    desc: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    highlight: false,
  },
  {
    title: "Strategy",
    desc: "Every end-to-end project of ours begins with a tESpoke pre-build strateu. From brand ID consultation to in-depth coxle reviews we're here to set the stage for success.",
    highlight: true,
  },
  {
    title: "Design",
    desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    highlight: false,
  },
  {
    title: "Build",
    desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    highlight: false,
  },
];

export default function WorkProcessSection() {
  return (
    <section className="relative bg-black text-white py-12 px-2 md:px-8 rounded-3xl overflow-hidden max-w-6xl mx-auto my-8 shadow-xl">
      {/* Top Row: Button and Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 z-10 relative gap-6 md:gap-0">
        {/* Left: Button */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <button className="flex items-center gap-2 border border-white rounded-full px-5 py-2 text-white text-base font-medium hover:bg-white hover:text-black transition-all mb-4 md:mb-0">
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
            Work Process
          </button>
        </div>
        {/* Center: Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-center w-full"
          style={{ fontFamily: "inherit", letterSpacing: "-0.02em" }}
        >
          My Work Process
        </h2>
        <div className="w-32" /> {/* Spacer for alignment */}
      </div>
      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        {/* Discovery */}
        <div className="bg-zinc-900 rounded-2xl p-7 flex flex-col justify-between shadow-lg min-h-[220px]">
          <div className="flex items-center justify-between mb-4">
            <span
              className="bg-lime-100 text-black font-bold px-6 py-1 rounded-full text-lg"
              style={{ fontFamily: "inherit" }}
            >
              Discovery
            </span>
            <a
              href="#"
              className="flex items-center gap-1 text-white text-base font-medium underline underline-offset-4 hover:text-lime-200 transition-all"
            >
              <span>Read More</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <p
            className="text-base text-gray-200 font-normal"
            style={{ fontFamily: "inherit" }}
          >
            {process[0].desc}
          </p>
        </div>
        {/* Strategy (highlighted, rotated) */}
        <div
          className="bg-lime-200 text-black rounded-2xl p-7 flex flex-col justify-between shadow-lg min-h-[220px] md:-rotate-3"
          style={{ zIndex: 2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="bg-black text-white font-bold px-6 py-1 rounded-full text-lg"
              style={{ fontFamily: "inherit" }}
            >
              Strategy
            </span>
            <a
              href="#"
              className="flex items-center gap-1 text-black text-base font-medium underline underline-offset-4 hover:text-lime-700 transition-all"
            >
              <span>Read More</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <p
            className="text-base font-normal"
            style={{ fontFamily: "inherit" }}
          >
            {process[1].desc}
          </p>
        </div>
        {/* Design */}
        <div className="bg-zinc-900 rounded-2xl p-7 flex flex-col justify-between shadow-lg min-h-[220px]">
          <div className="flex items-center justify-between mb-4">
            <span
              className="bg-lime-100 text-black font-bold px-6 py-1 rounded-full text-lg"
              style={{ fontFamily: "inherit" }}
            >
              Design
            </span>
            <a
              href="#"
              className="flex items-center gap-1 text-white text-base font-medium underline underline-offset-4 hover:text-lime-200 transition-all"
            >
              <span>Read More</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <p
            className="text-base text-gray-200 font-normal"
            style={{ fontFamily: "inherit" }}
          >
            {process[2].desc}
          </p>
        </div>
        {/* Build */}
        <div className="bg-zinc-900 rounded-2xl p-7 flex flex-col justify-between shadow-lg min-h-[220px]">
          <div className="flex items-center justify-between mb-4">
            <span
              className="bg-lime-100 text-black font-bold px-6 py-1 rounded-full text-lg"
              style={{ fontFamily: "inherit" }}
            >
              Build
            </span>
            <a
              href="#"
              className="flex items-center gap-1 text-white text-base font-medium underline underline-offset-4 hover:text-lime-200 transition-all"
            >
              <span>Read More</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <p
            className="text-base text-gray-200 font-normal"
            style={{ fontFamily: "inherit" }}
          >
            {process[3].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
