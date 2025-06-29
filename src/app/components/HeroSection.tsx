export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-white min-h-[80vh] flex items-stretch justify-start rounded-tr-[2.5rem] rounded-bl-[2.5rem] overflow-hidden px-0"
    >
      {/* Gradient blurred background */}
      <div className="absolute right-0 bottom-0 w-[70vw] h-[80vh] bg-gradient-to-br from-lime-200 via-lime-300 to-cyan-100 rounded-full blur-[90px] opacity-90 pointer-events-none z-0" />
      {/* Main Content */}
      <div className="flex flex-col items-start justify-center w-full max-w-5xl pl-4 xs:pl-8 sm:pl-16 md:pl-32 lg:pl-40 pr-2 sm:pr-4 py-8 sm:py-12 md:py-20 z-10">
        {/* Heading */}
        <h1
          className="text-[1.5rem] xs:text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[4.2rem] font-extrabold leading-[1.12] tracking-tight mb-2 text-left break-words"
          style={{
            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          <span className="text-black">Trusted</span>{" "}
          <span
            className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-2 rounded-xl inline-block align-middle mx-1 sm:mx-2"
            style={{
              fontFamily: "Poppins, Arial, Helvetica, sans-serif",
              fontWeight: 700,
            }}
          >
            Partner
          </span>{" "}
          <span className="text-black">for</span>
          <br className="hidden xs:block" />
          <span className="block mt-4 text-black">
            Your Website{" "}
            <span
              className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-2 rounded-xl inline-block align-middle ml-1 sm:ml-2"
              style={{
                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                fontWeight: 700,
              }}
            >
              Develop.
            </span>
          </span>
        </h1>
        {/* Subtitle */}
        <div className="mb-8 mt-6 w-full max-w-xl">
          <p
            className="text-base xs:text-lg md:text-xl lg:text-2xl text-black font-medium text-left mb-1"
            style={{ fontFamily: "inherit", letterSpacing: "0em" }}
          >
            Building the worlds best marketing websites for over a decade.
          </p>
          <p
            className="text-base xs:text-lg md:text-xl lg:text-2xl text-black font-medium text-left"
            style={{ fontFamily: "inherit", letterSpacing: "0em" }}
          >
            Your trusted partner for strategy, design, and dev.
          </p>
        </div>
        {/* Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 xs:px-8 xs:py-3 rounded-full border border-black bg-white text-black font-medium text-base xs:text-xl shadow hover:bg-black hover:text-white transition-all w-fit"
          style={{ fontFamily: "inherit" }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="inline align-middle mr-2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M12 8v8" />
          </svg>
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
