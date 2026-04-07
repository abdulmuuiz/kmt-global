import { useState } from 'react';

const COLORS = ['White', 'Black', 'Silver', 'Grey', 'Red', 'Blue', 'Green', 'Other'];

const MAKES = {
  Japanese: ['Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Suzuki', 'Daihatsu', 'Isuzu'],
  Imported: ['BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Land Rover', 'Volvo', 'Jaguar', 'Ford', 'Tesla', 'Alfa Romeo'],
};

const MODELS: Record<string, string[]> = {
  Toyota: ['Land Cruiser', 'Hilux', 'Alphard', 'Vellfire', 'Hiace', 'Crown', 'Mark X', 'Supra', 'GR86', 'FJ Cruiser', 'RAV4', 'Prius', 'Corolla', 'Camry', 'C-HR', 'Yaris'],
  Nissan: ['GT-R', 'Skyline', 'Silvia', 'Fairlady Z', 'Patrol', 'Navara', 'X-Trail', 'Elgrand', 'Serena', 'Note', 'March'],
  Honda: ['NSX', 'S2000', 'Civic', 'Accord', 'Integra', 'CR-V', 'Odyssey', 'Stepwgn', 'Fit / Jazz', 'Stream', 'Freed', 'Legend'],
  Mazda: ['RX-7', 'RX-8', 'MX-5 Roadster', 'CX-5', 'CX-8', 'Atenza', 'Axela', 'Demio', 'Mazda3', 'Mazda6'],
  Subaru: ['WRX STI', 'Impreza', 'BRZ', 'Forester', 'Outback', 'Legacy', 'Levorg', 'XV'],
  Mitsubishi: ['Lancer Evolution', 'Lancer', 'Galant', 'Eclipse', 'Outlander', 'Pajero', 'Delica', '3000GT'],
  Lexus: ['LFA', 'LC', 'LS', 'GS', 'IS', 'ES', 'RC', 'LX', 'GX', 'RX', 'NX'],
  Suzuki: ['Jimny', 'Swift', 'Alto', 'Hustler', 'Every', 'Vitara'],
  Daihatsu: ['Rocky', 'Tanto', 'Move', 'Mira', 'Thor', 'Cast'],
  Isuzu: ['D-Max', 'MU-X', 'Elf', 'Forward'],
  BMW: ['M3', 'M5', 'M2', '3 Series', '5 Series', '7 Series', 'X5', 'X3', 'X6'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'G-Class', 'GLE', 'GLC', 'AMG GT'],
  Volkswagen: ['Golf GTI', 'Golf R', 'Polo', 'Tiguan', 'Passat', 'Touareg'],
  Audi: ['A3', 'A4', 'A6', 'Q5', 'Q7', 'RS3', 'RS6', 'R8', 'TT'],
  'Land Rover': ['Defender', 'Discovery', 'Range Rover', 'Range Rover Sport', 'Freelander'],
  Volvo: ['XC90', 'XC60', 'XC40', 'V90', 'S90', 'S60'],
  Jaguar: ['F-Type', 'XE', 'XF', 'XJ', 'F-Pace', 'E-Pace'],
  Ford: ['Mustang', 'F-150', 'Ranger', 'Explorer', 'Everest'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Giulietta', '4C'],
};

const YEARS = Array.from({ length: 2027 - 1989 }, (_, i) => String(2027 - i));

const MILEAGES = [
  'No limit', '10,000 km', '20,000 km', '30,000 km', '40,000 km', '50,000 km',
  '60,000 km', '70,000 km', '80,000 km', '90,000 km', '100,000 km',
  '120,000 km', '150,000 km', '200,000 km', '250,000 km', '300,000 km',
];

const inputCls = 'w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none appearance-none cursor-pointer';
const labelCls = 'font-label text-[10px] tracking-[0.2em] uppercase text-secondary';

export default function RequestVehicle() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    make: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    mileageFrom: '',
    mileageTo: '',
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
  const selectMake = (make: string) => setForm((prev) => ({ ...prev, make: prev.make === make ? '' : make, model: '' }));

  const canNext = () => {
    if (step === 1) return form.make || form.model;
    if (step === 2) return form.serviceType;
    return form.name && form.email;
  };

  const models = form.make ? (MODELS[form.make] || []) : [];

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
          <div className="flex-1 min-w-0">

            {/* Step 1 — Vehicle Specifications */}
            {step === 1 && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Vehicle Specifications</h2>
                  <p className="text-sm text-on-surface-variant">Select make, model, year range and mileage.</p>
                </div>

                {/* Make */}
                <div className="space-y-4">
                  <label className={labelCls}>Make</label>

                  {Object.entries(MAKES).map(([category, brands]) => (
                    <div key={category} className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">{category}</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => selectMake(brand)}
                            className={`py-3 px-3 font-label text-[10px] tracking-[0.15em] uppercase text-center transition-colors truncate ${
                              form.make === brand
                                ? 'bg-accent text-on-accent'
                                : 'bg-surface-lowest text-secondary hover:bg-surface-high hover:text-white'
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Model */}
                {models.length > 0 && (
                  <div className="space-y-3">
                    <label className={labelCls}>Model — {form.make}</label>
                    <div className="h-48 overflow-y-auto bg-surface-lowest divide-y divide-white/5">
                      {models.map((model) => (
                        <button
                          key={model}
                          onClick={() => update('model', form.model === model ? '' : model)}
                          className={`w-full text-left px-4 py-3 font-label text-[10px] tracking-[0.15em] uppercase transition-colors flex items-center justify-between gap-3 ${
                            form.model === model
                              ? 'bg-accent text-on-accent'
                              : 'text-secondary hover:bg-surface-high hover:text-white'
                          }`}
                        >
                          {model}
                          {form.model === model && (
                            <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-outline">Don't see your model? Leave blank and add it in the notes.</p>
                  </div>
                )}

                {/* Year Range */}
                <div className="space-y-3">
                  <label className={labelCls}>Year Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">From</span>
                      <div className="relative">
                        <select
                          value={form.yearFrom}
                          onChange={(e) => update('yearFrom', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">To</span>
                      <div className="relative">
                        <select
                          value={form.yearTo}
                          onChange={(e) => update('yearTo', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mileage Range */}
                <div className="space-y-3">
                  <label className={labelCls}>Mileage Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">From</span>
                      <div className="relative">
                        <select
                          value={form.mileageFrom}
                          onChange={(e) => update('mileageFrom', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {MILEAGES.filter(m => m !== 'No limit').map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">To</span>
                      <div className="relative">
                        <select
                          value={form.mileageTo}
                          onChange={(e) => update('mileageTo', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">No limit</option>
                          {MILEAGES.filter(m => m !== 'No limit').map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transmission */}
                <div className="space-y-3">
                  <label className={labelCls}>Transmission</label>
                  <div className="flex gap-2">
                    {['Any', 'Manual', 'Automatic'].map((t) => (
                      <button
                        key={t}
                        onClick={() => update('transmission', t.toLowerCase())}
                        className={`flex-1 py-4 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                          form.transmission === t.toLowerCase() ? 'bg-accent text-on-accent' : 'bg-surface-lowest text-secondary hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-3">
                  <label className={labelCls}>Preferred Color(s)</label>
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
                  <label className={labelCls}>Service Type</label>
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
                    <label className={labelCls}>Destination Country</label>
                    <input
                      type="text"
                      value={form.destinationCountry}
                      onChange={(e) => update('destinationCountry', e.target.value)}
                      placeholder="E.G. UNITED KINGDOM"
                      className={inputCls}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelCls}>Budget Min (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMin}
                      onChange={(e) => update('budgetMin', e.target.value)}
                      placeholder="E.G. 500,000"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Budget Max (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMax}
                      onChange={(e) => update('budgetMax', e.target.value)}
                      placeholder="E.G. 3,000,000"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelCls}>Preferred Grade (Optional)</label>
                  <input
                    type="text"
                    value={form.grade}
                    onChange={(e) => update('grade', e.target.value)}
                    placeholder="E.G. 4.0 OR ABOVE"
                    className={inputCls}
                  />
                </div>

                <div className="space-y-2">
                  <label className={labelCls}>Additional Notes</label>
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
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Email Address *</label>
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
                    <label className={labelCls}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+81 XX XXXX XXXX"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Country</label>
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

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  Previous
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  onClick={() => canNext() && setStep(step + 1)}
                  className={`inline-flex items-center gap-3 px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    canNext() ? 'bg-accent text-on-accent hover:bg-accent-dim' : 'bg-surface-high text-outline cursor-not-allowed'
                  }`}
                >
                  Next
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
          <div className="lg:w-72 shrink-0">
            <div className="bg-surface-low p-8 sticky top-24">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wide mb-6">Summary</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Make / Model</span>
                  <span className="text-sm text-white">{form.make || form.model ? `${form.make}${form.model ? ' · ' + form.model : ''}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Year</span>
                  <span className="text-sm text-white">{form.yearFrom || form.yearTo ? `${form.yearFrom || 'Any'} → ${form.yearTo || 'Any'}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Mileage</span>
                  <span className="text-sm text-white">{form.mileageFrom || form.mileageTo ? `${form.mileageFrom || '0'} → ${form.mileageTo || 'No limit'}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Transmission</span>
                  <span className="text-sm text-white capitalize">{form.transmission}</span>
                </div>
                {form.colors.length > 0 && (
                  <div>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Colors</span>
                    <span className="text-sm text-white">{form.colors.join(', ')}</span>
                  </div>
                )}
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Service</span>
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
                <p className="text-[10px] text-outline leading-relaxed">Your request will be reviewed by our sourcing team. We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
