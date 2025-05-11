export default function SanitizerPage() {
  return (
    <div className="grid grid-flow-row">

      {/* Header */}
      <div className="w-full lg:w-4/5 mx-auto">
        <div className="p-8 text-center md:text-left">
          <h1 className="my-1 text-5xl font-bold leading-tight">No-Contact Sanitizers</h1>
          <p className="text-2xl">Series of products for Covid-19</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-6 px-6 max-w-6xl mx-auto text-gray-600">
          <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-300 dark:from-blue-400 dark:to-pink-400">
            Like many others, when the COVID-19 pandemic emerged in 2019, I felt a strong sense of responsibility to contribute to public health. 
            Drawing on my skills in technical, industrial, and electronic design—and working with a colleague under significant constraints such as 
            limited production resources and low product availability—I designed, built, and deployed a series of innovative, touch-free sanitization 
            devices. These solutions prioritized automation and contactless interaction to help curb the spread of infection.    
          </p>
      </div>

      {/* Content Cards */}
      <div className="px-6 pt-10 max-w-8xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-gradient-to-tl from-purple-200 via-slate-100 to-rose-200">
        
        {/* Stands Prototypes */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Stands Prototypes</h2>
          <p className="text-sm mb-4">
            The first two versions of the stands were simple, contactless spray sanitizers. The sanitizer source was external and had to be placed 
            discreetly within a 10-meter range. However, the source container itself had no volume restrictions.
          </p>
          <img src="/portfoimages/sanitizers/1-leg.webp" className="rounded-lg mb-4" alt="1 Leg stand" />
          <img src="/portfoimages/sanitizers/3-leg.webp" className="rounded-lg mb-4" alt="3 Leg stand" />
        </div>

        {/* Dolphin */}
        <div className="rounded-xl p-4 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stand Dolphin</h2>
          <p className="text-sm mb-4">
            We named versions 3 & 4 the Dolphin Stands. V.3 was built using plexiglass sheets, while v.4 was constructed with stainless steel 
            and drywall panels &quot;knauf&quot; to withstand harsher environments. 
            Key features included: a concealed sanitizer source, an area to placing hands or items for disinfection, dual power options
            &quot;battery and electric&quot; for portability, Internal tank for collecting contaminated runoff, visual and textual indicators for 
            user guidance. Additionally, these versions offered enhanced visual aesthetics suitable for public or professional settings.
          </p>
          <a href="/portfoimages/sanitizers/catalog-enPage2.webp" target="_Blank" ><img src="/portfoimages/sanitizers/catalog-enPage2.webp" className="rounded-lg mb-4" alt="Stand Dolphin spec" /></a>
          <a href="/portfoimages/sanitizers/catalog-enPage1.webp" target="_Blank" ><img src="/portfoimages/sanitizers/catalog-enPage1.webp" className="rounded-lg mb-4" alt="Stand Dolphin spec" /></a>
          
        </div>

        {/* Gate & Box */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Gate & Box Sanitizers</h2>
          <p className="text-sm mb-4 text-center">
            Other products included an Entrance Gate Sanitizer, which featured air and hand sanitizing systems simultaneously, making it ideal for use in 
            public buildings. Another solution was the Sanitizing Box, specifically designed for disinfecting dry objects or packaged items within a short time.
          </p>
          <img src="/portfoimages/sanitizers/box.webp" className="rounded-lg mb-4" alt="sanitizer box" />
          <video src="/portfoimages/sanitizers/Gate-1.webm" className="rounded-lg mb-4" muted autoPlay loop/>
          <video src="/portfoimages/sanitizers/gates.mp4" className="rounded-lg mb-4" muted autoPlay loop/>
        </div>

      </div>

    </div>
  );
}
