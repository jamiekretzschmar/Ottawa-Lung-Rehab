import AnimatedPage from "../components/AnimatedPage";
import { CheckSquare, Info } from "lucide-react";

export default function ChecklistAndStay() {
  const requirements = [
    "Meds in original containers",
    "Oxygen for travel (if used)",
    "Comfortable exercise clothes",
    "Walking/running shoes",
    "Unscented toiletries",
    "Walker/cane (if used)",
    "Phone, iPad, chargers",
    "Power bar (only 2 outlets)",
    "CPAP/BIPAP machine",
    "Unbreakable water bottle",
    "Personal snacks, juice, sandwiches"
  ];

  return (
    <AnimatedPage className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checklist</h1>
        <p className="mt-2 text-sm text-gray-600">
          Prepare for your admission to The Rehabilitation Centre.
        </p>
      </div>

      <div className="rounded-[2rem] border-2 border-white bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-4 flex items-center gap-3">
          <CheckSquare className="h-6 w-6 text-white drop-shadow-md" />
          <h2 className="text-lg font-bold text-white drop-shadow-sm">What to Bring</h2>
        </div>
        <div className="p-5">
          <div className="mb-5 rounded-[1.5rem] bg-gradient-to-r from-yellow-50 to-yellow-100/50 p-4 border border-yellow-200/50 flex gap-3 items-start inset-shadow-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <Info className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5 drop-shadow-sm" />
            <p className="text-xs text-yellow-800 leading-snug font-medium">
              There is a locked cupboard in the room, but please leave valuables at home.
            </p>
          </div>
          
          <div className="space-y-4">
            {requirements.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-[1rem] border border-gray-100 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)]">
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    id={`req-${index}`}
                    type="checkbox"
                    className="peer appearance-none h-6 w-6 rounded-lg border-2 border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer"
                  />
                  <CheckSquare className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                </div>
                <label htmlFor={`req-${index}`} className="text-sm font-medium text-gray-700 cursor-pointer select-none leading-tight">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">First Day</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-xs font-medium border border-blue-100">
              Please bring a snack for lunch as hospital trays may be delayed upon arrival.
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs mt-3 marker:text-gray-400">
              <li>Nurse completes admission docs.</li>
              <li>Pharmacist reviews list of medications.</li>
              <li>Hospitalist assigned to your care.</li>
              <li>Physio and OT afternoon assessments.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">Meals & Hygiene</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Meals Delivered At:</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 border rounded shadow-sm">8:00 AM</span>
                <span className="bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 border rounded shadow-sm">12:00 PM</span>
                <span className="bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 border rounded shadow-sm">5:00 PM</span>
              </div>
              <p className="text-[11px] text-gray-500 italic">Select meals one day prior via menu.</p>
            </div>
            <div className="pt-3 border-t">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Unit Kitchenette</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                You are welcome to bring your own food, such as sandwiches, juice, or snacks. The unit has a patient kitchenette equipped with a microwave, toaster, and a shared fridge.
              </p>
            </div>
            <div className="pt-3 border-t">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Hygiene Routine</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Have a short wash at the sink in the mornings. Save full showers for the evening. Nurses will provide safety tips to conserve energy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
