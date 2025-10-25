import React from "react";

const SITES = [
  {
    title: "Managudi",
    url: "https://managudi.in/",
  },
  {
    title: "Our Community",
    url: "https://ourcommunity.in/",
  },
  {
    title: "lms Board",
    url: "https://lms.xlligent-demos.com/",
  },
  {
    title: "Direct Farm",
    url: "https://direct-farms.com/",
  },
];

export default function ShowcaseGrid() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center text-white mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ongoing projects we operate and maintain
          </h2>
          <p className="text-indigo-200 text-sm">
            Click any screen to open the full website.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative block
                transform hover:-rotate-1 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* "Tablet" frame */}
              <div
                className="
                  relative rounded-xl bg-white shadow-2xl
                  ring-1 ring-black/10 overflow-hidden
                  w-full h-[420px] md:h-[560px]
                  flex flex-col
                "
              >
                {/* Top bezel / camera dot */}
                <div className="h-8 bg-neutral-100 flex items-center justify-center relative border-b border-neutral-200">
                  <div className="w-12 h-4 bg-neutral-200 rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                  </div>
                </div>

                {/* Iframe preview area */}
                <div className="flex-1 bg-black">
                  <iframe
                    src={site.url}
                    title={site.title}
                    className="w-full h-full border-1 pointer-events-none"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Overlay label (bottom-left badge) */}
              <div className="absolute left-2 bottom-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {site.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
