"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

// Shared class for tech icon cards
const techCardClass =
  "border flex relative size-14 p-2 rounded-xl bg-gray-650 border-white/15 before:rounded-[10px] before:absolute before:inset-0 before:border-t before:border-white before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-650";

const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className={techCardClass}>
    <Image src={src} alt={alt} width={58} height={58} loading="lazy" />
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold mt-6 mb-2 tracking-wide">{children}</h2>
);

export default function AboutPage() {
  const contactLinks = [
    { href: "https://twitter.com/MNZ_Co", src: "/contactme icons/twitterx.svg", alt: "Twitter" },
    { href: "https://t.me/Idea_developer", src: "/contactme icons/telegram.svg", alt: "Telegram" },
    { href: "mailto:moji.norouzi@gmail.com", src: "/contactme icons/gmail.svg", alt: "Email" },
    { href: "https://github.com/mnz1988", src: "/contactme icons/github.svg", alt: "GitHub" },
    { href: "https://wa.me/989195914200", src: "/contactme icons/whatsapp.svg", alt: "WhatsApp" },
  ];

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <div className="py-5">
        <p className="uppercase text-sm text-gray-500">i wear multiple caps</p>
        <h1 className="my-1 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">About Me</h1>
        <p className="text-gray-400">my friend call me Moji (just like E-Moji)</p>
      </div>

      <div className="lg:flex items-start gap-8">
        <div className="flex-shrink-0 mx-auto">
          <Image
            src="/moji-as-monster.webp"
            alt="Moji as monster"
            width={530}
            height={500}
            className="rounded-xl max-w-full h-auto"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>

        <div className="flex-1">
          <p className="pt-4">
            Hi there! I&apos;m Mojtaba Norouzi Zadeh (MNZ)<br />
            <b><em>as a Creative Artist, I&apos;m the problem spotter and the problem solver</em></b>
          </p>
          <p className="my-4">
            If I try to describe myself with words, I can say: <em>lifelong learner</em>, thinker,
            <em> reading</em>, designing, <em>editing</em>, creating, <em>imagining</em>, and playing around.
            <br></br>I like to teach, invent, bike, climb, listen to music, and get caught in the rain.
          </p>
          <p className="mb-4">
            Most people know me as the go-to person when they need ideas or are stuck.
            I value <b>team collaboration</b>, high performance design, and <b>business growth</b> — I believe in
            <em> &quot;share to get.&quot;</em>
          </p>

          <Image
            src="/moji-desk.jpg"
            alt="Moji at desk"
            width={760}
            height={437}
            className="rounded-lg w-full max-w-3xl mx-auto"
            sizes="(max-width: 768px) 100vw, 760px"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <div className="max-w-xl">
          <p>
            <em>
              I unpack complicated problems by approaching each with a flexible process and attention it
              deserves.
            </em>{" "}
            This means collaborating to ask questions, define approaches, and execute solutions through:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-sm">
            <li>Strategy Designing</li>
            <li>Information Architecture</li>
            <li>User Experience and Interface Design (UX/UI)</li>
            <li>Visual Design</li>
            <li>Product Management</li>
          </ul>
          <p className="mt-3 text-sm">
            I&apos;m a self-learner designer with academic degrees in Electronics and IT Engineering too.
          </p>

          <p className="mt-4">
            <Link
              href="/moji_resume_design.pdf"
              target="_blank"
              className="flex items-center gap-2 text-violet-500 font-bold"
            >
              Download my resume, here <ExternalLinkIcon width={18} height={18} />
            </Link>
          </p>
        </div>

        <SectionTitle ><span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">Some of Tools & Technologies I Use/Teach:</span></SectionTitle>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3">
          <TechIcon src="/brands/3d/blender-2.svg" alt="Blender 3D" />
          <TechIcon src="/brands/3d/rhino-logo.webp" alt="Rhino 3D" />
          <TechIcon src="/brands/3d/KeyShot-RGB.webp" alt="KeyShot Renderer" />
          <TechIcon src="/brands/3d/v-ray.svg" alt="V-Ray" />
          <TechIcon src="/brands/adobe/after-effects-1.svg" alt="After Effects" />
          <TechIcon src="/brands/adobe/adobe-photoshop-2.svg" alt="Photoshop" />
          <TechIcon src="/brands/adobe/adobe-indesign-cc-icon.svg" alt="InDesign" />
          <TechIcon src="/brands/web/react-2.svg" alt="React JS" />
          <TechIcon src="/brands/web/threejs-1.svg" alt="Three.js" />
          <TechIcon src="/brands/web/nodejs-icon.svg" alt="Node.js" />
          <TechIcon src="/brands/uiux/figma-5.svg" alt="Figma" />
          <TechIcon src="/brands/uiux/adobe-xd-2.svg" alt="Adobe XD" />
          <TechIcon src="/brands/vector/adobe-illustrator-cc-icon.svg" alt="Illustrator" />
          {/* <TechIcon src="/brands/vector/inkscape-logo.svg" alt="Inkscape" /> */}
          <TechIcon src="/brands/general/github-seeklogo.svg" alt="GitHub" />
          <TechIcon src="/brands/general/office-2.svg" alt="Microsoft Office" />
          <TechIcon src="/brands/general/trello_icon.svg" alt="Trello" />
          <TechIcon src="/brands/ai/ComfyUI.png" alt="ComfyUI" />
          <TechIcon src="/brands/ai/bing-2.svg" alt="Bing AI" />
          <TechIcon src="/brands/ai/openai-wordmark.svg" alt="OpenAI" />
          <TechIcon src="/brands/ai/A111.webp" alt="A1111" />
          <TechIcon src="/brands/crypto/bitcoin.svg" alt="Bitcoin" />
          <TechIcon src="/brands/crypto/ethereum-1.svg" alt="Ethereum" />
          <TechIcon src="/brands/crypto/solana.svg" alt="Solana" />
          <TechIcon src="/brands/crypto/difi.svg" alt="DeFi" />
        </div>
      </div>
      {/* Contact Section */}
      <section className="mt-3 sm:col-span-3 p-6 rounded-xl bg-white border border-gray-200">
          <h2 className="text-center text-2xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Reach Out:
          </h2>
          <div className="mt-4 mx-15 grid grid-cols-5 gap-4 justify-center">
            {contactLinks.map(({ href, src, alt }) => (
              <Link key={href} href={href} aria-label={alt} target="_blank">
                <Image src={src} alt={alt} width={36} height={36}
                  className={`transition-transform hover:-translate-y-2 ${alt === "Telegram" ? "animate-bounce" : ""}`}
                />
              </Link>
            ))}
          </div>
          <div className="text-center text-xs pt-5">MNZ.COOL - 2025</div>
        </section>
    </div>
  );
}
