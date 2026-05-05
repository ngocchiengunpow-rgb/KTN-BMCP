import { Course } from "@/types";
import { CourseBadge } from "@/components/ui/CourseBadge";
import { Book, CheckCircle2 } from "lucide-react";

interface SemesterBlockProps {
  semesterNumber: number;
  courses: Course[];
  onCourseClick?: (course: Course) => void;
}

export function SemesterBlock({ semesterNumber, courses, onCourseClick }: SemesterBlockProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-semibold leading-none tracking-tight text-xl text-indigo-950 flex items-center gap-2">
          <Book className="w-5 h-5 text-indigo-500" />
          Học kỳ {semesterNumber}
        </h3>
        <p className="text-sm text-slate-500">
          Tổng số môn học: {courses.length}
        </p>
      </div>
      <div className="p-6 flex-1">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => onCourseClick?.(course)}
              className="flex items-start justify-between rounded-lg border border-slate-100 p-4 transition-all hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${course.is_mandatory ? 'text-indigo-600' : 'text-slate-400'}`} />
                <div>
                  <p className="text-sm font-medium text-slate-800 line-clamp-2">
                    {course.course_name}
                  </p>
                </div>
              </div>
              <CourseBadge isMandatory={course.is_mandatory} className="shrink-0 ml-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
