export default async function Template({ children }: { children: React.ReactNode }) {
  return (
    // Header
    <div className="animate-appear">{children}</div>
  );
}
