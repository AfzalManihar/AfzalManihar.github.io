import { cn } from "@/lib/utils";
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) { return <span className={cn("rounded-full border border-slate-700 bg-slate-900/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300", className)}>{children}</span>; }
