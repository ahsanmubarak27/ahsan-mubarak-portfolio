import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, BarChart3, ChevronRight, ExternalLink, Lightbulb, Mail, MapPin, Star, Users } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import datasetFile from '@assets/ecommerce_customers_1789052490119.csv?url';
import notebookFile from '@assets/identifying-and-profiling-high-clv-customers_1789052490117.ipynb?url';
import presentationFile from '@assets/Identifying_and_Profiling_High-CLV_Customers_in_E-Commerce_1789052490115.pptx?url';

const dashboardUrl = 'https://datastudio.google.com/reporting/425dc128-37db-451b-bc27-96a9714d274e';
const sourceUrl = 'https://www.kaggle.com/datasets/uom190346a/e-commerce-customer-behavior-dataset';

const clvDistribution = [
  ['High', 89],
  ['Very Low', 88],
  ['Low', 87],
  ['Medium', 86],
] as const;

const recommendations = [
  ['Focus on Key Locations', 'Focus customer retention and expansion efforts on San Francisco, New York, and Los Angeles.'],
  ['Promote Gold Membership', 'Use targeted campaigns to encourage customers to upgrade to Gold membership, given its strong relationship with High-CLV customers.'],
  ['Improve Customer Experience', 'Enhance the overall customer experience to support higher satisfaction and long-term customer loyalty.'],
  ['Maximize Customer Lifetime Value', 'Use customer segmentation to develop more targeted sales and retention strategies for high-value and growth-potential segments.'],
] as const;

export default function CaseStudyCustomerLifetimeValue() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Identifying High-CLV E-Commerce Customers | Ahsan Mubarak';
    if (description) description.content = 'E-commerce customer lifetime value segmentation and profiling across membership, location, and satisfaction using Python and Looker Studio.';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0d0f15] pb-12">
      <div className="shell pt-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] transition-colors hover:text-white" data-testid="link-clv-back-projects">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#7b83ff]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="mb-6 font-mono text-[10px] tracking-[.1em] text-[#7b83ff]">CUSTOMER ANALYTICS · RETENTION</p>
            <h1 className="max-w-[850px] font-display text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-clv-title">
              Identifying and Profiling High-CLV Customers in E-Commerce
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">
              {['Independent Project', 'Python', 'Looker Studio'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">{item}</span>
              ))}
            </div>
            <p className="mt-8 max-w-[670px] text-[15px] leading-[1.6] text-[#a2a3ac]">
              A customer-value analysis focused on identifying High-CLV segments through membership type, location, and satisfaction patterns.
            </p>
          </div>
        </header>

        <div className="grid gap-24">
          <section>
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">01 — OVERVIEW</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-[22px] font-semibold tracking-tight text-[#e8e8eb]">Project Objective</h2>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  This analysis aims to identify and profile High-CLV customers on e-commerce platforms so businesses can make more direct and informed decisions regarding sales strategies, pricing, and campaign segmentation.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  Customer Lifetime Value is an important KPI for assessing customer performance because high-value customers can contribute significantly to long-term revenue and targeted retention strategies.
                </p>
                <div className="mt-8 border-l border-[#7b83ff]/30 pl-5">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[#777985]">DATA SOURCE</p>
                  <p className="mt-2 text-[14px] font-medium text-[#dedfe4]">Kaggle — E-commerce Customer Behavior Dataset</p>
                  <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#dfe0e5] transition-colors hover:text-white" data-testid="link-clv-dataset-source">
                    View Dataset <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <div>
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[#7b83ff]">E-COMMERCE CUSTOMER BEHAVIOR</p>
                  <p className="mt-4 text-[13px] leading-[1.65] text-[#9597a1]">
                    Each row represents a unique customer and provides transaction-history and interaction-pattern data for customer-level profiling.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Customer ID', 'Total Spend', 'Items Purchased', 'Membership Type', 'Satisfaction Level', 'City'].map((variable) => (
                      <span key={variable} className="rounded-lg border border-white/[.07] bg-white/[.025] px-3 py-2 text-[10px] text-[#9b9da7]">{variable}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">02 — DATA PREPARATION</p>
            <p className="max-w-[760px] text-[14px] leading-[1.65] text-[#9597a1]">
              The analysis prepared customer-level data for CLV categorization and profiling across total spend, membership type, satisfaction level, and city.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {['Raw Customer Data', 'CLV Categorization', 'Customer Profiling', 'Segment Analysis', 'Insights'].map((step, index, steps) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-md border border-white/[.07] bg-white/[.035] px-3 py-2 text-[10px] text-[#aeb0b9]">{step}</span>
                  {index < steps.length - 1 && <ChevronRight size={13} className="text-white/20" />}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Customer Value', 'CLV distribution and revenue contribution'],
                ['Membership', 'CLV by membership type'],
                ['Location', 'CLV distribution across cities'],
                ['Satisfaction', 'Satisfaction by CLV category'],
              ].map(([title, text]) => (
                <div key={title} className="glass rounded-xl p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[.1em] text-[#7b83ff]">{title}</p>
                  <p className="mt-3 text-[12px] leading-[1.5] text-[#a0a2ab]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">03 — ANALYSIS &amp; KEY FINDINGS</p>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-[12px] font-semibold text-[#dedfe4]">Revenue Distribution by CLV Category</p>
                  <span className="font-mono text-[8px] tracking-[.1em] text-[#7b83ff]">SHARE OF REVENUE</span>
                </div>
                <div className="flex h-12 overflow-hidden rounded-lg border border-white/[.07]">
                  <div className="grid place-items-center bg-[#7b83ff]/80 text-[10px] font-semibold text-white" style={{ width: '41%' }}>High · 41%</div>
                  <div className="grid place-items-center bg-[#7b83ff]/55 text-[10px] text-white/90" style={{ width: '26%' }}>Medium · 26%</div>
                  <div className="grid place-items-center bg-[#7b83ff]/30 text-[10px] text-white/85" style={{ width: '32%' }}>Low · 32%</div>
                  <div className="bg-white/[.04]" style={{ width: '1%' }} />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ['High-CLV', '~$120K'],
                    ['Medium-CLV', '~$76K'],
                    ['Low + Very Low', '~$94K'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/[.06] bg-white/[.02] p-4">
                      <p className="font-display text-[20px] font-semibold text-[#ecedf0]">{value}</p>
                      <p className="mt-1 text-[9px] text-[#777985]">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[12px] leading-[1.6] text-[#858792]">High-CLV customers contributed the largest revenue share, highlighting their importance to overall customer value.</p>
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <p className="text-[12px] font-semibold text-[#dedfe4]">CLV Category Distribution</p>
                <div className="mt-7 space-y-4">
                  {clvDistribution.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[54px_1fr_25px] items-center gap-3">
                      <span className="text-[9px] text-[#858792]">{label}</span>
                      <div className="h-7 rounded-r bg-white/[.04]"><div className="h-full rounded-r bg-[#7b83ff]/70" style={{ width: `${(value / 89) * 100}%` }} /></div>
                      <span className="font-mono text-[9px] text-[#b8bac4]">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-[12px] leading-[1.6] text-[#858792]">Values are tightly clustered between 86 and 89, indicating limited variation and segmentation based on small behavioral differences.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-3"><Users size={17} className="text-[#7b83ff]" /><h3 className="text-[13px] font-semibold text-[#dedfe4]">CLV Category by Membership Type</h3></div>
                <ComparisonBar label="High-CLV" parts={[['Gold', 100]]} />
                <div className="mt-5"><ComparisonBar label="Medium-CLV" parts={[['Silver', 76], ['Gold', 24]]} /></div>
                <p className="mt-7 text-[12px] leading-[1.6] text-[#858792]">All High-CLV customers are Gold members. Among Medium-CLV customers, 76% hold Silver memberships and 24% hold Gold.</p>
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-3"><MapPin size={17} className="text-[#7b83ff]" /><h3 className="text-[13px] font-semibold text-[#dedfe4]">Location-based CLV Distribution</h3></div>
                <CityRow city="San Francisco" high={100} medium={0} />
                <CityRow city="Los Angeles" high={9} medium={91} />
                <CityRow city="New York" high={40} medium={60} />
                <p className="mt-7 text-[12px] leading-[1.6] text-[#858792]">San Francisco shows strong customer potential, while New York and Los Angeles present targeted growth and retention opportunities.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-3"><Star size={17} className="text-[#7b83ff]" /><h3 className="text-[13px] font-semibold text-[#dedfe4]">Customer Satisfaction by CLV Category</h3></div>
                <ComparisonBar label="High-CLV" parts={[['Satisfied', 100]]} />
                <div className="mt-5"><ComparisonBar label="Medium-CLV" parts={[['Satisfied', 58], ['Neutral', 42]]} /></div>
                <p className="mt-7 text-[12px] leading-[1.6] text-[#858792]">Improving satisfaction could support stronger loyalty and long-term customer value.</p>
              </div>

              <div className="glass relative overflow-hidden rounded-2xl border border-[#7b83ff]/20 p-7 sm:p-8">
                <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#7b83ff]/10 blur-[60px]" />
                <div className="relative">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[#7b83ff]">FINAL CUSTOMER PROFILE</p>
                  <h3 className="mt-4 font-display text-[26px] font-semibold tracking-tight text-[#ecedf0]">Who Are the High-CLV Customers?</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Gold members', 'Satisfied with service', 'Located in San Francisco'].map((trait) => (
                      <span key={trait} className="rounded-full border border-white/[.08] bg-white/[.04] px-4 py-2 text-[11px] text-[#c7c8cf]">{trait}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">04 — DASHBOARD</p>
            <div className="glass relative overflow-hidden rounded-2xl border border-[#7b83ff]/20 bg-gradient-to-br from-[#171926] to-[#0d0f15] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#7b83ff]/10 blur-[80px]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-[28px] font-semibold tracking-tight text-[#e8e8eb]">Interactive Dashboard</h3>
                  <p className="mt-3 max-w-[590px] text-[14px] leading-[1.65] text-[#9597a1]">Explore customer value, CLV segmentation, membership patterns, location-based profiles, and satisfaction across key customer segments.</p>
                </div>
                <a href={dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#7b83ff] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(123,131,255,.25)] transition-all hover:-translate-y-0.5 hover:bg-[#8d96f0]" data-testid="link-clv-dashboard">
                  Open Dashboard <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">05 — RECOMMENDATIONS</p>
            <div className="grid gap-5">
              {recommendations.map(([title, text]) => (
                <div key={title} className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#7b83ff]"><Lightbulb size={18} /></div>
                    <div>
                      <h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">{title}</h4>
                      <p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule pb-20 pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">06 — PROJECT FILES</p>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Dataset', 'ecommerce_customers.csv', datasetFile, 'Customer-level e-commerce dataset provided for the project.', 'DOWNLOAD CSV'],
                ['Analysis Notebook', 'identifying-and-profiling-high-clv-customers.ipynb', notebookFile, 'Python notebook containing the analysis workflow.', 'DOWNLOAD IPYNB'],
                ['Presentation', 'Identifying and Profiling High-CLV Customers in E-Commerce.pptx', presentationFile, 'Project presentation covering customer profiling, findings, and recommendations.', 'DOWNLOAD PPTX'],
              ].map(([title, filename, href, description, action]) => (
                <a key={title} href={href} download={filename} className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid={`link-clv-file-${title.toLowerCase().replace(' ', '-')}`}>
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">{title} <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1" /></h4>
                    <p className="mt-2 text-[12px] leading-[1.5] text-[#858792]">{description}</p>
                    <p className="mt-2 break-words font-mono text-[8px] text-[#656873]">{filename}</p>
                  </div>
                  <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#7b83ff]">{action}</span>
                </a>
              ))}
            </div>
            <div className="mt-16 flex justify-center border-t border-white/[.07] pt-12">
              <Link href="/#projects" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-6 py-3 text-[13px] font-semibold text-[#dedfe4] transition-colors hover:bg-white/[.11]">
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </article>

      <div className="shell">
        <footer className="border-t border-white/[.07] py-8 text-[11px] text-[#6f727d]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="font-display text-[16px] font-semibold tracking-[-.035em] text-[#e5e6ea]">Ahsan Mubarak.</p><p className="mt-1 text-[11px] text-[#858792]">Data Analyst.</p></div>
            <div className="flex items-center gap-4 text-[#777985]" aria-label="Social links">
              <a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="WhatsApp"><FaWhatsapp size={13} /></a>
              <a href="https://www.linkedin.com/in/ahsanmubarak-854378314/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn"><FaLinkedinIn size={12} /></a>
              <a href="mailto:ahsanmubarak2729@gmail.com" className="transition-colors hover:text-white" aria-label="Email"><Mail size={14} strokeWidth={1.5} /></a>
              <a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub"><FaGithub size={13} /></a>
              <a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Kaggle"><FaKaggle size={12} /></a>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-white/[.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ahsan Mubarak. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left transition-colors hover:text-white sm:text-right">Back to top ↑</button>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ComparisonBar({ label, parts }: { label: string; parts: readonly (readonly [string, number])[] }) {
  return (
    <div>
      <p className="mb-2 text-[9px] text-[#858792]">{label}</p>
      <div className="flex h-9 overflow-hidden rounded-lg border border-white/[.06]">
        {parts.map(([name, value], index) => (
          <div key={name} className="grid place-items-center text-[9px] text-white/90" style={{ width: `${value}%`, backgroundColor: index === 0 ? 'rgba(123,131,255,.65)' : 'rgba(123,131,255,.32)' }}>
            {name} · {value}%
          </div>
        ))}
      </div>
    </div>
  );
}

function CityRow({ city, high, medium }: { city: string; high: number; medium: number }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-[9px] text-[#858792]">{city}</p>
      <div className="flex h-8 overflow-hidden rounded-lg border border-white/[.06]">
        {high > 0 && <div className="grid place-items-center bg-[#7b83ff]/65 text-[8px] text-white/90" style={{ width: `${high}%` }}>High {high}%</div>}
        {medium > 0 && <div className="grid place-items-center bg-[#7b83ff]/30 text-[8px] text-white/85" style={{ width: `${medium}%` }}>Medium {medium}%</div>}
      </div>
    </div>
  );
}