const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SocialIcon = ({ name }) => {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
    className: "bg-[#0A66C2] hover:bg-[#0958a8]",
  },
  {
    label: "X",
    href: "https://x.com",
    icon: "x",
    className: "bg-white text-black hover:bg-white/90",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
    className: "bg-[#1877F2] hover:bg-[#1467d4]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: "youtube",
    className: "bg-[#FF0000] hover:bg-[#e60000]",
  },
];

const ZapShiftLogo = () => (
  <div className="flex items-center justify-center gap-2.5 sm:gap-3">
    <svg
      className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20 2L35.66 11v18L20 38 4.34 29V11L20 2z" fill="#B8E62E" />
      <path
        d="M14 12h8.5c2.5 0 4 1.4 4 3.4 0 1.5-.8 2.6-2.1 3.1l2.6 5.5h-3.4l-2.3-4.8H17v4.8h-3V12zm3 2.6v3.6h5.2c.9 0 1.4-.5 1.4-1.3 0-.8-.5-1.3-1.4-1.3H17z"
        fill="#0a0a0a"
      />
    </svg>
    <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
      ZapShift
    </span>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-auto  bg-black text-white ">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <ZapShiftLogo />

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:max-w-2xl sm:text-[0.9375rem] sm:leading-7">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div
          className="my-7 w-full max-w-2xl border-t border-dashed border-white/20 sm:my-8"
          aria-hidden
        />

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 md:gap-x-9">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/90 transition-colors duration-200 hover:text-[#B8E62E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8E62E] sm:text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-7 w-full max-w-2xl border-t border-dashed border-white/20 sm:mt-8"
          aria-hidden
        />

        <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          {socialLinks.map(({ label, href, icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8E62E] sm:h-11 sm:w-11 ${className}`}
            >
              <SocialIcon name={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
