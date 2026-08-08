'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'FeeMaster (School Fees Software)',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { data, error: insertError } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            interest: formData.interest,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (insertError) {
        throw insertError;
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'FeeMaster (School Fees Software)',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8 relative">
      
      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-sm font-medium">
          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
          <span>Thank you! Your message has been sent successfully. We will get back to you soon.</span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-800 text-sm font-medium">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left: Name */}
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2 block">
              YOUR NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all"
            />
          </div>

          {/* Right: Email */}
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left: Phone */}
          <div>
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2 block">
              PHONE NUMBER (OPTIONAL)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 99999 99999"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all"
            />
          </div>

          {/* Right: Interested In */}
          <div>
            <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2 block">
              I'M INTERESTED IN
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900 bg-white transition-all"
            >
              <option value="FeeMaster (School Fees Software)">FeeMaster (School Fees Software)</option>
              <option value="Prepo.ai">Prepo.ai</option>
              <option value="Custom Project">Custom Project</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Full-width: Message */}
        <div>
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2 block">
            YOUR MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your school's requirements or custom project..."
            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm text-gray-900 transition-all resize-y"
          />
        </div>

        {/* Bottom-right: Green Rounded-Full Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-full transition-all text-sm flex items-center gap-2 shadow-md cursor-pointer disabled:cursor-not-allowed"
          >
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
            {!loading && <ArrowRight size={16} />}
          </button>
        </div>
      </form>
    </div>
  );
}
