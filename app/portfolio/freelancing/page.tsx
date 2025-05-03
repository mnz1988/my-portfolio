const ProjectCard: React.FC<ProjectCardProps> = ({ projectTitle, projectCountry, projectDescription, projectTags, images }) => (
  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-lg">{projectTitle}</h2>
        <p className="mt-2">
          {projectTags.map((tag, index) => (
            <span key={index} className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">
              {tag}
            </span>
          ))}
        </p>
      </div>
      <span className="italic font-normal">{projectCountry}</span>
    </div>
    <p>{projectDescription}</p>
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600">
      {images.map((imgSrc, index) => (
        <img key={index} className="rounded-xl mx-auto" loading="lazy" src={imgSrc} alt={`${projectTitle} ${index + 1}`} />
      ))}
    </div>
  </div>
)

const projects = [
  {
    projectTitle: 'Rain in All Languages',
    projectCountry: 'JAPAN',
    projectDescription: 'Design On Blunt xs Metro / Weather application',
    projectTags: ['Gift Design', 'Texture Design'],
    images: [
      '/portfoimages/freelance/Rain in All Languages 1.jpg',
      '/portfoimages/freelance/Rain in All Languages 2.jpg',
    ],
  },
  {
    projectTitle: 'NonStop Web and Calculator',
    projectCountry: 'USA',
    projectDescription: 'NonStop Signs Graphics Company Website Design',
    projectTags: ['UI/UX Design', ],
    images: [
      '/portfoimages/freelance/NonStop.jpg',
    ],
  },
];

export default function FreelancePage() {
  

  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-semibold bg-gradient-to-l from-blue-200 via-violet-600 to-cyan-200 bg-clip-text text-transparent">
          Freelancing Design
        </h1>
        <p className="text-2xl font-light">2D/3D Graphic Design, UI/UX Design</p>
      </div>
      {/* Subtitle */}
      <div className="text-center text-xl font-medium mb-8">
        Some of my designs for different clients around the world
      </div>
      {/* Content Grid */}
      <div className="grid gap-6 text-gray-800 md:grid-cols-2">

      {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        {/* Kids Room Design */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg">Kids Room Design</h2>
                  <p className="mt-2">
                    <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D design</span>
                  </p>
                </div>
                <span className="italic font-normal">USA</span>
              </div>
              <p>Kids Room Design in a Box for Two / Play, Study, Sleep</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/KidsRoom1.jpg" alt="" />
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/KidsRoom2.jpg" alt="" />
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/KidsRoom3.jpg" alt="" />
            </div>
        </div>
        {/* Robbies Automotive */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg">We Remove Doubts</h2>
                  <p className="mt-2">
                    <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Car Wrap Design</span>
                  </p>
                </div>
                <span className="italic font-normal">USA</span>
              </div>
              <p>Robbie's Automotive and Collision Specialists</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Robbies-Automotive-base-Copy-2.jpg" alt="Robbies Automotive" />
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Robbies-Automotive-bus-4-Copy.jpg" alt="Robbies Automotive" />
                <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Robbies-Automotive-base-Copy.jpg" alt="Robbies Automotive" />
            </div>
        </div>
        {/* Convey Brewing On-The-Go */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Convey Brewing On-The-Go</h2>
                <p className="mt-2"><span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Packaging Design</span></p>
              </div><span className="italic font-normal">USA</span></div>
            <p>MoJoe Brewing</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/MoJoe Brewing.jpg" alt="Convey Brewing On-The-Go" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/MoJoe Brewing.png" alt="Convey Brewing On-The-Go" />
          </div>
        </div>
        {/* Automatic Seller */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Automatic Seller</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Wrap Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Sock Fancy Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Sock-Fancy-1.jpg" alt="Automatic Seller" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Sock-Fancy.jpg" alt="Automatic Seller" />
          </div>
        </div>
        {/* Kids Ears band */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Kids Ears band</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Modeling</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm">Label Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Children's Ears Band</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/EarsBand-present2.jpg" alt="Kids Ears band" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/EarsBand-present.jpg" alt="Kids Ears band" />
          </div>
        </div>
        {/* Hair & Body & Me */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Hair &amp; Body &amp; Me</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Packaging Design</span>
                </p>
              </div>
              <span className="italic font-normal">AUSTRALIA</span>
            </div>
            <p>Hair&amp;Me | Body&amp;Me</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Hair-Body-Me3.jpg" alt="Hair &amp; Body &amp; Me" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Hair-Body-Me1.jpg" alt="Hair &amp; Body &amp; Me" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Hair-Body-Me2.jpg" alt="Hair &amp; Body &amp; Me" />
          </div>
        </div>
        {/* Dental Clinic */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Dental Clinic</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Poster Design</span>
                </p>
              </div>
              <span className="italic font-normal">NORWAY</span>
            </div>
            <p>Mjosa Tannklinikk</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Mjosa Tannklinikk 1.png" alt="Dental Clinic" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Mjosa Tannklinikk 2.jpg" alt="Dental Clinic" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Mjosa Tannklinikk 3.jpg" alt="Dental Clinic" />
          </div>
        </div>
        {/* Atomic Fireballs */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Atomic Fireballs</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Modeling</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Frame Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>not company order</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/ATOMIC-FIRE-BALLS-2.jpg" alt="Atomic Fireballs" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/ATOMIC-FIRE-BALLS-1.jpg" alt="Atomic Fireballs" />
          </div>
        </div>
        {/* Fashion Scarfing */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Fashion Scarfing</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Scarf Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Pattern Design</span>
                </p>
              </div>
              <span className="italic font-normal">IRAN, TURKEY, UAE</span>
            </div>
            <p>HijabMe Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/HijabMe1.gif" alt="Fashion Scarfing" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/HijabMe2.gif" alt="Fashion Scarfing" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/HijabMe3.gif" alt="Fashion Scarfing" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/HijabMe4.gif" alt="Fashion Scarfing" />
          </div>
        </div>
        {/* Hacking The Curiosity */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Hacking The Curiosity</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Logo Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Blog Redesign</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Curiosity Hack Blogging</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/curiosity-hack-logo-2.png" alt="Hacking The Curiosity" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/curiosity-hack-logo-1.png" alt="Hacking The Curiosity" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/curiosity-hack-logo-3.png" alt="Hacking The Curiosity" />
          </div>
        </div>
        {/* Runners for Mercedes */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Runners for Mercedes</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Poster Design</span>
                </p>
              </div>
              <span className="italic font-normal">CANADA</span>
            </div>
            <p>Mercedes Benz Burlington</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Mercedes-Benz.jpg" alt="Runners for Mercedes - Mercedes Benz Burlington" />
          </div>
        </div>
        {/* Data Optimization */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Data Optimization</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Crosslake Tech Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Crosslake.jpg" alt="Data Optimization - Crosslake Tech Company" />
          </div>
        </div>
        {/* Fashion Network */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Fashion Network</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Magazine Design</span>
                </p>
              </div>
              <span className="italic font-normal">INTERNATONAL</span>
            </div>
            <p>FASHION NETWORK</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/FASHION NETWORK 1.jpg" alt="Fashion Network" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/FASHION NETWORK 2.jpg" alt="Fashion Network" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/FASHION NETWORK 3.jpg" alt="Fashion Network" />
          </div>
        </div>
        {/* Health Care N.G.O */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Health Care N.G.O</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Magazine Design</span>
                </p>
              </div>
              <span className="italic font-normal">NEW ZEALAND</span>
            </div>
            <p>National Hauora Coalition</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/NGO-Mag-1.jpg" alt="Health Care N.G.O - National Hauora Coalition" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/NGO-Mag-2.jpg" alt="Health Care N.G.O - National Hauora Coalition" />
          </div>
        </div>
        {/* Day and Night Jewel */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Day and Night Jewel</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Banner Design</span>
                </p>
              </div>
              <span className="italic font-normal">RUSSIA</span>
            </div>
            <p>Safiya Alexandrites Jewellery</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/safyia.jpg" alt="Day and Night Jewel - Safiya Alexandrites Jewellery" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/safyia-Small.jpg" alt="Day and Night Jewel - Safiya Alexandrites Jewellery" />
          </div>
        </div>
        {/* La Passion De Bien Nourrir */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">La Passion De Bien Nourrir</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Billboard Design</span>
                </p>
              </div>
              <span className="italic font-normal">CAMEROON</span>
            </div>
            <p>Broli Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Broli-bilbord-2.jpg" alt="La Passion De Bien Nourrir - Broli Company" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Broli-bilbord-1.jpg" alt="La Passion De Bien Nourrir - Broli Company" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Broli-bilbord-3.jpg" alt="La Passion De Bien Nourrir - Broli Company" />
          </div>
        </div>
        {/* Hook-N-Cook Off */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Hook-N-Cook Off</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Poster Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Vyve Broadband Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Hook-N-Cook-Off.jpg" alt="Hook-N-Cook Off - Vyve Broadband Company" />
          </div>
        </div>
        {/* Pets Toys */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Pets Toys</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Packaging Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Doggy Mailbox</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/DoggyMailbox-1.jpg" alt="Pets Toys - Doggy Mailbox" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/DoggyMailbox-2.jpg" alt="Pets Toys - Doggy Mailbox" />
          </div>
        </div>
        {/* Ultimate Heal */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Ultimate Heal</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Label Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Packaging Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            {/* <p>Doggy Mailbox</p> */}
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Bowel-Restore-LBL-2.jpg" alt="Ultimate Heal" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Bowel-Restore-LBL-3.jpg" alt="Ultimate Heal" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Bowel-Restore-LBL-4.jpg" alt="Ultimate Heal" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Bowel-Restore-LBL-1.jpg" alt="Ultimate Heal" />
          </div>
        </div>
        {/* Certificate and Diploma */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Certificate and Diploma</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Certificate Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA, SPAIN</span>
            </div>
            <p>Wise Athena Company</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/WISE-ATHENA-ALEN-CERTIFICATE.jpg" alt="Certificate and Diploma - Wise Athena Company" />
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/WISE-ATHENA-ALEN-CERTIFICATE2.jpg" alt="Certificate and Diploma - Wise Athena Company" />
          </div>
        </div>
        {/* Deck Patterns */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Deck Patterns</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">3D Modeling</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Texture Design</span>
                </p>
              </div>
              <span className="italic font-normal">USA</span>
            </div>
            <p>Deck Pattern for Kayak</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/deck-pattern-for-kayak.jpg" alt="Deck Patterns for Kayak" />
          </div>
        </div>
        {/* Gottes Weg */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Gottes Weg</h2>
                <p className="mt-2">
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Logo Design</span>
                  <span className="rounded-lg bg-zinc-50 px-2 py-1 text-sm mr-1">Business Card Design</span>
                </p>
              </div>
              <span className="italic font-normal">GERMANY</span>
            </div>
            <p>Gottes Weg Church</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 text-gray-600 space-y-4">
              <img className="rounded-xl mx-auto" src="/portfoimages/freelance/Business-Card-Gottes-Weg.jpg" alt="Gottes Weg - Gottes Weg Church" />
          </div>
        </div>
      
      
      </div>
    </main>
    );
  }
