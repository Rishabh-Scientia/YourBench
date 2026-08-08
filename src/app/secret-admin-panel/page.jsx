'use client';

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Lock, 
  LogOut, 
  Search, 
  ArrowUpDown, 
  RefreshCw, 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  MessageSquare,
  AlertCircle,
  Inbox,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
  Trash2,
  PlusCircle,
  Briefcase,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';

export default function AdminPanelPage() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Active Main Navigation Tab: 'inquiries' | 'applications' | 'jobs'
  const [adminTab, setAdminTab] = useState('inquiries');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // 1. Inquiries State
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquirySort, setInquirySort] = useState('desc');
  const [expandedRows, setExpandedRows] = useState({});

  // 2. Job Applications / Resumes State
  const [applications, setApplications] = useState([]);
  const [appsLoading, setAppsLoading] = useState(false);
  const [appSearch, setAppSearch] = useState('');

  // 3. Job Openings State
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  // New Job Form State
  const [newJob, setNewJob] = useState({
    title: '',
    type: 'Full-time',
    location: 'Remote (India)',
    salary: 'Competitive (Undisclosed)',
    description: '',
    responsibilities: '',
    skills: ''
  });
  const [jobPostLoading, setJobPostLoading] = useState(false);

  // Global Toast Notification State
  const [toastMessage, setToastMessage] = useState('');

  // Auth Listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
      if (session) {
        fetchAllData();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
      if (session) {
        fetchAllData();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const fetchAllData = () => {
    fetchInquiries();
    fetchApplications();
    fetchJobs();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) throw error;
    } catch (err) {
      console.error('Login error:', err);
      setLoginError(err.message || 'Invalid login credentials.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setInquiries([]);
    setApplications([]);
    setJobs([]);
  };

  // Fetch Inquiries
  const fetchInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setInquiries(data || []);
    } catch (err) {
      console.error('Inquiries fetch error:', err);
    } finally {
      setInquiriesLoading(false);
    }
  };

  // Fetch Job Applications / Resumes
  const fetchApplications = async () => {
    setAppsLoading(true);
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setApplications(data || []);
    } catch (err) {
      console.error('Applications fetch error:', err);
    } finally {
      setAppsLoading(false);
    }
  };

  // Fetch Posted Job Openings
  const fetchJobs = async () => {
    setJobsLoading(true);
    try {
      const { data, error } = await supabase
        .from('job_openings')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setJobs(data || []);
    } catch (err) {
      console.error('Jobs fetch error:', err);
    } finally {
      setJobsLoading(false);
    }
  };

  // Delete Application Row
  const handleDeleteApplication = async (id) => {
    if (!confirm('Are you sure you want to delete this job application?')) return;
    try {
      const { error } = await supabase.from('job_applications').delete().eq('id', id);
      if (error) throw error;
      showToast('Job application deleted successfully.');
      fetchApplications();
    } catch (err) {
      alert(err.message || 'Failed to delete application.');
    }
  };

  // Delete Job Opening
  const handleDeleteJob = async (id) => {
    if (!confirm('Are you sure you want to delete this job opening?')) return;
    try {
      const { error } = await supabase.from('job_openings').delete().eq('id', id);
      if (error) throw error;
      showToast('Job opening deleted successfully.');
      fetchJobs();
    } catch (err) {
      alert(err.message || 'Failed to delete job opening.');
    }
  };

  // Create New Job Opening
  const handleCreateJob = async (e) => {
    e.preventDefault();
    setJobPostLoading(true);

    try {
      const skillsArray = (newJob.skills || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

      const respArray = (newJob.responsibilities || '')
        .split('\n')
        .map(r => r.trim())
        .filter(Boolean);

      const { error } = await supabase.from('job_openings').insert([
        {
          title: newJob.title,
          type: newJob.type,
          location: newJob.location,
          salary: newJob.salary,
          description: newJob.description,
          skills: skillsArray,
          responsibilities: respArray,
          is_active: true,
          created_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;

      showToast(`Job posting "${newJob.title}" created successfully!`);
      setShowAddJobModal(false);
      setNewJob({
        title: '',
        type: 'Full-time',
        location: 'Remote (India)',
        salary: 'Competitive (Undisclosed)',
        description: '',
        responsibilities: '',
        skills: ''
      });
      fetchJobs();
    } catch (err) {
      alert(err.message || 'Failed to create job opening. Please check table.');
    } finally {
      setJobPostLoading(false);
    }
  };

  const toggleRowExpand = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper to generate working PDF resume URL
  const getResumeHref = (rawUrl) => {
    if (!rawUrl) return null;
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }
    // Clean string if formatted as "Uploaded file: filename.pdf"
    const cleanFileName = rawUrl.replace(/^Uploaded file:\s*/i, '').trim();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    if (supabaseUrl && cleanFileName) {
      return `${supabaseUrl}/storage/v1/object/public/resumes/applications/${cleanFileName}`;
    }
    return null;
  };

  // Filtered Inquiries
  const filteredInquiries = useMemo(() => {
    let result = [...inquiries];
    if (inquirySearch.trim()) {
      const q = inquirySearch.toLowerCase();
      result = result.filter(
        item =>
          item.name?.toLowerCase().includes(q) ||
          item.email?.toLowerCase().includes(q) ||
          item.interest?.toLowerCase().includes(q) ||
          item.message?.toLowerCase().includes(q)
      );
    }
    result.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return inquirySort === 'desc' ? dateB - dateA : dateA - dateB;
    });
    return result;
  }, [inquiries, inquirySearch, inquirySort]);

  // Filtered Applications
  const filteredApplications = useMemo(() => {
    let result = [...applications];
    if (appSearch.trim()) {
      const q = appSearch.toLowerCase();
      result = result.filter(
        item =>
          item.name?.toLowerCase().includes(q) ||
          item.email?.toLowerCase().includes(q) ||
          item.role_applied?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [applications, appSearch]);

  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    try {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(new Date(isoString));
    } catch (e) {
      return isoString;
    }
  };

  // 1. Initial Loading Screen
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="flex items-center gap-3 text-gray-500 font-medium text-sm">
          <RefreshCw className="w-5 h-5 animate-spin text-green-600" />
          <span>Authenticating...</span>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated State (Login Card)
  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 relative overflow-hidden">
          
          <div className="text-center space-y-2 mb-8">
            <div className="w-14 h-14 bg-green-50 border border-green-200 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Admin Authentication</h1>
            <p className="text-xs text-gray-500">Sign in to access the private inquiry dashboard</p>
          </div>

          {loginError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="loginEmail" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5 block">
                Email Address
              </label>
              <input
                type="email"
                id="loginEmail"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@yourbench.in"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all"
              />
            </div>

            <div>
              <label htmlFor="loginPassword" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-lg transition-all text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Login to Dashboard</span>
              )}
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-gray-100 text-center">
            <span className="text-[11px] text-gray-400">Restricted Access • Authorized Staff Only</span>
          </div>

        </div>
      </div>
    );
  }

  // 3. Authenticated Admin Dashboard State
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-700 animate-bounce">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md font-extrabold text-lg">
              YB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-900">Secret Admin Portal</h1>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold border border-green-200">
                  Supabase RLS Protected
                </span>
              </div>
              <p className="text-xs text-gray-500">YourBench Enterprise Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-medium text-gray-500">
              {session.user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all border border-gray-200 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
            
            {/* Tab 1: Customer Inquiries */}
            <button
              onClick={() => setAdminTab('inquiries')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                adminTab === 'inquiries'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Inbox size={15} />
              <span>Customer Inquiries</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                adminTab === 'inquiries' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {inquiries.length}
              </span>
            </button>

            {/* Tab 2: Resumes / Job Applications */}
            <button
              onClick={() => setAdminTab('applications')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                adminTab === 'applications'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText size={15} />
              <span>Candidate Resumes</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                adminTab === 'applications' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {applications.length}
              </span>
            </button>

            {/* Tab 3: Post & Manage Job Openings */}
            <button
              onClick={() => setAdminTab('jobs')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                adminTab === 'jobs'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Briefcase size={15} />
              <span>Manage Job Openings</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                adminTab === 'jobs' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {jobs.length}
              </span>
            </button>

          </div>

          <button
            onClick={fetchAllData}
            className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 shadow-sm"
            title="Refresh All Data"
          >
            <RefreshCw size={15} />
          </button>
        </div>

        {/* TAB 1: CUSTOMER INQUIRIES */}
        {adminTab === 'inquiries' && (
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Inquiries Dashboard</h2>
                <p className="text-xs text-gray-500">Contact form submissions received from website</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search name or email..."
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50/50"
                  />
                </div>

                <button
                  onClick={() => setInquirySort(prev => (prev === 'desc' ? 'asc' : 'desc'))}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg bg-white text-xs font-semibold text-gray-700"
                >
                  <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
                  <span>{inquirySort === 'desc' ? 'Newest' : 'Oldest'}</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {filteredInquiries.length === 0 ? (
                <div className="p-16 text-center space-y-3">
                  <Inbox className="w-8 h-8 text-gray-300 mx-auto" />
                  <h3 className="text-base font-bold text-gray-700">No inquiries found</h3>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px]">
                        <th className="py-4 px-6">Name</th>
                        <th className="py-4 px-6">Email</th>
                        <th className="py-4 px-6">Phone</th>
                        <th className="py-4 px-6">Interested In</th>
                        <th className="py-4 px-6">Message</th>
                        <th className="py-4 px-6">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredInquiries.map((row) => {
                        const isLong = row.message && row.message.length > 80;
                        const isExpanded = expandedRows[row.id];
                        return (
                          <tr key={row.id || Math.random()} className="odd:bg-white even:bg-gray-50/50 hover:bg-green-50/20">
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">{row.name}</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-700">{row.email}</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-600">{row.phone || '—'}</td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded bg-gray-100 font-semibold text-xs text-gray-800 border border-gray-200">
                                {row.interest}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-gray-600 max-w-xs sm:max-w-md">
                              <p className="leading-relaxed">
                                {isLong && !isExpanded ? `${row.message.slice(0, 80)}...` : row.message}
                              </p>
                              {isLong && (
                                <button
                                  onClick={() => toggleRowExpand(row.id)}
                                  className="mt-1 text-[11px] font-bold text-green-600 cursor-pointer"
                                >
                                  {isExpanded ? 'Show less' : 'Show more'}
                                </button>
                              )}
                            </td>
                            <td className="py-4 px-6 text-xs text-gray-500 font-mono whitespace-nowrap">
                              {formatDate(row.created_at)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: CANDIDATE RESUMES & APPLICATIONS */}
        {adminTab === 'applications' && (
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Candidate Job Applications &amp; Resumes</h2>
                <p className="text-xs text-gray-500">Resumes uploaded via the /careers portal</p>
              </div>

              <div className="relative w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search candidate or role..."
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50/50"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {filteredApplications.length === 0 ? (
                <div className="p-16 text-center space-y-3">
                  <FileText className="w-8 h-8 text-gray-300 mx-auto" />
                  <h3 className="text-base font-bold text-gray-700">No applications received yet</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    When job seekers apply on the /careers page, their candidate info and PDF resumes will appear here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px]">
                        <th className="py-4 px-6">Candidate Name</th>
                        <th className="py-4 px-6">Email</th>
                        <th className="py-4 px-6">Phone</th>
                        <th className="py-4 px-6">Role Applied</th>
                        <th className="py-4 px-6">Resume Document</th>
                        <th className="py-4 px-6">Submitted Date</th>
                        <th className="py-4 px-6 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredApplications.map((app) => {
                        const href = getResumeHref(app.resume_url);
                        return (
                          <tr key={app.id || Math.random()} className="odd:bg-white even:bg-gray-50/50 hover:bg-green-50/20">
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">{app.name || 'Anonymous'}</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-700">{app.email}</td>
                            <td className="py-4 px-6 font-mono text-xs text-gray-600">{app.phone}</td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded bg-green-50 text-green-800 font-bold text-xs border border-green-200">
                                {app.role_applied}
                              </span>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              {href ? (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                                >
                                  <FileText size={13} />
                                  <span>View PDF Resume</span>
                                  <ExternalLink size={12} />
                                </a>
                              ) : (
                                <span className="text-gray-500 italic text-xs">{app.resume_url || 'No File'}</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-xs text-gray-500 font-mono whitespace-nowrap">
                              {formatDate(app.created_at)}
                            </td>
                            <td className="py-4 px-6 text-right whitespace-nowrap">
                              <button
                                onClick={() => handleDeleteApplication(app.id)}
                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                title="Delete Application"
                              >
                                <Trash2 size={15} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 3: POST & MANAGE JOB OPENINGS */}
        {adminTab === 'jobs' && (
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Manage Job Openings</h2>
                <p className="text-xs text-gray-500">Post new job openings to display live on the /careers page</p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddJobModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xs transition-all shadow-md cursor-pointer"
              >
                <PlusCircle size={16} />
                <span>Post New Job Opening</span>
              </button>
            </div>

            {/* Jobs List Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {jobs.length === 0 ? (
                <div className="p-16 text-center space-y-3">
                  <Briefcase className="w-8 h-8 text-gray-300 mx-auto" />
                  <h3 className="text-base font-bold text-gray-700">No custom job postings in database</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Default roles (Co-Founder, Full Stack Developer, AI Engineer, Regional Manager) are currently showing. Click &quot;Post New Job Opening&quot; above to create a new job opening.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px]">
                        <th className="py-4 px-6">Job Title</th>
                        <th className="py-4 px-6">Type</th>
                        <th className="py-4 px-6">Location</th>
                        <th className="py-4 px-6">Salary / Equity</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {jobs.map((job) => (
                        <tr key={job.id || Math.random()} className="odd:bg-white even:bg-gray-50/50 hover:bg-green-50/20">
                          <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">{job.title}</td>
                          <td className="py-4 px-6 text-gray-700 whitespace-nowrap">{job.type}</td>
                          <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{job.location}</td>
                          <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-mono text-xs">{job.salary}</td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                              Active
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleDeleteJob(job.id)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete Job Opening"
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* MODAL: POST NEW JOB OPENING */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-gray-900">Post New Job Opening</h3>
              <button 
                type="button" 
                onClick={() => setShowAddJobModal(false)} 
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateJob} className="space-y-4">
              
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Backend Engineer"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Job Type</label>
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Full-time / Equity Partner">Full-time / Equity Partner</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Remote (India)"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Salary / Equity Compensation</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Competitive (Undisclosed)"
                  value={newJob.salary}
                  onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Role Description</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the responsibilities and team mission..."
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Responsibilities (One per line)</label>
                <textarea
                  rows={3}
                  placeholder="Build microservices&#10;Optimize database queries&#10;Lead team code reviews"
                  value={newJob.responsibilities}
                  onChange={(e) => setNewJob({ ...newJob, responsibilities: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Skills Required (Comma separated)</label>
                <input
                  type="text"
                  placeholder="Node.js, PostgreSQL, Docker, Next.js"
                  value={newJob.skills}
                  onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAddJobModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={jobPostLoading}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {jobPostLoading ? 'Posting...' : 'Publish Job Opening'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
