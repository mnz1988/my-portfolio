export default function FFPage() {
  return (
    <div className="grid grid-flow-row">

      {/* Header */}
      <div className="w-full lg:w-4/5 mx-auto">
        <div className="p-8 text-center md:text-left">
          <h1 className="my-1 text-5xl font-bold leading-tight">Final Frontier</h1>
          <p className="text-2xl">Metaverse Gaming Guild & DAO</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-6 px-6 max-w-6xl mx-auto text-gray-600">
          <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-300 dark:from-blue-400 dark:to-pink-400">
            Metaverse and blockchain gaming affords Final Frontier with opportunities to earn while playing games and generate methods to earn
            rewards from contributions by employing teamwork, strategy, and ethos.
          </p>
      </div>

      {/* Content Cards */}
      <div className="px-6 pt-10 max-w-8xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-gradient-to-tl from-purple-200 via-slate-100 to-rose-200">
        
        {/* Branding Card */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Branding & Identity</h2>
          <p className="text-sm mb-4">
            Redesigning the branding and visual identity to adapt to different platforms and creating a Visual Identity Journal for different applications.
          </p>
          <img src="/portfoimages/ff/FFLogo_Color_SIngle-Stack.png" className="rounded-lg mb-4" alt="branding" />
          <video src="/portfoimages/ff/ff-logo.mp4" controls className="rounded-lg mb-4 w-full"/>
          <a href="https://finalfrontiersa.com/" target="_blank" className="block ring-1 rounded py-2 px-3 text-center text-sm font-semibold">
            FinalFrontier Website ⤤
          </a>
        </div>

        {/* Gear Shop */}
        <div className="rounded-xl p-4 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">GEAR SHOP</h2>
          <p className="text-sm mb-4">
            Men's and Women's Accessories, Mouse Pads, Drinkware, Sportswear, PPE Hoodies, Jerseys, Pants, Collared, Pullovers, Leggings...
          </p>
          <video src="/portfoimages/ff/merchand.mp4" controls className="rounded-lg mb-4 w-full"  />
          <a href="https://gamer.playmakerswanted.com/store/finalfrontier" target="_blank" className="block ring-1 rounded py-2 px-3 text-sm font-semibold mb-4">
            Shopping ⤤
          </a>
          <div className="mt-6 p-4">
            <p className="text-sm font-semibold text-purple-600 mb-2">Social Links:</p>
            <a href="https://twitter.com/FinalFrontierSA" target="_blank" className="block ring-1 rounded py-2 px-3 text-sm font-semibold mb-2">
              X (Twitter) ⤤
            </a>
            <a href="https://discord.gg/yW5k89Kyfj" target="_blank" className="block ring-1 rounded py-2 px-3 text-sm font-semibold">
              Discord ⤤
            </a>
          </div>
        </div>

        {/* Ads Section */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">ADS</h2>
          <p className="text-sm mb-4 text-center">
            Including advertising for crypto projects inside our magazines and recruiting game players.
          </p>
          <video src="/portfoimages/ff/ads.mp4" controls className="rounded-lg w-full"  />
        </div>

        {/* Magazines */}
        <div className="rounded-xl p-4 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">Magazines</h2>
          <p className="text-sm mb-4">
            FRONT (Main Magazine) & METAPOWER (Official Women"s Empowerment Magazine of the Metaverse)
          </p>
          <video src="/portfoimages/ff/mag.mp4" controls className="rounded-lg mb-4 w-full"  />
          <div className="flex justify-center gap-2">
            <a href="https://finalfrontiersa.com/front-magazine.html" target="_blank" className="ring-1 rounded py-2 px-3 text-sm font-semibold">
              FRONT ⤤
            </a>
            <a href="https://finalfrontiersa.com/front-magazine.html" target="_blank" className="ring-1 rounded py-2 px-3 text-sm font-semibold">
              METAPOWER ⤤
            </a>
          </div>
        </div>

        {/* Events */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Events</h2>
          <video src="/portfoimages/ff/event3.mp4" controls className="rounded-lg mb-3 w-full"  />
          <video src="/portfoimages/ff/event1.mp4" controls className="rounded-lg mb-3 w-full"  />
          <img src="/portfoimages/ff/req 8 - giveaway.jpg" className="rounded-lg w-full" alt="Giveaway Event" />
        </div>

      </div>

    </div>
  );
}
