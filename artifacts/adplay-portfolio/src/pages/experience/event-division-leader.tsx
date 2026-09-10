import { useEffect, type ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight, FileSpreadsheet, FileText } from 'lucide-react';
import { Link } from 'wouter';
import rundownFile from '@assets/RD_CN_DESING__1789054840893.xlsx?url';
import mapRulesFile from '@assets/CN_Map,_Flow,_&_Rule_1789054840892.docx?url';
import assessmentFile from '@assets/Format_Penilaian_Juri_1789054954931.docx?url';
import timekeeperFive from "@assets/Time_Keeper_5'_1789054840888.png";
import timekeeperTwo from "@assets/Time_Keeper_2'_1789054840890.png";
import timekeeperOne from "@assets/Time_Keeper_1'_1789054840891.png";

const linkedinUrl = 'https://lnkd.in/p/gqHfDqGa';

const responsibilities = [
  'Coordinating event division responsibilities',
  'Structuring the event flow',
  'Communicating with team members',
  'Monitoring preparation progress',
  'Supporting event execution',
  'Responding to operational needs during preparation and execution',
];

const highlights = [
  ['Leadership', 'Coordinating the event division and team responsibilities.'],
  ['Planning', 'Structuring the event flow and preparation.'],
  ['Execution', 'Supporting real-time event execution and operational needs.'],
];

const initiative = [
  ['Assessment Format', 'Developed the assessment format to provide a clearer and more structured way of evaluating participants.'],
  ['Event Map & Rules', 'Prepared the event map and rules to help participants and the organizing team understand the event structure and operational guidelines.'],
  ['Timekeeper Paper', 'Prepared a timekeeper reference sheet to support more consistent time management during event execution.'],
];

const learnings = [
  ['Communication', 'Clear communication is important when coordinating responsibilities and keeping the team aligned.'],
  ['Adaptability', 'Event execution does not always follow the original plan, so being able to adapt quickly is essential.'],
  ['Ownership', 'Leadership is not only about assigning responsibilities, but also taking responsibility for the outcome and stepping in when additional support is needed.'],
];

export default function ExperienceEventDivisionLeader() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Event Division Leader | Ahsan Mubarak';
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c11] text-[#ecedf0]">
      <div className="mx-auto w-full max-w-[1120px] px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <Link href="/#experience" className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#c7c8cf] transition-colors hover:text-white">
          <ArrowLeft size={13} /> Back to Experience
        </Link>

        <header className="pb-20 pt-20 sm:pb-24 sm:pt-24">
          <p className="font-mono text-[10px] uppercase tracking-[.15em] text-[#8589cf]">Leadership Experience · August 2026</p>
          <h1 className="mt-7 max-w-[880px] font-display text-[clamp(2.6rem,6.3vw,5.6rem)] font-medium leading-[.96] tracking-[-.065em]">Event Division Leader</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Creative Night · Kampung Inggris', 'Leadership', 'Planning', 'Execution'].map((item) => (
              <span key={item} className="rounded-full border border-white/[.09] bg-white/[.025] px-4 py-2 text-[11px] text-[#9698a2]">{item}</span>
            ))}
          </div>
          <p className="mt-8 max-w-[760px] text-[14px] leading-[1.7] text-[#9698a2]">
            Led the event division from planning to execution, coordinating team responsibilities, developing the event structure, and taking initiative to support additional operational needs.
          </p>
        </header>

        <Section number="01" label="Experience Overview">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Experience Overview</h2>
              <p className="mt-3 text-[12px] text-[#a0a2ab]">Event Division Leader</p>
              <p className="mt-1 text-[12px] text-[#777985]">Creative Night · Kampung Inggris · August 2026</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map(([title, text]) => <TextCard key={title} title={title}>{text}</TextCard>)}
            </div>
          </div>
        </Section>

        <Section number="02" label="Role & Responsibility">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Role & Responsibility</h2>
              <p className="mt-5 text-[13px] leading-[1.7] text-[#9597a1]">
                As the Event Division Leader, I was responsible for coordinating the event division throughout the preparation and execution process, keeping responsibilities organized, and helping ensure that the event structure could be carried out effectively.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((item, index) => (
                <div key={item} className="glass rounded-xl p-4 text-[12px] leading-[1.55] text-[#a0a2ab]">
                  <span className="mr-3 font-mono text-[9px] text-[#7b83ff]">{String(index + 1).padStart(2, '0')}</span>{item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section number="03" label="Planning & Event Structure">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Planning & Event Structure</h2>
              <p className="mt-5 text-[13px] leading-[1.7] text-[#9597a1]">Developed and organized the event structure to provide a clear sequence and timeline for the activities.</p>
            </div>
            <EvidenceCard icon={<FileSpreadsheet size={18} />} eyebrow="EVENT RUNDOWN" title="Run of Show & Coordination Workbook" description="The event rundown provided a shared reference for activity sequence, timing, transitions, logistics, and coordination during the event." href={rundownFile} action="View Rundown" />
          </div>
        </Section>

        <Section number="04" label="Taking Initiative Beyond My Role">
          <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Taking Initiative Beyond My Role</h2>
          <p className="mt-5 max-w-[760px] text-[13px] leading-[1.7] text-[#9597a1]">Beyond my primary responsibilities within the event division, I took initiative to support several operational needs that were important to the overall execution of the event.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {initiative.map(([title, text], index) => <TextCard key={title} title={title} number={String(index + 1).padStart(2, '0')}>{text}</TextCard>)}
          </div>
        </Section>

        <Section number="05" label="Event Execution">
          <div className="glass flex flex-col gap-7 rounded-2xl p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Event Execution</h2>
              <p className="mt-5 max-w-[720px] text-[13px] leading-[1.7] text-[#9597a1]">During the event, I helped ensure that the planned structure was translated into actual execution while responding to situations that required coordination, adaptability, and quick decision-making.</p>
            </div>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#7782e8]/30 bg-[#29306a]/80 px-5 py-3 text-[11px] font-semibold text-[#f2f3f7] transition-all hover:-translate-y-0.5 hover:bg-[#343c78]">
              View Event on LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </Section>

        <Section number="06" label="Supporting Materials">
          <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">Supporting Materials</h2>
          <p className="mt-5 max-w-[700px] text-[13px] leading-[1.7] text-[#9597a1]">Actual planning and operational materials created to support the experience.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <EvidenceCard icon={<FileSpreadsheet size={18} />} eyebrow="PLANNING" title="Event Rundown" description="Activity sequence, timing, logistics, and coordination reference." href={rundownFile} action="Open XLSX" />
            <EvidenceCard icon={<FileText size={18} />} eyebrow="INITIATIVE" title="Assessment Format" description="Structured score sheets for performance, fashion show, and outfit assessment." href={assessmentFile} action="Open DOCX" />
            <EvidenceCard icon={<FileText size={18} />} eyebrow="INITIATIVE" title="Event Map & Rules" description="Venue flow and operational guidance for participants and organizers." href={mapRulesFile} action="Open DOCX" />
          </div>
          <article className="glass mt-4 overflow-hidden rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col justify-between gap-3 px-1 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-[9px] tracking-[.13em] text-[#7b83ff]">INITIATIVE</p>
                <h3 className="mt-2 text-[14px] font-semibold">Timekeeper Paper</h3>
              </div>
              <p className="max-w-[540px] text-[11px] leading-[1.55] text-[#858792]">Reference sheets for five-, two-, and one-minute timing cues during event execution.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[[timekeeperFive, '5-minute timekeeper card'], [timekeeperTwo, '2-minute timekeeper card'], [timekeeperOne, '1-minute timekeeper card']].map(([src, alt]) => (
                <a key={src} href={src} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-xl border border-white/[.08] bg-[#151721]">
                  <img src={src} alt={alt} className="aspect-[1.35] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </a>
              ))}
            </div>
          </article>
        </Section>

        <Section number="07" label="What I Learned">
          <h2 className="font-display text-[29px] font-semibold tracking-[-.05em]">What I Learned</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {learnings.map(([title, text], index) => <TextCard key={title} title={title} number={String(index + 1).padStart(2, '0')}>{text}</TextCard>)}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ number, label, children }: { number: string; label: string; children: ReactNode }) {
  return <section className="border-t border-white/[.07] py-16 sm:py-20">
    <p className="mb-8 font-mono text-[10px] uppercase tracking-[.14em] text-[#5f626e]">{number} — {label}</p>
    {children}
  </section>;
}

function TextCard({ title, number, children }: { title: string; number?: string; children: ReactNode }) {
  return <article className="glass rounded-2xl p-5 sm:p-6">
    {number && <p className="font-mono text-[9px] tracking-[.13em] text-[#7b83ff]">{number}</p>}
    <h3 className={`${number ? 'mt-4' : ''} text-[12px] font-semibold uppercase tracking-[.04em] text-[#dedfe4]`}>{title}</h3>
    <p className="mt-3 text-[11px] leading-[1.6] text-[#858792]">{children}</p>
  </article>;
}

function EvidenceCard({ icon, eyebrow, title, description, href, action }: { icon: ReactNode; eyebrow: string; title: string; description: string; href: string; action: string }) {
  return <article className="glass flex h-full flex-col rounded-2xl p-5 sm:p-6">
    <div className="flex items-center justify-between">
      <span className="grid size-9 place-items-center rounded-lg bg-[#29306a]/45 text-[#8290ff]">{icon}</span>
      <span className="font-mono text-[8px] tracking-[.13em] text-[#666975]">{eyebrow}</span>
    </div>
    <h3 className="mt-6 text-[14px] font-semibold text-[#dedfe4]">{title}</h3>
    <p className="mt-3 flex-1 text-[11px] leading-[1.6] text-[#858792]">{description}</p>
    <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-[#dfe0e5] transition-colors hover:text-white">
      {action} <ArrowUpRight size={12} />
    </a>
  </article>;
}