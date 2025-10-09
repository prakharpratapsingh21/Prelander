import React from "react";

export default function LoanLandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Header Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Americans Facing Bigger Fall Bills Are Locking In <br />
          This <span className="text-red-600">2025 Loan Option</span> Before Holiday Season Hits
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-4">
          If your <span className="font-semibold">heating bills</span>, <span className="font-semibold">credit cards</span>, and <span className="font-semibold">travel costs</span> are all rising — you're not alone.
          <br />
          With a <span className="font-semibold">Fed rate cut</span>, a <span className="font-semibold">government shutdown</span>, and <span className="font-semibold">cooler months</span> ahead, many Americans are finding budgets stretched thin.
          <br />
          This fall, thousands are looking in <span className="font-semibold">fixed-rate personal loans</span> to replace high-interest balances with one steady payment before the holidays.
          <br />
          No credit score impact. No pressure. Just smarter options for the season.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 max-w-3xl w-full">
        <img
          src="/public/preimg.webp"
          alt="Loan Option"
          className="w-full h-auto rounded shadow"
        />
      </div>

      {/* CTA Button */}
      <div className="mt-6 w-full max-w-3xl">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded">
          See My Options
        </button>
      </div>

      {/* Info Section */}
      <div className="mt-8 max-w-3xl w-full">
        <h2 className="font-bold text-base md:text-lg">
          Millions Are Feeling the Fall Money Crunch
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Most people don’t realize they could qualify for lower fixed-rate personal loans, even with average credit — helping them prepare for:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Holiday spending (Halloween, Thanksgiving, Black Friday, travel)</li>
          <li>Higher utility bills as temperatures drop</li>
          <li>Expect continued challenges (new health premiums or deductibles)</li>
          <li>Student loan or personal payments resuming this quarter</li>
        </ul>

        <h3 className="mt-6 font-bold text-base md:text-lg">Why This Program Works Right Now</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Timely: Fed rates just shifted, and many lenders are offering updated fixed-rate options.</li>
          <li>Predictable: One steady payment through winter means no more guessing which bill to skip.</li>
          <li>Fast & Private: Check offers online in minutes — no calls, no pressure.</li>
          <li>Smart: Choose total loan cover lower rates; keep payments on autopilot through the holidays.</li>
        </ul>
      </div>

      {/* Loan Amount Buttons */}
      <div className="mt-10 max-w-3xl w-full">
        <h4 className="font-semibold mb-4 text-base">Choose your Loan Amount</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium">
            $1,000 - $10,000
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium">
            $10,000 - $20,000
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium">
            $20,000 - $25,000
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium">
            $25,000 or Above
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 max-w-3xl text-center text-xs text-gray-600 space-y-3">
        <p>
          Fall expenses are stacking up fast — from heating bills to holiday plans. Compare your personal loan options today and lock in a steady payment before the season costs climb higher.
        </p>
        <p>
          Educational content only. Eligibility, rates, and terms vary by lender and state. Checking options may involve a soft inquiry; finalized applications may include a hard inquiry and affect credit.
        </p>
        <div className="border-t border-gray-300 pt-4">
          <a href="#" className="underline hover:text-gray-800">Privacy policy</a> &nbsp; | &nbsp; ©2025 Daily Smart. All rights reserved.
        </div>
      </div>
    </div>
  );
}
