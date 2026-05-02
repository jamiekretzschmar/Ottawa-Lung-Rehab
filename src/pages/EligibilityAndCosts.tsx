import AnimatedPage from "../components/AnimatedPage";
import { CheckCircle2, ShieldCheck, FileText, Ban } from "lucide-react";

export default function EligibilityAndCosts() {
  return (
    <AnimatedPage className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Eligibility</h1>
        <p className="mt-2 text-sm text-gray-600">
          Program requirements, coverage, and admission steps.
        </p>
      </div>

      <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          Who is Eligible?
        </h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-gray-900">Chronic Lung Disease</h3>
              <p className="text-xs text-gray-600 mt-1">COPD, Pulmonary Fibrosis, or Asthma.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-gray-900">Symptomatic Status</h3>
              <p className="text-xs text-gray-600 mt-1">Shortness of breath despite optimal medication.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-gray-900">Motivated</h3>
              <p className="text-xs text-gray-600 mt-1">Willing to participate in structured exercise.</p>
            </div>
          </li>
        </ul>

        <div className="mt-6 rounded-xl bg-red-50 p-4 border border-red-100">
          <h3 className="font-bold text-red-800 text-sm flex items-center gap-2">
            <Ban className="h-4 w-4" /> Not Suitable For
          </h3>
          <p className="mt-2 text-xs text-red-700 leading-relaxed">
            Unstable cardiac conditions, severe cognitive impairments, or those physically unable to participate.
          </p>
        </div>
      </section>

      <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-3">
          <ShieldCheck className="h-5 w-5 text-blue-600" />
          Costs
        </h2>
        <p className="text-sm font-semibold text-gray-900 mb-1">Publicly Funded</p>
        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Core medical services are covered by OHIP for Ontario residents.
        </p>
        <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Potential Expenses</h4>
        <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1.5 marker:text-gray-400">
          <li>Parking or transportation</li>
          <li>Cafe snacks or personal items</li>
          <li>Out-of-scope home equipment</li>
        </ul>
      </section>

      <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-3">
          <FileText className="h-5 w-5 text-blue-600" />
          How to Apply
        </h2>
        <div className="space-y-5">
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-700 text-sm shadow-sm">1</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-900">Physician Referral</h3>
               <p className="text-xs text-gray-600 mt-1">From a respirologist or family doctor.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-700 text-sm shadow-sm">2</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-900">Assessment</h3>
               <p className="text-xs text-gray-600 mt-1">Initial check to ensure program fit.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-700 text-sm shadow-sm">3</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-900">Admission</h3>
               <p className="text-xs text-gray-600 mt-1">Receive date and arrival instructions.</p>
             </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
