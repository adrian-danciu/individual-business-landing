import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import item5 from "../assets/item_5.png";

const Contact = () => {
  return (
    <>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-headline">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-paragraph">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-highlight"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-highlight text-lg font-semibold leading-6 text-headline"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-highlight"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-highlight text-lg font-semibold leading-6 text-headline"
                      href="mailto:hello@example.com"
                    >
                      ana.marinescu.psiholog@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={item5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
