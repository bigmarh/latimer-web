import { Component, createSignal, onMount, onCleanup, For } from 'solid-js';

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconVideo = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const IconMic = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
  </svg>
);

const IconShield = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconGlobe = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" />
  </svg>
);

const IconKey = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
  </svg>
);

const IconUsers = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const IconNoServer = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
  </svg>
);

const IconLock = () => (
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const IconArrow = () => (
  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const IconCheck = () => (
  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

// ─── Hero Orb Visual ──────────────────────────────────────────────────────────

const HeroOrb: Component = () => (
  <div class="relative flex items-center justify-center w-[340px] h-[340px] md:w-[420px] md:h-[420px] animate-float">
    {/* Outer ambient glow */}
    <div
      class="absolute inset-0 rounded-full animate-pulse-ring"
      style="background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%);"
    />
    {/* Second ring */}
    <div
      class="absolute inset-[20px] rounded-full animate-pulse-ring"
      style="background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%); animation-delay: 1s;"
    />

    {/* SVG: network paths + nodes */}
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 420 420" fill="none">
      {/* Animated signal path: left node → center */}
      <path
        class="signal-path"
        d="M 80 210 Q 140 160 210 210"
        stroke="#f59e0b"
        stroke-width="1.5"
        opacity="0.5"
      />
      {/* Animated signal path: right node → center */}
      <path
        class="signal-path-2"
        d="M 340 210 Q 280 260 210 210"
        stroke="#f59e0b"
        stroke-width="1.5"
        opacity="0.5"
      />
      {/* Top relay node path */}
      <path
        d="M 210 210 Q 210 140 210 90"
        stroke="#7c3aed"
        stroke-width="1"
        stroke-dasharray="4 6"
        opacity="0.3"
      />
      {/* Left caller node */}
      <circle cx="72" cy="210" r="18" fill="#0d0d15" stroke="#f59e0b" stroke-width="1.5" opacity="0.9" />
      <circle cx="72" cy="210" r="10" fill="#f59e0b" opacity="0.2" />
      {/* Right caller node */}
      <circle cx="348" cy="210" r="18" fill="#0d0d15" stroke="#f59e0b" stroke-width="1.5" opacity="0.9" />
      <circle cx="348" cy="210" r="10" fill="#f59e0b" opacity="0.2" />
      {/* Relay node top */}
      <circle cx="210" cy="78" r="12" fill="#0d0d15" stroke="#7c3aed" stroke-width="1.5" opacity="0.7" />
      <circle cx="210" cy="78" r="6" fill="#7c3aed" opacity="0.3" />
      {/* Small floating dots */}
      <circle cx="145" cy="135" r="3" fill="#f59e0b" opacity="0.4" />
      <circle cx="278" cy="158" r="3" fill="#f59e0b" opacity="0.4" />
      <circle cx="160" cy="290" r="3" fill="#7c3aed" opacity="0.4" />
      <circle cx="268" cy="290" r="3" fill="#7c3aed" opacity="0.4" />
    </svg>

    {/* Center core */}
    <div class="relative animate-pulse-orb">
      {/* Core glow halo */}
      <div
        class="absolute inset-[-24px] rounded-full"
        style="background: radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 65%);"
      />
      {/* Core circle */}
      <div
        class="relative w-[100px] h-[100px] rounded-full border flex items-center justify-center"
        style="background: linear-gradient(135deg, #1a1208, #0d0d15); border-color: rgba(245,158,11,0.5); box-shadow: 0 0 40px rgba(245,158,11,0.3), inset 0 0 20px rgba(245,158,11,0.1);"
      >
        {/* Filament / video icon */}
        <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none">
          {/* Stylized telephone-meets-video */}
          <circle cx="20" cy="20" r="14" stroke="#f59e0b" stroke-width="1" opacity="0.3" />
          {/* Video camera shape */}
          <path d="M 11 15 L 11 25 L 24 25 L 24 15 Z" stroke="#f59e0b" stroke-width="1.5" stroke-linejoin="round" fill="none" opacity="0.9" />
          <path d="M 24 18 L 30 15 L 30 25 L 24 22 Z" stroke="#f59e0b" stroke-width="1.5" stroke-linejoin="round" fill="none" opacity="0.9" />
        </svg>
      </div>
    </div>

    {/* Caller avatars overlaid on the SVG nodes */}
    {/* Left avatar label */}
    <div class="absolute left-[18px] top-[50%] -translate-y-1/2 flex flex-col items-center gap-1">
      <div
        class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono"
        style="background: #0d0d15; border: 1.5px solid rgba(245,158,11,0.5); color: #f59e0b;"
      >
        np
      </div>
    </div>
    {/* Right avatar label */}
    <div class="absolute right-[18px] top-[50%] -translate-y-1/2 flex flex-col items-center gap-1">
      <div
        class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono"
        style="background: #0d0d15; border: 1.5px solid rgba(245,158,11,0.5); color: #f59e0b;"
      >
        np
      </div>
    </div>

    {/* Relay label */}
    <div
      class="absolute top-[10px] left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase font-mono"
      style="color: rgba(124,58,237,0.7);"
    >
      relay
    </div>
  </div>
);

// ─── Nav ─────────────────────────────────────────────────────────────────────

const Nav: Component = () => {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', handler));
  });

  return (
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      classList={{ 'nav-scrolled': scrolled() }}
      style="border-color: transparent;"
    >
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" class="flex items-center gap-3 no-underline">
          <img src="/latimer-logo-face.svg" alt="Latimer" class="w-8 h-8" style="object-fit: contain;" />
          <span
            class="text-lg font-semibold tracking-wide"
            style="font-family: 'Syne', sans-serif; color: #f0ede8;"
          >
            Latimer
          </span>
        </a>

        {/* Links */}
        <div class="hidden md:flex items-center gap-8">
          {[
            ['Why Nostr', '#why-nostr'],
            ['How It Works', '#how-it-works'],
            ['Features', '#features'],
            ['Roadmap', '#roadmap'],
          ].map(([label, href]) => (
            <a
              href={href}
              class="text-sm transition-colors duration-200 no-underline"
              style="color: #6b6b7a; font-family: 'Syne', sans-serif;"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0ede8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b6b7a')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://latimer.pages.dev"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline"
          style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.25); font-family: 'Syne', sans-serif;"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.2)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.12)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.25)';
          }}
        >
          Launch App <IconArrow />
        </a>
      </div>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero: Component = () => (
  <section
    class="relative min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden"
    style="background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 60%);"
  >
    {/* Background grid */}
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 48px 48px;"
    />

    {/* Content */}
    <div class="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
      {/* Logo mark */}
      <img
        src="/latimer-logo-face.svg"
        alt="Latimer"
        class="animate-fade-in mb-12"
        style="width: 220px; height: 220px; object-fit: contain; filter: drop-shadow(0 0 40px rgba(255,255,255,0.2));"
      />

      {/* Badge */}
      <div
        class="animate-fade-up mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-widest uppercase"
        style="border: 1px solid rgba(124,58,237,0.3); background: rgba(124,58,237,0.08); color: #a78bfa; font-family: 'Space Mono', monospace;"
      >
        <span style="width:6px;height:6px;border-radius:50%;background:#a78bfa;display:inline-block;animation:pulse-orb 2s ease-in-out infinite;" />
        Built on Nostr · NWPC Protocol
      </div>

      {/* Headline */}
      <h1
        class="animate-fade-up delay-100 leading-none mb-6"
        style="font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 9vw, 7.5rem); font-weight: 400; color: #f0ede8; letter-spacing: -0.02em;"
      >
        Face to face.{' '}
        <em class="animate-glow-text not-italic" style="color: #f59e0b;">No gatekeepers.</em>
      </h1>

      {/* Sub */}
      <p
        class="animate-fade-up delay-200 max-w-xl mb-10 leading-relaxed"
        style="font-size: 1.125rem; color: #6b6b7a; font-family: 'Syne', sans-serif;"
      >
        Encrypted audio and video calls, powered by the Nostr network. Use your Nostr identity — or go completely incognito with a throwaway key. Works alongside BitChat when you have internet.
      </p>

      {/* CTAs */}
      <div class="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4 mb-20">
        <a
          href="https://latimer.pages.dev"
          class="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 no-underline"
          style="background: #f59e0b; color: #060608; font-family: 'Syne', sans-serif; box-shadow: 0 0 40px rgba(245,158,11,0.3);"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#fbbf24';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(245,158,11,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#f59e0b';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(245,158,11,0.3)';
          }}
        >
          <IconVideo /> Launch Latimer
        </a>
        <a
          href="#how-it-works"
          class="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-medium transition-all duration-200 no-underline"
          style="border: 1px solid rgba(255,255,255,0.1); color: #9090a4; font-family: 'Syne', sans-serif;"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            (e.currentTarget as HTMLElement).style.color = '#f0ede8';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            (e.currentTarget as HTMLElement).style.color = '#9090a4';
          }}
        >
          See how it works <IconArrow />
        </a>
      </div>

      {/* Hero orb visual */}
      <div class="animate-fade-up delay-400">
        <HeroOrb />
      </div>

      {/* Stats row */}
      <div
        class="animate-fade-up delay-500 mt-16 flex flex-wrap justify-center gap-px rounded-2xl overflow-hidden"
        style="border: 1px solid rgba(255,255,255,0.06);"
      >
        {[
          ['0', 'Phone numbers required'],
          ['∞', 'Relay redundancy'],
          ['P2P', 'WebRTC encrypted calls'],
          ['Open', 'Source protocol'],
        ].map(([val, label]) => (
          <div
            class="flex flex-col items-center px-8 py-5"
            style="background: rgba(13,13,21,0.8);"
          >
            <span
              class="text-2xl font-bold mb-1"
              style="font-family: 'Cormorant Garamond', serif; color: #f59e0b;"
            >
              {val}
            </span>
            <span class="text-xs" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800"
      style="color: #6b6b7a;"
    >
      <span class="text-xs tracking-widest uppercase" style="font-family: 'Space Mono', monospace;">Scroll</span>
      <div
        class="w-px h-10"
        style="background: linear-gradient(to bottom, rgba(245,158,11,0.5), transparent);"
      />
    </div>
  </section>
);

// ─── Why Nostr ────────────────────────────────────────────────────────────────

const WhyNostr: Component = () => {
  const cards = [
    {
      icon: <IconShield />,
      label: 'Censorship-Resistant',
      title: "Can't be shut down",
      body: "No central server to block, no company to pressure, no account to suspend. Nostr's globally distributed relays mean your calls route around censorship by design.",
      accent: '#f59e0b',
    },
    {
      icon: <IconGlobe />,
      label: 'Open Protocol',
      title: 'No proprietary lock-in',
      body: "Nostr is a free, open specification. Latimer is one client — you own your identity and your social graph, forever. Anyone can build on top of it.",
      accent: '#a78bfa',
    },
    {
      icon: <IconKey />,
      label: 'Your Identity',
      title: 'Your npub is your number',
      body: 'A cryptographic keypair is your phone number. It travels with you across every Nostr app. No carrier. No registration. No one can take it from you.',
      accent: '#f59e0b',
    },
    {
      icon: <IconNoServer />,
      label: 'No Signaling Servers',
      title: 'NWPC over Nostr relays',
      body: 'Traditional video apps need signaling servers to set up WebRTC. Latimer uses NWPC — Nostr Wrapped Procedural Calls — so relays handle signaling without any dedicated server infrastructure.',
      accent: '#a78bfa',
    },
  ];

  return (
    <section id="why-nostr" class="py-32 px-6">
      <div class="max-w-6xl mx-auto">
        {/* Section header */}
        <div class="mb-16">
          <p
            class="text-xs tracking-[0.3em] uppercase mb-4"
            style="color: #7c3aed; font-family: 'Space Mono', monospace;"
          >
            The Protocol Advantage
          </p>
          <h2
            class="leading-tight max-w-lg"
            style="font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 3.75rem); font-weight: 400; color: #f0ede8;"
          >
            Why Nostr is the right foundation for calls
          </h2>
        </div>

        {/* Cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <For each={cards}>
            {(card, i) => (
              <div
                class="card-glow rounded-2xl p-8 group cursor-default"
                style={`background: #0d0d15; border: 1px solid rgba(255,255,255,0.06); animation-delay: ${i() * 100}ms;`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${card.accent}33`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Icon */}
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={`background: ${card.accent}18; color: ${card.accent}; border: 1px solid ${card.accent}30;`}
                >
                  {card.icon}
                </div>

                {/* Label */}
                <p
                  class="text-xs tracking-widest uppercase mb-3"
                  style={`color: ${card.accent}; font-family: 'Space Mono', monospace;`}
                >
                  {card.label}
                </p>

                {/* Title */}
                <h3
                  class="mb-3 leading-snug"
                  style="font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: #f0ede8;"
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p class="leading-relaxed text-sm" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
                  {card.body}
                </p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

// ─── How It Works ─────────────────────────────────────────────────────────────

const HowItWorks: Component = () => {
  const steps = [
    {
      n: '01',
      title: 'Sign in your way',
      body: 'NostrPass Lite keeps your key safe in the browser — no password, no email. Prefer an extension like Alby? Use that. Have your nsec? Paste it. Or skip identity entirely and go incognito.',
      note: '4 ways to sign in',
    },
    {
      n: '02',
      title: 'See your contacts',
      body: "People you already follow on Nostr appear automatically as contacts. Your social graph is your address book — zero setup required.",
      note: 'Nostr social graph',
    },
    {
      n: '03',
      title: 'Start a call',
      body: 'Tap a contact and start an encrypted audio or video call. NWPC signals through Nostr relays to establish a direct peer-to-peer WebRTC connection.',
      note: 'End-to-end encrypted',
    },
  ];

  return (
    <section
      id="how-it-works"
      class="py-32 px-6"
      style="background: linear-gradient(to bottom, transparent, rgba(13,13,21,0.6), transparent);"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-16">
          <p
            class="text-xs tracking-[0.3em] uppercase mb-4"
            style="color: #f59e0b; font-family: 'Space Mono', monospace;"
          >
            Simplicity
          </p>
          <h2
            class="leading-tight"
            style="font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 3.75rem); font-weight: 400; color: #f0ede8;"
          >
            Three steps to your first call
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            class="hidden md:block absolute top-8 left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] h-px"
            style="background: linear-gradient(to right, rgba(245,158,11,0.3), rgba(124,58,237,0.3));"
          />

          <For each={steps}>
            {(step, _i) => (
              <div class="relative group">
                {/* Step number */}
                <div
                  class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative"
                  style="background: #13131f; border: 1px solid rgba(245,158,11,0.2);"
                >
                  <span
                    class="text-xl font-bold"
                    style="font-family: 'Space Mono', monospace; color: #f59e0b;"
                  >
                    {step.n}
                  </span>
                  {/* Connector dot */}
                  <div
                    class="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-px hidden md:block"
                    style="background: rgba(245,158,11,0.3);"
                  />
                </div>

                <h3
                  class="mb-3 leading-snug"
                  style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
                >
                  {step.title}
                </h3>
                <p class="mb-5 leading-relaxed text-sm" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
                  {step.body}
                </p>
                <span
                  class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style="background: rgba(245,158,11,0.08); color: #f59e0b; border: 1px solid rgba(245,158,11,0.2); font-family: 'Space Mono', monospace;"
                >
                  <IconCheck /> {step.note}
                </span>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

// ─── Features ─────────────────────────────────────────────────────────────────

const Features: Component = () => {
  return (
    <section id="features" class="py-32 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-16">
          <p
            class="text-xs tracking-[0.3em] uppercase mb-4"
            style="color: #f59e0b; font-family: 'Space Mono', monospace;"
          >
            What you get
          </p>
          <h2
            class="leading-tight max-w-lg"
            style="font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 3.75rem); font-weight: 400; color: #f0ede8;"
          >
            Everything a calling app needs. Nothing a surveillance app wants.
          </h2>
        </div>

        {/* Masonry-style bento grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: large + sm + sm */}
          <div
            class="card-glow md:col-span-2 rounded-2xl p-8 group"
            style="background: #0d0d15; border: 1px solid rgba(255,255,255,0.06);"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.2);"
            >
              <IconVideo />
            </div>
            <h3
              class="mb-2"
              style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
            >
              HD Video Calls
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
              Crystal-clear video over a direct peer-to-peer WebRTC connection. No relay server sits in the media path — your call goes directly between you and the person you're calling.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            {[
              { icon: <IconMic />, title: 'Audio Calls', body: 'Low-latency audio for quick conversations.' },
              { icon: <IconKey />, title: 'No Phone Number', body: 'Your npub is your address. That\'s it.' },
            ].map((f) => (
              <div
                class="card-glow rounded-2xl p-6 flex-1 group"
                style="background: #0d0d15; border: 1px solid rgba(255,255,255,0.06);"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.2);"
                >
                  {f.icon}
                </div>
                <h3 class="mb-1.5" style="font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 600; color: #f0ede8;">{f.title}</h3>
                <p class="text-xs leading-relaxed" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Row 2: sm + sm + large */}
          <div class="flex flex-col gap-4">
            {[
              { icon: <IconLock />, title: 'End-to-End Encrypted', body: 'Calls are direct P2P. No server sees your media stream.' },
              { icon: <IconShield />, title: "Can't Be Shut Down", body: 'No single company controls the network. Globally distributed.' },
            ].map((f) => (
              <div
                class="card-glow rounded-2xl p-6 flex-1 group"
                style="background: #0d0d15; border: 1px solid rgba(255,255,255,0.06);"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.25)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style="background: rgba(124,58,237,0.12); color: #a78bfa; border: 1px solid rgba(124,58,237,0.2);"
                >
                  {f.icon}
                </div>
                <h3 class="mb-1.5" style="font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 600; color: #f0ede8;">{f.title}</h3>
                <p class="text-xs leading-relaxed" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">{f.body}</p>
              </div>
            ))}
          </div>

          <div
            class="card-glow md:col-span-2 rounded-2xl p-8 group"
            style="background: #0d0d15; border: 1px solid rgba(255,255,255,0.06);"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.25)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(124,58,237,0.12); color: #a78bfa; border: 1px solid rgba(124,58,237,0.2);"
            >
              <IconNoServer />
            </div>
            <h3
              class="mb-2"
              style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
            >
              NWPC Signaling — No servers required
            </h3>
            <p class="text-sm leading-relaxed mb-4" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
              Traditional video apps (Zoom, FaceTime, Signal) require dedicated signaling servers to orchestrate WebRTC connections. Latimer uses <strong style="color: #a78bfa;">NWPC — Nostr Wrapped Procedural Calls</strong> — routing the signaling handshake through open Nostr relays instead. No server to host. No single point of failure.
            </p>
            <code
              class="text-xs px-3 py-1.5 rounded-lg"
              style="background: rgba(124,58,237,0.1); color: #a78bfa; font-family: 'Space Mono', monospace; border: 1px solid rgba(124,58,237,0.2);"
            >
              caller → nostr relay → callee → WebRTC ↔ WebRTC
            </code>
          </div>

          {/* Incognito + Invite — new full-width row */}
          <div
            class="card-glow md:col-span-2 rounded-2xl p-8 group relative overflow-hidden"
            style="background: linear-gradient(135deg, #0d0d15, #13131f); border: 1px solid rgba(167,139,250,0.15);"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.35)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.15)')}
          >
            <div
              class="absolute -right-16 -top-16 w-56 h-56 rounded-full pointer-events-none"
              style="background: radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 60%);"
            />
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(167,139,250,0.12); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3);"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3C7 3 3 7 3 12c0 2 .6 3.8 1.6 5.3L3 21l3.7-1.6A9 9 0 1 0 12 3z"/>
                <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>
                <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/>
                <path d="M9 15s1 1.5 3 1.5 3-1.5 3-1.5"/>
              </svg>
            </div>
            <h3
              class="mb-2"
              style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
            >
              Incognito Mode
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
              No identity? No problem. Generate a one-time throwaway key and share an invite link or QR code. The other person opens the link and joins directly — no account required. Keys vanish when you close the tab. Works great with BitChat: share the link over mesh when the internet comes back.
            </p>
          </div>

          <div
            class="card-glow md:col-span-1 rounded-2xl p-8 group relative overflow-hidden"
            style="background: linear-gradient(135deg, #0d0d15, #13131f); border: 1px solid rgba(245,158,11,0.15);"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.35)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.15)')}
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3);"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            <h3
              class="mb-2"
              style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
            >
              Invite by Link
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
              Share a call link anywhere — QR code, message, BitChat DM. Anyone who opens it can join with one tap, incognito or with their own Nostr key.
            </p>
          </div>

          {/* Social graph — full width */}
          <div
            class="card-glow md:col-span-3 rounded-2xl p-8 group relative overflow-hidden"
            style="background: linear-gradient(135deg, #0d0d15, #13131f); border: 1px solid rgba(245,158,11,0.15);"
          >
            <div
              class="absolute -right-20 -top-20 w-64 h-64 rounded-full pointer-events-none"
              style="background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 60%);"
            />
            <div class="relative flex flex-col md:flex-row md:items-center gap-6">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3);"
              >
                <IconUsers />
              </div>
              <div>
                <h3
                  class="mb-2"
                  style="font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 400; color: #f0ede8;"
                >
                  Your Nostr social graph <em class="not-italic" style="color: #f59e0b;">is</em> your contact list
                </h3>
                <p class="text-sm leading-relaxed max-w-2xl" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
                  Every person you follow on Nostr appears automatically as a contact in Latimer. No import, no migration, no invite system. If they're on Nostr, you can call them — the moment they install Latimer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Roadmap ──────────────────────────────────────────────────────────────────

const Roadmap: Component = () => {
  const phases = [
    {
      phase: 'Now',
      status: 'live',
      title: 'Voice & Video',
      items: ['1-on-1 audio calls', '1-on-1 video calls', 'Nostr social graph contacts', 'NWPC signaling via relays', 'NostrPass Lite login', 'Incognito calls with invite links', 'nsec / extension / NostrPass login', 'Auto profile lookup from Nostr'],
    },
    {
      phase: 'Next',
      status: 'building',
      title: 'Group Calls',
      items: ['Group audio calls', 'Group video calls', 'Call history on Nostr', 'In-call messaging (zaps)', 'Mobile web experience'],
    },
    {
      phase: 'Later',
      status: 'planned',
      title: 'Everywhere & More',
      items: ['Progressive Web App (installable, no app store)', 'Screen sharing', 'Encrypted file transfer', 'Multi-relay failover', 'Self-hostable relay bundles'],
    },
  ];

  const statusColor: Record<string, string> = {
    live: '#f59e0b',
    building: '#a78bfa',
    planned: '#374151',
  };

  const statusLabel: Record<string, string> = {
    live: 'Live',
    building: 'In Progress',
    planned: 'Planned',
  };

  return (
    <section id="roadmap" class="py-32 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-16">
          <p
            class="text-xs tracking-[0.3em] uppercase mb-4"
            style="color: #7c3aed; font-family: 'Space Mono', monospace;"
          >
            What's coming
          </p>
          <h2
            class="leading-tight"
            style="font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 3.75rem); font-weight: 400; color: #f0ede8;"
          >
            The road ahead
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <For each={phases}>
            {(phase) => (
              <div
                class="rounded-2xl p-8 relative overflow-hidden"
                style={`background: #0d0d15; border: 1px solid ${phase.status === 'live' ? 'rgba(245,158,11,0.25)' : phase.status === 'building' ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)'};`}
              >
                {phase.status === 'live' && (
                  <div
                    class="absolute top-0 left-0 right-0 h-px"
                    style="background: linear-gradient(to right, transparent, rgba(245,158,11,0.5), transparent);"
                  />
                )}

                {/* Phase badge */}
                <div class="flex items-center justify-between mb-6">
                  <span
                    class="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={`font-family: 'Space Mono', monospace; color: ${statusColor[phase.status]}; background: ${statusColor[phase.status]}18; border: 1px solid ${statusColor[phase.status]}30;`}
                  >
                    {phase.phase}
                  </span>
                  <span class="text-xs" style={`color: ${statusColor[phase.status]}; font-family: 'Syne', sans-serif;`}>
                    {statusLabel[phase.status]}
                  </span>
                </div>

                <h3
                  class="mb-6"
                  style="font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: #f0ede8;"
                >
                  {phase.title}
                </h3>

                <ul class="space-y-3">
                  <For each={phase.items}>
                    {(item) => (
                      <li class="flex items-center gap-3 text-sm" style="font-family: 'Syne', sans-serif;">
                        <span style={`color: ${statusColor[phase.status]}; flex-shrink: 0;`}>
                          {phase.status === 'planned' ? (
                            <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="3" opacity="0.4" /></svg>
                          ) : (
                            <IconCheck />
                          )}
                        </span>
                        <span style={`color: ${phase.status === 'planned' ? '#4b5563' : '#9090a4'};`}>{item}</span>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

// ─── CTA Banner ───────────────────────────────────────────────────────────────

const CTABanner: Component = () => (
  <section class="py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div
        class="rounded-3xl p-16 relative overflow-hidden"
        style="background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(124,58,237,0.08)); border: 1px solid rgba(245,158,11,0.15);"
      >
        {/* Ambient glow */}
        <div
          class="absolute inset-0 pointer-events-none"
          style="background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.08), transparent);"
        />

        <div class="relative">
          <p
            class="text-xs tracking-[0.3em] uppercase mb-6"
            style="color: #f59e0b; font-family: 'Space Mono', monospace;"
          >
            In Homage to Lewis Howard Latimer
          </p>
          <h2
            class="mb-6 leading-tight"
            style="font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 300; color: #f0ede8;"
          >
            He drew the plans for the telephone.
            <br />
            <em style="color: #f59e0b;">We built the next one.</em>
          </h2>
          <p
            class="mb-10 max-w-2xl mx-auto leading-relaxed"
            style="color: #6b6b7a; font-family: 'Syne', sans-serif;"
          >
            In 1876, Lewis Latimer — a self-taught draftsman and the son of an escaped slave — drew the technical patent illustrations that helped Alexander Graham Bell secure the telephone patent. Without Latimer's precise hand, the invention that changed human communication might never have been protected.
            <br /><br />
            Latimer went largely uncredited. Latimer the app exists to carry that legacy forward: open, decentralized communication that belongs to everyone, controlled by no one.
          </p>
          <a
            href="https://latimer.pages.dev"
            class="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 no-underline"
            style="background: #f59e0b; color: #060608; font-family: 'Syne', sans-serif; box-shadow: 0 0 50px rgba(245,158,11,0.3);"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#fbbf24';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 80px rgba(245,158,11,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#f59e0b';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(245,158,11,0.3)';
            }}
          >
            <IconVideo /> Launch Latimer Free
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: Component = () => (
  <footer
    class="border-t py-16 px-6"
    style="border-color: rgba(255,255,255,0.06);"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Brand */}
        <div class="max-w-xs">
          <div class="flex items-center gap-3 mb-4">
            <img src="/latimer-logo-face.svg" alt="Latimer" class="w-8 h-8" style="object-fit: contain;" />
            <span
              class="text-lg font-semibold"
              style="font-family: 'Syne', sans-serif; color: #f0ede8;"
            >
              Latimer
            </span>
          </div>
          <p class="text-sm leading-relaxed mb-4" style="color: #6b6b7a; font-family: 'Syne', sans-serif;">
            FaceTime for Nostr. Encrypted calls, censorship-resistant, no phone number required.
          </p>
          <p class="text-xs" style="color: #4b5563; font-family: 'Space Mono', monospace;">
            Named in honor of Lewis Howard Latimer (1848–1928) —<br />
            the draftsman whose hand secured Bell's telephone patent.
          </p>
        </div>

        {/* Links */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <p
              class="text-xs tracking-widest uppercase mb-4"
              style="color: #4b5563; font-family: 'Space Mono', monospace;"
            >
              Product
            </p>
            <ul class="space-y-3">
              {['Launch App', 'How It Works', 'Features', 'Roadmap'].map((l) => (
                <li>
                  <a
                    href={l === 'Launch App' ? 'https://latimer.pages.dev' : '#'}
                    class="text-sm no-underline transition-colors duration-150"
                    style="color: #6b6b7a; font-family: 'Syne', sans-serif;"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f0ede8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#6b6b7a')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              class="text-xs tracking-widest uppercase mb-4"
              style="color: #4b5563; font-family: 'Space Mono', monospace;"
            >
              Protocol
            </p>
            <ul class="space-y-3">
              {['NWPC Spec', 'Nostr Protocol', 'NostrPass', 'GitHub'].map((l) => (
                <li>
                  <a
                    href="#"
                    class="text-sm no-underline transition-colors duration-150"
                    style="color: #6b6b7a; font-family: 'Syne', sans-serif;"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f0ede8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#6b6b7a')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              class="text-xs tracking-widest uppercase mb-4"
              style="color: #4b5563; font-family: 'Space Mono', monospace;"
            >
              Community
            </p>
            <ul class="space-y-3">
              {['Nostr', 'Discord', 'Twitter / X', 'Docs'].map((l) => (
                <li>
                  <a
                    href="#"
                    class="text-sm no-underline transition-colors duration-150"
                    style="color: #6b6b7a; font-family: 'Syne', sans-serif;"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f0ede8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#6b6b7a')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        class="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style="border-top: 1px solid rgba(255,255,255,0.04);"
      >
        <p class="text-xs" style="color: #4b5563; font-family: 'Space Mono', monospace;">
          © 2026 Latimer. Open source. Built on Nostr.
        </p>
        <div class="flex items-center gap-2 text-xs" style="color: #4b5563; font-family: 'Space Mono', monospace;">
          <span>Authentication by</span>
          <a
            href="https://nostrpass.com"
            class="no-underline transition-colors duration-150"
            style="color: #f59e0b;"
          >
            NostrPass
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────

const App: Component = () => (
  <div style="background: #060608; min-height: 100vh;">
    <Nav />
    <Hero />
    <WhyNostr />
    <HowItWorks />
    <Features />
    <Roadmap />
    <CTABanner />
    <Footer />
  </div>
);

export default App;
