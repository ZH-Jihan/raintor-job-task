export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-white overflow-hidden"
    >
      {/* Blurred green/yellow gradient at bottom right */}
      <div className="absolute right-0 bottom-0 w-2/3 h-1/2 bg-gradient-to-br from-lime-200 via-lime-300 to-cyan-100 rounded-full blur-3xl opacity-80 pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start relative z-10">
        {/* Left Side */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col justify-center">
          {/* Top: Contact Button */}
          <button className="flex items-center gap-2 border border-black rounded-full px-5 py-2 text-black text-base font-medium bg-white hover:bg-black hover:text-white transition-all mb-8 w-fit">
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
            Contact
          </button>
          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-left"
            style={{ fontFamily: "inherit", letterSpacing: "-0.02em" }}
          >
            Interested in{" "}
            <span
              className="bg-black text-white px-4 py-1 rounded-lg inline-block mx-2"
              style={{ fontWeight: 700 }}
            >
              work
            </span>{" "}
            together?
          </h2>
          {/* Subtitle */}
          <p
            className="text-black text-base md:text-lg mb-8 font-medium text-left max-w-lg"
            style={{ fontFamily: "inherit", letterSpacing: "0em" }}
          >
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          {/* Schedule a Call Button */}
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-black bg-white text-black font-medium text-lg shadow hover:bg-lime-100 transition-all w-fit mb-2"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="inline align-middle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8v8" />
            </svg>
            Schedule a Call
          </a>
        </div>
        {/* Right Side: Contact Form Card */}
        <form
          className="flex-1 bg-black rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-6"
          aria-label="Contact form"
        >
          <label className="block">
            <span className="block text-base font-medium mb-1 text-white">
              Enter your name
            </span>
            <input
              type="text"
              className="w-full bg-transparent border-0 border-b border-lime-200 focus:border-lime-400 text-white placeholder-gray-400 py-2 mb-4 focus:outline-none"
              placeholder=""
              required
            />
          </label>
          <label className="block">
            <span className="block text-base font-medium mb-1 text-white">
              Your email address
            </span>
            <input
              type="email"
              className="w-full bg-transparent border-0 border-b border-lime-200 focus:border-lime-400 text-white placeholder-gray-400 py-2 mb-4 focus:outline-none"
              placeholder=""
              required
            />
          </label>
          <label className="block">
            <span className="block text-base font-medium mb-1 text-white">
              Describe your project
            </span>
            <textarea
              className="w-full bg-transparent border-0 border-b border-lime-200 focus:border-lime-400 text-white placeholder-gray-400 py-2 mb-4 focus:outline-none"
              rows={2}
              placeholder=""
              required
            />
          </label>
          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 mt-2 mb-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-all"
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
                <path d="M8 12h8M12 8v8" />
              </svg>
              Send
            </button>
            <span className="text-white">or</span>
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-all"
            >
              Contact me
            </button>
          </div>
          {/* Social & Username */}
          <div className="flex flex-row items-center gap-3 mt-4">
            <span className="text-white text-base">@williamrey</span>
            <span className="w-6 h-px bg-gray-400 mx-1"></span>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white text-xl hover:text-lime-200 transition"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 12 8.1c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.87a4.07 4.07 0 0 0-.55 2.06c0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.52v.05c0 1.98 1.41 3.63 3.28 4a4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white text-xl hover:text-lime-200 transition"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3.2" />
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white text-xl hover:text-lime-200 transition"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 2.1A2.1 2.1 0 0 1 19.1 4.2v15.6A2.1 2.1 0 0 1 17 21.9H7A2.1 2.1 0 0 1 4.9 19.8V4.2A2.1 2.1 0 0 1 7 2.1h10zm-2.1 4.2h-1.4c-.3 0-.5.2-.5.5v1.4c0 .3.2.5.5.5h1.4c.3 0 .5-.2.5-.5V6.8c0-.3-.2-.5-.5-.5zm-2.9 2.1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
