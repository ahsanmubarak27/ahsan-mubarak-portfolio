import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, BarChart3, ChevronRight, Database, ExternalLink, Lightbulb, Mail, Smartphone } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import datasetFile from '@assets/GoogleAdsCampaignData_1789051107685.csv?url';
import notebookFile from '@assets/google-ads-campaign-performance-analysis_1789051107683.ipynb?url';
import presentationFile from '@assets/Google_Ads_Campaign_Performance_Analysis_1789051107680.pptx?url';

const dashboardUrl = 'https://datastudio.google.com/reporting/3da0e31a-2241-4b7f-aa50-1fe10dba3725';
const sourceUrl = 'https://www.kaggle.com/datasets/nayakganesh007/google-ads-sales-dataset';

const funnelMetrics = [
  { label: 'Impressions', value: '11.8M' },
  { label: 'Clicks', value: '361.2K' },
  { label: 'CTR', value: '3.07%' },
  { label: 'Leads', value: '52K' },
  { label: 'Click → Lead', value: '14.4%' },
  { label: 'Conversions', value: '16.9K' },
  { label: 'Lead → Conversion', value: '32.51%' },
];

const funnelStages = [
  { label: 'Impressions', value: '11.8M', rate: '100%', width: '100%' },
  { label: 'Clicks', value: '361.2K', rate: '3.07%', width: '78%' },
  { label: 'Leads', value: '52K', rate: '14.4%', width: '58%' },
  { label: 'Conversions', value: '16.9K', rate: '32.51%', width: '40%' },
];

const findings = [
  {
    title: 'Funnel Performance',
    text: 'The largest drop-off occurs between impressions and clicks, making ad engagement the primary challenge in the funnel.',
    icon: BarChart3,
  },
  {
    title: 'Device Performance',
    text: 'Mobile shows the strongest CTR and conversion performance, indicating higher engagement and conversion potential from mobile users.',
    icon: Smartphone,
  },
  {
    title: 'Campaign Performance',
    text: 'Performance varies across the available campaign and advertising dimensions, creating opportunities to refine targeting and stronger-performing segments.',
    icon: BarChart3,
  },
  {
    title: 'Optimization Opportunity',
    text: 'Improving impression-to-click engagement while scaling stronger-performing segments could improve overall campaign efficiency.',
    icon: Lightbulb,
  },
];

const recommendations = [
  ['Improve Ad Engagement', 'Test stronger headlines, messaging, and creative variations to improve performance at the impression-to-click stage.'],
  ['Prioritize Mobile Performance', 'Continue optimizing campaigns for mobile users given their stronger engagement and conversion performance.'],
  ['Refine Targeting', 'Identify and prioritize stronger-performing audience, campaign, or advertising segments while reviewing weaker-performing segments.'],
  ['Scale High-Performing Opportunities', 'Allocate more attention and campaign resources toward segments that demonstrate stronger conversion performance.'],
  ['Continuously Test and Optimize', 'Use ongoing performance monitoring and testing to improve campaign effectiveness over time.'],
];

export default function CaseStudyGoogleAds() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Google Ads Campaign Performance Analysis | Ahsan Mubarak';
    if (description) {
      description.content = 'Google Ads campaign funnel, device performance, and conversion analysis using Python and Looker Studio.';
    }
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0d0f15] pb-12">
      <div className="shell pt-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] transition-colors hover:text-white" data-testid="link-google-ads-back-projects">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#6194ff]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="mb-6 font-mono text-[10px] tracking-[.1em] text-[#6194ff]">MARKETING · PERFORMANCE ANALYTICS</p>
            <h1 className="max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-google-ads-title">
              Google Ads Campaign Performance Analysis
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">
              {['Independent Project', 'Python', 'Looker Studio'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">{item}</span>
              ))}
            </div>
            <p className="mt-8 max-w-[640px] text-[15px] leading-[1.6] text-[#a2a3ac]">
              An analysis of Google Ads campaign performance focused on the advertising funnel, device differences, and practical opportunities to improve campaign effectiveness.
            </p>
          </div>
        </header>

        <div className="grid gap-24">
          <section>
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">01 — OVERVIEW</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  This project analyzes Google Ads campaign performance to understand how users move through the advertising funnel, identify performance differences across devices, and uncover opportunities to improve campaign effectiveness.
                </p>
                <div className="mt-8 border-l border-[#6194ff]/30 pl-5">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[#777985]">DATA SOURCE</p>
                  <p className="mt-2 text-[14px] font-medium text-[#dedfe4]">Kaggle — Google Ads Sales Dataset</p>
                  <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#dfe0e5] transition-colors hover:text-white" data-testid="link-google-ads-dataset-source">
                    View Dataset <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Project Type', 'Independent Project'],
                  ['Tools', 'Python, Looker Studio'],
                  ['Focus', 'Campaign funnel'],
                  ['Approach', 'Analysis & visualization'],
                ].map(([label, value]) => (
                  <div key={label} className="glass rounded-xl p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[.1em] text-[#777985]">{label}</p>
                    <p className="mt-2 text-[13px] font-medium leading-[1.45] text-[#dedfe4]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">02 — DATA PREPARATION</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="glass overflow-hidden rounded-2xl">
                <div className="flex items-center gap-3 border-b border-white/[.08] bg-white/[.02] px-5 py-4">
                  <Database size={16} className="text-[#6194ff]" />
                  <span className="text-[12px] font-semibold text-[#dedfe4]">Analysis Workflow</span>
                </div>
                <div className="space-y-3 p-6">
                  {['Raw Data', 'Data Cleaning', 'Metric Preparation', 'Analysis', 'Visualization'].map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#6194ff]/30 bg-[#6194ff]/10 font-mono text-[9px] text-[#6194ff]">0{index + 1}</span>
                      <span className="text-[12px] font-medium text-[#c4c5cc]">{step}</span>
                      {index < 4 && <ChevronRight size={13} className="ml-auto text-white/20" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  The 2,600-row dataset was inspected for structure, missing values, duplicate records, and inconsistent campaign, location, device, keyword, and date formats.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  Python was used to standardize categorical values, parse dates, clean currency and rate fields, handle missing values, and prepare conversion rate, CTR, and ROI metrics for analysis and dashboard development.
                </p>
              </div>
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">03 — ANALYSIS &amp; KEY FINDINGS</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {funnelMetrics.map((metric, index) => (
                <div key={metric.label} className={`glass relative overflow-hidden rounded-2xl p-5 ${index === 6 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                  <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[#6194ff]/10 blur-2xl" />
                  <p className="text-[10px] uppercase tracking-wider text-[#858792]">{metric.label}</p>
                  <p className="mt-3 font-display text-[26px] font-semibold text-[#ecedf0]">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-[#e8e8eb]">Campaign Funnel</h3>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  The funnel narrows most sharply from impressions to clicks. CTR is 3.07%, while 14.4% of clicks become leads and 32.51% of leads convert.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="space-y-2">
                  {funnelStages.map((stage, index) => (
                    <div key={stage.label} className="mx-auto" style={{ width: stage.width }}>
                      <div className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-white/[.07] px-4" style={{ backgroundColor: `rgba(97,148,255,${0.38 - index * 0.06})` }}>
                        <span className="truncate text-[11px] font-medium text-white/90">{stage.label}</span>
                        <span className="shrink-0 font-mono text-[9px] text-white/75">{stage.value} · {stage.rate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {findings.map(({ title, text, icon: Icon }) => (
                <div key={title} className="glass rounded-2xl p-7">
                  <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#6194ff]/10 text-[#6194ff]"><Icon size={16} /></div>
                  <h4 className="text-[14px] font-semibold text-[#ecedf0]">{title}</h4>
                  <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">04 — DASHBOARD</p>
            <div className="glass group relative overflow-hidden rounded-2xl border border-[#6194ff]/20 bg-gradient-to-br from-[#171926] to-[#0d0f15] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#6194ff]/10 blur-[80px]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-[28px] font-semibold tracking-tight text-[#e8e8eb]">Interactive Dashboard</h3>
                  <p className="mt-3 max-w-[560px] text-[14px] leading-[1.65] text-[#9597a1]">Interactive Looker Studio dashboard presenting the campaign funnel, performance metrics, and key advertising insights.</p>
                </div>
                <a href={dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6194ff] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(97,148,255,.25)] transition-all hover:-translate-y-0.5 hover:bg-[#79a4ff]" data-testid="link-google-ads-dashboard">
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
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#6194ff]"><Lightbulb size={18} /></div>
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
                ['Dataset', 'GoogleAdsCampaignData.csv', datasetFile, 'DOWNLOAD CSV'],
                ['Analysis Notebook', 'google-ads-campaign-performance-analysis.ipynb', notebookFile, 'DOWNLOAD IPYNB'],
                ['Presentation', 'Google Ads Campaign Performance Analysis.pptx', presentationFile, 'DOWNLOAD PPTX'],
              ].map(([title, filename, href, action]) => (
                <a key={title} href={href} download={filename} className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid={`link-google-ads-file-${title.toLowerCase().replace(' ', '-')}`}>
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">{title} <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" /></h4>
                    <p className="mt-2 break-words text-[12px] leading-[1.5] text-[#858792]">{filename}</p>
                  </div>
                  <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#6194ff]">{action}</span>
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
            <div>
              <p className="font-display text-[16px] font-semibold tracking-[-.035em] text-[#e5e6ea]">Ahsan Mubarak.</p>
              <p className="mt-1 text-[11px] text-[#858792]">Data Analyst.</p>
            </div>
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