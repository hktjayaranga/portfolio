export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.45),transparent_70%)] blur-2xl" />
      <div className="absolute -bottom-24 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.35),transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,17,22,0.0),rgba(12,17,22,0.18))] dark:opacity-70" />
    </div>
  );
}
