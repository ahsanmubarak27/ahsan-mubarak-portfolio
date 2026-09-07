import { type ReactNode, useMemo, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, Check, Code2, ExternalLink,
  Figma, Globe2, Layers3, Linkedin, Mail, Menu, MessageCircle,
  Palette, Play, Sparkles, Target, X, Zap,
} from 'lucide-react';

type Filter = 'All' | 'Dev' | 'Design';

const templates = [
  {
    id: 'stack',
    type: 'CREATIVE PORTFOLIO',
    color: '#6194ff',
    title: 'Stack — Developer Portfolio',
    description: 'A glassmorphism-forward portfolio template for designers and developers. Engineered to guide AI toward a modern dark aesthetic with fluid animations and a powerful personal brand structure.',
    tags: ['TAILWIND', 'GLASSMORPHISM', 'AI PROMPT'],
    image: '/stack-template.png',
    reverse: false,
  },
  {
    id: 'blueprint',
    type: 'ARCHITECTURE',
    color: '#a264ef',
    title: 'Blueprint — Architecture Portfolio',
    description: 'An editorial, dark-mode portfolio prompt for architecture studios and spatial thinkers. Precise grids, material-led storytelling, and room for the work to breathe.',
    tags: ['EDITORIAL', 'ARCHITECTURE', 'DARK MODE'],
    image: '/architecture-template.svg',
    reverse: true,
  },
];

const expertise = [
  { name: 'AI Prompt Engineering', type: 'Dev', icon: Sparkles, color: '#7b83ff' },
  { name: 'UI/UX Design', type: 'Design', icon: Palette, color: '#ee71ac' },
  { name: 'Frontend Stack', type: 'Dev', icon: Code2, color: '#39c69b' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>('All');
  const [dialog, setDialog] = useState<'project' | 'pricing' | 'preview' | null>(null);
  const visibleExpertise = useMemo(() => filter === 'All' ? expertise : expertise.filter((item) => item.type === filter), [filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-hidden">
      <div className="shell">
        <nav className="glass sticky top-3 z-40 mt-3 flex h-14 items-center justify-between rounded-[18px] px-4 sm:px-5" data-testid="nav-main">
          <button onClick={() => scrollToId('top')} className="flex items-center gap-2.5" data-testid="button-logo">
            <span className="grid size-7 place-items-center rounded-[7px] bg-[#f1f2f4] text-[11px] font-bold text-[#16171b]">AP</span>
            <span className="font-display text-[14px] font-semibold tracking-[-.03em] text-[#e6e7eb]">AdPlay</span>
          </button>
          <div className="hidden items-center gap-8 text-[12px] text-[#8d8f9a] sm:flex">
            <a href="#about" className="transition-colors hover:text-white" data-testid="link-nav-about">About</a>
            <a href="#expertise" className="transition-colors hover:text-white" data-testid="link-nav-skills">Skills</a>
            <a href="#work" className="transition-colors hover:text-white" data-testid="link-nav-work">Work</a>
            <a href="#contact" className="transition-colors hover:text-white" data-testid="link-nav-services">Services</a>
          </div>
          <button onClick={() => setDialog('project')} className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-4 py-2 text-[12px] font-semibold text-[#e6e7eb] transition-all hover:border-white/20 hover:bg-white/[.12] sm:flex" data-testid="button-start-project">
            <Mail size={13} strokeWidth={1.8} /> Start a Project
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-9 place-items-center rounded-full border border-white/10 text-[#bfc1ca] sm:hidden" aria-label="Open menu" data-testid="button-mobile-menu">
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
          {menuOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-[#171920]/95 p-2 shadow-2xl backdrop-blur-xl sm:hidden" data-testid="menu-mobile">
              {[['About', 'about'], ['Skills', 'expertise'], ['Work', 'work'], ['Services', 'contact']].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-[#c7c8cf] hover:bg-white/[.07]" data-testid={`link-mobile-${id}`}>{label}</a>
              ))}
              <button onClick={() => { setDialog('project'); closeMenu(); }} className="mt-1 flex w-full items-center gap-2 rounded-xl bg-[#f1f2f4] px-4 py-3 text-sm font-semibold text-[#191a20]" data-testid="button-mobile-project"><Mail size={14} /> Start a Project</button>
            </div>
          )}
        </nav>

        <section id="top" className="relative grid min-h-[calc(100dvh-5rem)] items-center gap-12 px-0 pb-20 pt-20 lg:grid-cols-[1.01fr_.99fr] lg:gap-16 lg:pt-16">
          <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#1e818b]/[.09] blur-[100px]" />
          <div className="relative z-10">
            <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#6373df]/25 bg-[#313d9d]/10 px-3 py-1.5 text-[11px] font-medium text-[#8994ee]" data-testid="status-availability">
              <span className="size-1.5 rounded-full bg-[#707fff] shadow-[0_0_10px_#6877ff]" /> Available for new projects
            </div>
            <h1 className="reveal reveal-delay-1 max-w-[580px] font-display text-[clamp(3.7rem,7vw,6.2rem)] font-medium leading-[.91] tracking-[-.075em] text-[#f1f1f3]" data-testid="text-hero-title">
              Garry Audie,<br /><span className="text-[#76777f]">A.I.</span> Creator.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-[475px] text-[15px] leading-[1.52] text-[#91939d]" data-testid="text-hero-description">
              Engineering AI-powered web templates where design precision meets intelligent generation. Based in Indonesia.
            </p>
            <div className="reveal reveal-delay-3 mt-7 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollToId('work')} className="group inline-flex items-center gap-2 rounded-full bg-[#f1f2f4] px-5 py-3 text-[12px] font-semibold text-[#17181d] transition-transform hover:-translate-y-0.5" data-testid="button-view-templates">View Templates <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" /></button>
              <button onClick={() => setDialog('pricing')} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-5 py-3 text-[12px] font-semibold text-[#dedfe4] transition-colors hover:bg-white/[.11]" data-testid="button-see-pricing">See Pricing</button>
            </div>
            <div className="mt-7 flex items-center gap-5 border-t border-white/[.07] pt-5 text-[#858791]">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="X" data-testid="link-social-x"><MessageCircle size={17} strokeWidth={1.5} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Instagram" data-testid="link-social-instagram"><Globe2 size={17} strokeWidth={1.5} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn" data-testid="link-social-linkedin"><Linkedin size={17} strokeWidth={1.5} /></a>
              <a href="mailto:hello@adplay.studio" className="transition-colors hover:text-white" aria-label="Email" data-testid="link-social-email"><Mail size={17} strokeWidth={1.5} /></a>
            </div>
          </div>
          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[455px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-5 rounded-[28px] bg-[#5653a8]/10 blur-3xl" />
            <div className="relative aspect-[.92] overflow-hidden rounded-[20px] border border-white/10 bg-[#b6b7bc]">
              <img src="/adplay-portrait.png" alt="Garry Audie, founder of AdPlay" className="h-full w-full object-cover object-top grayscale" data-testid="img-founder-portrait" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[13px] border border-white/15 bg-[#5a5b5e]/90 px-4 py-3 backdrop-blur-lg">
                <div><p className="text-[12px] font-semibold text-white">AdPlay Media</p><p className="font-mono text-[8px] tracking-[.13em] text-white/60">CREATIVE AI &amp; AI STUDIO</p></div>
                <Zap size={17} fill="#f2dc3d" stroke="#f2dc3d" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <SectionKicker>About AdPlay</SectionKicker>
              <p className="mt-3 max-w-[650px] text-[15px] leading-[1.55] text-[#a2a3ac]" data-testid="text-about-description">
                AdPlay is a creative studio specializing in AI-engineered web templates — prompt frameworks designed to give any AI the exact “Design-DNA” it needs to produce polished, production-quality websites. We believe the gap between a generic AI output and a premium hand-crafted site is just a better prompt.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <InfoCard icon={<Zap size={17} />} title="Our Origin">Built from frustration with generic AI outputs — every template is a refined engineering prompt for creative precision.</InfoCard>
                <InfoCard icon={<Target size={17} />} title="Current Focus">Expanding our template library across industries — architecture, SaaS, e-commerce, and personal brands.</InfoCard>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 sm:p-6">
              <p className="text-[12px] font-semibold text-[#dddde3]">Our Values</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Precision', 'Minimalism', 'AI-First'].map((value) => <span key={value} className="rounded-full bg-white/[.08] px-3 py-1.5 text-[11px] text-[#a9abb5]" data-testid={`badge-value-${value.toLowerCase()}`}>{value}</span>)}
              </div>
              <p className="mt-16 text-[12px] font-semibold text-[#dddde3]">Specialties</p>
              <div className="mt-4 space-y-3 text-[12px] text-[#8a8c97]">
                <p className="flex items-center gap-3"><Sparkles size={14} className="text-[#7b83ff]" /> AI Prompt Engineering</p>
                <p className="flex items-center gap-3"><Layers3 size={14} className="text-[#8f95a3]" /> Web Design Systems</p>
                <p className="flex items-center gap-3"><Palette size={14} className="text-[#d390ee]" /> Brand &amp; Visual Identity</p>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><SectionKicker>Expertise &amp; Stack</SectionKicker><p className="mt-2 text-[13px] text-[#80828c]">The tools and disciplines behind every AdPlay template.</p></div>
            <div className="flex items-center gap-2" role="group" aria-label="Filter expertise">
              {(['All', 'Dev', 'Design'] as Filter[]).map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-colors ${filter === item ? 'bg-[#f1f2f4] text-[#191a20]' : 'bg-white/[.06] text-[#8d8f99] hover:bg-white/[.1]'}`} data-testid={`button-filter-${item.toLowerCase()}`}>{item}</button>)}
            </div>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {visibleExpertise.map((item) => <ExpertiseCard key={item.name} item={item} />)}
          </div>
        </section>

        <section id="work" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div className="flex items-end justify-between"><SectionKicker>Selected Templates</SectionKicker><span className="hidden font-mono text-[10px] tracking-[.14em] text-[#5f626e] sm:block">02 / 04</span></div>
          <div className="mt-9 space-y-6">
            {templates.map((template) => <TemplateCard key={template.id} template={template} onGet={() => setDialog('project')} onPreview={() => setDialog('preview')} />)}
          </div>
          <div className="mt-9 flex justify-center"><button onClick={() => setDialog('preview')} className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#b8bac3] transition-colors hover:text-white" data-testid="button-view-all-templates">View all templates <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></button></div>
        </section>

        <section className="section-rule py-24 sm:py-28">
          <div className="text-center"><SectionKicker>Words from Customers</SectionKicker></div>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <QuoteCard quote="I pasted the Stack prompt into Claude and had a fully designed, production-ready portfolio in 20 minutes. The level of polish it outputs is insane — nothing like what I got with generic prompts." name="Ryan Kim" role="FULL-STACK DEVELOPER" initials="RK" />
            <QuoteCard quote="The Blueprint template saved me days. Instead of a generic boxy layout, my AI actually produced something with editorial hierarchy and real design intent. Worth every cent." name="Sofia Marchetti" role="INTERIOR DESIGNER" initials="SM" />
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[.07] py-28 text-center sm:py-36">
          <div className="pointer-events-none absolute left-1/2 top-16 size-80 -translate-x-1/2 rounded-full bg-[#473f98]/[.1] blur-[100px]" />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[.18em] text-[#8589cf]">HAVE A PROJECT IN MIND?</p>
            <h2 className="mx-auto mt-5 max-w-[700px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[.98] tracking-[-.065em] text-[#eeeff2]">Let’s make something<br /><span className="text-[#777982]">remarkable.</span></h2>
            <button onClick={() => setDialog('project')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f1f2f4] px-6 py-3.5 text-[12px] font-semibold text-[#191a20] transition-transform hover:-translate-y-0.5" data-testid="button-contact-project">Start a Project <ArrowRight size={14} /></button>
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/[.07] py-8 text-[11px] text-[#6f727d] sm:flex-row sm:items-center sm:justify-between">
          <p data-testid="text-footer-copyright">© 2024 AdPlay Media. Based in Indonesia.</p>
          <div className="flex items-center gap-5"><a href="mailto:hello@adplay.studio" className="transition-colors hover:text-white" data-testid="link-footer-email">hello@adplay.studio</a><a href="#top" className="transition-colors hover:text-white" data-testid="link-footer-top">Back to top ↑</a></div>
        </footer>
      </div>
      {dialog && <Dialog type={dialog} onClose={() => setDialog(null)} />}
    </main>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-[20px] font-semibold tracking-[-.04em] text-[#e8e8eb]" data-testid={`heading-${String(children).toLowerCase().replaceAll(' ', '-')}`}>{children}</h2>;
}

function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <article className="glass rounded-2xl p-5" data-testid={`card-${title.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-5 grid size-7 place-items-center rounded-lg bg-[#29306a]/40 text-[#8290ff]">{icon}</div><h3 className="text-[12px] font-semibold text-[#dedfe4]">{title}</h3><p className="mt-2 text-[11px] leading-[1.5] text-[#858792]">{children}</p></article>;
}

function ExpertiseCard({ item }: { item: (typeof expertise)[number] }) {
  const Icon = item.icon;
  return <article className="glass min-h-[172px] rounded-2xl p-5 transition-transform hover:-translate-y-1" data-testid={`card-expertise-${item.name.toLowerCase().replaceAll(' ', '-')}`}>
    <div className="flex items-center gap-3 text-[12px] font-semibold text-[#e0e0e5]"><Icon size={18} color={item.color} /> {item.name}</div>
    {item.name === 'AI Prompt Engineering' && <div className="mt-6 space-y-3">{[['Claude / ChatGPT / Gemini', '97%'], ['Design System Prompting', '94%'], ['Code Generation & QA', '90%']].map(([label, value]) => <div key={label}><div className="mb-1 flex justify-between text-[10px] text-[#a4a6ae]"><span>{label}</span><span>{value}</span></div><div className="h-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-[#dfe0e3]" style={{ width: value }} /></div></div>)}</div>}
    {item.name === 'UI/UX Design' && <div className="mt-6 flex gap-2">{[['Figma', Figma], ['Framer', Layers3], ['Systems', Layers3]].map(([label, IconComponent]) => { const I = IconComponent as typeof Layers3; return <div key={label as string} className="grid h-16 flex-1 place-items-center gap-1 rounded-lg bg-white/[.045] text-[9px] text-[#868892]"><I size={20} strokeWidth={1.4} /><span>{label as string}</span></div>; })}</div>}
    {item.name === 'Frontend Stack' && <div className="mt-6 flex flex-wrap gap-2">{['Next.js', 'Tailwind', 'Vercel', 'Git', 'TypeScript'].map((tag) => <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-[#a0a2ab]">{tag}</span>)}</div>}
  </article>;
}

function TemplateCard({ template, onGet, onPreview }: { template: typeof templates[number]; onGet: () => void; onPreview: () => void }) {
  return <article className={`glass grid overflow-hidden rounded-2xl ${template.reverse ? 'lg:grid-cols-[.98fr_1.02fr]' : 'lg:grid-cols-[1.02fr_.98fr]'}`} data-testid={`card-template-${template.id}`}>
    <div className={`flex min-h-[340px] flex-col justify-center p-7 sm:p-10 ${template.reverse ? 'lg:order-2' : ''}`}>
      <p className="flex items-center gap-2 font-mono text-[10px] tracking-[.08em]" style={{ color: template.color }}><span className="size-1.5 rounded-full" style={{ backgroundColor: template.color }} /> {template.type}</p>
      <h3 className="mt-4 max-w-[390px] font-display text-[20px] font-semibold tracking-[-.04em] text-[#ecedf0]">{template.title}</h3>
      <p className="mt-3 max-w-[390px] text-[12px] leading-[1.62] text-[#9597a1]">{template.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{template.tags.map((tag) => <span key={tag} className="rounded-md border border-white/[.08] px-2 py-1 font-mono text-[9px] tracking-[.04em] text-[#777985]">{tag}</span>)}</div>
      <div className="mt-7 flex items-center gap-5 text-[11px] font-semibold"><button onClick={onGet} className="flex items-center gap-1.5 text-[#e7e7ea] hover:text-white" data-testid={`button-get-template-${template.id}`}>Get Template <ExternalLink size={12} /></button><button onClick={onPreview} className="flex items-center gap-1.5 text-[#777984] hover:text-[#d9dae0]" data-testid={`button-preview-template-${template.id}`}>Preview <Play size={11} /></button></div>
    </div>
    <div className={`relative min-h-[255px] overflow-hidden border-white/[.08] bg-[#171a27] ${template.reverse ? 'border-r lg:order-1' : 'border-l'}`}>
      {template.id === 'stack' ? <img src={template.image} alt="Stack developer portfolio preview" className="h-full w-full object-cover opacity-80 transition-transform duration-500 hover:scale-105" data-testid="img-template-stack" /> : <ArchitectureVisual />}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#101117]/50 via-transparent to-[#6d6ca0]/10" />
    </div>
  </article>;
}

function ArchitectureVisual() {
  return <div className="relative h-full min-h-[255px] overflow-hidden bg-[#22252e]"><div className="absolute inset-0 opacity-80" style={{ background: 'linear-gradient(137deg, transparent 30%, rgba(185,191,201,.35) 30.4%, transparent 31%), linear-gradient(35deg, transparent 42%, rgba(139,148,159,.3) 42.4%, transparent 43%), linear-gradient(120deg, #424751 0 10%, #252a34 10% 21%, #6a707b 21% 22%, #252a34 22% 44%, #81858b 44% 45%, #343944 45% 100%)' }} /><div className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[.2em] text-white/45">02 / 04 — BLUEPRINT</div></div>;
}

function QuoteCard({ quote, name, role, initials }: { quote: string; name: string; role: string; initials: string }) {
  return <article className="glass relative rounded-2xl p-7 sm:p-8" data-testid={`card-testimonial-${initials.toLowerCase()}`}><span className="absolute right-6 top-5 font-display text-5xl leading-none text-white/[.08]">”</span><p className="max-w-[480px] text-[13px] leading-[1.6] text-[#b7b8c0]">“{quote}”</p><div className="mt-6 flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#393b42] text-[10px] font-semibold text-[#dadbe0]">{initials}</span><div><p className="text-[11px] font-semibold text-[#dedfe4]">{name}</p><p className="mt-0.5 font-mono text-[8px] tracking-[.05em] text-[#70727c]">{role}</p></div></div></article>;
}

function Dialog({ type, onClose }: { type: 'project' | 'pricing' | 'preview'; onClose: () => void }) {
  const isProject = type === 'project';
  const isPricing = type === 'pricing';
  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#06070a]/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" data-testid="dialog-overlay">
    <div className="glass w-full max-w-[470px] rounded-2xl p-6 sm:p-8" data-testid={`dialog-${type}`}>
      <div className="flex items-start justify-between"><div><p className="font-mono text-[10px] tracking-[.15em] text-[#8589cf]">{isProject ? 'LET’S WORK TOGETHER' : isPricing ? 'TEMPLATE ACCESS' : 'ADPLAY LIBRARY'}</p><h2 className="mt-3 font-display text-2xl font-semibold tracking-[-.05em] text-[#eef0f2]">{isProject ? 'Start a project' : isPricing ? 'Simple, considered pricing.' : 'More is on the way.'}</h2></div><button onClick={onClose} className="grid size-8 place-items-center rounded-full bg-white/[.06] text-[#a6a8b0] hover:bg-white/[.1]" aria-label="Close dialog" data-testid="button-close-dialog"><X size={15} /></button></div>
      {isProject ? <form onSubmit={(event) => { event.preventDefault(); onClose(); }} className="mt-7 space-y-4"><label className="block text-[11px] text-[#9799a4]">Your email<input required type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5f616b] focus:border-[#777fff]" data-testid="input-project-email" /></label><label className="block text-[11px] text-[#9799a4]">A little about the project<textarea required placeholder="What are we making?" rows={3} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5f616b] focus:border-[#777fff]" data-testid="input-project-message" /></label><button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f1f2f4] py-3 text-[12px] font-semibold text-[#191a20]" data-testid="button-submit-project">Send inquiry <ArrowRight size={14} /></button></form> : <div className="mt-7"><div className="rounded-xl border border-white/10 bg-white/[.04] p-4"><p className="text-[12px] font-semibold text-[#e2e3e7]">{isPricing ? 'Template license' : 'New templates, monthly.'}</p><p className="mt-2 text-[12px] leading-relaxed text-[#92949f]">{isPricing ? 'Every prompt framework includes lifetime updates, commercial use, and the exact Design-DNA that makes AdPlay templates feel considered.' : 'We are shaping the next set of prompts for studios, makers, and teams who care about the last 10%.'}</p></div><button onClick={onClose} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f1f2f4] py-3 text-[12px] font-semibold text-[#191a20]" data-testid="button-dialog-continue"><Check size={14} /> {isPricing ? 'Got it' : 'Keep me posted'}</button></div>}
    </div>
  </div>;
}

export default App;