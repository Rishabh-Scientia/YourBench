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
  ShieldAlert
} from 'lucide-react';

export default function AdminPanelPage() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Inquiries data state
  const [inquiries, setInquiries] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  // Table controls
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = newest first, 'asc' = oldest first
  const [expandedRows, setExpandedRows] = useState({});

  // Auth Listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
      if (session) {
        fetchInquiries();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
      if (session) {
        fetchInquiries();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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
  };

  const fetchInquiries = async () => {
    setDataLoading(true);
    setFetchError('');
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setFetchError(err.message || 'Failed to load inquiries from Supabase.');
    } finally {
      setDataLoading(false);
    }
  };

  const toggleRowExpand = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter and sort inquiries
  const filteredInquiries = useMemo(() => {
    let result = [...inquiries];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
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
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [inquiries, searchQuery, sortOrder]);

  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(date);
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

  // 3. Authenticated State (Admin Dashboard & Data Table)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Header Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md font-extrabold text-lg">
              YB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-900">Secret Admin Panel</h1>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold border border-green-200">
                  Supabase RLS Protected
                </span>
              </div>
              <p className="text-xs text-gray-500">Managing website customer inquiries</p>
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
        
        {/* Controls Header Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-50 text-green-600 border border-green-100">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">Inquiries Dashboard</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200">
                  {inquiries.length} {inquiries.length === 1 ? 'inquiry' : 'inquiries'}
                </span>
              </div>
              <p className="text-xs text-gray-500">Real-time inquiries stored in Supabase database</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-grow sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50/50"
              />
            </div>

            {/* Sort Toggle */}
            <button
              onClick={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 cursor-pointer shadow-sm transition-all"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              <span>{sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}</span>
            </button>

            {/* Refresh Button */}
            <button
              onClick={fetchInquiries}
              disabled={dataLoading}
              className="p-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-600 transition-all cursor-pointer shadow-sm disabled:opacity-50"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-4 h-4 ${dataLoading ? 'animate-spin text-green-600' : ''}`} />
            </button>
          </div>

        </div>

        {/* Fetch Error Toast */}
        {fetchError && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>{fetchError}</span>
          </div>
        )}

        {/* Data Table Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          
          {/* Skeleton Loading State */}
          {dataLoading && inquiries.length === 0 && (
            <div className="p-8 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-gray-100 animate-pulse rounded-lg" />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!dataLoading && filteredInquiries.length === 0 && (
            <div className="p-16 text-center space-y-3">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Inbox className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">No inquiries found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                {searchQuery ? 'No inquiries matched your search criteria. Try a different query.' : 'There are currently no inquiry submissions in the database.'}
              </p>
            </div>
          )}

          {/* Data Table */}
          {filteredInquiries.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                
                {/* Sticky Header */}
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px] sticky top-0 z-20">
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Email</th>
                    <th className="py-4 px-6">Phone</th>
                    <th className="py-4 px-6">Interested In</th>
                    <th className="py-4 px-6">Message</th>
                    <th className="py-4 px-6">Date</th>
                  </tr>
                </thead>

                {/* Table Body with Zebra Striping */}
                <tbody className="divide-y divide-gray-100">
                  {filteredInquiries.map((row) => {
                    const isLongMessage = row.message && row.message.length > 80;
                    const isExpanded = expandedRows[row.id];

                    return (
                      <tr key={row.id || Math.random()} className="odd:bg-white even:bg-gray-50/50 hover:bg-green-50/30 transition-colors">
                        
                        {/* Name Column */}
                        <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs uppercase">
                              {row.name ? row.name.charAt(0) : '?'}
                            </div>
                            <span>{row.name || 'Anonymous'}</span>
                          </div>
                        </td>

                        {/* Email Column */}
                        <td className="py-4 px-6 text-gray-700 font-mono text-xs">
                          <a href={`mailto:${row.email}`} className="text-gray-700 hover:text-green-600 hover:underline">
                            {row.email || 'N/A'}
                          </a>
                        </td>

                        {/* Phone Column */}
                        <td className="py-4 px-6 text-gray-600 whitespace-nowrap font-mono text-xs">
                          {row.phone ? (
                            <a href={`tel:${row.phone}`} className="hover:text-green-600">
                              {row.phone}
                            </a>
                          ) : (
                            <span className="text-gray-400 italic">—</span>
                          )}
                        </td>

                        {/* Interested In Column */}
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                            {row.interest || 'General'}
                          </span>
                        </td>

                        {/* Message Column (Truncated with Show More) */}
                        <td className="py-4 px-6 text-gray-600 max-w-xs sm:max-w-md">
                          <div>
                            <p className="leading-relaxed">
                              {isLongMessage && !isExpanded ? `${row.message.slice(0, 80)}...` : row.message}
                            </p>
                            {isLongMessage && (
                              <button
                                onClick={() => toggleRowExpand(row.id)}
                                className="mt-1 text-[11px] font-bold text-green-600 hover:text-green-700 flex items-center gap-0.5 cursor-pointer"
                              >
                                {isExpanded ? (
                                  <><span>Show less</span> <ChevronUp className="w-3 h-3" /></>
                                ) : (
                                  <><span>Show more</span> <ChevronDown className="w-3 h-3" /></>}
                              </button>
                            )}
                          </div>
                        </td>

                        {/* Date Column */}
                        <td className="py-4 px-6 whitespace-nowrap text-xs text-gray-500 font-mono">
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

      </main>

    </div>
  );
}
