import AnimatedPage from "../components/AnimatedPage";
import { UserX, Coffee } from "lucide-react";

export default function Schedule() {
  return (
    <AnimatedPage className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Daily Schedule</h1>
        <p className="mt-2 text-sm text-gray-600">
          A structured routine for effective rehabilitation.
        </p>
      </div>

      <div className="bg-white/80 p-5 rounded-[2rem] border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden backdrop-blur-sm">
        <div className="space-y-4 py-2">
          
          <div className="relative flex items-center gap-4 bg-gradient-to-r from-orange-50 to-orange-100/50 p-3 rounded-[1.5rem] border border-orange-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(249,115,22,0.3)] shrink-0 w-[72px] text-center">
              7:00 AM
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Morning Check</h3>
              <p className="text-xs text-gray-600 mt-0.5">Vitals & BP taken by nursing.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100/50 p-3 rounded-[1.5rem] border border-blue-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(59,130,246,0.3)] shrink-0 w-[72px] text-center">
              8:00 AM
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Breakfast</h3>
              <p className="text-xs text-gray-600 mt-0.5">Meal tray delivered & morning prep.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-3 rounded-[1.5rem] border border-emerald-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(16,185,129,0.3)] shrink-0 w-[72px] text-center">
              Morning
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-bold text-gray-900 text-sm">Physiotherapy</h3>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-lg">Req</span>
              </div>
              <p className="text-xs text-gray-600">Individual Physio session.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-purple-50 to-purple-100/50 p-3 rounded-[1.5rem] border border-purple-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(168,85,247,0.3)] shrink-0 w-[72px] text-center">
              12:00 PM
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Lunch & Rest</h3>
              <p className="text-xs text-gray-600 mt-0.5">Meal tray delivered.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-teal-50 to-teal-100/50 p-3 rounded-[1.5rem] border border-teal-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(20,184,166,0.3)] shrink-0 w-[72px] text-center">
              Afternoon
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-bold text-gray-900 text-sm">Education / Physio</h3>
                <span className="bg-teal-100 text-teal-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-lg">Req</span>
              </div>
              <p className="text-xs text-gray-600">Group walking & learning sessions.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-indigo-100/50 p-3 rounded-[1.5rem] border border-indigo-50/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(99,102,241,0.3)] shrink-0 w-[72px] text-center">
              5:00 PM
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Dinner</h3>
              <p className="text-xs text-gray-600 mt-0.5">Meal tray delivered.</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-200/50 p-3 rounded-[1.5rem] border border-slate-50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="bg-gradient-to-br from-slate-500 to-slate-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_4px_8px_rgba(100,116,139,0.3)] shrink-0 w-[72px] text-center">
              Evening
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Relaxation</h3>
              <p className="text-xs text-gray-600 mt-0.5">Showers & Recreation.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1.5"><UserX className="w-4 h-4"/> Attendance</h4>
            <p className="text-xs text-red-800 leading-relaxed">
              Must attend all physio and Tue/Thu education sessions unless ill.
            </p>
        </div>

        <div className="bg-white border text-gray-800 border-gray-200 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-2"><Coffee className="w-4 h-4 text-amber-600"/> Recreation</h4>
            <div className="text-xs text-gray-600 space-y-2.5">
              <p>Coffee time twice a week.</p>
              <p>Evening activities: Movie night, Bingo, Art, Meditation.</p>
              <div className="pt-2 border-t text-[11px] bg-gray-50 p-2 rounded mt-2">
                <span className="font-bold text-gray-800">Cafe:</span> Mon-Fri 7am-3pm.
              </div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
