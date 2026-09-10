import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Boxes, ChevronRight, Clock3, ExternalLink, Lightbulb, Mail, PackageCheck, Ship, Warehouse } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import datasetFile from '@assets/supply_chain_data_1789053436141.csv?url';
import notebookFile from '@assets/Fulfillment-Rate-Analysis-for-Supply-Chain-Optimization_1789053436139.ipynb?url';
import presentationFile from '@assets/Fulfillment_Rate_Analysis_for_Supply_Chain_Optimization_1789053436138.pptx?url';

const accent = '#6194ff';
const sourceUrl = 'https://www.kaggle.com/datasets/harshsingh2209/supply-chain-analysis';
const dashboardUrl = 'https://datastudio.google.com/reporting/425dc128-37db-451b-bc27-96a9714d274e';

const recommendations = [
  ['Investigate Internal Fulfillment Operations', 'Further investigate warehouse utilization, order processing capacity, and internal operational bottlenecks as potential contributors—not confirmed causes—of low fulfillment.'],
  ['Collect More Operational Data', 'Track warehouse processing time, order handling time, inventory allocation, and actual shipment status to test operational hypotheses.'],
  ['Monitor Low-Fulfillment Products', 'Identify products with consistently poor fulfillment performance and investigate their operational patterns.'],
  ['Improve Fulfillment Measurement', 'Replace the Availability proxy with actual shipped-order data when detailed shipping information becomes available.'],
] as const;

export default function CaseStudySupplyChainFulfillment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Fulfillment Rate Analysis for Supply Chain Optimization | Ahsan Mubarak';
    if (description) description.content = 'Supply chain fulfillment analysis investigating stock levels, lead time, and shipping time using Python and Looker Studio.';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0d0f15] pb-12">
      <div className="shell pt-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] transition-colors hover:text-white" data-testid="link-supply-back-projects">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#6194ff]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="mb-6 font-mono text-[10px] tracking-[.1em] text-[#6194ff]">OPERATIONS · SUPPLY CHAIN ANALYTICS</p>
            <h1 className="max-w-[900px] font-display text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-supply-title">
              Fulfillment Rate Analysis for Supply Chain Optimization
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">
              {['Independent Project', 'Python', 'Looker Studio'].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">{item}</span>)}
            </div>
            <p className="mt-8 max-w-[700px] text-[15px] leading-[1.6] text-[#a2a3ac]">
              An operational analysis investigating whether stock levels, lead time, and shipping time help explain low fulfillment performance.
            </p>
          </div>
        </header>

        <div className="grid gap-24">
          <section>
            <SectionLabel number="01">Overview</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <h2 className="font-display text-[22px] font-semibold text-[#e8e8eb]">Business Context &amp; Objective</h2>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">Fulfillment Rate is a key operational and efficiency KPI in supply chain management. It measures how successfully a company fulfills customer orders.</p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">This analysis aims to identify the most likely contributing factors behind low fulfillment performance based on the available data.</p>
                <div className="mt-8 border-l border-[#6194ff]/30 pl-5">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[#777985]">DATA SOURCE</p>
                  <p className="mt-2 text-[14px] font-medium text-[#dedfe4]">Kaggle — Supply Chain Data</p>
                  <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#dfe0e5] hover:text-white" data-testid="link-supply-dataset-source">View Dataset <ExternalLink size={13} /></a>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[9px] tracking-[.12em] text-[#6194ff]">KEY METRIC</p>
                <p className="mt-5 font-display text-[clamp(3.4rem,7vw,5.8rem)] font-semibold leading-none tracking-[-.07em] text-[#ecedf0]">73.65%</p>
                <p className="mt-2 text-[13px] font-semibold text-[#c7c8cf]">Fulfillment Rate</p>
                <div className="mt-7 rounded-xl border border-[#6194ff]/20 bg-[#6194ff]/[.06] p-5">
                  <p className="font-mono text-[9px] tracking-[.1em] text-[#83aaff]">METHODOLOGY NOTE</p>
                  <p className="mt-2 text-[12px] leading-[1.6] text-[#a0a2ab]">Fulfillment Rate in this analysis is calculated using the Availability column as a proxy for actual shipped items, since detailed shipping data is not available.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <SectionLabel number="02">The Data Challenge</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div>
                <h2 className="font-display text-[25px] font-semibold text-[#e8e8eb]">Identifying Potential Drivers Behind Low Fulfillment</h2>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">The company has a fulfillment rate of 73.65%, creating a need to understand what may be contributing to incomplete order fulfillment.</p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">The analysis investigates whether the available operational variables show meaningful relationships with fulfillment performance. It tests relationships; it does not prove causation.</p>
              </div>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <Flow items={['Low Fulfillment', 'Investigate Potential Drivers', 'Stock Levels · Lead Time · Shipping Time', 'Test Relationships', 'Identify What the Data Can and Cannot Explain']} />
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <SectionLabel number="03">Data Preparation</SectionLabel>
            <p className="max-w-[780px] text-[14px] leading-[1.65] text-[#9597a1]">The supply chain data was prepared for relationship analysis between fulfillment performance and order quantities, stock levels, Availability, lead time, and shipping time.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {['Raw Supply Chain Data', 'Fulfillment Rate Calculation', 'Variable Preparation', 'Relationship Analysis', 'Insights'].map((step, index, steps) => (
                <div key={step} className="flex items-center gap-3"><span className="rounded-md border border-white/[.07] bg-white/[.035] px-3 py-2 text-[10px] text-[#aeb0b9]">{step}</span>{index < steps.length - 1 && <ChevronRight size={13} className="text-white/20" />}</div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <PrepCard icon={<PackageCheck size={16} />} label="Fulfillment" text="Fulfillment Rate calculation" />
              <PrepCard icon={<Boxes size={16} />} label="Inventory" text="Stock level analysis" />
              <PrepCard icon={<Clock3 size={16} />} label="Timing" text="Lead time and shipping time" />
              <PrepCard icon={<Warehouse size={16} />} label="Relationship Testing" text="Correlation and visual analysis" />
            </div>
          </section>

          <section className="section-rule pt-20">
            <SectionLabel number="04">Analysis &amp; Key Findings</SectionLabel>
            <div className="grid gap-6">
              <FindingCard icon={<Clock3 size={18} />} title="No Clear Relationship Between Lead Time and Fulfillment" correlation="-0.05">
                The scatter plot showed no clear trend. The weak correlation indicates that lead time is unlikely to be a major factor affecting fulfillment within the available data.
              </FindingCard>
              <FindingCard icon={<Boxes size={18} />} title="High Stock Levels Don't Ensure High Fulfillment" correlation="-0.10">
                No strong pattern was observed. Stock level 36 recorded a fulfillment rate of 7.1%, while stock level 80 recorded 10.4%, showing that high stock alone does not guarantee strong fulfillment.
              </FindingCard>
              <FindingCard icon={<Ship size={18} />} title="Shipping Time Also Fails to Predict Fulfillment" correlation="-0.05">
                The data points were scattered without a clear trend. Shipping time did not show a strong relationship with fulfillment in the available data.
              </FindingCard>
            </div>
            <div className="glass relative mt-12 overflow-hidden rounded-2xl border border-[#6194ff]/20 p-7 sm:p-9">
              <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#6194ff]/10 blur-[60px]" />
              <div className="relative">
                <p className="font-mono text-[9px] tracking-[.12em] text-[#6194ff]">WHAT WE KNOW SO FAR</p>
                <h3 className="mt-4 font-display text-[26px] font-semibold text-[#ecedf0]">No Strong Relationship Found</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {['No strong relationship was found between fulfillment and stock levels, lead time, or shipping time.', 'Products with high stock levels can still show poor fulfillment performance.', 'Lead time and shipping time show correlation magnitudes below 6%.', 'Low warehouse or order-processing utilization remains a hypothesis that cannot be tested with the available data.'].map((text) => <p key={text} className="rounded-xl border border-white/[.06] bg-white/[.025] p-4 text-[12px] leading-[1.6] text-[#a0a2ab]">{text}</p>)}
                </div>
                <p className="mt-6 text-[12px] leading-[1.6] text-[#858792]">Further investigation is needed to confirm the underlying operational cause and guide improvements.</p>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <SectionLabel number="05">Dashboard</SectionLabel>
            <div className="glass relative overflow-hidden rounded-2xl border border-[#6194ff]/20 bg-gradient-to-br from-[#171926] to-[#0d0f15] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#6194ff]/10 blur-[80px]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div><h3 className="font-display text-[28px] font-semibold text-[#e8e8eb]">Interactive Dashboard</h3><p className="mt-3 max-w-[620px] text-[14px] leading-[1.65] text-[#9597a1]">Explore fulfillment performance and its potential relationship with stock levels, lead time, and shipping time.</p></div>
                <a href={dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6194ff] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(97,148,255,.23)] transition-all hover:-translate-y-0.5 hover:bg-[#76a3ff]" data-testid="link-supply-dashboard">Open Dashboard <ExternalLink size={15} /></a>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <SectionLabel number="06">Recommendations</SectionLabel>
            <div className="grid gap-5">
              {recommendations.map(([title, text]) => <div key={title} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"><div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#6194ff]"><Lightbulb size={18} /></div><div><h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">{title}</h4><p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">{text}</p></div></div></div>)}
            </div>
          </section>

          <section className="section-rule pb-20 pt-20">
            <SectionLabel number="07">Project Files</SectionLabel>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Dataset', 'supply_chain_data.csv', datasetFile, 'Supply chain dataset used for the analysis.', 'DOWNLOAD CSV'],
                ['Analysis Notebook', 'Fulfillment-Rate-Analysis-for-Supply-Chain-Optimization.ipynb', notebookFile, 'Python notebook containing the analysis workflow.', 'DOWNLOAD IPYNB'],
                ['Presentation', 'Fulfillment Rate Analysis for Supply Chain Optimization.pptx', presentationFile, 'Project presentation covering the operational problem, analysis, findings, and recommendations.', 'DOWNLOAD PPTX'],
              ].map(([title, filename, href, description, action]) => <a key={title} href={href} download={filename} className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid={`link-supply-file-${title.toLowerCase().replace(' ', '-')}`}><div><h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">{title} <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1" /></h4><p className="mt-2 text-[12px] leading-[1.5] text-[#858792]">{description}</p><p className="mt-2 break-words font-mono text-[8px] text-[#656873]">{filename}</p></div><span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#6194ff]">{action}</span></a>)}
            </div>
            <div className="mt-16 flex justify-center border-t border-white/[.07] pt-12"><Link href="/#projects" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-6 py-3 text-[13px] font-semibold text-[#dedfe4] hover:bg-white/[.11]"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to Projects</Link></div>
          </section>
        </div>
      </article>
      <PortfolioFooter />
    </main>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="mb-6 font-mono text-[10px] uppercase tracking-[.14em] text-[#5f626e]">{number} — {children}</p>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="grid gap-3">{items.map((item, index) => <div key={item} className="text-center"><div className={`rounded-xl border px-4 py-3 text-[11px] ${index === 0 ? 'border-[#6194ff]/30 bg-[#6194ff]/10 text-[#dce7ff]' : 'border-white/[.07] bg-white/[.025] text-[#aeb0b9]'}`}>{item}</div>{index < items.length - 1 && <div className="mx-auto h-5 w-px bg-white/15" />}</div>)}</div>;
}

function PrepCard({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return <div className="glass rounded-xl p-5"><div className="text-[#6194ff]">{icon}</div><p className="mt-4 font-mono text-[9px] uppercase tracking-[.1em] text-[#6194ff]">{label}</p><p className="mt-2 text-[12px] leading-[1.5] text-[#a0a2ab]">{text}</p></div>;
}

function FindingCard({ icon, title, correlation, children }: { icon: React.ReactNode; title: string; correlation: string; children: React.ReactNode }) {
  return <div className="glass rounded-2xl p-6 sm:p-8"><div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start"><div><div className="mb-4 flex items-center gap-3 text-[#6194ff]">{icon}<h3 className="font-display text-[20px] font-semibold text-[#ecedf0]">{title}</h3></div><p className="max-w-[760px] text-[13px] leading-[1.65] text-[#9597a1]">{children}</p></div><div className="rounded-xl border border-white/[.07] bg-white/[.025] px-5 py-4 text-center"><p className="font-display text-[25px] font-semibold text-[#ecedf0]">{correlation}</p><p className="mt-1 font-mono text-[8px] tracking-[.1em] text-[#777985]">CORRELATION</p></div></div></div>;
}

function PortfolioFooter() {
  return <div className="shell"><footer className="border-t border-white/[.07] py-8 text-[11px] text-[#6f727d]"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="font-display text-[16px] font-semibold tracking-[-.035em] text-[#e5e6ea]">Ahsan Mubarak.</p><p className="mt-1 text-[11px] text-[#858792]">Data Analyst.</p></div><div className="flex items-center gap-4 text-[#777985]"><a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp size={13} /></a><a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={12} /></a><a href="mailto:ahsanmubarak2729@gmail.com" aria-label="Email"><Mail size={14} /></a><a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={13} /></a><a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" aria-label="Kaggle"><FaKaggle size={12} /></a></div></div><div className="mt-7 flex flex-col gap-2 border-t border-white/[.06] pt-5 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Ahsan Mubarak. All rights reserved.</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></div></footer></div>;
}