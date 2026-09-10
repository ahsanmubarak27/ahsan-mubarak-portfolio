import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, BarChart3, ChevronRight, ExternalLink, Lightbulb, Mail, TrendingUp } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import datasetFile from '@assets/USA_Coffeeshop_1789051697302.csv?url';
import notebookFile from '@assets/coffee-shop-sales-profit-analysis_1789051697301.ipynb?url';
import presentationFile from '@assets/Coffee_Shop_Sales_and_Profit_Analysis_1789051697299.pptx?url';

const dashboardUrl = 'https://datastudio.google.com/reporting/ad7529cb-146a-4dc1-8fa1-5f98997be6e5';
const sourceUrl = 'https://www.kaggle.com/datasets/dsfelix/us-stores-sales';

const topMargins = [
  ['Decaf Espresso', 36.9],
  ['Darjeeling', 35.2],
  ['Columbian', 33.9],
  ['Chamomile', 32.6],
  ['Caffe Latte', 30.0],
] as const;

const bottomMargins = [
  ['Green Tea', -127.5],
  ['Caffe Mocha', 4.6],
  ['Mint', 9.8],
  ['Amaretto', 11.5],
  ['Decaf Irish Cream', 18.0],
] as const;

const stateProfits = [
  ['California', 31.8],
  ['Illinois', 30.8],
  ['Iowa', 22.2],
  ['New York', 20.1],
  ['New Mexico', 0.8],
] as const;

const recommendations = [
  ['Focus on High-Profit Products', 'Promote products such as Decaf Espresso and Darjeeling to support profitability.'],
  ['Review Low-Profit Products', 'Investigate Green Tea pricing and cost structure, and consider reducing costs or adjusting pricing if the negative margin persists.'],
  ['Prioritize Major Markets', 'Continue focusing on major markets while using more targeted strategies to capture additional opportunities in smaller markets.'],
  ['Grow Small-Market Performance', 'Test region-specific promotions, partnerships, and targeted campaigns to improve sales in smaller markets.'],
] as const;

export default function CaseStudyCoffeeShop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Coffee Shop Sales & Profit Analysis | Ahsan Mubarak';
    if (description) description.content = 'Coffee shop sales and profitability analysis across products, states, and market sizes using Python and Looker Studio.';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0d0f15] pb-12">
      <div className="shell pt-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] transition-colors hover:text-white" data-testid="link-coffee-back-projects">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#a264ef]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="mb-6 font-mono text-[10px] tracking-[.1em] text-[#a264ef]">PROFITABILITY · BUSINESS ANALYTICS</p>
            <h1 className="max-w-[760px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-coffee-title">
              Coffee Shop Sales &amp; Profit Analysis
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">
              {['Independent Project', 'Python', 'Looker Studio'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">{item}</span>
              ))}
            </div>
            <p className="mt-8 max-w-[650px] text-[15px] leading-[1.6] text-[#a2a3ac]">
              An analysis of sales and profit performance across products, markets, and states to identify the main drivers of revenue and profitability.
            </p>
          </div>
        </header>

        <div className="grid gap-24">
          <section>
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">01 — OVERVIEW</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  This project explores sales and profit performance across products, markets, and states to support decisions around product strategy, pricing, promotion, and market opportunities.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  The USA Coffeeshop dataset contains sales and profitability information from American coffee shops, including sales, profit, margin, state, market size, product, and related financial variables.
                </p>
                <div className="mt-8 border-l border-[#a264ef]/30 pl-5">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[#777985]">DATA SOURCE</p>
                  <p className="mt-2 text-[14px] font-medium text-[#dedfe4]">Kaggle — USA Coffeeshop</p>
                  <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#dfe0e5] transition-colors hover:text-white" data-testid="link-coffee-dataset-source">
                    View Dataset <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Dataset Size', '4,248 records'],
                  ['Analysis Period', '2010–2011'],
                  ['Metrics', 'Sales · Profit'],
                  ['Scope', 'Products · Markets'],
                ].map(([label, value]) => (
                  <div key={label} className="glass rounded-xl p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[.1em] text-[#777985]">{label}</p>
                    <p className="mt-2 text-[13px] font-medium leading-[1.45] text-[#dedfe4]">{value}</p>
                    {label === 'Dataset Size' && <p className="mt-2 text-[9px] text-[#686a74]">Based on the uploaded dataset</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">02 — DATA PREPARATION</p>
            <p className="max-w-[760px] text-[14px] leading-[1.65] text-[#9597a1]">
              The dataset was prepared in Python for profitability analysis by working with sales, profit, margin, product, state, and market-level variables. The prepared data was used to compare profitability across products and markets and examine the relationship between sales and profit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {['Raw Data', 'Data Preparation', 'Profitability Analysis', 'Product & Market Comparison', 'Insights'].map((step, index, steps) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-md border border-white/[.07] bg-white/[.035] px-3 py-2 text-[10px] text-[#aeb0b9]">{step}</span>
                  {index < steps.length - 1 && <ChevronRight size={13} className="text-white/20" />}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Financial Metrics', 'Sales, Profit, Margin'],
                ['Product Analysis', 'Profit margin by product'],
                ['Market Analysis', 'State and market-size performance'],
                ['Relationship Analysis', 'Sales vs Profit'],
              ].map(([title, text]) => (
                <div key={title} className="glass rounded-xl p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[.1em] text-[#a264ef]">{title}</p>
                  <p className="mt-3 text-[12px] leading-[1.5] text-[#a0a2ab]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">03 — ANALYSIS &amp; KEY FINDINGS</p>

            <div className="grid gap-6 lg:grid-cols-2">
              <MarginChart title="Top 5 Profit Margin" data={topMargins} positive />
              <MarginChart title="Bottom 5 Profit Margin" data={bottomMargins} />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-[12px] font-semibold text-[#dedfe4]">Profit by State</p>
                  <span className="font-mono text-[8px] tracking-[.1em] text-[#a264ef]">USD THOUSANDS</span>
                </div>
                <div className="space-y-4">
                  {stateProfits.map(([state, value]) => (
                    <div key={state} className="grid grid-cols-[82px_1fr_38px] items-center gap-3">
                      <span className="truncate text-[9px] text-[#858792]">{state}</span>
                      <div className="h-6 rounded-r bg-white/[.04]">
                        <div className="h-full rounded-r bg-[#a264ef]/70" style={{ width: `${Math.max((value / 31.8) * 100, 2)}%` }} />
                      </div>
                      <span className="font-mono text-[9px] text-[#b8bac4]">${value.toFixed(1)}K</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <BarChart3 size={16} className="text-[#a264ef]" />
                    <h3 className="text-[13px] font-semibold text-[#dedfe4]">Sales by Market Size</h3>
                  </div>
                  <div className="space-y-4">
                    <MarketBar label="Major Market" value="$425.1K" width="100%" />
                    <MarketBar label="Small Market" value="$394.7K" width="92.8%" />
                  </div>
                </div>
                <div className="glass flex items-center gap-5 rounded-2xl p-6">
                  <div className="grid size-14 shrink-0 place-items-center rounded-full border border-[#a264ef]/30 bg-[#a264ef]/10"><TrendingUp size={20} className="text-[#a264ef]" /></div>
                  <div>
                    <p className="font-display text-[28px] font-semibold text-[#ecedf0]">0.80</p>
                    <p className="mt-1 text-[11px] text-[#858792]">Sales vs Profit correlation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                ['High-margin products stood out.', 'Decaf Espresso recorded the highest profit margin at 36.9%, followed by Darjeeling at 35.2% and Columbian at 33.9%.'],
                ['Green Tea was a profitability concern.', 'Green Tea recorded a −127.5% average profit margin, making it the most significant low-margin product in the analysis.'],
                ['Profitability varied across states.', 'California and Illinois were among the strongest contributors to profit, while New Mexico recorded substantially lower profit.'],
                ['Sales and profit were strongly related.', 'A positive correlation of 0.80 indicates that higher sales generally coincided with higher profit, though low-margin products could still reduce profitability.'],
              ].map(([title, text]) => (
                <div key={title} className="glass rounded-2xl p-7">
                  <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#a264ef]/10 text-[#a264ef]"><BarChart3 size={16} /></div>
                  <h4 className="text-[14px] font-semibold text-[#ecedf0]">{title}</h4>
                  <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">04 — DASHBOARD</p>
            <div className="glass relative overflow-hidden rounded-2xl border border-[#a264ef]/20 bg-gradient-to-br from-[#171926] to-[#0d0f15] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#a264ef]/10 blur-[80px]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-[28px] font-semibold tracking-tight text-[#e8e8eb]">Interactive Dashboard</h3>
                  <p className="mt-3 max-w-[560px] text-[14px] leading-[1.65] text-[#9597a1]">Explore sales and profitability across products, markets, states, and key financial metrics.</p>
                </div>
                <a href={dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#a264ef] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(162,100,239,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#b277f2]" data-testid="link-coffee-dashboard">
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
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#a264ef]"><Lightbulb size={18} /></div>
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
                ['Dataset', 'USA_Coffeeshop.csv', datasetFile, 'Source dataset used for the analysis.', 'DOWNLOAD CSV'],
                ['Analysis Notebook', 'coffee-shop-sales-profit-analysis.ipynb', notebookFile, 'Python notebook containing the analysis workflow.', 'DOWNLOAD IPYNB'],
                ['Presentation', 'Coffee Shop Sales and Profit Analysis.pptx', presentationFile, 'Project presentation covering findings and recommendations.', 'DOWNLOAD PPTX'],
              ].map(([title, filename, href, description, action]) => (
                <a key={title} href={href} download={filename} className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid={`link-coffee-file-${title.toLowerCase().replace(' ', '-')}`}>
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">{title} <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1" /></h4>
                    <p className="mt-2 text-[12px] leading-[1.5] text-[#858792]">{description}</p>
                    <p className="mt-2 break-words font-mono text-[8px] text-[#656873]">{filename}</p>
                  </div>
                  <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#a264ef]">{action}</span>
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
              <a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn"><FaLinkedinIn size={12} /></a>
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

function MarginChart({ title, data, positive = false }: { title: string; data: readonly (readonly [string, number])[]; positive?: boolean }) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="mb-7 flex items-center justify-between gap-4">
        <p className="text-[12px] font-semibold text-[#dedfe4]">{title}</p>
        <span className="font-mono text-[8px] tracking-[.1em] text-[#a264ef]">AVERAGE %</span>
      </div>
      <div className="space-y-3">
        {data.map(([product, value]) => (
          <div key={product} className="grid grid-cols-[92px_1fr_42px] items-center gap-3">
            <span className="truncate text-[9px] text-[#858792]">{product}</span>
            <div className="relative h-6 overflow-hidden rounded-r bg-white/[.04]">
              <div
                className={`absolute h-full rounded-r ${value < 0 ? 'right-1/2 bg-[#6f536f]/80' : 'left-0 bg-[#a264ef]/70'}`}
                style={{ width: value < 0 ? `${Math.min(Math.abs(value) / 127.5 * 50, 50)}%` : `${positive ? value / 36.9 * 100 : value / 18 * 48}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-[#b8bac4]">{value.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketBar({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-[10px]"><span className="text-[#858792]">{label}</span><span className="font-mono text-[#b8bac4]">{value}</span></div>
      <div className="h-5 rounded-r bg-white/[.04]"><div className="h-full rounded-r bg-[#a264ef]/70" style={{ width }} /></div>
    </div>
  );
}