import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-amber-900 py-32 flex flex-col items-center space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-white">
          Order food from handpicked cuisine experts
        </h1>
        <p className="text-white">
          Currently available to members with an exclusive referral code.
        </p>
      </div>
      <form className="bg-white flex items-center py-2 rounded-sm w-1/2 divide-x">
        <div className="w-1/3 flex items-end justify-between px-6 py-2 cursor-pointer">
          <p>Category</p>
          <Image src="/icons/chevron-down.svg" width={16} height={16} />
        </div>
        <div className="w-2/3 flex items-center justify-between px-6">
          <input
            type="text"
            placeholder="Search for restaurent, cuisine or a dish"
            className="flex-1 py-2 border-none outline-none"
          />
          {/* <Image src="./icons/search.svg" layout="fill"/> */}
          <Image src="/icons/search.svg" width={20} height={20} />
        </div>
      </form>
      <div className="flex items-center space-x-2">
        {["All", "Restaurants", "Cuisines", "Dishes"].map((item, index) => (
          <div
            className="bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1 py-2 px-4 rounded-sm cursor-pointer"
            key={index}>
            <Image
              src="/icons/search.svg"
              width={16}
              height={16}
              className="invert"
            />
            <p>Dinner food in veg</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
