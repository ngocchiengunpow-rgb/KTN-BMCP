"use server";

import fs from 'fs/promises';
import path from 'path';
import { Course, SemesterCurriculum } from '../types';

/**
 * Fetches the raw array of courses from the curriculum data file.
 */
export async function getCurriculum(): Promise<Course[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'curriculum.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data as Course[];
  } catch (error) {
    console.error("Error fetching curriculum data:", error);
    return [];
  }
}

/**
 * Fetches the curriculum grouped by semester number.
 */
export async function getCurriculumGroupedBySemester(): Promise<SemesterCurriculum[]> {
  const courses = await getCurriculum();
  
  const groupedData = courses.reduce((acc, course) => {
    const semester = course.semester_number;
    if (!acc[semester]) {
      acc[semester] = [];
    }
    acc[semester].push(course);
    return acc;
  }, {} as Record<number, Course[]>);

  // Convert the grouped record into an array of SemesterCurriculum sorted by semester number
  const result: SemesterCurriculum[] = Object.keys(groupedData)
    .map((key) => Number(key))
    .sort((a, b) => a - b)
    .map((semester_number) => ({
      semester_number,
      courses: groupedData[semester_number],
    }));

  return result;
}
