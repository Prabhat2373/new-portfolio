import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Prabhat Tambe | Frontend Engineer • Cloud Applications & System Architecture',
  description: 'Frontend developer crafting cloud applications, multi-tenant architectures, zero-maintenance design systems, AI-accelerated apps, and physical IoT hardware with Apple-grade precision.',
  keywords: ['Frontend Developer', 'Cloud Applications', 'Design Systems', 'React', 'Next.js', 'TypeScript', 'System Architecture', 'IoT', 'Arduino'],
  authors: [{ name: 'Prabhat Tambe' }],
  openGraph: {
    title: 'Prabhat Tambe | Frontend Engineer • Cloud Applications & System Architecture',
    description: 'Frontend developer crafting cloud applications, multi-tenant architectures, zero-maintenance design systems, AI-accelerated apps, and physical IoT hardware with Apple-grade precision.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('portfolio-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200">
        <ThemeProvider>
          {/* Hardware-accelerated ambient backdrop without CPU blur filters */}
          <div
            className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.12),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
