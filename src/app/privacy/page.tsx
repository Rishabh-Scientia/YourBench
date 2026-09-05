import Link from 'next/link';
import { ArrowLeft, Shield, Lock, EyeOff, Server, UserCheck, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
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
              <Shield size={32} />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 italic">
              Last Updated: September 2026 | Operating Entity: YourBench (India)
            </p>
          </div>

          <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-8">
            
            {/* Intro */}
            <p>
              At <strong>YourBench</strong>, we respect your privacy and are committed to safeguarding all personal information, business requirements, and operational data entrusted to us. This Privacy Policy details how we collect, process, store, and protect your information when you visit our website, submit inquiries, request custom software proposals, or use our digital tools.
            </p>

            {/* Section 1 - Data We Collect */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Lock className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>1. Information We Collect</span>
              </h2>
              <p>
                We only collect data strictly necessary to communicate, fulfill our contractual obligations, and deliver customized software solutions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                <li>
                  <strong>Contact &amp; Project Inquiries:</strong> When you submit a project inquiry or contact request, we collect your Full Name, Email Address, Phone Number, Selected Service Area, and Project Description message.
                </li>
                <li>
                  <strong>Job Applications &amp; Resumes:</strong> When you apply for positions via our Careers portal, we collect your Name, Email, Phone, Target Role, and uploaded Resume / CV document.
                </li>
                <li>
                  <strong>Technical &amp; Analytics Data:</strong> Standard anonymous server request data including browser type, referring URLs, and page load timestamps for security and performance optimization.
                </li>
              </ul>
            </div>

            {/* Section 2 - Absolute Confidentiality & Zero Data Selling */}
            <div className="space-y-3 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <h2 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <EyeOff className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>2. Zero Third-Party Sale &amp; Non-Disclosure Guarantee</span>
              </h2>
              <p className="text-emerald-900 font-medium">
                We maintain an absolute, non-negotiable policy: <strong>YourBench NEVER sells, rents, leases, trades, or monetizes client data, business logic, inquiry details, or contact information to any third party, marketing broker, or advertiser.</strong>
              </p>
              <p className="text-xs sm:text-sm text-emerald-800">
                All business discussions, technical specifications, and proprietary workflow blueprints shared with YourBench are treated with strict confidentiality.
              </p>
            </div>

            {/* Section 3 - Desktop Software (FeeMaster) Privacy */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Server className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>3. Desktop Software Privacy (FeeMaster)</span>
              </h2>
              <p>
                Our core desktop products (including FeeMaster for schools and institutions) operate strictly <strong>100% offline</strong> on your local computer hardware:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
                <li>No student records, fee collection amounts, staff payroll details, or attendance records are ever uploaded to any remote server or cloud infrastructure.</li>
                <li>Your entire database is stored locally in an encrypted SQLite database on your own PC (<code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono">%LOCALAPPDATA%\FeeMaster\feemaster.db</code>).</li>
                <li>You retain 100% complete data sovereignty and ownership.</li>
              </ul>
            </div>

            {/* Section 4 - Data Security & Infrastructure */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Shield className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>4. Data Security Standards</span>
              </h2>
              <p>
                All web traffic on YourBench is encrypted in transit using industry-standard TLS / SSL encryption. Inquiries and career application records are housed within enterprise-grade infrastructure (Supabase &amp; Vercel Edge) equipped with strict Row-Level Security (RLS) policies, preventing unauthorized external access.
              </p>
            </div>

            {/* Section 5 - Data Subject Rights */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <UserCheck className="text-brand-green w-5 h-5 flex-shrink-0" />
                <span>5. Your Data Rights</span>
              </h2>
              <p>
                In compliance with the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> of India, you retain full rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
                <li>The right to request a summary of personal information we maintain about you.</li>
                <li>The right to request correction or updating of outdated contact details.</li>
                <li>The right to request complete deletion of past inquiry records or submitted resumes.</li>
              </ul>
              <p className="text-sm text-neutral-600">
                To exercise any of these rights, email us at <a href="mailto:yoursbench@gmail.com" className="text-brand-green font-bold hover:underline">yoursbench@gmail.com</a>. Requests are fulfilled within 48 business hours.
              </p>
            </div>

            {/* Section 6 - Official Privacy Contact */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-neutral-200/80 space-y-4">
              <h2 className="text-lg font-bold text-neutral-900">6. Privacy Inquiries &amp; Data Officer Contact</h2>
              <p className="text-sm text-neutral-600">
                If you have questions, feedback, or concerns regarding our privacy safeguards or data handling practices, contact our team directly:
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
