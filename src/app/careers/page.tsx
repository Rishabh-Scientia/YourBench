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

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
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

  // Fetch jobs dynamically exclusively from Supabase
  useEffect(() => {
    async function loadJobs() {
      setLoadingJobs(true);
      try {
        const { data, error } = await supabase
          .from('job_openings')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (!error && data) {
          const mappedJobs: Job[] = data.map((item) => ({
            id: String(item.id || Math.random()),
            title: item.title || 'Untitled Role',
            type: item.type || 'Full-time',
            location: item.location || 'Remote',
            salary: item.salary || 'Undisclosed',
            description: item.description || '',
            skills: Array.isArray(item.skills) ? item.skills : (item.skills ? String(item.skills).split(',') : []),
            responsibilities: Array.isArray(item.responsibilities) ? item.responsibilities : (item.responsibilities ? String(item.responsibilities).split('\n') : [])
          }));
          setJobs(mappedJobs);
        } else {
          setJobs([]);
        }
      } catch (e) {
        setJobs([]);
      } finally {
        setLoadingJobs(false);
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
      // Sanitize file path
      const sanitizedFileName = `${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const filePath = `applications/${sanitizedFileName}`;

      // Upload Resume PDF to Supabase Storage bucket 'resumes'
      const { data: storageData, error: storageError } = await supabase
        .storage
        .from('resumes')
        .upload(filePath, resumeFile, {
          cacheControl: '3600',
          upsert: true
        });

      // Get public URL from Supabase storage
      const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(filePath);
      const resumePublicUrl = urlData?.publicUrl || `https://supabase.co/storage/v1/object/public/resumes/${filePath}`;

      // Insert application row into Supabase table 'job_applications'
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
          {loadingJobs ? (
            <div className="p-12 text-center bg-white rounded-xl border border-neutral-200/70 shadow-sm space-y-3">
              <Loader2 className="w-6 h-6 animate-spin text-brand-green mx-auto" />
              <p className="text-xs font-semibold text-neutral-500">Loading open positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-xl border border-neutral-200/70 shadow-sm space-y-3">
              <Briefcase className="w-8 h-8 text-neutral-300 mx-auto" />
              <h3 className="text-base font-bold text-neutral-800">No active job openings currently</h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                There are no open positions listed in the database at the moment. Admin can post new job openings directly from the Secret Admin Portal.
              </p>
            </div>
          ) : (
            jobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-neutral-250/70 hover:border-brand-green/50 shadow-sm rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-colors group cursor-pointer"
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
                  <span className="px-4 py-2 rounded-lg bg-brand-green text-white font-bold text-xs shadow-sm hover:bg-brand-green-hover transition-colors inline-flex items-center gap-1.5">
                    <span>View &amp; Apply Now ↗</span>
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
