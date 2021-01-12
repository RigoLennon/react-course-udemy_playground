import Link from 'next/link';

export default () => (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Curso Next.js</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/calc"><a>Calculadora</a></Link></li>
      </ul>
    </div>
  </nav>
)