import type { Metadata } from "next";
import CourseExplorer from "@/components/CourseExplorer";
import { getCourses, getCourseStreams, getCourseLevels } from "@/data/courses";
import EducationBackdrop from "@/components/EducationBackdrop";

export const metadata: Metadata = {
  title: "Courses & Diplomas",
  description:
    "Browse the complete after-Class-10 course catalog — undergraduate degrees, diplomas and vocational courses with eligibility and entrance exams.",
};

export default function CoursesPage() {
  const courses = getCourses();
  const streams = getCourseStreams();
  const levels = getCourseLevels();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="relative mb-8 overflow-hidden">
        <EducationBackdrop />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Courses, degrees & diplomas
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {courses.length} courses across Science, Commerce, Arts and
          Vocational streams — from B.Tech to short vocational diplomas, with
          eligibility and entrance exams for each.
        </p>
      </header>
      <CourseExplorer courses={courses} streams={streams} levels={levels} />
    </div>
  );
}
