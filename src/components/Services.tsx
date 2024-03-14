import { CheckIcon } from "@heroicons/react/24/outline";
import { services } from "../constants/services.config";

const Services = () => {
  return (
    <div className="relative isolate bg-white mt-10 px-6 py-24 sm:py-8 lg:px-8">
      <div
        className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-headline to-highlight opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <p className="mt-0 text-4xl font-bold tracking-tight text-headline sm:text-5xl">
          Servicii si preturi
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-paragraph">
        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
        reprehenderit in aliquid fugiat dolorum voluptatibus.
      </p>
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-5 lg:max-w-6xl lg:grid-cols-3 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div className="flex flex-col">
              <h3
                id={service.id}
                className="text-base font-semibold leading-7 text-headline"
              >
                {service.name}
              </h3>
              <p className="mt-6 text-sm leading-7 text-paragraph">
                {service.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {service.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex gap-x-3 text-xs text-paragraph"
                  >
                    <CheckIcon
                      className="h-6 w-5 flex-none text-highlight"
                      aria-hidden="true"
                    />
                    <div className="grid grid-cols-2 gap-11 justify-center items-center text-xs text-paragraph">
                      {feature.text}
                      <span className="text-[14px] text-right text-headline">
                        {feature.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={service.image}
              alt="tier image"
              className="mt-4 self-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
