"use client";
import LoadingOverlayLight from "../components/LoadingOverlayLight";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const contactLinks = [
    { href: "https://twitter.com/MNZ_Co", src: "/contactme icons/twitterx.svg", alt: "Twitter" },
    { href: "https://t.me/Idea_developer", src: "/contactme icons/telegram.svg", alt: "Telegram" },
    { href: "mailto:moji.norouzi@gmail.com", src: "/contactme icons/gmail.svg", alt: "Email" },
    { href: "https://github.com/mnz1988", src: "/contactme icons/github.svg", alt: "GitHub" },
    { href: "https://wa.me/989195914200", src: "/contactme icons/whatsapp.svg", alt: "WhatsApp" },
  ];

  return (
    <main className="m-0">
      <LoadingOverlayLight />
      
      {/* Video Hero */}
      <div className="relative h-[28vh] sm:h-[29vh] md:h-[40vh] lg:h-[48vh]">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted controls={false} playsInline>
          <source src="/portfoimages/idea-developer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header */}
      <div className="p-10">
        <h1 className="my-1 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
          Portfolio
        </h1>
        <p className="text-2xl font-light">A collection of my work across design, development, and product experiences.</p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 grid-rows-auto">

      {/* Relax Me! */}
      <div className="p-4 rounded-xl bg-white border border-gray-200">
        <Link href="/portfolio/relaxme">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Relax Me! <span className="text-sm ">on the Blockchain</span>
          </h2>
          <p className="text-center font-semibold text-gray-900">Designing / Programming</p>
          <p className="text-center text-gray-700">2025~<span className="text-xs">today</span> / International</p>
          <img className="rounded-lg w-full mt-2" src="/portfoimages/relaxme-cover.webp" />
        </Link>
      </div>

        {/* Aropix Studio */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/aropix">
            <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
              Aropix Studio 
            </h2>
            <p className="text-center font-semibold text-gray-900">Producer / Core Team</p>
            <p className="text-center text-gray-700">2023~<span className="text-xs">today</span> / International</p>
          </Link>
          <video className="rounded-lg w-full mt-2" controls preload="none" poster="/portfoimages/aropix-cover.webp">
            <source src="/portfoimages/aropix/Wooden Soul by Aropix Studio.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Final Frontier */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/ff">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Final Frontier 
          </h2>
          <p className="text-center font-semibold text-gray-900">Web3 Core Team + Designer</p>
          <p className="text-center text-gray-700">2021~<span className="text-xs">today</span> / USA</p>
          </Link>
          <video className="rounded-lg w-full mt-2" controls preload="none" poster="/portfoimages/ff-cover.webp">
            <source src="/portfoimages/ff/FinalFrontier.webm" type="video/webm" />
          </video>
        </div>

        {/* UX/UI */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/uxui">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
          UX/UI - Mobile & Web 
          </h2>
          <p className="text-center font-semibold text-gray-900">Analyzer and Designer</p>
          <p className="text-center text-gray-700">2014~<span className="text-xs">today</span> / International</p>
          </Link>
          <video className="rounded-lg w-full mt-2" controls loop poster="/portfoimages/uxui/gramista/Capture.webp">
            <source src="/portfoimages/uxui/member/membersgram.webm" type="video/mp4" />
          </video>
        </div>

        {/* Freelancing */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/freelancing">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Freelancing 
          </h2>
          <p className="text-center font-semibold text-gray-900">Creative Designer</p>
          <p className="text-center text-gray-700">2006~<span className="text-xs">today</span> / International</p>
          <img src="/portfoimages/freelance-cover.webp" className="rounded-lg w-full mt-2" alt="freelancing design" />
          </Link>
        </div>

        {/* Logo / branding */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/logo">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Logo & Branding
          </h2>
          <p className="text-center font-semibold text-gray-900">Graphic Design</p>
          <p className="text-center text-gray-700">2006~<span className="text-xs">today</span> / International</p>
          <video className="rounded-lg w-full mt-2" loop autoPlay controls={false}>
            <source src="/portfoimages/logo/Unstoppable Domains.mp4" type="video/mp4" />
          </video>
          </Link>
        </div>

        {/* No-Contact Sanitizer */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/sanitizer">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Contactless Sanitizers
          </h2>
          <p className="text-center font-semibold text-gray-900">Product Line Designer</p>
          <p className="text-center text-gray-700">2019~2020 / IRI</p>
          <img className="rounded-lg w-full mt-2" src="/portfoimages/sanitizer-cover.webp" />
          </Link>
        </div>


        {/* ardourWolf */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/ardourWolf">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Ardour Wolf 
          </h2>
          <p className="text-center font-semibold text-gray-900">Product Designer</p>
          <p className="text-center text-gray-700">2009~1010 / Australia</p>
          <img src="/portfoimages/avesCover.webp" className="w-full" />
          </Link>
        </div>

        {/* Lotty Dotty */}
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <Link href="/portfolio/lottyDotty">
          <h2 className="text-center font-light text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
            Lotty Dotty 
          </h2>
          <p className="text-center font-semibold text-gray-900">Product Designer</p>
          <p className="text-center text-gray-700">2008-2009 / FRANCE, USA</p>
          </Link>
          <video className="rounded-lg w-full mt-2" controls preload="none" poster="/portfoimages/LottyDottycover.webp" loop>
            <source src="/portfoimages/LottyDotty/LDTShirts.mp4" type="video/webm" />
          </video>
        </div>

        {/* Contact Section */}
        <section className="col-span-full p-6 rounded-xl bg-gradient-to-br from-purple-400 via-slate-300 to-rose-400">
          <h2 className="text-center font-light text-3xl">
            Reach Out:
          </h2>
          <div className="flex justify-center mt-6">
            <Image
              src="/logo.png"
              alt="profile picture"
              width={160}
              height={160}
              className="rounded-lg border"
              priority
            />
          </div>
          <div className="mt-2 mx-8 grid grid-cols-5 gap-4 justify-center">
            {contactLinks.map(({ href, src, alt }) => (
              <Link key={href} href={href} aria-label={alt} target="_blank">
                <Image src={src} alt={alt} width={36} height={36}
                  className={`opacity-70 transition-transform hover:-translate-y-2 ${alt === "Telegram" ? "animate-bounce" : ""}`}
                />
              </Link>
            ))}
          </div>
          <div className="text-center text-xs pt-5 text-white">MNZ.COOL - 2025</div>
        </section>
      </div>
    </main>
  );
}
