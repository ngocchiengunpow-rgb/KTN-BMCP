"use client";
import { useState } from 'react';
import { SemesterBlock } from "@/components/features/SemesterBlock";
import { AIChatWidget } from "@/components/features/AIChatWidget";
import { SemesterCurriculum, Course } from "@/types";

export function ClientDashboard({ semesters }: { semesters: SemesterCurriculum[] }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {semesters.map((semester) => (
          <SemesterBlock
            key={semester.semester_number}
            semesterNumber={semester.semester_number}
            courses={semester.courses}
            onCourseClick={setSelectedCourse}
          />
        ))}
      </div>
      
      {/* Persist the chat widget but update its key/props when a course is selected */}
      <AIChatWidget 
        courseId={selectedCourse?.id || "general"} 
        courseName={selectedCourse?.course_name || "Lộ trình chung"} 
        key={selectedCourse?.id || "general"} 
      />
    </>
  );
}
