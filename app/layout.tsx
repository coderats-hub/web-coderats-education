import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeRats Education | Em breve',
  description: 'CodeRats Education está chegando. Acompanhe os próximos passos da comunidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
