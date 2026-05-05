import { cn } from "@/lib/utils";

interface CourseBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isMandatory: boolean;
}

export function CourseBadge({ isMandatory, className, ...props }: CourseBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2",
        isMandatory
          ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-600/80"
          : "text-slate-700 border-slate-300 bg-white hover:bg-slate-100",
        className
      )}
      {...props}
    >
      {isMandatory ? "Bắt buộc" : "Tự chọn"}
    </div>
  );
}
