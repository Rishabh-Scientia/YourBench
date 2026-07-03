import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to YourBench
        </Link>

        <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-3 text-brand-green border-b border-neutral-100 pb-4">
            <Shield size={32} />
            <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Privacy Policy</h1>
          </div>

          <div className="text-sm text-neutral-500 italic">Last updated: July 2026</div>

          <div className="text-neutral-650 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              At <strong>YourBench</strong>, we respect your privacy and are committed to protecting it. Since our key products, including <strong>FeeMaster</strong>, operate as fully offline desktop applications, data security is structurally built into our software design.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">1. Information We Collect</h2>
            <p>
              When you download or install our offline desktop software, we do <strong>not</strong> collect, harvest, or transmit any student, financial, payroll, or attendance data. All database records (including student names, route mapping, salary logs, and collections) are stored strictly locally on your machine at:
              <br />
              <code className="bg-neutral-100 px-2 py-0.5 rounded text-xs font-mono text-red-650 block mt-2">%LOCALAPPDATA%\FeeMaster\feemaster.db</code>
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">2. Web Forms and Contact</h2>
            <p>
              If you submit an inquiry through our contact form, request a custom software demonstration, or apply for open vacancies via email, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Your Name &amp; School Designation</li>
              <li>Contact Details (Email Address, Phone Number)</li>
              <li>Message Content and CVs (for Careers)</li>
            </ul>
            <p>
              This data is utilized solely to respond to your queries or process application details, and is never shared, leased, or sold to third-party advertisers.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">3. Cookies and Analytics</h2>
            <p>
              Our official company website uses standard, session-based cookies and lightweight analytics to track general website visitor traffic and route load speeds. No personal identifier data is matched.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">4. Custom Software Integrations</h2>
            <p>
              For custom solutions (such as web applications or AI integrations running cloud servers), credentials and API tokens are securely encrypted using standard industry practices (e.g. environment parameters and secure keychain configurations).
            </p>

            <h2 className="text-xl font-bold text-neutral-900 pt-2">5. Updates and Contact</h2>
            <p>
              We may update this Privacy Policy from time to time. For questions concerning this policy or local database configurations, reach out directly at:
              <br />
              <a href="mailto:yoursbench@gmail.com" className="text-brand-green font-bold hover:underline">yoursbench@gmail.com</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
