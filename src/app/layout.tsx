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
          <Link href="/recipes">Recipes</Link>
          <Link href="/food_adventures">Food Adventures</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default Layout;
