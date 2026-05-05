import { Check } from "lucide-react";

export function CourseRoadmap() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Lộ trình học tập</h2>
          <p className="text-sm text-slate-500 mt-1">Cử nhân Kinh tế — Chương trình 8 Học kỳ</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-blue-600"></div>Đã hoàn thành</div>
          <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-red-600"></div>Đang học</div>
          <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-slate-200"></div>Sắp tới</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between relative px-2">
           {/* Line connecting nodes */}
           <div className="absolute top-3 left-6 right-6 h-0.5 z-0 flex">
             <div className="h-full bg-blue-600 w-[25%]" />
             <div className="h-full bg-red-600 w-[12%]" />
             <div className="h-full border-t border-dashed border-slate-300 w-[63%]" />
           </div>
           
           {/* Nodes */}
           {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
             <div key={sem} className="flex flex-col items-center gap-2 relative z-10 w-16">
               <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-4 ring-white
                 ${sem <= 2 ? "bg-blue-600" : sem === 3 ? "bg-red-600" : "bg-slate-50 border border-slate-200 text-slate-400"}`}>
                 {sem <= 2 ? <Check className="h-3 w-3" strokeWidth={3} /> : sem}
               </div>
               <div className="text-center">
                 <div className={`text-xs font-semibold ${sem <= 2 ? "text-blue-600" : sem === 3 ? "text-red-600" : "text-slate-500"}`}>Học kỳ {sem}</div>
                 <div className="text-[10px] text-slate-400 mt-0.5">{sem <= 2 ? "15/20" : sem === 3 ? "12/20" : "0/20"}</div>
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <CourseCard title="Principles of Economics" code="ECON101" grade="A" status="completed" credits={4} />
        <CourseCard title="Microeconomics" code="ECON102" grade="A-" status="completed" credits={4} />
        <CourseCard title="Macroeconomics" code="ECON201" grade="B+" status="completed" credits={4} />
        <CourseCard title="Mathematics for Economics" code="MATH201" grade="A" status="completed" credits={4} />
        
        <CourseCard title="Statistics for Economics" code="STAT201" grade="B+" status="completed" credits={4} />
        <CourseCard title="International Economics" code="ECON301" grade="In Progress" status="in-progress" credits={4} />
        <CourseCard title="Econometrics" code="ECON303" grade="In Progress" status="in-progress" credits={4} />
        <CourseCard title="Public Economics" code="ECON305" grade="-" status="upcoming" credits={4} />
        
        <CourseCard title="Development Economics" code="ECON401" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Financial Economics" code="ECON403" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Environmental Economics" code="ECON405" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Economics of Trade Policy" code="ECON407" grade="-" status="upcoming" credits={4} />

        <CourseCard title="Thesis Proposal" code="ECON501" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Behavioral Economics" code="ECON503" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Time Series Analysis" code="ECON505" grade="-" status="upcoming" credits={4} />
        <CourseCard title="Applied Economic Research" code="ECON507" grade="-" status="upcoming" credits={4} />
      </div>

      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
          Xem toàn bộ chương trình
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

function CourseCard({ title, code, grade, status, credits }: any) {
  const getColors = () => {
    switch (status) {
      case 'completed': return { ribbon: "bg-blue-600", gradeText: "text-green-500", ribbonColor: "#2563eb" };
      case 'in-progress': return { ribbon: "bg-red-600", gradeText: "text-red-600", ribbonColor: "#dc2626" };
      default: return { ribbon: "bg-slate-200", gradeText: "text-slate-400", ribbonColor: "#e2e8f0" };
    }
  };

  const colors = getColors();

  return (
    <div className="border border-slate-200 rounded-xl p-4 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      {/* Top right diagonal ribbon effect using SVG */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,100" fill={colors.ribbonColor} />
        </svg>
        {status === 'completed' && <Check className="absolute top-1 right-1 h-3 w-3 text-white" strokeWidth={3} />}
      </div>

      <div className="pr-6 h-full flex flex-col">
        <h4 className="text-sm font-bold text-slate-800 leading-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[2.5rem]">{title}</h4>
        <div className="text-[11px] text-slate-500 font-medium mb-6 flex-1">{code}</div>
        
        <div className="flex items-end justify-between">
          <span className={`text-xs font-bold ${colors.gradeText}`}>{grade}</span>
          <span className="text-[10px] text-slate-400 font-medium">{credits} tín chỉ</span>
        </div>
      </div>
    </div>
  );
}
