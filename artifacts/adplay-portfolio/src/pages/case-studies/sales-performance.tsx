import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink, ArrowRight, BarChart3, Database, Lightbulb, ChevronRight, Mail } from 'lucide-react';
import { FaGithub, FaKaggle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import datasetFile from '@assets/Charmpernix_SKU_1789049935010.csv?url';
import notebookFile from '@assets/Charmpernix_1789049935007.ipynb?url';
import presentationFile from '@assets/Charmpernix_1789049935009.pptx?url';

export default function CaseStudySales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const salesData = [
    { day: 'Friday', value: 136.6 },
    { day: 'Saturday', value: 97.9 },
    { day: 'Tuesday', value: 88.8 },
    { day: 'Sunday', value: 87.9 },
    { day: 'Thursday', value: 86.8 },
    { day: 'Monday', value: 86.1 },
    { day: 'Wednesday', value: 77.3 },
  ];
  
  const maxValue = Math.max(...salesData.map(d => d.value));

  return (
    <main className="min-h-[100dvh] bg-[#0d0f15] overflow-hidden pb-12">
      <div className="shell pt-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#858792] transition-colors hover:text-white" data-testid="link-back-projects">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      <article className="shell mt-16">
        <header className="relative mb-24">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#7b83ff]/10 blur-[100px]" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[.1em] text-[#7b83ff] mb-6" data-testid="text-case-study-category">SALES · BUSINESS ANALYTICS</p>
            <h1 className="max-w-[700px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.05em] text-[#f1f1f3]" data-testid="heading-case-study-title">
              Sales Performance Analysis
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#91939d]">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2">
                CPX SPORTWEAR
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2">
                Freelance
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2">
                Python
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2">
                Looker Studio
              </span>
            </div>
            <p className="mt-8 max-w-[600px] text-[15px] leading-[1.6] text-[#a2a3ac]" data-testid="text-case-study-introduction">
              An end-to-end sales analysis focused on understanding purchasing patterns, product performance, and category trends from Shopee transaction and product data.
            </p>
          </div>
        </header>

        <div className="grid gap-24">
          {/* 01 — OVERVIEW */}
          <section>
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">01 — OVERVIEW</p>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  CPX SPORTWEAR is a cycling-focused sports equipment store selling through Shopee.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  This project analyzes sales and product performance from January 2025 to January 2026 to identify purchasing patterns, understand product and category performance, and generate practical recommendations for sales strategy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-5">
                  <p className="font-display text-[24px] font-semibold text-[#ecedf0]" data-testid="metric-transaction-records">6,744</p>
                  <p className="mt-1 text-[11px] text-[#858792]">Transaction Records</p>
                </div>
                <div className="glass rounded-xl p-5">
                  <p className="font-display text-[24px] font-semibold text-[#ecedf0]" data-testid="metric-sku-records">11,307</p>
                  <p className="mt-1 text-[11px] text-[#858792]">SKU Records</p>
                </div>
                <div className="glass rounded-xl p-5">
                  <p className="font-display text-[14px] font-semibold text-[#ecedf0] mt-1.5">Jan 2025 – Jan 2026</p>
                  <p className="mt-2.5 text-[11px] text-[#858792]">Analysis Period</p>
                </div>
                <div className="glass rounded-xl p-5">
                  <p className="font-display text-[14px] font-semibold text-[#ecedf0] mt-1.5">Python</p>
                  <p className="mt-2.5 text-[11px] text-[#858792]">Data Preparation & Analysis</p>
                </div>
                <div className="glass col-span-2 rounded-xl p-5">
                  <p className="text-[11px] text-[#858792] uppercase tracking-wider">Data Source</p>
                  <p className="mt-1.5 text-[13px] font-medium text-[#dedfe4]">Shopee transaction and product performance data</p>
                </div>
              </div>
            </div>
          </section>

          {/* 02 — THE DATA CHALLENGE */}
          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">02 — THE DATA CHALLENGE</p>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  The raw product data was not immediately ready for analysis. A single product could appear under different names and advertisements, creating duplicate and inconsistent product records.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  The dataset also contained missing values, inconsistent formats, promotional and brand-related terms, and other naming inconsistencies. Before analyzing sales performance, the data needed to be cleaned, standardized, and validated using Python.
                </p>
              </div>
              <div className="glass flex flex-col justify-center rounded-2xl p-8">
                <div className="flex flex-col gap-3">
                  {['Raw Data', 'Cleaning', 'Product Standardization', 'Validation', 'Analysis-ready Data'].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#7b83ff]/30 bg-[#7b83ff]/10 font-mono text-[9px] text-[#7b83ff]">
                        0{i + 1}
                      </span>
                      <span className="text-[12px] font-medium text-[#c4c5cc]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 03 — DATA PREPARATION */}
          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">03 — DATA PREPARATION</p>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="order-2 lg:order-1">
                <div className="glass overflow-hidden rounded-2xl">
                  <div className="flex items-center gap-3 border-b border-white/[.08] bg-white/[.02] px-5 py-4">
                    <Database size={16} className="text-[#7b83ff]" />
                    <span className="text-[12px] font-semibold text-[#dedfe4]">Data Pipeline Workflow</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-[#a0a2ab] mb-8">
                      <span className="rounded-md bg-white/[.06] px-3 py-1.5 border border-white/[.05]">Raw Data</span>
                      <ChevronRight size={14} className="text-white/20" />
                      <span className="rounded-md bg-[#7b83ff]/10 text-[#7b83ff] px-3 py-1.5 border border-[#7b83ff]/20">Python Processing</span>
                      <ChevronRight size={14} className="text-white/20" />
                      <span className="rounded-md bg-white/[.06] px-3 py-1.5 border border-white/[.05]">Analysis</span>
                    </div>
                    
                    <div className="space-y-4 border-l-2 border-[#7b83ff]/20 pl-4 ml-2">
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-[#171a27] bg-[#7b83ff]" />
                        <p className="text-[12px] font-medium text-[#dedfe4]">Data Cleaning</p>
                        <p className="mt-1 text-[11px] text-[#777985]">Checked for duplicate records and missing values. Converted data types.</p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-[#171a27] bg-[#7b83ff]" />
                        <p className="text-[12px] font-medium text-[#dedfe4]">Product Standardization</p>
                        <p className="mt-1 text-[11px] text-[#777985]">Standardized product names. Removed irrelevant promotional and brand-related terms. Handled inconsistent product naming.</p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-[#171a27] bg-[#7b83ff]" />
                        <p className="text-[12px] font-medium text-[#dedfe4]">Transaction Preparation</p>
                        <p className="mt-1 text-[11px] text-[#777985]">Cleaned transaction data. Filtered cancelled transactions. Handled dates and created useful date attributes.</p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-[#171a27] bg-[#7b83ff]" />
                        <p className="text-[12px] font-medium text-[#dedfe4]">Validation</p>
                        <p className="mt-1 text-[11px] text-[#777985]">Validated the cleaned dataset for analytical readiness.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center lg:order-2">
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  Data preparation was a critical phase of this project, ensuring the analytical results would reflect actual business performance rather than data anomalies. 
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  A comprehensive Python script was developed to systematically clean, transform, and validate both the SKU and transaction datasets, bringing consistency to thousands of raw inputs.
                </p>
              </div>
            </div>
          </section>

          {/* 04 — ANALYSIS & KEY FINDINGS */}
          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">04 — ANALYSIS & KEY FINDINGS</p>
            
            <div className="grid gap-5 sm:grid-cols-3 mb-16">
              <div className="glass relative overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[#7b83ff]/10 blur-2xl" />
                <p className="text-[11px] uppercase tracking-wider text-[#858792]">Total Revenue</p>
                <p className="mt-3 font-display text-[32px] font-semibold text-[#ecedf0]" data-testid="metric-total-revenue">Rp661.34M</p>
              </div>
              <div className="glass relative overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[#7b83ff]/10 blur-2xl" />
                <p className="text-[11px] uppercase tracking-wider text-[#858792]">Processed Transactions</p>
                <p className="mt-3 font-display text-[32px] font-semibold text-[#ecedf0]" data-testid="metric-processed-transactions">5,664</p>
              </div>
              <div className="glass relative overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[#7b83ff]/10 blur-2xl" />
                <p className="text-[11px] uppercase tracking-wider text-[#858792]">Products Sold</p>
                <p className="mt-3 font-display text-[32px] font-semibold text-[#ecedf0]" data-testid="metric-products-sold">9,054</p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] mb-16">
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-[#e8e8eb] mb-5">Sales Patterns by Day</h3>
                <p className="text-[14px] leading-[1.65] text-[#9597a1]">
                  Sales tended to increase toward the weekend, with Friday identified as the strongest day.
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#9597a1]">
                  Weekend and pre-weekend periods are the primary momentum drivers, whereas mid-week activity, particularly Wednesday, sees a notable drop in purchasing volume.
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-[12px] font-semibold text-[#dedfe4]">Daily Revenue Distribution</p>
                  <p className="font-mono text-[9px] text-[#7b83ff]">RP (MILLIONS)</p>
                </div>
                <div className="flex h-[220px] items-end justify-between gap-2 border-b border-white/[.08] pb-1 sm:gap-4">
                  {salesData.map((data) => (
                    <div key={data.day} className="group relative flex h-full min-w-0 flex-1 flex-col justify-end text-center">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded bg-white/[.15] px-2 py-1 font-mono text-[9px] text-white backdrop-blur-md">{data.value}M</span>
                      </div>
                      <span className="mx-auto w-full max-w-10 rounded-t-[4px] bg-[#7b83ff] transition-all duration-500 hover:bg-[#9299ff]" 
                            style={{ height: `${(data.value / maxValue) * 100}%`, opacity: data.day === 'Friday' ? 1 : 0.6 }} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between gap-2 sm:gap-4 text-center">
                  {salesData.map((data) => (
                    <span key={data.day} className={`flex-1 truncate text-[10px] ${data.day === 'Friday' ? 'font-semibold text-[#e8e8eb]' : 'text-[#777985]'}`}>
                      {data.day.slice(0, 3)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-2xl p-7">
                <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#7b83ff]/10 text-[#7b83ff]">
                  <BarChart3 size={16} />
                </div>
                <h4 className="text-[14px] font-semibold text-[#ecedf0]">Accessories drove sales volume.</h4>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">Accessories dominated sales across most months and became the primary driver of sales volume, with apparel serving mostly in a supporting capacity.</p>
              </div>
              <div className="glass rounded-2xl p-7">
                <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#7b83ff]/10 text-[#7b83ff]">
                  <BarChart3 size={16} />
                </div>
                <h4 className="text-[14px] font-semibold text-[#ecedf0]">Sales peaked at specific periods.</h4>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">Sales were volatile throughout the period, with stronger performance during certain periods and a notable seasonal pattern.</p>
              </div>
              <div className="glass rounded-2xl p-7">
                <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#7b83ff]/10 text-[#7b83ff]">
                  <BarChart3 size={16} />
                </div>
                <h4 className="text-[14px] font-semibold text-[#ecedf0]">Early-month purchasing was prominent.</h4>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">Many of the highest-sales dates occurred around the beginning of the month, potentially reflecting customer cash-flow or payday patterns.</p>
              </div>
              <div className="glass rounded-2xl p-7">
                <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg bg-[#7b83ff]/10 text-[#7b83ff]">
                  <BarChart3 size={16} />
                </div>
                <h4 className="text-[14px] font-semibold text-[#ecedf0]">Product demand varied considerably.</h4>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-[#858792]">Lower-priced products with simple and frequently needed functions tended to sell more, while some non-core products had lower demand with wide sales gaps between top products and the rest.</p>
              </div>
            </div>
          </section>

          {/* 05 — DASHBOARD */}
          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">05 — DASHBOARD</p>
            <div className="glass group relative overflow-hidden rounded-2xl border border-[#7b83ff]/20 bg-gradient-to-br from-[#171926] to-[#0d0f15] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#7b83ff]/10 blur-[80px] transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-[28px] font-semibold tracking-tight text-[#e8e8eb]">Interactive Dashboard</h3>
                  <p className="mt-3 max-w-[500px] text-[14px] leading-[1.65] text-[#9597a1]">
                    Explore the interactive dashboard to view sales performance across time, products, and categories.
                  </p>
                </div>
                <div>
                  <a href="https://datastudio.google.com/reporting/de945f07-6547-4d33-9aa8-464c4283ab93" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#7b83ff] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(123,131,255,.25)] transition-all hover:-translate-y-0.5 hover:bg-[#8d96f0]" data-testid="link-open-dashboard">
                    Open Dashboard <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 06 — RECOMMENDATIONS */}
          <section className="section-rule pt-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">06 — RECOMMENDATIONS</p>
            <div className="grid gap-5">
              <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#7b83ff]">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">Optimize Friday–Saturday Campaigns</h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">Focus promotional campaigns around Friday and Saturday when purchasing activity is strongest.</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#7b83ff]">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">Prioritize Accessories</h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">Maintain sufficient inventory for accessories as the primary driver of sales volume.</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[.08] bg-white/[.03] text-[#7b83ff]">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-[18px] font-semibold text-[#ecedf0]">Maximize High-Season Opportunities</h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#9597a1]">Increase promotional activity and inventory readiness during stronger sales periods, particularly May–October.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 07 — PROJECT FILES */}
          <section className="section-rule pt-20 pb-20">
            <p className="mb-6 font-mono text-[10px] tracking-[.14em] text-[#5f626e]">07 — PROJECT FILES</p>
            <div className="grid gap-5 md:grid-cols-3">
              <a href={datasetFile} download="Charmpernix_SKU.csv" className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid="link-download-dataset">
                <div>
                  <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">Dataset <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" /></h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#858792]">Source dataset used for the sales performance analysis.</p>
                </div>
                <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#7b83ff]">DOWNLOAD CSV</span>
              </a>

              <a href={notebookFile} download="Charmpernix.ipynb" className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid="link-download-notebook">
                <div>
                  <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">Analysis Notebook <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" /></h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#858792]">Python notebook containing the data cleaning, preprocessing, and analysis workflow.</p>
                </div>
                <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#7b83ff]">DOWNLOAD IPYNB</span>
              </a>

              <a href={presentationFile} download="Charmpernix(2).pptx" className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/[.15] hover:bg-white/[.03]" data-testid="link-download-presentation">
                <div>
                  <h4 className="flex items-center gap-2 font-display text-[16px] font-semibold text-[#ecedf0] group-hover:text-white">Presentation <ArrowRight size={14} className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" /></h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#858792]">Project presentation covering the analysis, findings, conclusions, and recommendations.</p>
                </div>
                <span className="mt-6 font-mono text-[9px] tracking-[.1em] text-[#7b83ff]">DOWNLOAD PPTX</span>
              </a>
            </div>
            
            <div className="mt-16 flex justify-center border-t border-white/[.07] pt-12">
              <Link href="/#projects" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-6 py-3 text-[13px] font-semibold text-[#dedfe4] transition-colors hover:bg-white/[.11]" data-testid="btn-bottom-back">
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </article>

      <div className="shell">
        <footer className="border-t border-white/[.07] py-8 text-[11px] text-[#6f727d]" data-testid="footer-main">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[16px] font-semibold tracking-[-.035em] text-[#e5e6ea]">Ahsan Mubarak.</p>
              <p className="mt-1 text-[11px] text-[#858792]">Data Analyst.</p>
            </div>
            <div className="flex items-center gap-4 text-[#777985]" aria-label="Social links">
              <a href="https://wa.link/f9tvwf" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="WhatsApp" data-testid="link-case-study-whatsapp"><FaWhatsapp size={13} /></a>
              <a href="https://www.linkedin.com/in/ahsan-mubarak-854378314/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn" data-testid="link-case-study-linkedin"><FaLinkedinIn size={12} /></a>
              <a href="mailto:ahsanmubarak2729@gmail.com" className="transition-colors hover:text-white" aria-label="Email" data-testid="link-case-study-email"><Mail size={14} strokeWidth={1.5} /></a>
              <a href="https://github.com/ahsanmubarak27" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub" data-testid="link-case-study-github"><FaGithub size={13} /></a>
              <a href="https://www.kaggle.com/ahsanmubarak" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Kaggle" data-testid="link-case-study-kaggle"><FaKaggle size={12} /></a>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-white/[.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ahsan Mubarak. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-colors hover:text-white text-left sm:text-right" data-testid="button-case-study-top">Back to top ↑</button>
          </div>
        </footer>
      </div>
    </main>
  );
}