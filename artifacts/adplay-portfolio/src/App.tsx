import { type ReactNode, useState } from 'react';
import {
  ArrowRight, BarChart3, Globe2, Mail, MapPin, Menu,
  Sparkles, Target, X, Zap,
} from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import formalPortrait from '@assets/PP_formal_1788778556647.png';
import eventTeamPhoto from '@assets/Cuplikan_layar_2026-09-07_212939_1789030482792.png';
import eventExecutionPhoto from '@assets/Cuplikan_layar_2026-09-07_212958_1789030482790.png';
import mastermindLogo from '@assets/The_Mastermind_Logo_1789035611349.png';

const cvHref = '/Ahsan-Mubarak-CV.pdf';

type ProjectVisual = 'sales' | 'ads' | 'coffee' | 'clv' | 'supply-chain';

type Project = {
  slug: string;
  number: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  category: string;
  visual: ProjectVisual;
  visualLabel: string;
  accent: string;
  reverse?: boolean;
};

const projects: Project[] = [
  {
    slug: 'sales-performance',
    number: '01',
    title: 'Sales Performance Analysis',
    context: 'CPX SPORTWEAR · Freelance',
    description: 'Analyzed 6,744 transactions and 11,307 SKU records to uncover sales patterns, product performance, and purchasing behavior.',
    tags: ['Python', 'SQL', 'Excel', 'Looker Studio'],
    category: 'SALES · BUSINESS ANALYTICS',
    visual: 'sales',
    visualLabel: 'SALES OVERVIEW',
    accent: '#7b83ff',
  },
  {
    slug: 'google-ads-campaign-performance',
    number: '02',
    title: 'Google Ads Campaign Performance Analysis',
    context: 'Independent Project',
    description: 'Evaluated advertising performance across CTR, conversion rate, ROI, and funnel stages to identify conversion bottlenecks and optimization opportunities.',
    tags: ['Python', 'SQL', 'Excel', 'Looker Studio'],
    category: 'MARKETING · PERFORMANCE ANALYTICS',
    visual: 'ads',
    visualLabel: 'CAMPAIGN FUNNEL',
    accent: '#6194ff',
    reverse: true,
  },
  {
    slug: 'coffee-shop-sales-profit',
    number: '03',
    title: 'Coffee Shop Sales & Profit Analysis',
    context: 'Independent Project',
    description: 'Analyzed sales and profit data to identify high-performing products, profitable markets, and opportunities to improve overall business performance.',
    tags: ['Python', 'SQL', 'Looker Studio'],
    category: 'PROFITABILITY · BUSINESS ANALYTICS',
    visual: 'coffee',
    visualLabel: 'PROFITABILITY VIEW',
    accent: '#a264ef',
  },
  {
    slug: 'customer-lifetime-value',
    number: '04',
    title: 'Customer Lifetime Value Analysis',
    context: 'Independent Project',
    description: 'Identified and profiled high-value customers to uncover opportunities for targeted retention and customer growth strategies.',
    tags: ['Python', 'SQL', 'Looker Studio'],
    category: 'CUSTOMER ANALYTICS · RETENTION',
    visual: 'clv',
    visualLabel: 'CUSTOMER SEGMENTS',
    accent: '#7b83ff',
    reverse: true,
  },
  {
    slug: 'supply-chain-fulfillment',
    number: '05',
    title: 'Supply Chain Fulfillment Analysis',
    context: 'Independent Project',
    description: 'Investigated fulfillment performance to identify potential operational bottlenecks and understand the factors affecting order fulfillment.',
    tags: ['Python', 'SQL', 'Looker Studio'],
    category: 'OPERATIONS · SUPPLY CHAIN ANALYTICS',
    visual: 'supply-chain',
    visualLabel: 'FULFILLMENT FLOW',
    accent: '#6194ff',
  },
];

const experiencePillars = [
  {
    number: '01',
    title: 'Leadership & Coordination',
    description: 'Structured the team, delegated responsibilities, and coordinated preparation across members and related divisions to ensure responsibilities were clearly understood and completed on time.',
  },
  {
    number: '02',
    title: 'Planning & Initiative',
    description: 'Developed the event concept and contributed to the rundown, while taking initiative to handle additional responsibilities outside my initial scope, including the assessment format and timekeeper card design.',
  },
  {
    number: '03',
    title: 'Team & Execution',
    description: 'Supported team members throughout preparation, initiated team bonding activities to strengthen collaboration, and made real-time adjustments during the event to keep execution aligned with the planned objectives.',
  },
];

const eventMaterials = [
  { title: 'Event Map & Rules', type: 'map', label: 'MAP / RULES', accent: '#7b83ff' },
  { title: 'Event Rundown', type: 'rundown', label: 'RUN OF SHOW', accent: '#6194ff' },
  { title: 'Assessment Format', type: 'assessment', label: 'ASSESSMENT', accent: '#a264ef' },
  { title: 'Timekeeper Card', type: 'timekeeper', label: 'TIMEKEEPER', accent: '#7b83ff' },
] as const;

const experienceHighlights = ['Leadership', 'Planning', 'Execution'];

const technicalSkills = [
  'Python',
  'SQL',
  'Microsoft Excel',
  'Looker Studio',
  'Data Analysis',
  'Statistical Analysis',
  'Data Visualization',
  'Business KPI Analysis',
];

const coreSkills = [
  'Problem Solving',
  'Critical Thinking',
  'Communication',
  'Attention to Detail',
  'Team Coordination',
  'Continuous Learning',
];

const languages = ['Indonesian — Native', 'English — Advanced', 'Arabic — Basic'];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-hidden">
      <div className="shell">
        <nav className="glass sticky top-3 z-40 mt-3 flex h-14 items-center justify-between rounded-[18px] px-4 sm:px-5" data-testid="nav-main">
          <button onClick={() => scrollToId('top')} className="flex items-center gap-2.5" data-testid="button-logo">
            <span className="grid size-7 place-items-center rounded-[7px] bg-[#f1f2f4] text-[11px] font-bold text-[#16171b]">AM</span>
            <span className="font-display text-[14px] font-semibold tracking-[-.03em] text-[#e6e7eb]">Ahsan Mubarak</span>
          </button>
          <div className="hidden items-center gap-8 text-[12px] text-[#8d8f9a] sm:flex">
            <a href="#about" className="transition-colors hover:text-white" data-testid="link-nav-about">About</a>
            <a href="#projects" className="transition-colors hover:text-white" data-testid="link-nav-projects">Projects</a>
            <a href="#experience" className="transition-colors hover:text-white" data-testid="link-nav-experience">Experience</a>
            <a href="#skills" className="transition-colors hover:text-white" data-testid="link-nav-skills">Skills</a>
            <a href="#contact" className="transition-colors hover:text-white" data-testid="link-nav-contact">Contact</a>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={mastermindLogo} alt="" aria-hidden="true" className="size-8 rounded-lg object-cover opacity-90" data-testid="img-navbar-symbol" />
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-9 place-items-center rounded-full border border-white/10 text-[#bfc1ca] sm:hidden" aria-label="Open menu" data-testid="button-mobile-menu">
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
          {menuOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-[#171920]/95 p-2 shadow-2xl backdrop-blur-xl sm:hidden" data-testid="menu-mobile">
              {[['About', 'about'], ['Projects', 'projects'], ['Experience', 'experience'], ['Skills', 'skills'], ['Contact', 'contact']].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-[#c7c8cf] hover:bg-white/[.07]" data-testid={`link-mobile-${id}`}>{label}</a>
              ))}
            </div>
          )}
        </nav>

        <section id="top" className="relative grid min-h-[calc(100dvh-5rem)] items-center gap-12 px-0 pb-20 pt-20 lg:grid-cols-[1.01fr_.99fr] lg:gap-16 lg:pt-16">
          <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#1e818b]/[.09] blur-[100px]" />
          <div className="relative z-10">
            <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#6373df]/25 bg-[#313d9d]/10 px-3 py-1.5 text-[11px] font-medium tracking-[.03em] text-[#8994ee]" data-testid="status-availability">
              <span className="size-1.5 rounded-full bg-[#707fff] shadow-[0_0_10px_#6877ff]" /> OPEN TO OPPORTUNITIES
            </div>
            <h1 className="reveal reveal-delay-1 max-w-[580px] font-display text-[clamp(3.7rem,7vw,6.2rem)] font-medium leading-[.91] tracking-[-.075em] text-[#f1f1f3]" data-testid="text-hero-title">
              Ahsan Mubarak.<br /><span className="text-[#76777f]">Data Analyst.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-[475px] text-[15px] leading-[1.52] text-[#91939d]" data-testid="text-hero-description">
              Turning data into clear insights, meaningful decisions, and practical solutions. Building toward Data Science and AI/ML.
            </p>
            <div className="reveal reveal-delay-3 mt-7 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollToId('projects')} className="group inline-flex items-center gap-2 rounded-full bg-[#f1f2f4] px-5 py-3 text-[12px] font-semibold text-[#17181d] transition-transform hover:-translate-y-0.5" data-testid="button-view-portfolio">View Portfolio <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" /></button>
              <a href={cvHref} download="Ahsan-Mubarak-CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-5 py-3 text-[12px] font-semibold text-[#dedfe4] transition-colors hover:bg-white/[.11]" data-testid="link-download-cv">Download CV</a>
            </div>
            <div className="mt-7 flex items-center gap-5 border-t border-white/[.07] pt-5 text-[#858791]">
              <a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="WhatsApp" data-testid="link-social-whatsapp"><FaWhatsapp size={17} /></a>
              <a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn" data-testid="link-social-linkedin"><FaLinkedinIn size={16} /></a>
              <a href="mailto:ahsanmubarak2729@gmail.com" className="transition-colors hover:text-white" aria-label="Email" data-testid="link-social-email"><Mail size={17} strokeWidth={1.5} /></a>
              <a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub" data-testid="link-social-github"><FaGithub size={17} /></a>
              <a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Kaggle" data-testid="link-social-kaggle"><FaKaggle size={16} /></a>
            </div>
          </div>
          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[455px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-5 rounded-[28px] bg-[#5653a8]/10 blur-3xl" />
            <div className="relative aspect-[.92] overflow-hidden rounded-[20px] border border-white/10 bg-[#b6b7bc]">
              <img src={formalPortrait} alt="Ahsan Mubarak, data analyst" className="h-full w-full object-cover grayscale" style={{ objectPosition: 'center 60%' }} data-testid="img-founder-portrait" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[13px] border border-white/15 bg-[#5a5b5e]/90 px-4 py-3 backdrop-blur-lg">
                <div><p className="text-[12px] font-semibold text-white">Ahsan Mubarak</p><p className="font-mono text-[8px] tracking-[.13em] text-white/60">DATA • SCIENCE • ANALYTICS</p></div>
                <Zap size={17} fill="#f2dc3d" stroke="#f2dc3d" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <SectionKicker>About Me</SectionKicker>
              <p className="mt-3 max-w-[650px] text-[15px] leading-[1.55] text-[#a2a3ac]" data-testid="text-about-description">
                I'm a Data Science student interested in turning data into clear insights and practical solutions. My work focuses on data analysis, business performance, and structured problem-solving, with experience across freelance and independent projects.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <InfoCard icon={<Target size={17} />} title="My Approach">I enjoy understanding the story behind the numbers — identifying meaningful patterns, evaluating performance, and translating findings into practical insights.</InfoCard>
                <InfoCard icon={<BarChart3 size={17} />} title="What I Work On">From sales and marketing to e-commerce and operations, I explore different business problems through data and analytical thinking.</InfoCard>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 sm:p-6">
              <p className="text-[12px] font-semibold text-[#dddde3]">Focus Areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Data Analysis', 'Business Analytics', 'Data Visualization', 'Statistical Analysis'].map((value) => <span key={value} className="rounded-full bg-white/[.08] px-3 py-1.5 text-[11px] text-[#a9abb5]" data-testid={`badge-focus-${value.toLowerCase().replaceAll(' ', '-')}`}>{value}</span>)}
              </div>
              <p className="mt-16 text-[12px] font-semibold text-[#dddde3]">Currently Building</p>
              <div className="mt-4">
                <p className="font-display text-[18px] font-semibold tracking-[-.035em] text-[#e7e7eb]">Data Science → AI/ML</p>
                <p className="mt-2 text-[12px] leading-[1.55] text-[#8a8c97]">Strengthening my foundation in analytics, statistics, programming, and research.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Projects</SectionKicker>
              <p className="mt-2 max-w-[640px] text-[13px] text-[#80828c]">A selection of end-to-end data analytics projects, from data preparation and analysis to dashboards, insights, and recommendations.</p>
            </div>
            <span className="hidden font-mono text-[10px] tracking-[.14em] text-[#5f626e] sm:block">01 / 05</span>
          </div>
          <div className="mt-8 space-y-5">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
          </div>
        </section>

        <section id="experience" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div>
            <SectionKicker>Experience</SectionKicker>
            <p className="mt-2 max-w-[640px] text-[13px] text-[#80828c]">A leadership experience grounded in planning, coordination, initiative, and real-time execution.</p>
          </div>
          <article className="glass mt-8 overflow-hidden rounded-2xl transition-transform hover:-translate-y-1" data-testid="card-experience-event-division-leader">
            <div className="grid lg:grid-cols-[.84fr_1.16fr]">
              <div className="border-b border-white/[.08] p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <p className="font-mono text-[10px] tracking-[.12em] text-[#7b83ff]">LEADERSHIP EXPERIENCE</p>
                <h3 className="mt-5 max-w-[360px] font-display text-[26px] font-semibold leading-[1.04] tracking-[-.05em] text-[#ecedf0]">Event Division Leader</h3>
                <p className="mt-3 text-[12px] text-[#a0a2ab]">Creative Night · Kampung Inggris</p>
                <div className="mt-7 inline-flex rounded-full border border-white/[.08] bg-white/[.05] px-3 py-1.5 font-mono text-[10px] tracking-[.06em] text-[#b8bac3]">August 2026</div>
              </div>
              <div className="flex flex-col items-start justify-center p-7 sm:p-9">
                <p className="max-w-[560px] text-[13px] leading-[1.62] text-[#9597a1]">Led the event division from planning to execution, coordinating team responsibilities, developing the event structure, and taking initiative to support additional operational needs.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experienceHighlights.map((highlight) => <span key={highlight} className="rounded-md border border-white/[.08] px-2.5 py-1 font-mono text-[9px] tracking-[.04em] text-[#777985]">{highlight}</span>)}
                </div>
                <a href="/experience/event-division-leader" className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold text-[#e7e7ea] transition-colors hover:text-white" data-testid="link-view-experience">View Experience <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>
        </section>

        <section id="skills" className="section-rule scroll-mt-24 py-24 sm:py-28">
          <div>
            <SectionKicker>Skills</SectionKicker>
            <p className="mt-2 max-w-[640px] text-[13px] text-[#80828c]">Tools and capabilities I use to turn data into practical insights.</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="glass rounded-2xl p-7 transition-transform hover:-translate-y-1 sm:p-9" data-testid="card-skills-technical">
              <p className="font-mono text-[10px] tracking-[.12em] text-[#7b83ff]">PRIMARY CAPABILITIES</p>
              <div className="mt-4 flex items-center gap-2.5">
                <BarChart3 size={18} strokeWidth={1.7} className="text-[#8290ff]" />
                <h3 className="font-display text-[24px] font-semibold tracking-[-.045em] text-[#ecedf0]">Technical Skills</h3>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {technicalSkills.map((skill) => <span key={skill} className="rounded-md border border-white/[.08] bg-white/[.035] px-3 py-2 text-[11px] text-[#b2b4bd] transition-colors hover:border-white/[.16] hover:text-[#e4e5e9]">{skill}</span>)}
              </div>
            </article>
            <div className="grid gap-5">
              <SkillGroup icon={<Sparkles size={17} strokeWidth={1.7} />} title="AI-Assisted Development" items={['Replit', 'AI Coding Workflows']} testId="card-skills-ai-assisted" />
              <SkillGroup icon={<Globe2 size={17} strokeWidth={1.7} />} title="Languages" items={languages} testId="card-skills-languages" />
            </div>
          </div>
          <div className="mt-5">
            <SkillGroup icon={<Target size={17} strokeWidth={1.7} />} title="Core Skills" items={coreSkills} testId="card-skills-core" />
          </div>
        </section>

        <section id="contact" className="section-rule scroll-mt-24 pb-20 pt-12 sm:pb-24 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-[10px] tracking-[.16em] text-[#8589cf]" data-testid="text-contact-status">OPEN TO OPPORTUNITIES</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-.06em] text-[#eeeff2]" data-testid="heading-contact-cta">Let's work with data.</h2>
              <p className="mt-4 max-w-[560px] text-[14px] leading-[1.6] text-[#91939d]" data-testid="text-contact-description">Interested in working together or discussing a data analytics opportunity? I'd be happy to connect.</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <a href="mailto:ahsanmubarak2729@gmail.com" className="group inline-flex items-center gap-2 rounded-full bg-[#f4f5f7] px-6 py-3.5 text-[12px] font-semibold text-[#14151a] shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-transform hover:-translate-y-0.5" data-testid="link-contact-email">Get in Touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" /></a>
              <div className="space-y-2 text-[11px] text-[#858792] lg:text-right">
                <a href="mailto:ahsanmubarak2729@gmail.com" className="flex items-center gap-2 transition-colors hover:text-[#d9dae0] lg:justify-end" data-testid="link-contact-email-detail"><Mail size={13} strokeWidth={1.5} /> ahsanmubarak2729@gmail.com</a>
                <p className="flex items-center gap-2 lg:justify-end" data-testid="text-contact-location"><MapPin size={13} strokeWidth={1.5} /> Based in Bandung, Indonesia</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[.07] py-8 text-[11px] text-[#6f727d]" data-testid="footer-main">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[16px] font-semibold tracking-[-.035em] text-[#e5e6ea]" data-testid="text-footer-name">Ahsan Mubarak.</p>
              <p className="mt-1 text-[11px] text-[#858792]" data-testid="text-footer-role">Data Analyst.</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-[11px]" aria-label="Footer navigation">
              {[['About', 'about'], ['Projects', 'projects'], ['Experience', 'experience'], ['Skills', 'skills'], ['Contact', 'contact']].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="transition-colors hover:text-white" data-testid={`link-footer-${id}`}>{label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4 text-[#777985]" aria-label="Social links">
              <a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="WhatsApp" data-testid="link-footer-whatsapp"><FaWhatsapp size={13} /></a>
              <a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn" data-testid="link-footer-linkedin"><FaLinkedinIn size={12} /></a>
              <a href="mailto:ahsanmubarak2729@gmail.com" className="transition-colors hover:text-white" aria-label="Email" data-testid="link-footer-email"><Mail size={14} strokeWidth={1.5} /></a>
              <a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub" data-testid="link-footer-github"><FaGithub size={13} /></a>
              <a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Kaggle" data-testid="link-footer-kaggle"><FaKaggle size={12} /></a>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-white/[.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p data-testid="text-footer-copyright">© 2026 Ahsan Mubarak. All rights reserved.</p>
            <a href="#top" className="transition-colors hover:text-white" data-testid="link-footer-top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-[20px] font-semibold tracking-[-.04em] text-[#e8e8eb]" data-testid={`heading-${String(children).toLowerCase().replaceAll(' ', '-')}`}>{children}</h2>;
}

function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <article className="glass rounded-2xl p-5" data-testid={`card-${title.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-5 grid size-7 place-items-center rounded-lg bg-[#29306a]/40 text-[#8290ff]">{icon}</div><h3 className="text-[12px] font-semibold text-[#dedfe4]">{title}</h3><p className="mt-2 text-[11px] leading-[1.5] text-[#858792]">{children}</p></article>;
}

function SkillGroup({ icon, title, items, testId }: { icon: ReactNode; title: string; items: string[]; testId: string }) {
  return <article className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1" data-testid={testId}>
    <div className="flex items-center gap-2.5 text-[#8290ff]">
      {icon}
      <h3 className="text-[12px] font-semibold text-[#dedfe4]">{title}</h3>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => <span key={item} className="rounded-full bg-white/[.07] px-3 py-1.5 text-[10px] text-[#a9abb5] transition-colors hover:bg-white/[.11] hover:text-[#d8d9df]">{item}</span>)}
    </div>
  </article>;
}

function ExperiencePillar({ pillar }: { pillar: (typeof experiencePillars)[number] }) {
  return <article className="border-t border-white/[.08] pt-5 first:border-t-0 first:pt-0">
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[.12em] text-[#7b83ff]">{pillar.number}</span>
      <h4 className="text-[12px] font-semibold text-[#dedfe4]">{pillar.title}</h4>
    </div>
    <p className="mt-2 max-w-[560px] text-[12px] leading-[1.6] text-[#858792]">{pillar.description}</p>
  </article>;
}

function EventMaterialCard({ material }: { material: (typeof eventMaterials)[number] }) {
  return <article className="glass group rounded-2xl p-3 transition-transform hover:-translate-y-1" data-testid={`card-event-material-${material.type}`}>
    <div className="relative aspect-[1.18] overflow-hidden rounded-xl border border-white/[.08] bg-[#151721] p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-[.12em]" style={{ color: material.accent }}>{material.label}</span>
        <span className="size-1.5 rounded-full" style={{ backgroundColor: material.accent }} />
      </div>
      <MaterialGraphic type={material.type} accent={material.accent} />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#151721] to-transparent" />
    </div>
    <div className="px-1 pb-1 pt-4">
      <p className="text-[11px] font-semibold text-[#dedfe4]">{material.title}</p>
      <p className="mt-1 text-[10px] text-[#777985]">Preview placeholder</p>
    </div>
  </article>;
}

function MaterialGraphic({ type, accent }: { type: (typeof eventMaterials)[number]['type']; accent: string }) {
  if (type === 'map') {
    return <div className="relative mt-6 h-28 rounded-lg border border-white/[.07] bg-white/[.025]">
      <span className="absolute left-[18%] top-[28%] size-2 rounded-full" style={{ backgroundColor: accent }} />
      <span className="absolute left-[48%] top-[52%] size-2 rounded-full" style={{ backgroundColor: accent }} />
      <span className="absolute right-[18%] top-[22%] size-2 rounded-full" style={{ backgroundColor: accent }} />
      <span className="absolute left-[20%] top-[32%] h-px w-[32%] rotate-[22deg] bg-white/20" />
      <span className="absolute left-[50%] top-[50%] h-px w-[29%] -rotate-[28deg] bg-white/20" />
      <span className="absolute left-[16%] right-[16%] top-[74%] h-px bg-white/[.08]" />
    </div>;
  }
  if (type === 'rundown') {
    return <div className="mt-6 space-y-2.5">
      {[['18:00', 'Opening'], ['18:30', 'Main program'], ['19:15', 'Assessment'], ['20:00', 'Closing']].map(([time, label], index) => <div key={time} className="flex items-center gap-2.5 rounded-md border border-white/[.07] bg-white/[.025] px-2.5 py-2"><span className="font-mono text-[8px]" style={{ color: index === 1 ? accent : '#777985' }}>{time}</span><span className="h-px flex-1 bg-white/[.1]" /><span className="text-[8px] text-[#858792]">{label}</span></div>)}
    </div>;
  }
  if (type === 'assessment') {
    return <div className="mt-6 grid grid-cols-3 gap-2">
      {Array.from({ length: 12 }, (_, index) => <span key={index} className={`aspect-square rounded-[3px] border border-white/[.07] ${index === 4 || index === 8 ? 'bg-white/[.18]' : 'bg-white/[.035]'}`} style={index === 4 || index === 8 ? { borderColor: `${accent}80` } : undefined} />)}
    </div>;
  }
  return <div className="mt-6 grid place-items-center py-3">
    <div className="grid size-24 place-items-center rounded-full border border-white/[.1]" style={{ boxShadow: `inset 0 0 0 10px ${accent}18` }}>
      <div className="grid size-16 place-items-center rounded-full border border-white/[.08] bg-[#11131a]"><span className="font-mono text-[14px] text-[#d6d7dc]">00:30</span></div>
    </div>
  </div>;
}

function EventPhoto({ src, alt, label, caption, objectPosition }: { src: string; alt: string; label: string; caption: string; objectPosition: string }) {
  return <figure className="glass group overflow-hidden rounded-2xl p-3" data-testid={`photo-event-${label.toLowerCase().replaceAll(' ', '-')}`}>
    <div className="relative aspect-[1.38] overflow-hidden rounded-xl border border-white/[.08] bg-[#151721]">
      <img src={src} alt={alt} className="h-full w-full object-cover brightness-90 contrast-105 saturate-75 transition-transform duration-500 group-hover:scale-[1.02]" style={{ objectPosition }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15]/55 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[.13em] text-white/75">{label}</span>
    </div>
    <figcaption className="px-1 pb-1 pt-4 text-[11px] leading-[1.5] text-[#858792]">{caption}</figcaption>
  </figure>;
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return <article className={`glass grid overflow-hidden rounded-2xl transition-transform hover:-translate-y-1 ${featured ? 'lg:grid-cols-[1.04fr_.96fr]' : 'lg:grid-cols-[.94fr_1.06fr]'}`} data-testid={`card-project-${project.slug}`}>
    <ProjectVisual project={project} featured={featured} />
    <div className={`flex flex-col justify-center p-7 sm:p-9 ${project.reverse ? 'lg:order-first' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[.1em]" style={{ color: project.accent }}>{project.category}</p>
        <span className="font-mono text-[10px] tracking-[.14em] text-[#5f626e]">{project.number}</span>
      </div>
      <p className="mt-5 text-[11px] text-[#787a85]">{project.context}</p>
      <h3 className={`${featured ? 'text-[24px] sm:text-[28px]' : 'text-[20px]'} mt-2 max-w-[460px] font-display font-semibold leading-[1.05] tracking-[-.045em] text-[#ecedf0]`}>{project.title}</h3>
      <p className="mt-4 max-w-[470px] text-[12px] leading-[1.62] text-[#9597a1]">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => <span key={tag} className="rounded-md border border-white/[.08] px-2 py-1 font-mono text-[9px] tracking-[.04em] text-[#777985]">{tag}</span>)}
      </div>
      <a href={`/case-studies/${project.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-semibold text-[#e7e7ea] transition-colors hover:text-white" data-testid={`link-case-study-${project.slug}`}>
        View Case Study <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>;
}

function ProjectVisual({ project, featured }: { project: Project; featured: boolean }) {
  const chartBars = [38, 56, 44, 72, 61, 86, 67, 94];
  return <div className={`relative overflow-hidden border-b border-white/[.08] bg-[#171a27] p-6 sm:p-8 lg:border-b-0 ${project.reverse ? 'lg:order-last lg:border-l' : 'lg:border-r'} ${featured ? 'min-h-[330px]' : 'min-h-[245px]'}`}>
    <div className="absolute -right-16 -top-20 size-56 rounded-full blur-3xl" style={{ backgroundColor: `${project.accent}18` }} />
    <div className="relative flex items-center justify-between">
      <p className="font-mono text-[9px] tracking-[.14em]" style={{ color: project.accent }}>{project.visualLabel}</p>
      <span className="font-mono text-[8px] tracking-[.12em] text-[#5f626e]">ANALYTICS VIEW</span>
    </div>
    <div className="relative mt-6 rounded-[14px] border border-white/[.08] bg-[#11131a]/75 p-4 shadow-[0_18px_45px_rgba(0,0,0,.18)]">
      {project.visual === 'sales' && <div className="h-[185px]">
        <div className="flex items-end justify-between gap-2 border-b border-white/[.08] pb-3">
          {chartBars.map((height, index) => <span key={index} className="w-full rounded-t-[3px] opacity-80" style={{ height: `${height}px`, backgroundColor: project.accent }} />)}
        </div>
        <div className="mt-4 flex items-center justify-between text-[9px] text-[#777985]"><span>Monthly revenue</span><span className="font-mono text-[#a7a9b3]">+24.8%</span></div>
      </div>}
      {project.visual === 'ads' && <div className="space-y-3 py-4">
        {[
          ['Impressions', '100%', 'bg-white/20'],
          ['Clicks', '68%', 'bg-[#6194ff]'],
          ['Conversions', '34%', 'bg-[#7b83ff]'],
          ['Revenue', '18%', 'bg-white/60'],
        ].map(([label, width, color]) => <div key={label}><div className="mb-1 flex justify-between text-[9px] text-[#858792]"><span>{label}</span><span className="font-mono">{width}</span></div><div className="h-2 rounded-full bg-white/[.06]"><div className={`h-full rounded-full ${color}`} style={{ width }} /></div></div>)}
      </div>}
      {project.visual === 'coffee' && <div className="h-[185px]">
        <div className="grid h-[145px] grid-cols-7 items-end gap-2 border-b border-white/[.08]">
          {[48, 72, 57, 92, 65, 78, 52].map((height, index) => <span key={index} className="rounded-t-[3px] bg-[#a264ef]/75" style={{ height: `${height}%` }} />)}
        </div>
        <div className="mt-4 flex items-center justify-between text-[9px] text-[#777985]"><span>Product margin</span><span className="font-mono text-[#a7a9b3]">Top 12%</span></div>
      </div>}
      {project.visual === 'clv' && <div className="space-y-3 py-2">
        {[
          ['High value', '84%', '#7b83ff'],
          ['Growing', '61%', '#6194ff'],
          ['At risk', '29%', '#a264ef'],
        ].map(([label, width, color]) => <div key={label} className="flex items-center gap-3 rounded-lg border border-white/[.06] bg-white/[.025] px-3 py-2.5"><span className="size-2 rounded-full" style={{ backgroundColor: color }} /><span className="flex-1 text-[10px] text-[#9b9da7]">{label}</span><span className="font-mono text-[10px] text-[#c2c3c9]">{width}</span></div>)}
      </div>}
      {project.visual === 'supply-chain' && <div className="flex items-center justify-between gap-2 py-10">
        {['Orders', 'Pick', 'Ship', 'Delivered'].map((label, index, items) => <div key={label} className="flex min-w-0 flex-1 items-center gap-2"><div className="min-w-0"><span className="mx-auto block size-3 rounded-full border-2" style={{ borderColor: project.accent }} /><p className="mt-3 truncate text-center text-[9px] text-[#858792]">{label}</p></div>{index < items.length - 1 && <span className="h-px flex-1 bg-white/[.12]" />}</div>)}
      </div>}
    </div>
  </div>;
}

export default App;