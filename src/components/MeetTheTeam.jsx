'use client';

import { TEAM_DATA } from '@/data/teamData';
import { Heart, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function MeetTheTeam() {
  return (
    <section className="py-24 bg-[#0B0A0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            The Hearts Behind The Brand
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            {TEAM_DATA.headline}
          </h2>
          <p className="text-neutral-400 text-base font-light">
            {TEAM_DATA.subheadline}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TEAM_DATA.members.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#121118] rounded-3xl p-8 border border-purple-900/30 shadow-2xl flex flex-col justify-between hover-lift relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8162BB] via-purple-400 to-[#D4AF37]" />

              <div>
                {/* Member Header */}
                <div className="flex items-start justify-between mb-6 pt-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8162BB] block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-white">
                      {member.name}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#8162BB]/20 text-[#C4B8DC] border border-[#8162BB]/30 flex items-center justify-center font-serif text-xl font-bold">
                    {member.name[0]}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Roles & Duties */}
                <div className="bg-[#1A1921] rounded-2xl p-5 border border-purple-900/30 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#8162BB]" /> Hands-On Role In Every Event:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-medium">
                    {member.duties.map((duty, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8162BB] shrink-0" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="italic font-subserif text-base text-neutral-200 border-l-2 border-[#8162BB] pl-4 pt-2">
                "{member.quote}"
              </blockquote>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
