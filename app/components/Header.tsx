import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-grid">
          <div className="logo"><Link href="/">Robot Signals</Link></div>
          <nav>
            <Link href="/#services">Services</Link>
            <Link href="/lab">Lab</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
