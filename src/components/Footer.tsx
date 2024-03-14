import { navigationFooter } from "../constants/navbar.config";

const Footer = () => {
  return (
    <>
      <footer className="bg-backgroundBlue">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {navigationFooter.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-md leading-6 text-paragraph hover:text-highlight"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {navigationFooter.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-paragraph hover:text-highlight"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Ana Marinescu Psiholog.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
