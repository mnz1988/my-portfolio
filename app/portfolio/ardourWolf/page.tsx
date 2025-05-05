export default function ArdourWolfPage() {
  return (
    <div className="grid grid-flow-row">

      {/* Header */}
      <div className="w-full">
        <div className="p-8">
          <h1 className="my-1 text-5xl font-semibold leading-tight">Ardour Wolf</h1>
          <p className="text-2xl font-light">Product Line Design - AUSTRALIA</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-6 px-6">
        <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-300 dark:from-blue-400 dark:to-pink-400">
        <br/>
        <span className="font-semibold text-lg">LUXURY KNITTED THROWS</span>
        <br/>
        Blanked, Texture, Packaging, Social Banner, blog retouching ...
        <br/>
        <span className="font-light text-md">AVES of ARDOUR Collection</span>
        </p>
      </div>

      {/* Content Cards */}
      <div className="px-6 pt-10 mx-auto bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 text-gray-600">

          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/aves.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/sparrow_throw_ardour_wolf_design_aves_of_ardour_australia_lifestyle_copy_large.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/mamastylista_ardour_wolf_design_aves_of_ardour_whistler_cotton_throws_5_large.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/Raven_Monochrome_Cotton_Throw_Flatlay_Ardour_Wolf_Design_Aves_Of_Ardour_large.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/Robin_Aves_Of_Ardour_Ardour_Wolf_Design_large.png" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/change-render-.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/logo-triangle-W.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/3.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/5.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/1.jpg" alt="AVES Collection" />
          <img className="rounded-xl mx-auto" src="/../portfoimages/AVES/render-package.jpg" alt="AVES Collection" />
        
        </div>
      </div>

    </div>
  );
}
