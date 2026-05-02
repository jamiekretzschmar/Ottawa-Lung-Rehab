import AnimatedPage from "../components/AnimatedPage";
import { ShieldAlert, FileText, Scale } from "lucide-react";

export default function Legal() {
  return (
    <AnimatedPage className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Legal &amp; Privacy</h1>
        <p className="mt-2 text-sm text-gray-600">
          Important disclaimers and terms of use.
        </p>
      </div>

      <div className="bg-white/80 p-5 rounded-[2rem] border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm space-y-6">
        <div className="border-l-[3px] border-red-400 pl-4 py-1">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-red-500" />
            Medical Disclaimer
          </h2>
          <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-medium">
            This application is designed for informational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition. Do not disregard professional medical advice or delay seeking it because of information in this application.
          </p>
        </div>

        <div className="border-l-[3px] border-blue-400 pl-4 py-1">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <Scale className="h-4 w-4 text-blue-500" />
            Terms of Use
          </h2>
          <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-medium">
            By using this application, you acknowledge that the content provided is a general guide based on publicly available details of the Ottawa Pulmonary Rehabilitation program. Schedules, eligibility, and program requirements are subject to change. This app is not an official release of The Ottawa Hospital but a supplementary informational tool.
          </p>
        </div>

        <div className="border-l-[3px] border-green-400 pl-4 py-1">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <FileText className="h-4 w-4 text-green-500" />
            Privacy Policy
          </h2>
          <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-medium">
            This application operates entirely locally on your device. It does not collect, track, store, or transmit any Personal Health Information (PHI) or identifiable data. Any interactions, such as checklist inputs, do not leave your device and vanish when cache is cleared.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
