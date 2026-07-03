import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to YourBench
        </Link>

        <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-3 text-brand-green border-b border-neutral-100 pb-4">
            <Scale size={32} />
            <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Terms of Service</h1>
          </div>

          <div className="text-sm text-neutral-500 italic">Last updated: July 2026</div>

          <div className="text-neutral-650 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Welcome to <strong>YourBench</strong>. By using our website, installing our desktop software (such as FeeMaster), or ordering custom software solutions, you agree to comply with the following Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">1. Software Licensing</h2>
            <p>
              Desktop products built by YourBench (like FeeMaster) are licensed under a single-school or multi-school activation agreement. Licenses are non-transferable. You may not reverse engineer, decompile, or redistribute the installation executable packages without explicit written consent from Rishabh Yadav or an authorized YourBench agent.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">2. Offline Operations &amp; Backup Responsibility</h2>
            <p>
              Because FeeMaster operates strictly offline on your computer, <strong>YourBench has no access to your databases</strong>. 
              <br />
              <strong className="text-neutral-900">Backup Responsibility:</strong> The licensee (your school or business administration) is solely responsible for creating regular backups of the local database files located at <code className="bg-neutral-100 px-1 py-0.5 rounded text-xs font-mono">%LOCALAPPDATA%\FeeMaster\feemaster.db</code>. YourBench is not liable for data loss due to operating system corruption, hardware failures, or accidental deletions.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">3. On-Field &amp; Installation Support</h2>
            <p>
              Installation services and onboarding training (including regional support setups) are coordinated via direct agreements. Support services are delivered online via remote desktop tools, or on-field via our regional onboarding managers where available.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">4. Disclaimers &amp; Limitations of Liability</h2>
            <p>
              All software is provided &quot;as is&quot;, without warranty of any kind, express or implied. YourBench does not guarantee that the software will be completely error-free or run uninterrupted on all versions of Windows. In no event shall YourBench or its developers be held liable for any financial damages, administrative fines, or business interruptions arising out of the use or inability to use the software.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising out of the use of our services or software shall be subject to the exclusive jurisdiction of the courts in Kota, Rajasthan.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">6. Inquiries</h2>
            <p>
              For licensing inquiries, terms clarifications, or custom support requests, contact us at:
              <br />
              <a href="mailto:yoursbench@gmail.com" className="text-brand-green font-bold hover:underline">yoursbench@gmail.com</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
