'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  Send, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Clock,
  ShieldCheck,
  Building2
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
  created_at?: string;
}

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const jobId = resolvedParams.id;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    async function fetchJobDetails() {
      setLoading(true);
      setNotFound(false);
      try {
        const { data, error } = await supabase
          .from('job_openings')
          .select('*')
          .eq('id', jobId)
          .single();

        if (error || !data) {
          setNotFound(true);
        } else {
          setJob({
            id: String(data.id),
            title: data.title || 'Job Position',
            type: data.type || 'Full-time',
            location: data.location || 'Remote',
            salary: data.salary || 'Undisclosed',
            description: data.description || '',
            skills: Array.isArray(data.skills) ? data.skills : (data.skills ? String(data.skills).split(',') : []),
            responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : (data.responsibilities ? String(data.responsibilities).split('\n') : []),
            created_at: data.created_at
          });
        }
      } catch (err) {
        console.error('Error loading job details:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;

    if (!resumeFile) {
      setSubmitError('Please attach your Resume PDF document before submitting.');
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const sanitizedFileName = `${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const filePath = `applications/${sanitizedFileName}`;

      const { data: storageData, error: storageError } = await supabase
        .storage
        .from('resumes')
        .upload(filePath, resumeFile, {
          cacheControl: '3600',
          upsert: true
        });

      const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(filePath);
      const resumePublicUrl = urlData?.publicUrl || `https://supabase.co/storage/v1/object/public/resumes/${filePath}`;

      const { error: dbError } = await supabase
        .from('job_applications')
        .insert([
          {
            name: applicantName,
            email: applicantEmail,
            phone: applicantPhone,
            role_applied: job.title,
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
      setSubmitError(err.message || 'Failed to submit application. Please verify Supabase configuration.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#F8F9FA] min-h-screen py-24 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-brand-green" />
        <p className="text-sm font-semibold text-neutral-600">Loading position details...</p>
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="bg-[#F8F9FA] min-h-screen py-24 flex flex-col items-center justify-center space-y-4 text-center px-4">
        <div className="w-16 h-16 bg-neutral-200 text-neutral-500 rounded-full flex items-center justify-center">
          <Briefcase size={32} />
        </div>
        <h1 className="text-2xl font-extrabold text-neutral-900">Job Opening Not Found</h1>
        <p className="text-sm text-neutral-500 max-w-md">
          This position may have been closed or moved. Please check all current opportunities.
        </p>
        <Link
          href="/careers"
          className="px-6 py-3 bg-brand-green text-white font-bold rounded-lg text-sm hover:bg-brand-green-hover transition-colors shadow-md mt-4"
        >
          View All Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-12 md:py-16">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Back Action */}
        <div>
          <Link 
            href="/careers" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Careers Openings
          </Link>
        </div>

        {/* Hero Job Banner Card */}
        <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                <Building2 size={13} />
                <span>YourBench Team Opening</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-neutral-400" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign size={15} className="text-neutral-400" /> {job.salary}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700 font-semibold text-xs border border-neutral-200">
                  {job.type}
                </span>
              </div>
            </div>

            <a
              href="#apply-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-green/20"
            >
              <Upload size={16} />
              <span>Apply For This Position</span>
            </a>

          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
            <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/60 flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-green flex-shrink-0" />
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Posted Status</span>
                <span className="font-bold text-neutral-800">Actively Hiring</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Employment</span>
                <span className="font-bold text-neutral-800">{job.type}</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/60 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Location</span>
                <span className="font-bold text-neutral-800">{job.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Left Details, Right Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job Description Details */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6 sm:p-8 space-y-8">
            
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Role Overview</h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Required Skills &amp; Qualifications</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="bg-neutral-100 text-neutral-700 border border-neutral-200/80 px-3 py-1.5 rounded-lg text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Direct Application & Resume Form */}
          <div id="apply-form" className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200/80 shadow-lg p-6 sm:p-8 space-y-6 sticky top-8">
            
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Apply For Position</h3>
              <p className="text-xs text-neutral-500 mt-1">Submit your details and resume PDF directly to our hiring team</p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Application Submitted!</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you for applying for <strong>{job.title}</strong>. Your application and resume PDF have been recorded in our admin portal. Rishabh and the YourBench team will reach out to you.
                </p>
                <Link
                  href="/careers"
                  className="inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors shadow-md mt-2"
                >
                  View More Opportunities
                </Link>
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
                    className="w-full border border-gray-200 rounded-lg p-3 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                {/* Email */}
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
                    className="w-full border border-gray-200 rounded-lg p-3 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                {/* Phone */}
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
                    className="w-full border border-gray-200 rounded-lg p-3 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="text-xs font-semibold uppercase text-gray-600 mb-1 block">
                    Upload Resume (PDF / DOC) <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 hover:border-green-500 rounded-xl p-4 text-center transition-colors bg-gray-50/50">
                    <input
                      type="file"
                      id="jobPageResumeUpload"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="jobPageResumeUpload" className="cursor-pointer space-y-2 block">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <FileText size={20} />
                      </div>
                      <div className="text-xs text-gray-600">
                        {resumeFile ? (
                          <span className="font-bold text-green-700">{resumeFile.name}</span>
                        ) : (
                          <>Click to <span className="text-green-600 font-bold underline">Attach Resume PDF</span></>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Application &amp; Resume</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
