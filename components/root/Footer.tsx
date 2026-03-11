export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative mx-auto max-w-103 snap-end bg-[#3d3f1c] py-1"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} JadiDapa. All Rights Reserved
      </div>
    </footer>
  );
}
