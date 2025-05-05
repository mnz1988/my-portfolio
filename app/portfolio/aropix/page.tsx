import LoadingOverlay from "@/app/components/LoadingOverlay";

export default function AropixPage() {
  return (
    <main>
      <LoadingOverlay />
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5">
        <div className="flex w-full flex-col items-start justify-center p-8 text-center md:w-2/5 md:text-left">
          <h1 className="my-1 text-5xl font-bold leading-tight">Aropix Studio</h1>
          <p className="text-2xl">Producer / Core Team</p>
        </div>
      </div>

      <div className="py-0">
        <div className="px-3 max-w-8xl text-gray-500">
          <div className="relative">
            <section className="relative isolate overflow-hidden  px-6 py-8 sm:py-12 lg:px-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <video
                  src="/portfoimages/aropix/Wooden Soul by Aropix Studio.mp4"
                  className="rounded-lg w-full max-w-5xl mx-auto"
                  controls poster="/portfoimages/aropix-cover.webp"
                ></video>

                <figure className="mt-10">
                  <blockquote className="text-left text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                      Aropix Studio is a dynamic collective of young talented artists, writers, and animators. Our mission is to create captivating short animations
                      that illuminate the most poignant aspects of the human experience. By leveraging blockchain technology, NFTs, and web3 communities, we strive to
                      not only share our work with the world but also discover emerging talent and nurture their creative voices. Ultimately, our goal is to create
                      compelling stories that inspire, educate, and entertain audiences everywhere.
                    </p>
                    <p className="mt-4">
                      Our work draws inspiration from the complexities of the world around us, both the triumphs and the challenges. From global conflicts and
                      humanitarian crises to environmental issues that shape the future for generations to come, we believe that art has the power to engage people
                      in meaningful conversations about the issues that matter most. By creating animations that address these pressing topics, we hope to encourage
                      viewers to think deeply, feel compassionately, and act responsibly in the face of an ever-changing world.
                    </p>
                  </blockquote>
                </figure>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            <video src="/portfoimages/aropix/torkish.webm" controls className="rounded-lg w-full" />
            <video src="/portfoimages/aropix/wind.webm" controls className="rounded-lg w-full" />
            <video src="/portfoimages/aropix/souratiha.webm" controls className="rounded-lg w-full"/>
            <video src="/portfoimages/aropix/arabic.webm" controls className="rounded-lg w-full" />
          </div>

          <div className="text-center">
            <img
              src="/portfoimages/aropix/rope.jpg"
              className="m-auto pb-5 rounded-lg"
              width="90%"
              alt="rope storyboards"
            />
            <img
              src="/portfoimages/aropix/storyboard.jpg"
              className="m-auto pb-5 rounded-lg"
              width="90%"
              alt="some storyboards"
            />
            <p className="mt-4 text-lg">...and much more</p>
          </div>
        </div>
      </div>
    </main>
  );
}
