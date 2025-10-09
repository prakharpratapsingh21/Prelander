import React from "react";

export default function AutoSavingsPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Homeowners Driving Less Are <br /> Quietly Cutting 2025 Auto Bills —{" "}
          <br /> Before Holiday Costs Hit
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          Americans are juggling higher repair costs, tighter fuel budgets, and
          rate changes. If you log most of your car time mostly short local
          runs, grocery trips, or sit in the driveway, you may qualify for new
          savings — major carriers have updated 2025 pricing. Take a minute to
          check your eligibility — you may lower your monthly Auto premium
          significantly.
        </p>

        {/* Image */}
        <div className="my-8 flex justify-center">
          <img
            src="/public/sav.webp"
            alt="Decorated scarecrow and car"
            className="w-full max-w-2xl rounded-lg shadow-md"
          />
        </div>

        <p className="text-red-600 text-sm md:text-base font-medium">
          Early Halloween deals: smarter drivers are saving up to 40% and paying
          as little as $59/month.
        </p>

        <button
          onClick={() => window.open("#", "_blank")}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition"
        >
          Check Eligibility
        </button>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-center text-2xl font-bold mb-8">
          How Auto Program Helps Busy Drivers Cut Insurance Costs
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="font-semibold mb-2">Own More Than One Car?</h3>
            <p className="text-sm text-gray-600">
              Families with 2+ vehicles are slashing their bills. Don’t miss the
              multi-car savings loophole.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🧾</div>
            <h3 className="font-semibold mb-2">Get a Less-Than-Perfect Record?</h3>
            <p className="text-sm text-gray-600">
              Even with minor violations, our program helps drivers find the
              best rates possible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🏡</div>
            <h3 className="font-semibold mb-2">Working From Home or Driving Less?</h3>
            <p className="text-sm text-gray-600">
              Remote workers are overpaying for miles they don’t drive. Get
              rewarded for staying off the road.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Save up to $700 Today</h2>
        <p className="max-w-xl mx-auto text-gray-600 text-sm mb-6">
          Some users are reporting savings of $500, $600, even over $700 a year
          — just by using the simple tool to check deals they didn’t know
          existed. Why keep overpaying?
        </p>

        <ul className="text-gray-700 text-sm space-y-2 text-left max-w-lg mx-auto">
          <li>✅ An average driver has cut $492 from their premium — on the spot.</li>
          <li>
            ✅ A homeowner logging low-per-mile jobs? $585 in savings and one
            less headache.
          </li>
          <li>
            ✅ A simple one-minute form — drivers are calling it “a miracle”.
          </li>
          <li>✅ A retired couple with one car and no debt? $767 dropped like a rock.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-1">Trusted by Everyday Americans</h4>
            <p>
              Tens of thousands of drivers have found real auto insurance
              discounts they didn’t even know existed.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">No-Pressure Process</h4>
            <p>
              Thanks to online tools with no phone calls or commitments—just a
              quick check to see if you’re eligible for better deals within
              seconds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Getting Attention for a Reason</h4>
            <p>
              Drivers are sharing this program nationwide—and saving hundreds
              per year without changing their coverage.
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-400">
          © Daily Savings 2025 &nbsp;|&nbsp;{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
