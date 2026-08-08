'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  X, 
  CheckCircle, 
  Send, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

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

const DEFAULT_JOBS: Job[] = [
  {
    id: 'co-founder',
    title: 'Co-Founder (Business & Operations)',
    type: 'Full-time / Equity Partner',
    location: 'Remote / India Travel',
    salary: 'Equity based (Undisclosed)',
    description: 'We are looking for an entrepreneurial Co-Founder to drive operations, lead sales and school onboarding campaigns across India. You will partner directly with Rishabh Yadav to run business activities, raise/manage capital, build regional partnerships, and shape company strategy.',
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

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>(DEFAULT_JOBS);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Fetch jobs dynamically from Supabase if table exists
  useEffect(() => {
    async function loadJobs() {
      try {
        const { data, error } = await supabase
          .from('job_openings')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const mappedJobs: Job[] = data.map((item) => ({
            id: item.id,
            title: item.title,
            type: item.type,
            location: item.location,
            salary: item.salary,
            description: item.description,
            skills: Array.isArray(item.skills) ? item.skills : (item.skills ? item.skills.split(',') : []),
            responsibilities: Array.isArray(item.responsibilities) ? item.responsibilities : (item.responsibilities ? item.responsibilities.split('\n') : [])
          }));
          setJobs(mappedJobs);
        }
      } catch (e) {
        // Fallback to DEFAULT_JOBS if table does not exist yet
      }
    }
    loadJobs();
  }, []);

  const openJobModal = (job: Job) => {
    setSelectedJob(job);
    setActiveTab('details');
    setSubmitSuccess(false);
    setSubmitError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    if (!resumeFile) {
      setSubmitError('Please attach your Resume PDF document before submitting.');
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // 1. Upload Resume PDF to Supabase Storage bucket 'resumes'
      const fileExt = resumeFile.name.split('.').pop();
      const sanitizedFileName = `${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const filePath = `applications/${sanitizedFileName}`;

      const { data: storageData, error: storageError } = await supabase
        .storage
        .from('resumes')
        .upload(filePath, resumeFile, {
          cacheControl: '3600',
          upsert: true
        });

      let resumePublicUrl = '';
      if (storageError) {
        console.warn('Storage bucket upload warning:', storageError.message);
        // Fallback to storing filename string if bucket RLS policy restricts direct upload
        resumePublicUrl = `Uploaded file: ${resumeFile.name}`;
      } else {
        const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(filePath);
        resumePublicUrl = urlData.publicUrl;
      }

      // 2. Insert application row into Supabase table 'job_applications'
      const { error: dbError } = await supabase
        .from('job_applications')
        .insert([
          {
            name: applicantName,
            email: applicantEmail,
            phone: applicantPhone,
            role_applied: selectedJob.title,
            resume_url: resumePublicUrl,
            created_at: new Date().toISOString()
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      setSubmitSuccess(true);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setResumeFile(null);
    } catch (err: any) {
      console.error('Error submitting job application:', err);
      setSubmitError(err.message || 'Failed to submit application. Please verify Supabase setup.');
    } finally {
      setSubmitting(false);
    }
  };

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
              onClick={() => openJobModal(job)}
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

              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-lg bg-brand-green text-white font-bold text-xs shadow-sm hover:bg-brand-green-hover transition-colors">
                  View &amp; Apply Now
                </span>
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
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600 transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Job Details Header */}
                <div className="space-y-3 pr-8 border-b border-neutral-100 pb-4 mb-4">
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

                  {/* Tab Switches inside Modal */}
                  <div className="flex border-b border-gray-200 pt-2 gap-4">
                    <button
                      onClick={() => setActiveTab('details')}
                      className={`pb-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                        activeTab === 'details'
                          ? 'border-brand-green text-brand-green'
                          : 'border-transparent text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      Role Description
                    </button>
                    <button
                      onClick={() => setActiveTab('apply')}
                      className={`pb-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeTab === 'apply'
                          ? 'border-brand-green text-brand-green'
                          : 'border-transparent text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      <Upload size={13} />
                      <span>Submit Application</span>
                    </button>
                  </div>

                </div>

                {/* TAB 1: ROLE DESCRIPTION */}
                {activeTab === 'details' && (
                  <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
                    
                    {/* Description */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Role Overview</h4>
                      <p className="text-neutral-650 text-sm">{selectedJob.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Key Responsibilities</h4>
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
                      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Required Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedJob.skills.map((skill, index) => (
                          <span key={index} className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-2.5 py-1 rounded text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setActiveTab('apply')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-colors text-xs sm:text-sm shadow-md"
                      >
                        <Upload size={15} />
                        <span>Apply For This Position</span>
                      </button>
                    </div>

                  </div>
                )}

                {/* TAB 2: APPLICATION & RESUME UPLOAD FORM */}
                {activeTab === 'apply' && (
                  <div className="space-y-5 max-h-[55vh] overflow-y-auto pr-2">
                    
                    {submitSuccess ? (
                      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 size={28} />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-900">Application Submitted Successfully!</h4>
                        <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                          Thank you for applying for <strong>{selectedJob.title}</strong>. Your resume has been uploaded to our admin portal. Rishabh and the team will review your application soon.
                        </p>
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors"
                        >
                          Close Window
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplySubmit} className="space-y-4">
                        
                        {submitError && (
                          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center gap-2">
                            <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
                            <span>{submitError}</span>
                          </div>
                        )}

                        {/* Full Name */}
                        <div>
                          <label className="text-xs font-semibold uppercase text-gray-600 mb-1 block">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={applicantName}
                            onChange={(e) => setApplicantName(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                          />
                        </div>

                        {/* Email & Phone Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold uppercase text-gray-600 mb-1 block">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="you@example.com"
                              value={applicantEmail}
                              onChange={(e) => setApplicantEmail(e.target.value)}
                              className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold uppercase text-gray-600 mb-1 block">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 99999 99999"
                              value={applicantPhone}
                              onChange={(e) => setApplicantPhone(e.target.value)}
                              className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Resume PDF File Upload */}
                        <div>
                          <label className="text-xs font-semibold uppercase text-gray-600 mb-1 block">
                            Upload Resume (PDF / DOC) <span className="text-red-500">*</span>
                          </label>
                          <div className="border-2 border-dashed border-gray-200 hover:border-green-500 rounded-xl p-4 text-center transition-colors bg-gray-50/50">
                            <input
                              type="file"
                              id="resumeUpload"
                              accept=".pdf,.doc,.docx"
                              required
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <label htmlFor="resumeUpload" className="cursor-pointer space-y-2 block">
                              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                <FileText size={20} />
                              </div>
                              <div className="text-xs text-gray-600">
                                {resumeFile ? (
                                  <span className="font-bold text-green-700">{resumeFile.name}</span>
                                ) : (
                                  <>Click to <span className="text-green-600 font-bold underline">Choose PDF File</span> (max 10MB)</>
                                )}
                              </div>
                            </label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-3 flex justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveTab('details')}
                            className="px-4 py-2.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                          >
                            Back
                          </button>

                          <button
                            type="submit"
                            disabled={submitting}
                            className="px-6 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
                          >
                            {submitting ? (
                              <>
                                <Loader2 size={14} className="animate-spin" />
                                <span>Uploading &amp; Submitting...</span>
                              </>
                            ) : (
                              <>
                                <Send size={14} />
                                <span>Submit Application</span>
                              </>
                            )}
                          </button>
                        </div>

                      </form>
                    )}

                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
