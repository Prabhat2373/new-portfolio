import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Prabhat Tambe | Senior Full-Stack & Systems Engineer',
  description: 'Portfolio showcasing high-throughput backends, distributed systems, and modern web applications built for scale.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Distributed Systems', 'Go', 'TypeScript', 'Next.js', 'System Architecture'],
  authors: [{ name: 'Prabhat Tambe' }],
  openGraph: {
    title: 'Prabhat Tambe | Senior Full-Stack & Systems Engineer',
    description: 'Portfolio showcasing high-throughput backends, distributed systems, and modern web applications built for scale.',
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
      <body className="min-h-screen antialiased bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200">
        <ThemeProvider>
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Subtle ambient light gradient */}
            <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-60 transition-opacity" />
            <div className="ambient-glow absolute top-[800px] right-0 w-[500px] h-[500px] bg-purple-500/5 blur-3xl rounded-full pointer-events-none transition-opacity" />
            <div className="ambient-glow absolute bottom-[200px] left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-3xl rounded-full pointer-events-none transition-opacity" />
          </div>
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
