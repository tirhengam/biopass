import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-surface-hairline bg-canvas py-16 text-onyx-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-600" />
              <span className="font-extrabold text-lg tracking-[0.14em] text-onyx uppercase">
                BIOPASS
              </span>
            </Link>
            <p className="text-xs text-onyx-muted leading-relaxed">
              AI-powered cross-category formulation intelligence for individuals, and turnkey EU Digital Product Passports for modern personal-care brands.
            </p>
            <div className="text-[11px] font-mono text-sage-700 font-semibold">
              Where Science Meets Beauty.
            </div>
          </div>

          {/* Column 2: For Individuals */}
          <div className="space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-micro text-onyx">
              For Individuals
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/consumer" className="hover:text-onyx transition-colors">
                  Skin Barrier Intelligence
                </Link>
              </li>
              <li>
                <Link href="/consumer" className="hover:text-onyx transition-colors">
                  Hair & Scalp Porosity
                </Link>
              </li>
              <li>
                <Link href="/consumer" className="hover:text-onyx transition-colors">
                  Fragrance Molecule Safety
                </Link>
              </li>
              <li>
                <Link href="/consumer" className="hover:text-onyx transition-colors">
                  Supplement Synergies
                </Link>
              </li>
              <li>
                <a 
                  href="https://biopass-beta.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sage-600 hover:text-sage-700 font-semibold inline-flex items-center gap-1"
                >
                  <span>Launch Live Beta App</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Brands & Labs */}
          <div className="space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-micro text-onyx">
              For Enterprise
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/enterprise" className="hover:text-onyx transition-colors">
                  Turnkey EU DPP as a Service
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-onyx transition-colors">
                  Generative Engine Optimization (GEO)
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-onyx transition-colors">
                  INCI Knowledge Graph API
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-onyx transition-colors">
                  Qualified Consumer Placement
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-onyx transition-colors">
                  ESPR 2026 Compliance Specs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Standards */}
          <div className="space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-micro text-onyx">
              Platform Standards
            </div>
            <div className="p-4 rounded-2xl bg-surface border border-surface-hairline space-y-2 text-xs">
              <div className="flex items-center gap-2 text-onyx font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Zero Marketing Noise</span>
              </div>
              <p className="text-[11px] text-onyx-muted leading-relaxed">
                Matches are computed purely via clinical dermatological literature, ingredient molecular weights, and user barrier context.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>© 2026 BioPass Technologies Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-onyx-dim">ESPR & GS1 Digital Link Ready</span>
            <Link href="/" className="hover:text-onyx transition-colors">
              Platform Gateway
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
