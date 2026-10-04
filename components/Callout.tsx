const styles = {
  info: { label: "Info", icon: "ℹ️", box: "border-blue-500 bg-blue-50 dark:bg-blue-950/40" },
  tip: { label: "Tip", icon: "💡", box: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40" },
  warning: { label: "Warning", icon: "⚠️", box: "border-amber-500 bg-amber-50 dark:bg-amber-950/40" },
};

export default function Callout({
  type = "info",
  children,
}: {
  type?: keyof typeof styles;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`not-prose my-6 rounded-lg border-l-4 p-4 ${s.box}`}>
      <p className="mb-1 font-semibold">
        {s.icon} {s.label}
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}