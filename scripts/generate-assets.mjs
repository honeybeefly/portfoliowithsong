import fs from 'fs';
import path from 'path';

const publicImages = path.resolve('public/images');
const projectImages = path.resolve('public/images/projects');

// 1. Shanghai Skyline Hero SVG
const shanghaiSkylineSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#02040a" />
      <stop offset="40%" stop-color="#050814" />
      <stop offset="75%" stop-color="#0d1124" />
      <stop offset="100%" stop-color="#04060c" />
    </linearGradient>
    <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="100%" stop-color="#0088ff" />
    </linearGradient>
    <linearGradient id="neonMagenta" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff2e97" />
      <stop offset="100%" stop-color="#8a2be2" />
    </linearGradient>
    <linearGradient id="riverGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0d172e" />
      <stop offset="30%" stop-color="#070c1a" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="glowPink" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <pattern id="cyberGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.05)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Sky Background -->
  <rect width="1920" height="1080" fill="url(#skyGrad)" />
  <rect width="1920" height="720" fill="url(#cyberGrid)" />

  <!-- Cyberpunk Stars / Digital Noise -->
  <g fill="#00f0ff" opacity="0.6">
    <circle cx="200" cy="80" r="1.5" />
    <circle cx="450" cy="120" r="1" />
    <circle cx="720" cy="60" r="2" />
    <circle cx="1080" cy="100" r="1.5" />
    <circle cx="1340" cy="50" r="1" />
    <circle cx="1600" cy="110" r="2" />
    <circle cx="1800" cy="70" r="1" />
  </g>
  <g fill="#ff2e97" opacity="0.5">
    <circle cx="320" cy="150" r="1.5" />
    <circle cx="890" cy="140" r="2" />
    <circle cx="1480" cy="160" r="1.5" />
  </g>

  <!-- Shanghai Skyline Layer 1: Distant Silhouettes -->
  <g fill="#080c18" opacity="0.8">
    <rect x="50" y="450" width="80" height="270" />
    <rect x="180" y="420" width="110" height="300" />
    <polygon points="180,420 235,390 290,420" />
    <rect x="360" y="480" width="70" height="240" />
    <rect x="480" y="380" width="120" height="340" />
    <rect x="650" y="440" width="90" height="280" />
    <rect x="1350" y="400" width="100" height="320" />
    <rect x="1500" y="460" width="120" height="260" />
    <rect x="1680" y="420" width="90" height="300" />
    <rect x="1820" y="450" width="100" height="270" />
  </g>

  <!-- Shanghai Skyline Layer 2: Mid-ground Iconic Pudong Skyscrapers -->
  <!-- Shanghai Tower (632m spiral structure) -->
  <g id="shanghai-tower">
    <path d="M 780 720 L 795 240 Q 820 180 840 240 L 855 720 Z" fill="#0c1426" stroke="#00f0ff" stroke-width="1.5" opacity="0.9" />
    <path d="M 800 240 Q 830 380 810 520 Q 840 640 820 720" fill="none" stroke="#00f0ff" stroke-width="2" filter="url(#glowCyan)" opacity="0.8" />
    <path d="M 830 240 Q 810 380 835 520 Q 815 640 840 720" fill="none" stroke="#ff2e97" stroke-width="1.5" filter="url(#glowPink)" opacity="0.7" />
    <!-- Spire -->
    <line x1="820" y1="240" x2="820" y2="170" stroke="#00f0ff" stroke-width="2" filter="url(#glowCyan)" />
    <circle cx="820" cy="170" r="3" fill="#ffffff" filter="url(#glowCyan)" />
  </g>

  <!-- Jin Mao Tower (Pagoda-style step architecture) -->
  <g id="jin-mao-tower">
    <path d="M 940 720 L 945 320 L 985 320 L 990 720 Z" fill="#0d182e" stroke="#00f0ff" stroke-width="1" />
    <!-- Pagoda stepped tiers -->
    <rect x="942" y="600" width="46" height="15" fill="#ff2e97" opacity="0.6" filter="url(#glowPink)" />
    <rect x="945" y="520" width="40" height="12" fill="#00f0ff" opacity="0.6" filter="url(#glowCyan)" />
    <rect x="948" y="440" width="34" height="10" fill="#ff2e97" opacity="0.6" filter="url(#glowPink)" />
    <rect x="952" y="370" width="26" height="8" fill="#00f0ff" opacity="0.6" filter="url(#glowCyan)" />
    <!-- Spire -->
    <polygon points="962,320 965,260 968,320" fill="#00f0ff" filter="url(#glowCyan)" />
    <line x1="965" y1="260" x2="965" y2="220" stroke="#ffffff" stroke-width="2" />
  </g>

  <!-- Shanghai World Financial Center (Bottle Opener building) -->
  <g id="swfc">
    <path d="M 680 720 L 705 280 L 745 280 L 770 720 Z" fill="#0a1224" stroke="#ff2e97" stroke-width="1" />
    <!-- Iconic trapezoid cutout -->
    <polygon points="715,310 735,310 740,360 710,360" fill="#02040a" stroke="#00f0ff" stroke-width="2" filter="url(#glowCyan)" />
  </g>

  <!-- Oriental Pearl Tower (Iconic spheres & tripod base) -->
  <g id="oriental-pearl">
    <!-- Tripod Legs -->
    <line x1="1100" y1="720" x2="1145" y2="580" stroke="#ff2e97" stroke-width="6" opacity="0.8" />
    <line x1="1200" y1="720" x2="1155" y2="580" stroke="#ff2e97" stroke-width="6" opacity="0.8" />
    <line x1="1150" y1="720" x2="1150" y2="580" stroke="#00f0ff" stroke-width="4" opacity="0.9" />
    
    <!-- Lower Big Sphere -->
    <circle cx="1150" cy="550" r="45" fill="#120c24" stroke="#ff2e97" stroke-width="4" filter="url(#glowPink)" />
    <circle cx="1150" cy="550" r="32" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.7" />
    <!-- Five Small Spheres ring -->
    <circle cx="1130" cy="540" r="8" fill="#ff2e97" opacity="0.9" />
    <circle cx="1170" cy="540" r="8" fill="#00f0ff" opacity="0.9" />
    <circle cx="1150" cy="565" r="7" fill="#ffb703" opacity="0.9" />

    <!-- Central Column -->
    <rect x="1144" y="380" width="12" height="140" fill="#00f0ff" opacity="0.8" filter="url(#glowCyan)" />

    <!-- Upper Big Sphere -->
    <circle cx="1150" cy="360" r="32" fill="#100b22" stroke="#ff2e97" stroke-width="3" filter="url(#glowPink)" />
    <circle cx="1150" cy="360" r="22" fill="none" stroke="#00f0ff" stroke-width="2" />

    <!-- Top Capsule Sphere -->
    <circle cx="1150" cy="270" r="14" fill="#00f0ff" stroke="#ffffff" stroke-width="2" filter="url(#glowCyan)" />

    <!-- Tower Spire Antenna -->
    <line x1="1150" y1="270" x2="1150" y2="130" stroke="#00f0ff" stroke-width="3" filter="url(#glowCyan)" />
    <line x1="1150" y1="130" x2="1150" y2="90" stroke="#ff2e97" stroke-width="1.5" />
    <circle cx="1150" cy="90" r="4" fill="#ffffff" filter="url(#glowCyan)" />
  </g>

  <!-- Bund Waterfront Promenades & Cyber Neon Billboard Signs -->
  <g id="cyber-signs">
    <!-- Vertical Chinese Neon Signs -->
    <rect x="620" y="440" width="30" height="130" rx="4" fill="#050814" stroke="#ff2e97" stroke-width="1.5" filter="url(#glowPink)" />
    <text x="635" y="470" fill="#ff2e97" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">安</text>
    <text x="635" y="500" fill="#ff2e97" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">全</text>
    <text x="635" y="530" fill="#00f0ff" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">网</text>
    <text x="635" y="555" fill="#00f0ff" font-family="'Orbitron', sans-serif" font-size="14" text-anchor="middle">SEC</text>

    <rect x="1040" y="480" width="30" height="140" rx="4" fill="#050814" stroke="#00f0ff" stroke-width="1.5" filter="url(#glowCyan)" />
    <text x="1055" y="510" fill="#00f0ff" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">代</text>
    <text x="1055" y="540" fill="#00f0ff" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">码</text>
    <text x="1055" y="570" fill="#ff2e97" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">黑</text>
    <text x="1055" y="600" fill="#ff2e97" font-family="'Orbitron', sans-serif" font-size="16" text-anchor="middle" font-weight="bold">客</text>

    <!-- Glowing Bund Embankment Barrier -->
    <line x1="0" y1="720" x2="1920" y2="720" stroke="#00f0ff" stroke-width="3" filter="url(#glowCyan)" />
    <line x1="0" y1="726" x2="1920" y2="726" stroke="#ff2e97" stroke-width="2" filter="url(#glowPink)" />
  </g>

  <!-- Huangpu River with Water Neon Reflections -->
  <rect x="0" y="728" width="1920" height="352" fill="url(#riverGlow)" />
  <!-- Neon Light Streaks in Water -->
  <g opacity="0.6">
    <ellipse cx="820" cy="800" rx="60" ry="8" fill="#00f0ff" filter="url(#glowCyan)" />
    <ellipse cx="820" cy="880" rx="90" ry="10" fill="#00f0ff" opacity="0.4" filter="url(#glowCyan)" />
    <ellipse cx="1150" cy="790" rx="80" ry="12" fill="#ff2e97" filter="url(#glowPink)" />
    <ellipse cx="1150" cy="870" rx="110" ry="14" fill="#ff2e97" opacity="0.5" filter="url(#glowPink)" />
    <ellipse cx="965" cy="820" rx="50" ry="6" fill="#00f0ff" filter="url(#glowCyan)" />
    <ellipse cx="635" cy="840" rx="40" ry="5" fill="#ff2e97" filter="url(#glowPink)" />
    <!-- Cyber ripples -->
    <line x1="200" y1="780" x2="400" y2="780" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2" />
    <line x1="500" y1="830" x2="750" y2="830" stroke="rgba(255, 46, 151, 0.3)" stroke-width="2" />
    <line x1="1250" y1="810" x2="1500" y2="810" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2" />
    <line x1="1000" y1="920" x2="1350" y2="920" stroke="rgba(255, 46, 151, 0.25)" stroke-width="3" />
    <line x1="700" y1="960" x2="1100" y2="960" stroke="rgba(0, 240, 255, 0.2)" stroke-width="3" />
  </g>

  <!-- Foreground Cyber Rain & Mist Gradient -->
  <rect x="0" y="0" width="1920" height="1080" fill="url(#cyberGradOverlay)" opacity="0.25" />
</svg>`;

// 2. Bund Night SVG
const bundNightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="bundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020308" />
      <stop offset="60%" stop-color="#070c1a" />
      <stop offset="100%" stop-color="#010204" />
    </linearGradient>
    <filter id="bundGlowPink">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
  <rect width="1920" height="1080" fill="url(#bundGrad)" />
  <!-- Distant Bund European colonial facades with amber illumination -->
  <g fill="#0e172a">
    <rect x="100" y="480" width="220" height="240" />
    <polygon points="100,480 210,410 320,480" fill="#14213d" stroke="#ffb703" stroke-width="1.5" />
    <rect x="360" y="510" width="180" height="210" fill="#111c33" stroke="#ffb703" stroke-width="1" />
    <rect x="580" y="460" width="260" height="260" fill="#0d182e" stroke="#00f0ff" stroke-width="1.5" />
    <!-- Clock tower / Custom House -->
    <rect x="900" y="380" width="90" height="340" fill="#131e38" stroke="#ffb703" stroke-width="2" />
    <polygon points="900,380 945,300 990,380" fill="#19284d" stroke="#ffb703" stroke-width="2" />
    <circle cx="945" cy="420" r="18" fill="#ffb703" opacity="0.9" />
  </g>
  <!-- Across River Pudong Skyline Glow -->
  <rect x="1200" y="200" width="180" height="520" fill="#080e1c" stroke="#ff2e97" stroke-width="2" filter="url(#bundGlowPink)" opacity="0.8" />
  <line x1="0" y1="720" x2="1920" y2="720" stroke="#ff2e97" stroke-width="3" />
  <rect x="0" y="723" width="1920" height="357" fill="#050814" />
</svg>`;

// 3. Neon Street SVG
const neonStreetSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <rect width="1920" height="1080" fill="#05070f" />
  <path d="M 0 1080 L 800 500 L 1120 500 L 1920 1080 Z" fill="#080e1e" stroke="#00f0ff" stroke-width="1" />
  <!-- Neon Hanging Signs -->
  <rect x="300" y="100" width="120" height="260" rx="8" fill="#03050a" stroke="#ff2e97" stroke-width="3" />
  <text x="360" y="170" fill="#ff2e97" font-size="36" text-anchor="middle" font-family="'Orbitron', sans-serif">赛</text>
  <text x="360" y="230" fill="#ff2e97" font-size="36" text-anchor="middle" font-family="'Orbitron', sans-serif">博</text>
  <text x="360" y="290" fill="#00f0ff" font-size="36" text-anchor="middle" font-family="'Orbitron', sans-serif">朋</text>
  <text x="360" y="340" fill="#00f0ff" font-size="28" text-anchor="middle">CYBER</text>
</svg>`;

// 4. Cyberpunk Agent Avatar / Profile SVG
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1226" />
      <stop offset="50%" stop-color="#120e28" />
      <stop offset="100%" stop-color="#050711" />
    </linearGradient>
    <filter id="avatarCyan">
      <feGaussianBlur stdDeviation="8" result="b" />
      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <filter id="avatarPink">
      <feGaussianBlur stdDeviation="10" result="b" />
      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>

  <rect width="600" height="600" rx="24" fill="url(#avatarGrad)" />
  <!-- Hexagon Pattern -->
  <polygon points="300,40 520,167 520,433 300,560 80,433 80,167" fill="none" stroke="#00f0ff" stroke-width="3" filter="url(#avatarCyan)" />
  <polygon points="300,60 500,178 500,422 300,540 100,422 100,178" fill="none" stroke="#ff2e97" stroke-width="2" opacity="0.6" filter="url(#avatarPink)" />

  <!-- Cybernetic Silhouette / Stylized Portrait -->
  <g transform="translate(150, 110)">
    <!-- Cyber Headset & Visor -->
    <ellipse cx="150" cy="160" rx="95" ry="120" fill="#131c33" stroke="#00f0ff" stroke-width="2" />
    <!-- Visor -->
    <path d="M 75 140 Q 150 170 225 140 L 220 185 Q 150 215 80 185 Z" fill="#ff2e97" filter="url(#avatarPink)" opacity="0.9" />
    <!-- Visor Glitch Lines -->
    <line x1="85" y1="162" x2="215" y2="162" stroke="#ffffff" stroke-width="2" />
    <!-- Tactical Collar / Shoulders -->
    <path d="M 40 320 L 80 250 L 220 250 L 260 320 Z" fill="#0d1528" stroke="#00f0ff" stroke-width="2" />
    <!-- Audio Comm Piece -->
    <circle cx="58" cy="165" r="16" fill="#ff2e97" filter="url(#avatarPink)" />
    <circle cx="242" cy="165" r="16" fill="#00f0ff" filter="url(#avatarCyan)" />
    <line x1="58" y1="165" x2="110" y2="200" stroke="#00f0ff" stroke-width="3" />
  </g>

  <!-- Shanghai Glyph Overlay -->
  <text x="300" y="500" fill="#00f0ff" font-family="'Orbitron', monospace" font-size="20" font-weight="bold" text-anchor="middle" letter-spacing="4">SHARANYA HP</text>
  <text x="300" y="525" fill="#ff2e97" font-family="monospace" font-size="12" text-anchor="middle" letter-spacing="2">RED TEAM // BLACK TEAM // BIT B.TECH</text>
</svg>`;

// Write primary images
fs.writeFileSync(path.join(publicImages, 'shanghai-skyline-hero.svg'), shanghaiSkylineSvg);
fs.writeFileSync(path.join(publicImages, 'bund-night.svg'), bundNightSvg);
fs.writeFileSync(path.join(publicImages, 'neon-street.svg'), neonStreetSvg);
fs.writeFileSync(path.join(publicImages, 'profile.svg'), profileSvg);

// Also copy or generate .jpg placeholders so direct <Image src="/images/shanghai-skyline-hero.jpg" /> or user supplied jpgs work out of the box!
// In SVG-supporting environments or fallbacks:
fs.copyFileSync(path.join(publicImages, 'shanghai-skyline-hero.svg'), path.join(publicImages, 'shanghai-skyline-hero.jpg'));
fs.copyFileSync(path.join(publicImages, 'bund-night.svg'), path.join(publicImages, 'bund-night.jpg'));
fs.copyFileSync(path.join(publicImages, 'neon-street.svg'), path.join(publicImages, 'neon-street.jpg'));
fs.copyFileSync(path.join(publicImages, 'profile.svg'), path.join(publicImages, 'profile.jpg'));

// Project Icons / Cards
const makeProjectSvg = (title, iconText, color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1020" />
      <stop offset="100%" stop-color="#04060e" />
    </linearGradient>
    <filter id="pGlow">
      <feGaussianBlur stdDeviation="6" result="b" />
      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
  <rect width="600" height="400" fill="url(#pGrad)" rx="16" stroke="${color}" stroke-width="2" />
  <circle cx="300" cy="180" r="70" fill="rgba(0,0,0,0.4)" stroke="${color}" stroke-width="3" filter="url(#pGlow)" />
  <text x="300" y="195" fill="${color}" font-family="monospace" font-size="44" text-anchor="middle" font-weight="bold">${iconText}</text>
  <text x="300" y="320" fill="#ffffff" font-family="'Orbitron', sans-serif" font-size="22" text-anchor="middle" font-weight="bold">${title}</text>
  <line x1="150" y1="345" x2="450" y2="345" stroke="${color}" stroke-width="2" stroke-dasharray="6,4" />
</svg>`;

fs.writeFileSync(path.join(projectImages, 'scanner.svg'), makeProjectSvg('PORT AUDITOR & RECON', '⚡ NMAP', '#ff2e97'));
fs.writeFileSync(path.join(projectImages, 'vault.svg'), makeProjectSvg('SHADOWKEY VAULT', '🔒 AES', '#00f0ff'));
fs.writeFileSync(path.join(projectImages, 'portfolio.svg'), makeProjectSvg('SHANGHAI PORTFOLIO', '🗼 PUDONG', '#00f0ff'));
fs.writeFileSync(path.join(projectImages, 'ctf.svg'), makeProjectSvg('PAYLOAD FORGE CTF', '🚩 PWN', '#ff2e97'));
fs.writeFileSync(path.join(projectImages, 'cloud.svg'), makeProjectSvg('CLOUDFENCE AUDITOR', '☁️ AWS', '#ffb703'));
fs.writeFileSync(path.join(projectImages, 'chat.svg'), makeProjectSvg('GHOSTWIRE P2P', '💬 P2P', '#8a2be2'));

console.log('Successfully generated all cyberpunk Shanghai visual assets!');
