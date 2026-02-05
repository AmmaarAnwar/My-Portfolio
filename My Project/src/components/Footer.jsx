import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/AmmaarAnwar",
      ariaLabel: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/ammar-anwar-761849253",
      ariaLabel: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/ammaranwr_/",
      ariaLabel: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/mero.anwar",
      ariaLabel: "Facebook",
    },
  ];

  return (
    <footer className="py-12 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">
              <span className="text-cyan-600 dark:text-cyan-400">Port</span>
              folio
            </h3>
            <p className="text-slate-600 dark:text-gray-400">
              Web{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                Designer{" "}
              </span>
              &{" "}
              <span className="text-purple-600 dark:text-purple-500">
                Developer
              </span>
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Every line of code is an opportunity to create something
              meaningful.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              I believe in the power of technology to solve real problems and
              make life better.
            </p>
          </div>

          <div className="flex mb-6 space-x-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.ariaLabel}
                className="p-2 text-slate-500 dark:text-slate-400 transition-colors duration-300 rounded-full bg-slate-200 dark:bg-slate-900 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-8 border-slate-300 dark:border-slate-900" />

        <div className="text-sm text-center text-slate-500">
          <p>© {currentYear} Ammar Anwar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
