'use client';

import { Play, Instagram, Sparkles } from 'lucide-react';

export default function VideoShowcase() {
  const reelClips = [
    {
      title: "Oh Baby Teddy Bear Setup",
      subtitle: "Watch empty hall turn into luxury meadow",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-party-decorations-with-balloons-and-lights-42938-large.mp4",
      poster: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/753092380_18023160485853271_7024676582473989644_n_rhmif2.jpg",
      likes: "1.4k likes"
    },
    {
      title: "Wedding Archway Transformation",
      subtitle: "Coombe Abbey entrance installation",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-wedding-reception-42686-large.mp4",
      poster: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/745152064_18021964016853271_2886719108912963478_n_xavocn.jpg",
      likes: "2.1k likes"
    },
    {
      title: "30th Birthday Light-Up Numbers",
      subtitle: "4ft LED numbers & double-stuffed cascade",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-decorating-a-birthday-cake-with-candles-42941-large.mp4",
      poster: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/751784173_18022976744853271_5268845485108318708_n_pilwcg.jpg",
      likes: "3.2k likes"
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Instagram className="w-3.5 h-3.5" /> Behind The Scenes Magic
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            Watch the Magic Come Together
          </h2>
          <p className="text-neutral-400 text-base font-light">
            People love watching setups! See how Kam & Sandeep turn empty venues into breathtaking celebrations.
          </p>
        </div>

        {/* Video Reel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reelClips.map((clip, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group"
            >
              {/* Video Player */}
              <div className="relative h-[480px] w-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={clip.poster}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={clip.videoUrl} type="video/mp4" />
                </video>

                {/* Dark Reel Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Reel Header Info */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white">
                    <Instagram className="w-3.5 h-3.5 text-[#8162BB]" /> @balloon.galaxy
                  </div>
                  <span className="text-[10px] text-neutral-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                    Reel
                  </span>
                </div>

                {/* Reel Footer Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {clip.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light mb-3">
                    {clip.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-xs text-amber-300 font-medium">
                    <span>❤️ {clip.likes}</span>
                    <a
                      href="https://www.instagram.com/balloon.galaxy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white hover:text-[#8162BB]"
                    >
                      Watch on Instagram →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
