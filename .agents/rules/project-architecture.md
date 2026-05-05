Project Architecture Rules (Always On)
You are building a complex educational platform. You MUST strictly adhere to these architectural rules to ensure the codebase remains maintainable and editable.

Framework: Use Next.js 14+ (App Router).

Component Modularity: NEVER write monolithic files. Break down the UI into small, reusable components inside the components/ui and components/features directories. For example, a Semester Roadmap must be composed of RoadmapView.tsx, SemesterSection.tsx, and CourseCard.tsx.

Separation of Concerns: Keep business logic out of UI components. Use custom React hooks (e.g., hooks/useCourses.ts) or utility functions (in lib/utils.ts) to handle data fetching and processing.

Styling: Use Tailwind CSS exclusively. Do not use inline styles. Extract deeply nested conditional classes using a utility like clsx or tailwind-merge.

Readability: Add JSDoc comments to complex functions. The code must be clean enough for a junior developer to read and fix later.
