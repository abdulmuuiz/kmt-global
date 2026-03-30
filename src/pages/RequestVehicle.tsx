import { useState } from 'react';

const COLORS = ['White', 'Black', 'Silver', 'Red', 'Blue', 'Green', 'Other'];

export default function RequestVehicle() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    make: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    maxMileage: '',
    transmission: 'any',
    colors: [] as string[],
    serviceType: 'export',
    destinationCountry: '',
    budgetMin: '',
    budgetMax: '',
    grade: '',
    notes: '',
    name: '',
    email: '',
    phone: '',
    country: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const toggleColor = (color: string) =>
    setForm((prev) => ({
      ...prev,
      colors: prev.colors.includes(color) ? prev.colors.filter((c) => c !== color) : [...prev.colors, color],
    }));

  const canNext = () => {
    if (step === 1) return form.make || form.model;
    if (step === 2) return form.serviceType;
    return form.name && form.email;
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="bg-surface-lowest py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Vehicle Sourcing Request</span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
                Define Your<br />Acquisition
              </h1>
            </div>

            {/* Step Indicator */}
            <div className="flex gap-3">
              {[
                { num: 1, label: 'Specifications' },
                { num: 2, label: 'Budget & Sourcing' },
                { num: 3, label: 'Contact' },
              ].map((s) => (
                <button
                  key={s.num}
                  onClick={() => s.num < step && setStep(s.num)}
                  className={`px-4 py-2 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    step === s.num
                      ? 'bg-accent text-on-accent'
                      : step > s.num
                        ? 'bg-surface-high text-accent cursor-pointer'
                        : 'bg-surface-high text-outline cursor-default'
                  }`}
                >
                  {s.num.toString().padStart(2, '0')} {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="flex-1">
            {/* Step 1 — Vehicle Specifications */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Vehicle Specifications</h2>
                  <p className="text-sm text-on-surface-variant">Define the mechanical DNA of your search.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Make</label>
                    <select
                      value={form.make}
                      onChange={(e) => update('make', e.target.value)}
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none focus:ring-1 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select Make</option>
                      {['Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Suzuki', 'Daihatsu', 'Isuzu'].map((m) => (
                        <option key={m} value={m.toLowerCase()}>{m}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Model / Series</label>
                    <input
                      type="text"
                      value={form.model}
                      onChange={(e) => update('model', e.target.value)}
                      placeholder="E.G. SKYLINE GT-R"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Year From</label>
                    <input
                      type="text"
                      value={form.yearFrom}
                      onChange={(e) => update('yearFrom', e.target.value)}
                      placeholder="E.G. 1995"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Year To</label>
                    <input
                      type="text"
                      value={form.yearTo}
                      onChange={(e) => update('yearTo', e.target.value)}
                      placeholder="E.G. 2002"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Max Mileage (KM)</label>
                    <input
                      type="text"
                      value={form.maxMileage}
                      onChange={(e) => update('maxMileage', e.target.value)}
                      placeholder="E.G. 100,000"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Transmission</label>
                    <div className="flex gap-2">
                      {['any', 'manual', 'automatic'].map((t) => (
                        <button
                          key={t}
                          onClick={() => update('transmission', t)}
                          className={`flex-1 py-4 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                            form.transmission === t ? 'bg-accent text-on-accent' : 'bg-surface-lowest text-secondary hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Preferred Exterior Color(s)</label>
                  <div className="flex flex-wrap gap-2">
                    {COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-5 py-3 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                          form.colors.includes(color) ? 'bg-accent text-on-accent' : 'bg-surface-lowest text-secondary hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — Budget & Sourcing */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Budget & Sourcing</h2>
                  <p className="text-sm text-on-surface-variant">Define your budget range and sourcing type.</p>
                </div>

                <div className="space-y-3">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Service Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'export', title: 'Global Export', desc: 'Vehicle sourced and shipped internationally' },
                      { value: 'domestic', title: 'Japan Sourcing', desc: 'Vehicle sourced and delivered within Japan' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => update('serviceType', type.value)}
                        className={`p-6 text-left transition-colors ${
                          form.serviceType === type.value
                            ? 'bg-accent text-on-accent'
                            : 'bg-surface-lowest text-secondary hover:bg-surface-high'
                        }`}
                      >
                        <span className="font-headline text-lg font-bold uppercase block mb-1">{type.title}</span>
                        <span className={`text-xs ${form.serviceType === type.value ? 'opacity-70' : 'text-outline'}`}>{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {form.serviceType === 'export' && (
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Destination Country</label>
                    <input
                      type="text"
                      value={form.destinationCountry}
                      onChange={(e) => update('destinationCountry', e.target.value)}
                      placeholder="E.G. UNITED KINGDOM"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Budget Min (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMin}
                      onChange={(e) => update('budgetMin', e.target.value)}
                      placeholder="E.G. 500,000"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Budget Max (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMax}
                      onChange={(e) => update('budgetMax', e.target.value)}
                      placeholder="E.G. 3,000,000"
                      className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Preferred Grade (Optional)</label>
                  <input
                    type="text"
                    value={form.grade}
                    onChange={(e) => update('grade', e.target.value)}
                    placeholder="E.G. 4.0 OR ABOVE"
                    className="w-full bg-surface-lowest text-white font-headline text-sm p-4 tracking-wider border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Additional Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    rows={4}
                    placeholder="Any specific requirements or preferences..."
                    className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3 — Contact */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Contact Information</h2>
                  <p className="text-sm text-on-surface-variant">How can we reach you regarding this request?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+81 XX XXXX XXXX"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Country</label>
                    <input
                      type="text"
                      value={form.country}
                      onChange={(e) => update('country', e.target.value)}
                      placeholder="Your country of residence"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  Previous
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  onClick={() => canNext() && setStep(step + 1)}
                  className={`inline-flex items-center gap-3 px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    canNext() ? 'bg-accent text-on-accent hover:bg-accent-dim' : 'bg-surface-high text-outline cursor-not-allowed'
                  }`}
                >
                  Next Phase
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              ) : (
                <button
                  onClick={() => canNext() && alert('Request submitted! We will contact you shortly.')}
                  className={`inline-flex items-center gap-3 px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    canNext() ? 'bg-accent text-on-accent hover:bg-accent-dim' : 'bg-surface-high text-outline cursor-not-allowed'
                  }`}
                >
                  Submit Request
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </button>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-surface-low p-8 sticky top-24">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wide mb-6">Current Summary</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Make / Model</span>
                  <span className="text-sm text-white">{form.make || form.model ? `${form.make} ${form.model}`.trim() : 'Not specified'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Year Range</span>
                  <span className="text-sm text-white">{form.yearFrom || form.yearTo ? `${form.yearFrom || '—'} to ${form.yearTo || '—'}` : 'Not specified'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Transmission</span>
                  <span className="text-sm text-white capitalize">{form.transmission}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Service Type</span>
                  <span className="text-sm text-white">{form.serviceType === 'export' ? 'Global Export' : 'Japan Sourcing'}</span>
                </div>
                {form.budgetMax && (
                  <div>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Budget</span>
                    <span className="text-sm text-accent">¥{form.budgetMin || '0'} — ¥{form.budgetMax}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] text-outline leading-relaxed">
                  Your request will be reviewed by our sourcing team. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
