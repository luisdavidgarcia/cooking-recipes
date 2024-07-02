import Link from 'next/link';
import '@/app/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/recipes">Recipes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default Layout;
