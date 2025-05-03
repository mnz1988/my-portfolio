export default function LottyDottyPage() {
  return (
    <div className="grid grid-flow-row">

      {/* Header */}
      <div className="w-full">
        <div className="p-8">
          <h1 className="my-1 text-5xl font-semibold leading-tight">Lotty Dotty</h1>
          <p className="text-2xl font-light">Product Design - FRANCE, USA</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-6 px-6">
        <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-300 dark:from-blue-400 dark:to-pink-400">
          Label Design, Sticker Design, Website Retouching, Packaging Design...
        </p>
      </div>

      {/* Content Cards */}
      <div className="px-6 pt-10 mx-auto bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 text-gray-600">
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/LDTShirts.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Tom.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Angela.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Ginger.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Ben.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Gina.mp4" />
          <video className="rounded-xl mx-auto" controls autoPlay loop src="/../portfoimages/freelance/LottyDotty/Pierre.mp4" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/freelance/LottyDotty/LottyDottyAD-Copy.jpg" alt="LottyDotty Ad" />
        </div>
      </div>

    </div>
  );
}
