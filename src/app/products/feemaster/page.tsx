'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Download, 
  BookOpen, 
  Check, 
  ShieldCheck, 
  HelpCircle,
  CreditCard,
  Settings,
  Users,
  FileSpreadsheet,
  FileText,
  UserCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SmartImage from '@/components/SmartImage';

export default function FeeMasterPage() {
  const [activeDocSection, setActiveDocSection] = useState('key-features');

  const [collected, setCollected] = useState(0);
  const [outstanding, setOutstanding] = useState(0);
  const [staffPaid, setStaffPaid] = useState(0);

  const sampleTransactions = [
    { id: 1084, name: 'Aryan Sharma', detail: '₹ 4,500 (Tuition)' },
    { id: 1083, name: 'Priya Verma', detail: '₹ 6,200 (Transport)' },
    { id: 1082, name: 'Kabir Singh', detail: '₹ 3,500 (Tuition)' },
    { id: 1081, name: 'Anjali Gupta', detail: '₹ 5,000 (Tuition)' },
    { id: 1080, name: 'Rohan Mehta', detail: '₹ 4,000 (Admission)' },
    { id: 1079, name: 'Sneha Reddy', detail: '₹ 7,500 (Tuition)' },
    { id: 1078, name: 'Vikram Malhotra', detail: '₹ 3,200 (Transport)' }
  ];

  const [transactions, setTransactions] = useState(sampleTransactions.slice(0, 3));

  useEffect(() => {
    // Count up animations
    let collectedTimer = 0;
    const targetCollected = 240500;
    const collectedInterval = setInterval(() => {
      collectedTimer += 6000;
      if (collectedTimer >= targetCollected) {
        collectedTimer = targetCollected;
        clearInterval(collectedInterval);
      }
      setCollected(collectedTimer);
    }, 20);

    let outstandingTimer = 0;
    const targetOutstanding = 85200;
    const outstandingInterval = setInterval(() => {
      outstandingTimer += 2500;
      if (outstandingTimer >= targetOutstanding) {
        outstandingTimer = targetOutstanding;
        clearInterval(outstandingInterval);
      }
      setOutstanding(outstandingTimer);
    }, 20);

    let staffTimer = 0;
    const targetStaff = 95;
    const staffInterval = setInterval(() => {
      staffTimer += 2;
      if (staffTimer >= targetStaff) {
        staffTimer = targetStaff;
        clearInterval(staffInterval);
      }
      setStaffPaid(staffTimer);
    }, 20);

    // Live transactions feed simulation
    let currentTransactionIndex = 3;
    const transactionFeed = setInterval(() => {
      setTransactions(prev => {
        const nextTx = sampleTransactions[currentTransactionIndex % sampleTransactions.length];
        currentTransactionIndex++;
        return [
          { ...nextTx, id: Math.max(...prev.map(t => t.id)) + 1 },
          prev[0],
          prev[1]
        ];
      });

      // Fluctuate collected amount slightly to look live
      setCollected(prev => prev + Math.floor(Math.random() * 2000 + 500));
    }, 4000);

    return () => {
      clearInterval(collectedInterval);
      clearInterval(outstandingInterval);
      clearInterval(staffInterval);
      clearInterval(transactionFeed);
    };
  }, []);

  const docSections = [
    { id: 'key-features', title: 'Key Features' },
    { id: 'initial-setup', title: 'Initial Setup' },
    { id: 'login', title: 'Login' },
    { id: 'settings', title: 'Settings' },
    { id: 'students', title: 'Students' },
    { id: 'fee-collection', title: 'Fee Collection' },
    { id: 'staff-payroll', title: 'Staff & Payroll' },
    { id: 'attendance', title: 'Attendance' },
    { id: 'reports', title: 'Reports' },
    { id: 'security', title: 'Security' },
  ];

  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-brand-green" />,
      title: 'Fee Collection',
      description: 'Collect fees by Admission Number — see all pending dues instantly, enter any amount, and the system allocates it month-by-month automatically. Generates a printable PDF receipt.'
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-green" />,
      title: 'Fee Heads & Structures',
      description: 'Define mandatory (Tuition) and optional (Transport) fee heads. Set class-wise amounts per academic year. Fees never get mixed up across sessions.'
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-brand-green" />,
      title: 'Staff & Payroll',
      description: 'Complete staff profiles, daily attendance marking, monthly salary generation, advance handling, and printable PDF salary vouchers.'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-green" />,
      title: 'Student Management',
      description: 'Full digital student register with bulk Excel import. End-of-year promotion wizard that moves students to next class while keeping all history intact.'
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-green" />,
      title: 'Reports',
      description: 'Filter fee collection, defaulter lists, and salary disbursements by date, class, month, student, and status. Export to PDF or Excel. Print directly from the app.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
      title: 'Role-Based Access',
      description: 'Three roles: Owner (full access), Admin (students + attendance), Accountant (fees only). Each login sees only their permitted modules.'
    }
  ];

  const installSteps = [
    {
      step: '1',
      title: 'Contact Us',
      desc: 'Email yoursbench@gmail.com or call +91-9389603320'
    },
    {
      step: '2',
      title: 'Setup Call',
      desc: "We understand your school's structure"
    },
    {
      step: '3',
      title: 'Installation',
      desc: 'We assist with installation and initial data setup'
    },
    {
      step: '4',
      title: 'Training',
      desc: '30-60 minute walkthrough for your team'
    },
    {
      step: '5',
      title: 'Ongoing Support',
      desc: 'Available for questions, updates, and new features'
    }
  ];

  const handleDocScroll = (id: string) => {
    setActiveDocSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Navbar Back Action */}
      <div className="bg-neutral-50 border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors">
            <ArrowLeft size={16} />
            Back to YourBench
          </Link>
        </div>
      </div>

      {/* FM-1. HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative rounded-lg bg-white p-1.5 flex items-center justify-center border border-neutral-200 shadow-sm">
                  <SmartImage
                    src="/logo-feemaster.png"
                    fallbackSrc="/logo-feemaster.svg"
                    alt="FeeMaster Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                    a <span className="font-bold text-neutral-900">Your</span><span className="font-bold text-brand-green">Bench</span> Product
                  </div>
                  <span className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Currently Available
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                FeeMaster — Complete Fee Management for Indian Schools
              </h1>
              
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                A production-ready Windows desktop application — student fees, staff payroll, attendance, and financial reports — all offline, all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="mailto:yoursbench@gmail.com?subject=FeeMaster Installation Inquiry"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-green/20 text-center"
                >
                  Contact to Install
                </a>
                <button
                  onClick={() => handleDocScroll('docs-heading')}
                  suppressHydrationWarning
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-black hover:bg-brand-black/5 text-brand-black font-bold rounded-lg transition-colors text-center cursor-pointer"
                >
                  View Documentation
                </button>
              </div>

            </div>

            {/* Right Column Layout Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden p-2 bg-neutral-50">
                <SmartImage
                  src="/fee-master-dashboard.webp"
                  fallbackSrc="/logo-feemaster.svg"
                  alt="FeeMaster App Screenshot"
                  className="w-full h-full object-cover rounded-xl shadow border border-neutral-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FM-2. FEATURE HIGHLIGHTS */}
      <section className="py-20 bg-[#F8F9FA] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Features Built For Indian Schools</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Everything you need to handle finances, students, and staff offline in a fast, robust desktop package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-brand-green/10 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FM-3. HOW TO GET FEEMASTER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">How to Get FeeMaster</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              We guide you from initial inquiry to a fully operational system setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {installSteps.map((step, idx) => (
              <div key={idx} className="bg-[#F8F9FA] rounded-xl p-5 border border-neutral-200/60 relative flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <span className="w-8 h-8 rounded-full bg-brand-green text-white font-extrabold flex items-center justify-center text-sm shadow">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-neutral-900 text-base">{step.title}</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FM-4. DOCUMENTATION SECTION */}
      <section id="docs-heading" className="py-20 bg-[#F8F9FA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">App Documentation</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Learn how to set up, configure, and use FeeMaster in your school.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Sidebar Navigation (Col-3) */}
            <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-1">
              <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 px-2">Documentation</div>
                <div className="flex flex-wrap lg:flex-col gap-1">
                  {docSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleDocScroll(sec.id)}
                      suppressHydrationWarning
                      className={`text-left w-full px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        activeDocSection === sec.id
                          ? 'bg-brand-green/10 text-brand-green'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Docs Content Column (Col-9) */}
            <div className="lg:col-span-9 bg-white border border-neutral-200 shadow-md rounded-xl p-6 sm:p-10 space-y-12">
              
              {/* KEY FEATURES */}
              <div id="key-features" className="space-y-4 scroll-mt-24">
                <h3 className="text-2xl font-extrabold text-neutral-900 border-b border-neutral-100 pb-2">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Secure Authentication:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Dual-layer password security (Admin Login + Settings Password). Built-in logout.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Onboarding Wizard:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">First-launch setup — School Name, Address, Contact, Logo, Academic Year.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Fee Heads:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Mandatory/optional, recurring (monthly/annual/term) or one-time fee categories.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Fee Structures:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Class-wise fee amounts per academic year.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Route Management:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Transport routes with custom monthly conveyance costs.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Student Profiles:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Admission No, Name, Class, DOB, Parent Contact, Transport Opt-in. Bulk Excel import.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Promotion Wizard:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">End-of-year class promotions preserving full history.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Fee Collection:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Fetch dues by Admission Number. Flexible amount — auto-allocates oldest dues first. Leftover: auto-apply next month or hold as advance credit. PDF receipt auto-generated.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Receipt Log:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Review, reprint, or inspect past transactions.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Staff Management:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Staff profiles, designations, departments. Bulk Excel import.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Attendance:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Daily Present/Absent/Leave/Half-day with remarks.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Salary Payroll:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Basic Pay + Allowances - Deductions. Monthly salary generation, advances, cash/bank disbursement, PDF salary vouchers.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Reports:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Collection history, defaulter records, salary payout history. Filter by date/class/student/month. Print + Export PDF/Excel.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-neutral-900">Database:</div>
                    <p className="leading-relaxed text-xs sm:text-sm">Stored at <code className="bg-neutral-100 text-red-650 px-1.5 py-0.5 rounded text-xs font-mono">%LOCALAPPDATA%\FeeMaster\feemaster.db</code>. Fully offline. No internet required.</p>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-100" />

              {/* STEP-BY-STEP GUIDES */}
              <div className="space-y-8">
                <h3 className="text-2xl font-extrabold text-neutral-900 border-b border-neutral-100 pb-2">Step-by-Step Guide</h3>
                
                {/* Step 1 */}
                <div id="initial-setup" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 1
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Initial Setup</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Launch the app. Setup Wizard appears on first run. Fill in: School Name, Address, Contact Number, School Logo, Academic Year Label (e.g. 2026-27), Start &amp; End Date. Click <strong>&quot;Finish Setup&quot;</strong>.
                  </p>
                </div>

                {/* Step 2 */}
                <div id="login" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 2
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Login</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Default admin password is <strong>&quot;admin&quot;</strong>. Change it via <em>Settings → Change Password</em>.
                  </p>
                </div>

                {/* Step 3 */}
                <div id="settings" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 3
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Configure Settings (do before adding students)</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Go to <strong>Settings tab</strong> → enter settings password (default: admin). Then:
                  </p>
                  <ul className="list-disc list-inside text-sm text-neutral-600 pl-4 space-y-1">
                    <li><strong>Fee Heads Master:</strong> Add fee heads with name + recurrence type.</li>
                    <li><strong>Fee Structure Setup:</strong> Map amounts per class per academic year.</li>
                    <li><strong>Route Management:</strong> Add transport routes if transport module is required.</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div id="students" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 4
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Add Students</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong>Individual entry:</strong> Students → Student Profiles → Add Student (Admission No must be unique).
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong>Bulk import:</strong> Settings → Bulk Import Students → download template → fill it → upload.
                  </p>
                </div>

                {/* Step 5 */}
                <div id="fee-collection" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 5
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Collect Fees</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Go to <strong>Collect Fee tab</strong> → enter Admission Number → click <strong>Fetch</strong> → view pending dues table → enter Amount Received → choose leftover handling (auto-apply or hold as advance) → Preview &amp; Pay → Confirm &amp; Pay. A PDF receipt is generated automatically.
                  </p>
                </div>

                {/* Step 6 */}
                <div id="staff-payroll" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 6
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Staff &amp; Payroll</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Staff → Staff Profiles → Add Staff. Configure Salary Structure (Basic Pay + Allowances - Deductions). Go to Salary Management → select month → generate dues → record payouts → print PDF voucher.
                  </p>
                </div>

                {/* Step 7 */}
                <div id="attendance" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 7
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Attendance</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Staff → Staff Attendance → select date → mark status (Present/Absent/Leave/Half-day) → Save Attendance.
                  </p>
                </div>

                {/* Step 8 */}
                <div id="reports" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 8
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Reports</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Reports tab → choose report type (Collection history, Defaulters, Salary payout) → apply filters (date/class/student/month) → click <strong>Print</strong> or <strong>Export PDF/Excel</strong>.
                  </p>
                </div>

                {/* Step 9 */}
                <div id="security" className="space-y-3 scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-md text-xs font-bold">
                    Step 9
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Security</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Settings module always requires a settings password. Secure logout button is located at the bottom of the sidebar.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FM-5. CTA STRIP */}
      <section className="bg-brand-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-wider">
            <Sparkles size={16} />
            <span>Ready to bring FeeMaster to your school?</span>
          </div>
          <h2 className="text-3xl font-extrabold">Streamline your school fees &amp; payroll today.</h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            Contact us for a demo, system installation, and onboarding training customized to your school&apos;s curriculum.
          </p>
          <div className="pt-2">
            <a
              href="mailto:yoursbench@gmail.com?subject=FeeMaster Installation Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-green/20"
            >
              Contact Us to Get Started <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
