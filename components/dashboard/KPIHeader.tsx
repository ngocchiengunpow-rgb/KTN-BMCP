"use client";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Calculator, GraduationCap, ShieldCheck } from "lucide-react";

const data = [
  { value: 20 }, { value: 35 }, { value: 30 }, { value: 45 }, { value: 40 }, { value: 62 }
];

export function KPIHeader() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100 flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Tiến độ chương trình</h3>
        <div className="flex items-end justify-between mt-2">
          <div className="text-4xl font-bold text-blue-600">62%</div>
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-1.5 mt-4 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full w-[62%] rounded-full" />
        </div>
        <p className="text-[11px] text-slate-500 mt-2 font-medium">Đã hoàn thành 99/160 tín chỉ</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-slate-700">Điểm trung bình (GPA)</h3>
          <div className="bg-red-50 p-2 rounded-full">
            <Calculator className="h-4 w-4 text-red-500" />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-4xl font-bold text-slate-900">3.45</span>
          <span className="text-sm text-slate-500 font-medium"> / 4.0</span>
        </div>
        <p className="text-sm text-green-500 mt-4 font-medium">Khá Giỏi</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-slate-700">Tín chỉ tích lũy</h3>
          <div className="bg-blue-50 p-2 rounded-full">
            <GraduationCap className="h-4 w-4 text-blue-500" />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-4xl font-bold text-blue-600">99</span>
          <span className="text-sm text-slate-500 font-medium"> / 160</span>
        </div>
        <p className="text-sm text-slate-500 mt-4 font-medium">Tự chọn: 12/30</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-slate-700">Xếp loại học lực</h3>
          <div className="bg-blue-50 p-2 rounded-full">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-blue-600 leading-tight block">Tốt</span>
        </div>
        <p className="text-sm text-slate-500 mt-4 font-medium">Tiếp tục phát huy nhé!</p>
      </div>
    </div>
  );
}
