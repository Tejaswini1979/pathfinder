import coursesRaw from "@/data/raw/courses.json";

export interface Course {
  id: string;
  name: string;
  stream: string;
  field: string;
  level: string;
  duration: string;
  eligibility: string;
  entranceExam: string;
  careerInterest: string[];
  description: string;
  subjects: string[];
}

export type CourseStream = "Science" | "Commerce" | "Arts" | "Vocational";

const courses = coursesRaw as Course[];

export function getCourses(): Course[] {
  return courses;
}

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCourseStreams(): string[] {
  return Array.from(new Set(courses.map((c) => c.stream))).sort();
}

export function getCourseFields(): string[] {
  return Array.from(new Set(courses.map((c) => c.field))).sort();
}

export function getCourseLevels(): string[] {
  return Array.from(new Set(courses.map((c) => c.level))).sort();
}

export function searchCourses(query: string): Course[] {
  const q = query.trim().toLowerCase();
  if (!q) return courses;
  return courses.filter((c) =>
    [c.name, c.field, c.eligibility, c.entranceExam, ...c.careerInterest]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}
