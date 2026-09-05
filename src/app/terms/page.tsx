import Link from 'next/link';
import { ArrowLeft, Scale, ShieldCheck, CreditCard, RefreshCw, FileText, AlertTriangle, Phone, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to YourBench</span>
        </Link>

        {/* Document Card */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lg p-8 sm:p-12 space-y-8">
          
          {/* Header */}
          <div className="border-b border-neutral-100 pb-6 space-y-2">
            <div className="flex items-center gap-3 text-brand-green">
              <Scale size={32} />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Terms of Service &amp; Commercial Agreement
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 italic">
              Effective Date: September 2026 | Governing Entity: YourBench (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            </p>
          </div>

          <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-8">
            
            {/* Intro */}
            <p>
              Welcome to <strong>YourBench</strong>. These Terms of Service constitute a legally binding agreement between you (whether personally, on behalf of a school, educational institute, company, MSME, or other entity — collectively referred to as <strong>&quot;Client&quot;</strong> or <strong>&quot;Licensee&quot;</strong>) and <strong>YourBench</strong> concerning your access to our website, purchase of software licenses (including <strong>FeeMaster</strong>), and procurement of bespoke digital engineering, web applications, and custom technology solutions.
            </p>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <span>1. Scope of Services &amp; Engagements</span>
              </h2>
              <p>
                YourBench provides proprietary software products, bespoke web development (corporate websites, e-commerce storefronts, web applications), desktop tools, AI workflow automations, and recurring managed services (cloud hosting, SLA maintenance, database infrastructure). Each project or licensing engagement is governed by these Terms alongside any mutually agreed Statement of Work (SOW), proposal, or invoice issued by YourBench.
              </p>
            </div>

            {/* Section 2 - Commercial Terms & 20% Advance */}
            <div className="space-y-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <CreditCard className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>2. Commercial Payment Structure (Custom Software &amp; Web Projects)</span>
              </h2>
              <p>
                Unless explicitly stipulated otherwise in an approved written Statement of Work (SOW), all custom design, web development, desktop engineering, and bespoke solution contracts follow our standard milestone payment framework:
              </p>
              
              <div className="space-y-3 pl-2 sm:pl-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <strong className="text-neutral-900">Initial Mobilization Deposit (20% Advance):</strong>
                    <p className="text-sm text-neutral-600 mt-0.5">
                      Upon mutual scope agreement and project kickoff, the Client must remit an upfront, non-refundable mobilization deposit equal to <strong>20% of the total agreed contract value</strong>. Work will commence only upon confirmed receipt of this deposit. This deposit covers requirement discovery, systems architecture, team resource allocation, and initial prototype design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    B
                  </span>
                  <div>
                    <strong className="text-neutral-900">Final Delivery &amp; Handover Settlement (80% Balance):</strong>
                    <p className="text-sm text-neutral-600 mt-0.5">
                      The remaining <strong>80% balance</strong> becomes due and payable immediately upon project completion, feature demonstration, and successful User Acceptance Testing (UAT). Full settlement of the balance is a mandatory prerequisite prior to live production deployment, source code transfer, database migration, or administrative credential release.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Recurring Revenue & Subscriptions */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <RefreshCw className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>3. Recurring Revenue, Retainers &amp; Subscription Services</span>
              </h2>
              <p>
                For projects or arrangements involving ongoing recurring services — including managed cloud hosting, automated backup oversight, third-party API token management, SLA technical maintenance, or SaaS product subscriptions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                <li>
                  <strong>Billing Frequency &amp; Invoicing:</strong> Recurring fees are billed in advance on an agreed cycle (monthly, quarterly, or annually). Invoices must be cleared within <strong>7 calendar days</strong> of issuance.
                </li>
                <li>
                  <strong>Late Payment &amp; Service Suspension:</strong> If a recurring invoice remains unpaid after the 7-day grace period, YourBench reserves the right to temporarily suspend hosting, automated services, or technical support until all arrears are settled.
                </li>
                <li>
                  <strong>Cancellation &amp; Termination of Recurring Contracts:</strong> Either party may terminate a recurring service contract by providing a minimum of <strong>30 days written notice</strong> via email. Pre-paid subscription periods are non-refundable.
                </li>
              </ul>
            </div>

            {/* Section 4 - Change Requests & Out-of-Scope Work */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900">
                4. Scope Boundaries &amp; Change Requests
              </h2>
              <p>
                Any functionality, design variation, or integration not explicitly itemized in the initial project agreement is considered out-of-scope. Additional requests will be evaluated and quoted separately under a written <strong>Change Order</strong>, which must be approved with corresponding milestone fees prior to development.
              </p>
            </div>

            {/* Section 5 - Intellectual Property & Source Code Transfer */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <ShieldCheck className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>5. Intellectual Property Rights (IP)</span>
              </h2>
              <p>
                Upon <strong>100% full settlement of all invoiced amounts</strong>, the Client is granted full ownership and title to the bespoke software code, assets, and design deliverables specifically crafted for their project. 
              </p>
              <p className="text-sm text-neutral-600">
                YourBench retains all rights, title, and interest in pre-existing generic algorithms, proprietary reusable modules, internal scaffolding frameworks, and developer libraries used to construct the solution. Open-source dependencies remain subject to their respective open-source licenses (e.g., MIT, Apache 2.0).
              </p>
            </div>

            {/* Section 6 - Client Responsibilities */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900">
                6. Client Obligations &amp; Timely Approvals
              </h2>
              <p>
                Successful project delivery relies upon timely client participation. The Client agrees to provide all necessary assets (branding, content, credentials, API access) and review milestone demos within <strong>5 business days</strong> of submission. Delays caused by prolonged Client inaction shall automatically extend delivery timelines.
              </p>
            </div>

            {/* Section 7 - FeeMaster & Desktop Software Offline Terms */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900">
                7. Desktop Software (FeeMaster) Offline Terms
              </h2>
              <p>
                FeeMaster is licensed under single-school or multi-institution activation keys. Because FeeMaster operates strictly offline on your local hardware:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
                <li>YourBench has no remote telemetry or cloud access to your institutional records.</li>
                <li>The Licensee is solely responsible for creating regular backups of local databases (<code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono">%LOCALAPPDATA%\FeeMaster\feemaster.db</code>).</li>
                <li>YourBench is not liable for data loss arising from operating system crashes, malware, or hardware failure.</li>
              </ul>
            </div>

            {/* Section 8 - 30-Day Bug-Fix Warranty & Limitation of Liability */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900">
                8. Warranty &amp; Limitation of Liability
              </h2>
              <p>
                YourBench provides a complimentary <strong>30-day warranty</strong> following final deployment to rectify any bugs or deviations from the agreed scope at zero additional cost. Post-warranty updates are covered under standard support packages.
              </p>
              <p className="text-sm text-neutral-600">
                To the maximum extent permitted by applicable law, YourBench&apos;s cumulative liability for any claim arising out of or related to these Terms or software deliverables shall be strictly capped at the total amount paid by the Client to YourBench for the specific project in dispute. Under no circumstances shall YourBench be liable for indirect, consequential, or punitive damages.
              </p>
            </div>

            {/* Section 9 - Governing Law & Jurisdiction */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900">
                9. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms and any project disputes shall be governed by and construed in accordance with the <strong>Laws of the Republic of India</strong>. In the event of any irreconcilable dispute, the parties submit to the exclusive jurisdiction of the competent civil courts located in <strong>Kota, Rajasthan</strong> or <strong>Uttar Pradesh</strong>, India.
              </p>
            </div>

            {/* Section 10 - Official Legal Contact */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-neutral-200/80 space-y-4">
              <h2 className="text-lg font-bold text-neutral-900">10. Contact &amp; Legal Notices</h2>
              <p className="text-sm text-neutral-600">
                For commercial agreements, milestone confirmations, licensing queries, or legal notices, please reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
                <a href="mailto:yoursbench@gmail.com" className="inline-flex items-center gap-2 font-bold text-brand-green hover:underline text-sm">
                  <Mail size={16} />
                  <span>yoursbench@gmail.com</span>
                </a>
                <a href="tel:+919389603320" className="inline-flex items-center gap-2 font-bold text-neutral-900 hover:text-brand-green text-sm transition-colors">
                  <Phone size={16} />
                  <span>+91-9389603320</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
