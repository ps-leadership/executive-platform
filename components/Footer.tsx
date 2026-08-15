export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-8 py-10 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Priyanshu Shrivastava</p>

        <div className="flex gap-6">
          <span>Leadership</span>
          <span>AI</span>
          <span>Customer Organizations</span>
        </div>
      </div>
    </footer>
  );
}