export default function RelaxMePage() {
  return (
    <div className="grid grid-flow-row">

      {/* Header */}
      <div className="w-full lg:w-4/5 mx-auto">
        <div className="p-8 text-center md:text-left">
          <h1 className="my-1 text-5xl font-bold leading-tight">Relax Me!</h1>
          <p className="text-2xl">Self-Massage MiniApp on TON Blockchain</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-6 px-6 max-w-6xl mx-auto text-gray-600">
          <p className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-300 dark:from-blue-400 dark:to-pink-400">
            Ongoing Personal Side Project - Making Wellness Accessible Through Technology & Gamification
            <br/><span className="text-lg">In my spare time, I have been passionately developing a personal project that brings 
              together my interests in user-centered design, gamification, and emerging platforms like Telegram Mini Apps on 
              blockchain technology. What started as a basic idea to guide users through self-massage routines has evolved into a 
              thoughtful, inclusive, and engaging digital wellness assistant.</span>
            <br /> you can find it here: <a href="https://t.me/RelaxMeBot" target="_blank" > @RelaxMeBot </a>
          </p>
      </div>

      {/* Content Cards */}
      <div className="px-6 py-10 max-w-8xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-gradient-to-tl from-purple-200 via-slate-100 to-rose-200">
        
        {/* ux prototype */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Prototype for UX</h2>
          <iframe className="rounded-lg mb-4 w-full min-h-[400] max-h-full" src="https://embed.figma.com/design/r20LvFlK7LX8JJ46hgUVNb/Self-Massage?node-id=0-1&embed-host=share" allowFullScreen />
        </div>

        {/* descriptions */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">App Features Summary</h2>
          <p className="text-sm mb-4">
            This project stands out because of its attention to detail, accessibility, and simplicity:
            <br/><span className="font-semibold">Each massage exercise is structured individually per body part,</span> ensuring that even users with limb disabilities can participate and benefit from the app in a personalized way.
            <br/><span className="font-semibold">Clear step-by-step instructions make each session easy to follow</span>—even for users with no prior knowledge—helping the app reach a broader, more general audience.
            <br/><span className="font-semibold">All tools used are intentionally simple, affordable, and medically recommended,</span> ensuring that users don’t need expensive equipment to improve their self-care routines.
            <br/><span className="font-semibold">A built-in history tracking system</span> lets users see exactly which steps have been completed for each session and body part, reducing confusion and making it easier to stay on track.
            <br/><span className="font-semibold">Multilingual support is baked into the app from the start,</span> with the ability to expand into more languages over time to better serve a global audience.
            <br/><span className="font-semibold">Daily rewards based on streaks motivate consistent use,</span> while maintaining user interest over the long term.
            <br/><span className="font-semibold">A “Wheel of Fortune” mechanic</span> adds fun by allowing users to earn random score rewards using points earned from daily use and additional tasks.
            <br/><span className="font-semibold">Massage cooldowns and usage limits per part, per mode,</span> simulate realistic physical rest needs and encourage healthy pacing.
          </p>
        </div>

        {/* ui prototype */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Prototype for UI</h2>
          <video src="/portfoimages/relax/ui.mp4" className="rounded-lg mb-4 w-full" loop muted autoPlay controls/>
        </div>

        {/* Tech Stack */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Tech Stack & Architecture</h2>
          <p className="text-sm mb-4">
            This project is built on a modern and scalable foundation:
            <br/><span className="font-semibold">Next.js</span> powers the frontend, enabling server-side rendering and modular routing.
            <br/><span className="font-semibold">MongoDB and Prisma</span> handle robust data storage for user profiles, massage logs, history, cooldowns, rewards, and more.
            <br/><span className="font-semibold">RadixUI + Tailwind CSS</span> support a fully responsive and visually clean interface.
            <br/><span className="font-semibold">telegram-apps/analytics</span>  is integrated for tracking in-app behavior and refining user experience based on real insights.
            <br/><span className="font-semibold">Telegram Mini App integration</span> provides seamless login and user session management inside the Telegram ecosystem.
          </p>
        </div>

        {/* Planned & Future Updates */}
        <div className="rounded-xl p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Planned & Future Updates</h2>
          <p className="text-sm mb-4">
            redesign the UI for current and future updates.
            <br/>Tokenomics and Game Mechanics redesigning.
            <br/>AI-powered Consultation Assistant.
            <br/>Contextual Voice Guidance.
            <br/>Advanced Recovery & Exercise Section.
            <br/>Personal Progress Insights Dashboard.
            <br/>Reminders & Smart Notifications.
            <br/>Offline Mode.
            <br/>Health Logbook Integration.
            <br/>Tool Finder Wizard.
            <br/>Community Tips & Sharing.
            <br/>Professional Mode for Therapists.
            <br/>...
          </p>
        </div>


      </div>

    </div>
  );
}
