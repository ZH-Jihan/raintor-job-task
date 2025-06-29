export default function Footer() {
  return (
    <footer
      className="relative w-full bg-black text-white py-12 px-2 sm:px-8 mt-8 rounded-[2.5rem]"
      aria-label="Footer"
      style={{
        fontFamily: "Poppins, Arial, Helvetica, sans-serif",
        borderRadius: "2.5rem",
      }}
    >
      <div className="flex flex-col min-h-[340px] w-full">
        {/* Top Row: Logo and Heading */}
        <div className="flex flex-row justify-between items-start w-full">
          {/* Left: Logo */}
          <div className="flex flex-col items-start w-full md:w-1/4 pt-2 mb-4 md:mb-0">
            <span
              className="font-extrabold text-lime-400 text-2xl md:text-3xl mb-8 md:mb-0"
              style={{ letterSpacing: "-0.04em" }}
            >
              DEVLOP.ME
            </span>
          </div>
          {/* Center: Heading */}
          <div className="flex-1 flex flex-col items-center justify-center w-full md:w-1/2 mb-0">
            <h2
              className="text-4xl md:text-6xl font-extrabold text-center mt-2 mb-0"
              style={{
                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              As you can
            </h2>
          </div>
          {/* Spacer for right side */}
          <div className="w-1/4" />
        </div>
        {/* Centered Columns Below Heading */}
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <div className="flex flex-col sm:flex-row gap-10 md:gap-20 w-full max-w-3xl mx-auto justify-center items-start text-left">
            {/* Say hello */}
            <div className="flex flex-col gap-1 min-w-[140px] text-left">
              <span className="text-gray-400 text-base mb-1 font-normal">
                Say hello
              </span>
              <a
                href="mailto:HELLO@DEVLOP.ME.COM"
                className="text-white text-base font-normal"
              >
                HELLO@DEVLOP.ME.COM
              </a>
              <a
                href="mailto:MAHBUBUL@ME.COM"
                className="text-white text-base font-normal"
              >
                MAHBUBUL@ME.COM
              </a>
              <span className="text-gray-400 text-base mt-3 mb-1 font-normal">
                Call
              </span>
              <span className="text-white text-base font-normal">
                +784549 4981 00
              </span>
              <span className="text-white text-base font-normal">
                +8845 0100 211
              </span>
            </div>
            {/* Menu */}
            <div className="flex flex-col gap-1 min-w-[100px] text-left">
              <span className="text-gray-400 text-base mb-1 font-normal">
                Menu
              </span>
              <a href="#home" className="text-white text-base font-normal">
                HOME
              </a>
              <a href="#about" className="text-white text-base font-normal">
                ABOUT
              </a>
              <a href="#portfolio" className="text-white text-base font-normal">
                PORTFOLIO
              </a>
              <a href="#blog" className="text-white text-base font-normal">
                BLOG
              </a>
            </div>
            {/* Social */}
            <div className="flex flex-col gap-1 min-w-[100px] text-left">
              <span className="text-gray-400 text-base mb-1 font-normal">
                Social
              </span>
              <a
                href="#"
                className="text-white text-base font-normal uppercase"
              >
                TWITTER
              </a>
              <a
                href="#"
                className="text-white text-base font-normal uppercase"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="text-white text-base font-normal uppercase"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                className="text-white text-base font-normal uppercase"
              >
                BEHANCE
              </a>
              <a
                href="#"
                className="text-white text-base font-normal uppercase"
              >
                DRIBBBLE
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-800 pt-6 mt-6 w-full">
          <span className="font-bold text-white text-base self-start md:self-auto">
            BESNIK
          </span>
          <span
            className="text-gray-400 text-base text-center flex-1"
            style={{ fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}
          >
            © devlop.me 2022
          </span>
          <span
            className="text-gray-400 text-base self-end md:self-auto"
            style={{ fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}
          >
            PRIVACY - TERMS
          </span>
        </div>
      </div>
    </footer>
  );
}
