'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, DollarSign, X, CheckCircle, Mail, Send } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  responsibilities: string[];
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: 'co-founder',
      title: 'Co-Founder (Business & Operations)',
      type: 'Full-time / Equity Partner',
      location: 'Remote / India Travel',
      salary: 'Equity based (Undisclosed)',
      description: 'We are looking for an entrepreneurial Co-Founder to drive operations, lead sales and school onboarding campaigns across India. You will partner directly with Rishabh Yadav to run business activities, raise/manage capital, build regional partnerships, and shape the company strategy.',
      skills: ['Business Development', 'Operations Management', 'Sales & Marketing', 'School Network Access', 'Leadership & Scaling'],
      responsibilities: [
        'Devise and execute school onboarding campaigns for FeeMaster across various states.',
        'Lead fundraising efforts, financial planning, and cashflow management.',
        'Form strategic alliances with education departments and private school clusters.',
        'Build and supervise a regional sales force and ground support team.'
      ]
    },
    {
      id: 'full-stack',
      title: 'First Full Stack Developer',
      type: 'Full-time',
      location: 'Remote (India)',
      salary: 'Competitive (Undisclosed)',
      description: 'Join as our founding developer. You will build and scale web modules corresponding to our desktop application suite (e.g. web portal syncs for parents/school owners) and maintain core Next.js web projects.',
      skills: ['React / Next.js', 'Node.js', 'FastAPI / Python', 'PostgreSQL / SQL', 'Tailwind CSS', 'Vercel Deployment'],
      responsibilities: [
        'Design, write, and deploy full-stack web modules connecting offline FeeMaster databases to cloud reports.',
        'Own end-to-end frontend and backend codebases for web apps.',
        'Maintain database integrity, design API endpoints, and ensure high performance.'
      ]
    },
    {
      id: 'ai-engineer',
      title: 'AI Automation Engineer',
      type: 'Full-time',
      location: 'Remote (India)',
      salary: 'Competitive (Undisclosed)',
      description: 'We are expanding our AI offerings (such as Prepo.ai). You will be in charge of developing automated quiz generators, scoring algorithms, RAG pipelines for educational content, and business workflows using LLMs.',
      skills: ['Python', 'LangChain / LangGraph', 'OpenAI / Gemini APIs', 'Vector Databases (Chroma/PGVector)', 'RAG Pipelines', 'Prompt Engineering'],
      responsibilities: [
        'Develop AI models and prompt strategies for educational prep and WhatsApp automation workflows.',
        'Design, build, and test LangGraph agents to run automated customer support workflows.',
        'Integrate AI services into web/desktop endpoints cleanly.'
      ]
    },
    {
      id: 'regional-manager',
      title: 'Regional Manager (Ground Onboarding)',
      type: 'Full-time',
      location: 'On-Field (Various Regions, India)',
      salary: 'Undisclosed + Performance Commission',
      description: 'You will work on the ground to pitch FeeMaster directly to school administrators, principal councils, and business owners. You will perform setup, gather parameters, assist with bulk student uploads, and train school accountants on daily operation.',
      skills: ['Excellent Communication (Hindi/English/Regional languages)', 'Direct Sales & Pitching', 'Basic Software Configuration (Excel/Windows)', 'Relationship Building'],
      responsibilities: [
        'Visit schools physically, demonstrate FeeMaster desktop app features to management.',
        'Gather fee heads, route configurations, design settings parameter files, and coordinate downloads.',
        'Assist school admins with bulk Excel uploads of students and staff databases.',
        'Provide first-level support and walk-through training to administrators.'
      ]
    }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      
      {/* Top Navbar Back Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors">
          <ArrowLeft size={16} />
          Back to YourBench
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">Work With Us</h1>
          <p className="text-neutral-600 max-w-lg mx-auto text-sm sm:text-base">
            We are building tools that help Indian educational institutions and businesses work more efficiently. Find your role below.
          </p>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedJob(job)}
              className="bg-white border border-neutral-250/70 hover:border-brand-green/50 shadow-sm rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 cursor-pointer transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-green/10 text-brand-green">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-brand-green transition-colors">
                    {job.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={13} /> {job.salary}
                  </span>
                  <span className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-semibold text-[10px]">
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-xs font-bold text-brand-green hover:underline">
                View Details &amp; Apply
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedJob(null)}
                  suppressHydrationWarning
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Job Details Header */}
                <div className="space-y-3 pr-8 border-b border-neutral-100 pb-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-neutral-400" /> {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} className="text-neutral-400" /> {selectedJob.salary}
                    </span>
                    <span className="bg-brand-green/10 text-brand-green px-2 py-0.5 rounded text-xs font-semibold">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>

                {/* Job Content Body */}
                <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-h-[45vh] overflow-y-auto pr-2">
                  
                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Role Overview</h4>
                    <p className="text-neutral-650">{selectedJob.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex gap-2.5 items-start text-xs sm:text-sm">
                          <CheckCircle size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Skills Required</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedJob.skills.map((skill, index) => (
                        <span key={index} className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-2.5 py-1 rounded text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Apply Instructions */}
                <div className="border-t border-neutral-100 mt-6 pt-6 space-y-4">
                  <div className="p-4 bg-[#F8F9FA] rounded-xl border border-neutral-200/50 space-y-2">
                    <div className="flex items-center gap-2 text-brand-green text-xs sm:text-sm font-bold uppercase">
                      <Mail size={16} />
                      <span>How to Apply</span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Please mail your CV and Cover Letter directly to our team at <strong className="text-neutral-700">yoursbench@gmail.com</strong>. Mention the role name in the subject line (e.g. <em>&quot;Application for {selectedJob.title}&quot;</em>).
                    </p>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => setSelectedJob(null)}
                      suppressHydrationWarning
                      className="px-5 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 font-semibold hover:bg-neutral-50 text-xs sm:text-sm"
                    >
                      Close
                    </button>
                    <a
                      href={`mailto:yoursbench@gmail.com?subject=Application for ${selectedJob.title}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-colors text-xs sm:text-sm shadow-md shadow-brand-green/10"
                    >
                      <Send size={13} />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
