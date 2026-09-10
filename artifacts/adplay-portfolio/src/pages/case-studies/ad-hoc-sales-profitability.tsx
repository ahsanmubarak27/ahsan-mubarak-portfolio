import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, ChevronRight, FileSpreadsheet, Lightbulb, Mail, Table2 } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import sqlFile from '@assets/Analysis_Queries_1789054058084.sql?url';
import excelFile from '@assets/Ad_Hoc_Report_1789054058086.xlsx?url';

const categories = [
  ['Clothing', 43085, 17073],
  ['Electronics', 48061, 16741],
  ['Furniture', 44235, 15521],
  ['Beauty', 45093, 12258],
] as const;
const segments = [['Corporate', 74.30], ['Consumer', 72.55], ['Small Business', 71.44]] as const;
const questions = [
  ['Overall financial performance', 'How are total sales, total profit, and average profit margin performing?'],
  ['Product category performance', 'Which product categories generate the strongest sales and profit?'],
  ['Customer segment profitability', 'How do profitability and average profit margin vary by customer segment?'],
  ['Monthly financial performance', 'How do sales, expenses, and net profit change over time?'],
  ['Management attention', 'Which areas and periods show weaker or negative performance?'],
] as const;
const recommendations = [
  ['Product & Pricing Strategy', 'Use category-level sales and profit results to decide where stronger focus or pricing review is appropriate.'],
  ['Marketing Allocation', 'Prioritize customer segments and product categories with stronger profitability while monitoring balanced category contribution.'],
  ['Expense Monitoring', 'Review the expense structure because expenses exceeded generated profit in every reported month.'],
  ['Financial Performance Tracking', 'Continue monitoring monthly sales, profit, expenses, net profit, and profit status to identify periods requiring management attention.'],
] as const;

export default function CaseStudyAdHocSales() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = 'Ad Hoc Sales & Profitability Analysis | Ahsan Mubarak';
    if (meta) meta.content = 'SQL and Excel ad hoc analysis of sales, profitability, expenses, product categories, and customer segments.';
    return () => { document.title = previousTitle; if (meta && previousDescription) meta.content = previousDescription; };
  }, []);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0d0f15] pb-12">
      <div className="shell pt-10"><Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] hover:text-white" data-testid="link-ad-hoc-back-projects"><ArrowLeft size={14} /> Back to Projects</Link></div>
      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#a264ef]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="mb-6 font-mono text-[10px] tracking-[.1em] text-[#a264ef]">BUSINESS ANALYTICS · REPORTING</p>
            <h1 className="max-w-[850px] font-display text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-ad-hoc-title">Ad Hoc Sales &amp; Profitability Analysis</h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">{['Independent Project', 'SQL', 'Microsoft Excel'].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">{item}</span>)}</div>
            <p className="mt-8 max-w-[700px] text-[15px] leading-[1.6] text-[#a2a3ac]">A business reporting project translating SQL analysis into practical financial insights through an Excel-based ad hoc report.</p>
          </div>
        </header>

        <div className="grid gap-24">
          <section>
            <Label number="01">Overview</Label>
            <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr]">
              <div><h2 className="font-display text-[24px] font-semibold text-[#e8e8eb]">SQL Analysis, Business Decisions</h2><p className="mt-4 max-w-[700px] text-[14px] leading-[1.65] text-[#9597a1]">The project analyzes sales, profit, expenses, product categories, and customer segments to provide practical financial insights for pricing, marketing, and budget allocation decisions.</p></div>
              <div className="glass grid grid-cols-2 gap-3 rounded-2xl p-6">{['Sales', 'Profitability', 'Expenses', 'Product Performance', 'Customer Segments'].map((area, index) => <div key={area} className={`rounded-lg border border-white/[.07] bg-white/[.025] px-3 py-3 text-[10px] text-[#aeb0b9] ${index === 4 ? 'col-span-2' : ''}`}>{area}</div>)}</div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <Label number="02">Business Questions</Label>
            <div className="grid gap-4">{questions.map(([title, text], index) => <div key={title} className="glass grid gap-4 rounded-2xl p-6 sm:grid-cols-[42px_1fr] sm:p-7"><span className="font-mono text-[10px] text-[#a264ef]">0{index + 1}</span><div><h3 className="text-[14px] font-semibold text-[#dedfe4]">{title}</h3><p className="mt-2 text-[13px] leading-[1.6] text-[#858792]">{text}</p></div></div>)}</div>
          </section>

          <section className="section-rule pt-20">
            <Label number="03">SQL Analysis</Label>
            <p className="max-w-[780px] text-[14px] leading-[1.65] text-[#9597a1]">SQL was used to query, join, aggregate, and analyze business data across orders, products, customers, regions, and expenses.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">{['Database Structure', 'SQL Queries', 'Joins & Aggregations', 'Business Metrics', 'Analysis-ready Results'].map((step, index, steps) => <div key={step} className="flex items-center gap-3"><span className="rounded-md border border-white/[.07] bg-white/[.035] px-3 py-2 text-[10px] text-[#aeb0b9]">{step}</span>{index < steps.length - 1 && <ChevronRight size={13} className="text-white/20" />}</div>)}</div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{['JOIN', 'GROUP BY', 'Aggregation', 'CASE WHEN', 'DATE_FORMAT', 'Window Function / RANK'].map((technique) => <div key={technique} className="glass flex items-center gap-3 rounded-xl p-5"><Table2 size={15} className="text-[#a264ef]" /><span className="font-mono text-[10px] text-[#b5b7c0]">{technique}</span></div>)}</div>
          </section>

          <section className="section-rule pt-20">
            <Label number="04">Key Findings</Label>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[['Total Sales', '357,249'], ['Total Profit', '125,233'], ['Total Expenses', '2,912,367'], ['Net Profit', '−2,787,134']].map(([label, value]) => <div key={label} className="glass rounded-2xl p-6"><p className="font-display text-[25px] font-semibold tracking-[-.04em] text-[#ecedf0]">{value}</p><p className="mt-2 font-mono text-[8px] tracking-[.1em] text-[#777985]">{label.toUpperCase()}</p></div>)}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <ChartCard title="Product Categories · 2023" subtitle="SALES / PROFIT">
                {categories.map(([name, sales, profit]) => <div key={name} className="grid grid-cols-[72px_1fr_54px] items-center gap-3"><span className="truncate text-[9px] text-[#858792]">{name}</span><div className="h-6 rounded-r bg-white/[.04]"><div className="h-full rounded-r bg-[#a264ef]/70" style={{ width: `${profit / 17073 * 100}%` }} /></div><span className="font-mono text-[8px] text-[#b8bac4]">{sales.toLocaleString()}<br />{profit.toLocaleString()}</span></div>)}
              </ChartCard>
              <ChartCard title="Profit Margin by Segment" subtitle="AVERAGE %">
                {segments.map(([name, margin]) => <div key={name} className="grid grid-cols-[90px_1fr_42px] items-center gap-3"><span className="text-[9px] text-[#858792]">{name}</span><div className="h-7 rounded-r bg-white/[.04]"><div className="h-full rounded-r bg-[#a264ef]/70" style={{ width: `${margin}%` }} /></div><span className="font-mono text-[9px] text-[#b8bac4]">{margin.toFixed(2)}%</span></div>)}
              </ChartCard>
            </div>
            <div className="glass mt-6 rounded-2xl border border-[#a264ef]/20 p-7 sm:p-8"><p className="font-mono text-[9px] tracking-[.1em] text-[#a264ef]">MONTHLY PERFORMANCE · 2022–2023</p><h3 className="mt-3 font-display text-[24px] font-semibold text-[#ecedf0]">Expenses Exceeded Profit in All 24 Months</h3><p className="mt-3 max-w-[760px] text-[13px] leading-[1.65] text-[#9597a1]">Net profit remained negative throughout the report. June 2022 had the least-negative result at −48,062, while February 2023 recorded the largest deficit at −162,784.</p></div>
          </section>

          <section className="section-rule pt-20">
            <Label number="05">Excel Report</Label>
            <div className="glass relative overflow-hidden rounded-2xl border border-[#a264ef]/20 p-8 sm:p-12"><div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="flex items-center gap-3"><FileSpreadsheet size={20} className="text-[#a264ef]" /><h3 className="font-display text-[28px] font-semibold text-[#e8e8eb]">Excel-Based Ad Hoc Report</h3></div><p className="mt-3 max-w-[620px] text-[14px] leading-[1.65] text-[#9597a1]">The report organizes Monthly Sales vs Expenses, Top Product Categories, and Profit Margin by Segment for business review.</p></div><a href={excelFile} download="Ad Hoc Report.xlsx" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#a264ef] px-6 py-3.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#b277f2]" data-testid="link-ad-hoc-excel-report">Open Excel Report <ArrowRight size={15} /></a></div></div>
          </section>

          <section className="section-rule pt-20">
            <Label number="06">Recommendations</Label>
            <div className="grid gap-5">{recommendations.map(([title, text]) => <div key={title} className="glass rounded-2xl p-6 sm:p-8"><div className="flex flex-col gap-4 sm:flex-row sm:gap-6"><div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#a264ef]"><Lightbulb size={18} /></div><div><h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">{title}</h4><p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">{text}</p></div></div></div>)}</div>
          </section>

          <section className="section-rule pb-20 pt-20">
            <Label number="07">Project Files</Label>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ['SQL Analysis', 'Analysis Queries.sql', sqlFile, 'SQL queries used to analyze the business data.', 'DOWNLOAD SQL'],
                ['Excel Report', 'Ad Hoc Report.xlsx', excelFile, 'Excel-based ad hoc report containing the analysis outputs.', 'DOWNLOAD XLSX'],
              ].map(([title, filename, href, description, action]) => <a key={title} href={href} download={filename} className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15]" data-testid={`link-ad-hoc-file-${title.toLowerCase().replace(' ', '-')}`}><div><h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0]">{title} <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1" /></h4><p className="mt-2 text-[12px] text-[#858792]">{description}</p><p className="mt-2 font-mono text-[8px] text-[#656873]">{filename}</p></div><span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#a264ef]">{action}</span></a>)}
            </div>
            <div className="mt-16 flex justify-center border-t border-white/[.07] pt-12"><Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-6 py-3 text-[13px] font-semibold text-[#dedfe4] hover:bg-white/[.11]"><ArrowLeft size={14} /> Back to Projects</Link></div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Label({ number, children }: { number: string; children: React.ReactNode }) { return <p className="mb-6 font-mono text-[10px] uppercase tracking-[.14em] text-[#5f626e]">{number} — {children}</p>; }
function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) { return <div className="glass rounded-2xl p-6 sm:p-8"><div className="mb-7 flex items-center justify-between gap-4"><p className="text-[12px] font-semibold text-[#dedfe4]">{title}</p><span className="font-mono text-[8px] text-[#a264ef]">{subtitle}</span></div><div className="space-y-4">{children}</div></div>; }
function Footer() { return <div className="shell"><footer className="border-t border-white/[.07] py-8 text-[11px] text-[#6f727d]"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="font-display text-[16px] font-semibold text-[#e5e6ea]">Ahsan Mubarak.</p><p className="mt-1 text-[#858792]">Data Analyst.</p></div><div className="flex items-center gap-4"><a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a><a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="mailto:ahsanmubarak2729@gmail.com" aria-label="Email"><Mail size={14} /></a><a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" aria-label="Kaggle"><FaKaggle /></a></div></div><div className="mt-7 flex justify-between border-t border-white/[.06] pt-5"><p>© 2026 Ahsan Mubarak.</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></div></footer></div>; }