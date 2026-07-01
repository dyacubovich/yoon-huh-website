export default function Footer() {
  return (
    <footer className="bg-text px-6 py-8 text-bg/50 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-bg/10 pt-8 font-sans text-sm sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Yoon Huh Piano Studio. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-secondary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
