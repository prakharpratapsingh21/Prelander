import React from "react";

const FallLoanPrelander = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 text-slate-900">
      {/* HERO */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-md p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-indigo-100 text-indigo-700 font-semibold text-xs px-3 py-1 rounded-full">
            Fall 2025
          </span>
          <span className="bg-indigo-100 text-indigo-700 font-semibold text-xs px-3 py-1 rounded-full">
            US Personal Loans
          </span>
          <span className="bg-indigo-100 text-indigo-700 font-semibold text-xs px-3 py-1 rounded-full">
            Holiday & Heating Season
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">
          Need breathing room before holidays hit?
        </h1>
        <p className="text-slate-600 mb-4">
          Between a federal funding shutdown delaying key data, a Fed rate cut,
          Open Enrollment decisions, and rising fall utilities, cash flow’s
          getting squeezed. A fixed-rate personal loan may help replace
          high-APR card balances and cover seasonal expenses—without the
          snowball of revolving interest.
        </p>

        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href="#start"
            className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Check options
          </a>
          <a
            href="#how"
            className="border border-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            How it works
          </a>
        </div>

        <p className="text-sm text-slate-500 mt-3">
          No guarantees of approval. Eligibility, rates, and terms vary by
          lender. Consider costs before borrowing.
        </p>
      </section>

      {/* WHY NOW */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* Card 1 */}
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">What just changed</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>
              <b>Fed cut:</b> Target fed funds range is now{" "}
              <em>4.00–4.25%</em> (Sep 17). Some loan offers may ease, while
              credit-card APRs remain high.
            </li>
            <li>
              <b>Shutdown delays data:</b> Government funding lapse paused key
              reports, adding uncertainty for budgets.
            </li>
            <li>
              <b>Energy season:</b> Utilities demand is up; plan for higher usage.
            </li>
          </ul>
        </article>

        {/* Card 2 */}
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Festival & deadline calendar</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>
              <b>Halloween:</b> Oct 31 — small spends add up; cap it.
            </li>
            <li>
              <b>Medicare Open Enrollment:</b> Oct 15–Dec 7.
            </li>
            <li>
              <b>ACA Marketplace:</b> Nov 1–Jan 15.
            </li>
            <li>
              <b>Thanksgiving:</b> Nov 27; <b>Black Friday:</b> Nov 28;{" "}
              <b>Cyber Monday:</b> Dec 1.
            </li>
          </ul>
        </article>

        {/* Card 3 */}
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Bill pain points this fall</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>High-APR credit card balances (&gt;20%).</li>
            <li>Heating & electricity as temps drop.</li>
            <li>Holiday travel & groceries.</li>
            <li>Health plan premiums/deductibles.</li>
            <li>Insurance renewals & property taxes.</li>
          </ul>
        </article>
      </section>

      {/* VALUE PROP */}
      <section
        id="start"
        className="grid gap-4 lg:grid-cols-[1.3fr,0.7fr] mt-8"
      >
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">
            How a personal loan can help right now
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>✅ <b>Swap revolving for fixed:</b> Replace variable card APRs with a fixed term and payment.</li>
            <li>✅ <b>Consolidate & simplify:</b> One due date, clear payoff date, optional autopay.</li>
            <li>✅ <b>Cash-flow buffer:</b> Cover gifts, travel, heating costs without high-interest lines.</li>
            <li>✅ <b>No collateral:</b> Unsecured loans based on credit & lender criteria.</li>
          </ul>

          <p className="inline-block bg-emerald-50 text-emerald-800 font-semibold text-sm px-3 py-1 rounded-full mt-4">
            Smart move: compare 2–3 offers; total cost matters most.
          </p>

          <div className="flex gap-3 mt-4">
            <a
              href="#form"
              className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              See my options
            </a>
            <a
              href="#faq"
              className="border border-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
            >
              Read FAQs
            </a>
          </div>
        </article>

        <aside className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-1">Quick estimate (example)</h2>
          <p className="text-sm text-slate-500 mb-3">
            Illustrative only. Not a quote.
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              <b>$10,000</b> / 36 months @ <b>15% APR</b> ≈ <b>$347/mo</b>,
              total interest ≈ <b>$2,492</b>.
            </li>
            <li>
              <b>$10,000</b> / 36 months @ <b>24% APR</b> ≈ <b>$395/mo</b>,
              total interest ≈ <b>$4,220</b>.
            </li>
          </ul>
          <p className="text-slate-600 mt-2">
            Compare to carrying $10k on a 22% card. Fixed terms enforce payoff
            discipline.
          </p>
        </aside>
      </section>

      {/* FALL GAME PLAN */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">15-minute money reset</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Add 20% utility buffer till Feb.</li>
            <li>Cap holiday spends; auto-transfer weekly savings.</li>
            <li>List card balances (highest APR first).</li>
          </ul>
        </article>
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">When a loan makes sense</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Lower total cost than current debt.</li>
            <li>Budget supports repayments.</li>
            <li>No new revolving balances.</li>
          </ul>
        </article>
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">When to wait</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Short-term need covered by next payday.</li>
            <li>No clear repayment plan.</li>
            <li>Cheaper 0% balance transfer available.</li>
          </ul>
        </article>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="grid gap-4 lg:grid-cols-2 mt-8">
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">How it works</h2>
          <ol className="list-decimal list-inside text-slate-700 space-y-2">
            <li>Answer quick questions (soft check where available).</li>
            <li>Compare fixed APRs, fees & terms side-by-side.</li>
            <li>Select best fit and complete lender application.</li>
            <li>Use funds to clear high-APR balances or fall costs.</li>
          </ol>
          <p className="text-sm text-slate-500 mt-2">
            Soft checks not available everywhere. Final terms need verification.
          </p>
        </article>

        <aside className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="mb-2">
            <b>Will rates drop fast after Fed cut?</b> Lenders adjust slowly;
            card APRs remain high. Shop around.
          </p>
          <p className="mb-2">
            <b>Is this a guarantee?</b> No. Approvals depend on lender criteria.
          </p>
          <p>
            <b>Any fees?</b> Some lenders charge origination/prepayment fees;
            always read disclosures.
          </p>
        </aside>
      </section>

      {/* CTA */}
      <section
        id="form"
        className="bg-white border border-slate-200 rounded-2xl shadow-md p-8 mt-8"
      >
        <h2 className="text-2xl font-semibold mb-2">
          Compare personal-loan options before holiday spending spikes
        </h2>
        <p className="text-slate-600 mb-4">
          It’s easier to plan gifts, travel, and heating when payments are
          predictable.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#start"
            className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Check options
          </a>
          <a
            href="#how"
            className="border border-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            Learn more
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Education only; not financial, legal, or tax advice.
        </p>
      </section>

      <footer className="text-xs text-slate-500 mt-6">
        <p>
          Disclosures: This page is a marketing pre-lander. We may receive
          compensation if you are approved by a partner lender. Rates/terms vary
          by lender and state. Checking options may involve a soft inquiry when
          offered; finalized applications may use a hard inquiry that can impact
          credit. Borrow responsibly—total cost matters.
        </p>
      </footer>
    </main>
  );
};

export default FallLoanPrelander;
