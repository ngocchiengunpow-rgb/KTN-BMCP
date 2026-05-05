export interface Course {
  id: string;
  semester_number: number;
  course_name: string;
  is_mandatory: boolean;
}

export interface SemesterCurriculum {
  semester_number: number;
  courses: Course[];
}
