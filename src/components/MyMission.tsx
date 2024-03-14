import { values } from "../constants/values.config";

const MyMission = () => {
  return (
    <div className="bg-background pb-10">
      <div className="mt-0 lg:mt-2 xl:mx-auto xl:max-w-7xl xl:px-10">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      <div className="mx-auto mt-5 max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-headline sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-paragraph">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pb-5 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-headline">{value.name}</dt>
              <dd className="mt-1 text-paragraph">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default MyMission;
