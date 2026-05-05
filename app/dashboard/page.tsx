import { KPIHeader } from "@/components/dashboard/KPIHeader";
import { CourseRoadmap } from "@/components/dashboard/CourseRoadmap";
import { RightSidebar } from "@/components/dashboard/RightSidebar";
import { AIChatWidget } from "@/components/features/AIChatWidget";

export default function DashboardPage() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          <KPIHeader />
          <CourseRoadmap />
        </div>
        <RightSidebar />
      </div>
      <AIChatWidget courseId="general" courseName="Lộ trình chung" />
    </div>
  );
}
