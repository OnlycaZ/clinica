import React, { useState } from "react";

const stars = Array.from({ length: 5 });

export default function ReviewsSection() {
  // one like per review, toggled on/off
  const [liked, setLiked] = useState<boolean[]>([false, false, false, false]);

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section id="recenzii" className="w-full px-4 lg:px-0 py-20 bg-[#f6f8f6]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left column: header + rating summary card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-6">
            <span className="text-[#1fb67c] font-bold tracking-[0.18em] text-xs uppercase">
              TESTIMONIALE
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#123c35]">
              Povesti reale de la pacienti reali
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Recenzii reale din Google Maps, de la pacienti care au ales DentNow pentru tratamente complexe
              si vizite de rutina.
            </p>
          </div>

          {/* Rating card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-black text-[#111827]">4.8</p>
                <p className="text-sm font-semibold text-slate-400">/ 5.0</p>
              </div>
              <div className="mt-3 flex text-[#1fb67c] gap-2">
                {stars.map((_, index) => (
                  <span key={index} className="w-6 h-6 md:w-7 md:h-7 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.5 9.4 8.08 3.3 8.8l4.4 4.02L6.5 19.5 12 16.4l5.5 3.1-1.2-6.68 4.4-4.02-6.1-.72Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Bazat pe 188+ recenzii Google
              </p>
            </div>

            <div className="space-y-2 text-[11px] text-slate-600">
              {[
                { stars: 5, percent: 85 },
                { stars: 4, percent: 10 },
                { stars: 3, percent: 3 },
                { stars: 2, percent: 1 },
                { stars: 1, percent: 1 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="w-3 text-right font-semibold text-slate-500">{row.stars}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#1fb67c]"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-500">{row.percent}%</span>
                </div>
              ))}
            </div>

            {/* Google CTA button */}
            <a
              href="https://www.google.com/maps/place/DentNow"
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-3 rounded-xl h-14 bg-[#111813] text-white text-sm font-bold shadow-lg hover:shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all group"
            >
              <span
                className="bg-white rounded-full p-0.5 flex items-center justify-center"
                style={{ width: 20, height: 20 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
              </span>
              <span>Vezi recenziile pe Google</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </a>
          </div>
        </div>

        {/* Right column: review cards */}
        <div className="lg:col-span-8">
          <div className="columns-1 md:columns-2 gap-5 space-y-5">
            {/* Estera Tila */}
            <article className="break-inside-avoid bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#1fb67c]/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-[#123c35] font-semibold ring-2 ring-[#1fb67c]/20">
                    E
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#123c35] leading-tight">Estera Tila</h3>
                    <p className="text-[11px] text-slate-500">acum o luna</p>
                  </div>
                </div>
                <div className="rounded-full p-1.5 bg-[#1fb67c]/10 text-[#1fb67c]">
                  <span className="text-lg">"</span>
                </div>
              </div>
              <div className="flex text-[#1fb67c] mb-2 gap-1">
                {stars.map((_, index) => (
                  <span key={index} className="w-4 h-4 md:w-5 md:h-5 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.5 9.4 8.08 3.3 8.8l4.4 4.02L6.5 19.5 12 16.4l5.5 3.1-1.2-6.68 4.4-4.02-6.1-.72Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Experientele mele au fost foarte bune la aceasta clinica si totul se datoreaza doamnei doctor
                Ema Petrescu.
              </p>
              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(0)}
                  className={`text-[11px] font-medium inline-flex items-center gap-1.5 transition-colors ${
                    liked[0] ? "text-[#1fb67c]" : "text-slate-500 hover:text-[#1fb67c]"
                  }`}
                >
                  <span>🔥</span>
                  <span>Apreciaza{liked[0] ? " (1)" : ""}</span>
                </button>
              </div>
            </article>

            {/* Iulia Popa */}
            <article className="break-inside-avoid bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#1fb67c]/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-[#123c35] font-semibold ring-2 ring-[#1fb67c]/20">
                    I
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#123c35] leading-tight">Iulia Popa</h3>
                    <p className="text-[11px] text-slate-500">modificat acum 2 saptamani</p>
                  </div>
                </div>
                <div className="rounded-full p-1.5 bg-[#1fb67c]/10 text-[#1fb67c]">
                  <span className="text-lg">"</span>
                </div>
              </div>
              <div className="flex text-[#1fb67c] mb-2 gap-1">
                {stars.map((_, index) => (
                  <span key={index} className="w-4 h-4 md:w-5 md:h-5 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.5 9.4 8.08 3.3 8.8l4.4 4.02L6.5 19.5 12 16.4l5.5 3.1-1.2-6.68 4.4-4.02-6.1-.72Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Dr. Ruxandra si dr. Ema sunt medicii care m-au tratat si si-au facut treaba cu mult
                profesionalism.
              </p>
              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(1)}
                  className={`text-[11px] font-medium inline-flex items-center gap-1.5 transition-colors ${
                    liked[1] ? "text-[#1fb67c]" : "text-slate-500 hover:text-[#1fb67c]"
                  }`}
                >
                  <span>🔥</span>
                  <span>Apreciaza{liked[1] ? " (1)" : ""}</span>
                </button>
              </div>
            </article>

            {/* Mirela Marica */}
            <article className="break-inside-avoid bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#1fb67c]/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-semibold text-lg ring-2 ring-[#1fb67c]/20">
                    M
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#123c35] leading-tight">Mirela Marica</h3>
                    <p className="text-[11px] text-slate-500">acum 3 saptamani</p>
                  </div>
                </div>
                <div className="rounded-full p-1.5 bg-[#1fb67c]/10 text-[#1fb67c]">
                  <span className="text-lg">"</span>
                </div>
              </div>
              <div className="flex text-[#1fb67c] mb-2 gap-1">
                {stars.map((_, index) => (
                  <span key={index} className="w-4 h-4 md:w-5 md:h-5 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.5 9.4 8.08 3.3 8.8l4.4 4.02L6.5 19.5 12 16.4l5.5 3.1-1.2-6.68 4.4-4.02-6.1-.72Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Recomand cu incredere acest cabinet si pe doamna doctor Ruxandra Iarca.
              </p>
              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(2)}
                  className={`text-[11px] font-medium inline-flex items-center gap-1.5 transition-colors ${
                    liked[2] ? "text-[#1fb67c]" : "text-slate-500 hover:text-[#1fb67c]"
                  }`}
                >
                  <span>🔥</span>
                  <span>Apreciaza{liked[2] ? " (1)" : ""}</span>
                </button>
              </div>
            </article>

            {/* Radu Ionita */}
            <article className="break-inside-avoid bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#1fb67c]/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-[#123c35] flex items中心 justify-center text-white font-semibold text-lg ring-2 ring-[#1fb67c]/20">
                    RI
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#123c35] leading-tight">Radu Ionita</h3>
                    <p className="text-[11px] text-slate-500">acum 2 luni</p>
                  </div>
                </div>
                <div className="rounded-full p-1.5 bg-[#1fb67c]/10 text-[#1fb67c]">
                  <span className="text-lg">"</span>
                </div>
              </div>
              <div className="flex text-[#1fb67c] mb-2 gap-1">
                {stars.map((_, index) => (
                  <span key={index} className="w-4 h-4 md:w-5 md:h-5 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.5 9.4 8.08 3.3 8.8l4.4 4.02L6.5 19.5 12 16.4l5.5 3.1-1.2-6.68 4.4-4.02-6.1-.72Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                O recomand din toata inima pe doamna doctor Emma Petrescu.
              </p>
              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(3)}
                  className={`text-[11px] font-medium inline-flex items-center gap-1.5 transition-colors ${
                    liked[3] ? "text-[#1fb67c]" : "text-slate-500 hover:text-[#1fb67c]"
                  }`}
                >
                  <span>🔥</span>
                  <span>Apreciaza{liked[3] ? " (1)" : ""}</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
