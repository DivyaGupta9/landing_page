/* eslint-disable no-unused-vars */
import { IconBook, IconStore, IconTools } from "../utils/utilsSvg";

function WhyRentpromptsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Rentprompts?
        </h2>
        <p className="text-lg text-gray-600">
          Marketplace –{" "}
          <span className="font-semibold text-indigo-600">
            Learn → Create → Sell
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        <div className="rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
          <Card
            title="Learn"
            desc="Join the academy, explore AI, stay ahead."
            icon={IconBook}
          />
        </div>
        <div className="rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
          <Card
            title="Create"
            desc="Build your own AI apps without code."
            icon={IconTools}
          />
        </div>
        <div className="rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
          <Card
            title="Sell"
            desc="List your apps, grow your income."
            icon={IconStore}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className=" bg-gradient-to-br from-[#3730A3] to-[#9b4bc3] hover:bg-indigo-700 text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Start Selling Today
        </button>
      </div>
    </section>
  );
}
export default WhyRentpromptsSection;

/* ---------- Card component ---------- */
function Card({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white h-56 rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition">
      <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  );
}
