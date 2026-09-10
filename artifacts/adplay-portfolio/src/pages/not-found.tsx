import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-6">
      <section className="glass w-full max-w-lg rounded-2xl p-8 text-center sm:p-12">
        <p className="font-mono text-[10px] tracking-[.16em] text-[#7b83ff]" data-testid="text-not-found-code">404</p>
        <h1 className="mt-5 font-display text-[32px] font-semibold tracking-[-.05em] text-[#eceef2]" data-testid="heading-not-found">Page not found.</h1>
        <p className="mx-auto mt-3 max-w-sm text-[13px] leading-[1.6] text-[#8d8f99]">The page you requested does not exist or may have moved.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-5 py-3 text-[12px] font-semibold text-[#dedfe4] transition-colors hover:bg-white/[.11]" data-testid="link-not-found-home">
          <ArrowLeft size={14} /> Return home
        </Link>
      </section>
    </main>
  );
}
