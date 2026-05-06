import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, Send } from 'lucide-react';
import { BRAND_EMAIL } from '../constants/site';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const APPLY_AS_OPTIONS = [
  { value: 'artist', label: 'Artist' },
  { value: 'brand', label: 'Brand or partner' },
  { value: 'press', label: 'Press or media' },
  { value: 'other', label: 'Other' },
] as const;

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const configured = Boolean(ACCESS_KEY);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const applyAs = String(fd.get('apply_as') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    const joinNewsletter = fd.get('join_newsletter') === 'on';

    if (!name || !email || !message) return;

    setStatus('submitting');
    setErrorMessage('');

    const body = {
      access_key: ACCESS_KEY,
      subject: `IVHP application — ${name}`,
      from_name: name,
      email,
      replyto: email,
      phone,
      apply_as: applyAs,
      join_newsletter: joinNewsletter ? 'Yes' : 'No',
      message: [
        `Apply as: ${applyAs || '—'}`,
        phone ? `Phone: ${phone}` : null,
        `Join newsletter: ${joinNewsletter ? 'Yes' : 'No'}`,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again or email us.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed.');
    }
  }

  return (
    <motion.div
      id="apply"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="border-4 border-espresso bg-cream p-5 sm:p-8 shadow-[8px_8px_0px_#2A2321]"
    >
      <h3 className="font-serif font-extrabold text-2xl sm:text-3xl lowercase tracking-tighter mb-2">
        Contact us
      </h3>
      <p className="text-sm text-espresso/75 font-medium mb-6 max-w-xl">
        Tell us who you are and what you&apos;re looking for. Submissions go straight to{' '}
        <a href={`mailto:${BRAND_EMAIL}`} className="text-terracotta underline underline-offset-2">
          {BRAND_EMAIL}
        </a>
        .
      </p>

      {!configured && (
        <div className="mb-6 rounded-lg border-2 border-ochre bg-ochre/10 px-4 py-3 text-sm font-medium text-espresso">
          Form delivery isn&apos;t configured yet. Add{' '}
          <code className="rounded bg-espresso/10 px-1 py-0.5 text-xs">VITE_WEB3FORMS_ACCESS_KEY</code> to your{' '}
          <code className="rounded bg-espresso/10 px-1 py-0.5 text-xs">.env</code> (free key from{' '}
          <a href="https://web3forms.com" className="text-terracotta underline" target="_blank" rel="noreferrer">
            web3forms.com
          </a>
          ) — or email us directly below.
        </div>
      )}

      {status === 'success' ? (
        <p className="text-espresso font-medium py-4 border-t-2 border-espresso/10">
          Thanks — we received your message and we&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso/60">Full name *</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={!configured}
                className="w-full border-2 border-espresso bg-white px-3 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 disabled:opacity-50"
                placeholder="Your name"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso/60">Email *</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={!configured}
                className="w-full border-2 border-espresso bg-white px-3 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 disabled:opacity-50"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso/60">Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                disabled={!configured}
                className="w-full border-2 border-espresso bg-white px-3 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 disabled:opacity-50"
                placeholder="Optional"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso/60">I am *</span>
              <select
                name="apply_as"
                required
                disabled={!configured}
                className="w-full border-2 border-espresso bg-white px-3 py-2.5 text-sm font-medium text-espresso focus:outline-none focus:ring-2 focus:ring-terracotta/40 disabled:opacity-50"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {APPLY_AS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso/60">Message *</span>
            <textarea
              name="message"
              required
              rows={5}
              disabled={!configured}
              className="w-full resize-y border-2 border-espresso bg-white px-3 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 disabled:opacity-50"
              placeholder="Share links, goals, availability, or anything we should know."
            />
          </label>

          {/* Web3Forms honeypot */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="flex items-center gap-3 rounded border-2 border-espresso/20 bg-espresso/5 px-3 py-2.5">
            <input
              type="checkbox"
              name="join_newsletter"
              disabled={!configured}
              className="h-4 w-4 border-2 border-espresso accent-terracotta disabled:opacity-50"
            />
            <span className="text-sm font-medium text-espresso/85">Join our newsletter</span>
          </label>

          {status === 'error' && (
            <p className="text-sm font-medium text-terracotta" role="alert">
              {errorMessage}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
            <button
              type="submit"
              disabled={!configured || status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-cream shadow-[4px_4px_0px_#D99C3B] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>
            <a
              href={`mailto:${BRAND_EMAIL}?subject=${encodeURIComponent('IVHP inquiry')}`}
              className="text-center text-xs font-bold uppercase tracking-[0.12em] text-espresso/70 underline underline-offset-4 hover:text-terracotta sm:text-left"
            >
              Email us instead
            </a>
          </div>
        </form>
      )}
    </motion.div>
  );
}
