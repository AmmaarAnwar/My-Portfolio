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
    <footer className="py-12 text-white bg-dark">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">
              <span className="text-primary-500">Port</span>folio
            </h3>
            <p className="text-gray-400">
              Web <span className="text-primary-500">Designer </span>&{" "}
              <span className="text-secondary-500">Developer</span>
            </p>
            <p className="text-gray-400">
              Every line of code is an opportunity to create something
              meaningful.
            </p>
            <p className="text-gray-400">
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
                className="p-2 text-gray-400 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="text-sm text-center text-gray-400">
          <p>© {currentYear} Ammar Anwar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
