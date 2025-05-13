import ProjectCard from "@/app/components/projectCard";

const projects = [
  { projectTitle: 'MOONMAN SHOT',
    projectCountry: 'USA',
    projectDescription: 'Video Intro for Youtube and Twich Platforms',
    projectTags: ['Motion Design',],
    images: [],
    videos: [
      '/portfoimages/freelance/moonman-intro.webm',
    ]
  },
  { projectTitle: 'Rain in All Languages',
    projectCountry: 'JAPAN',
    projectDescription: 'Design On Blunt xs Metro / Weather application',
    projectTags: ['Gift Design', 'Texture Design'],
    images: [
      '/portfoimages/freelance/Rain in All Languages 1.jpg',
      '/portfoimages/freelance/Rain in All Languages 2.jpg',
    ],
    videos: []
  },
  { projectTitle: 'Convey Brewing On-The-Go',
    projectCountry: 'USA',
    projectDescription: 'MoJoe Brewing',
    projectTags: ['Packaging Design', ],
    images: [
      '/portfoimages/freelance/MoJoe Brewing.jpg',
      '/portfoimages/freelance/MoJoe Brewing.png',
    ],
    videos: []
  },
  { projectTitle: 'We Remove Doubts',
    projectCountry: 'USA',
    projectDescription: 'Robbie&apos;s Automotive and Collision Specialists',
    projectTags: ['Car Wrap Design', ],
    images: [
      '/portfoimages/freelance/Robbies-Automotive-base-Copy-2.jpg',
      '/portfoimages/freelance/Robbies-Automotive-bus-4-Copy.jpg',
      '/portfoimages/freelance/Robbies-Automotive-base-Copy.jpg',
    ],
    videos: []
  },
  { projectTitle: 'Kids Room Design',
    projectCountry: 'USA',
    projectDescription: 'Kids Room Design in a Box for Two / Play, Study, Sleep',
    projectTags: ['3D design', ],
    images: [
      '/portfoimages/freelance/KidsRoom1.jpg',
      '/portfoimages/freelance/KidsRoom2.jpg',
      '/portfoimages/freelance/KidsRoom3.jpg',
    ],
    videos: []
  },
  { projectTitle: 'Automatic Seller',
    projectCountry: 'USA',
    projectDescription: 'Sock Fancy Company',
    projectTags: ['Wrap Design', ],
    images: [
      '/portfoimages/freelance/Sock-Fancy-1.jpg',
      '/portfoimages/freelance/Sock-Fancy.jpg',
    ],
    videos: []
  },
  { projectTitle: 'Kids Ears band',
    projectCountry: 'USA',
    projectDescription: 'Children&apos;s Ears Band',
    projectTags: ['3D Modeling', 'Label Design'],
    images: [
      '/portfoimages/freelance/EarsBand-present2.jpg',
      '/portfoimages/freelance/EarsBand-present.jpg',
    ],
    videos: []
  },
  { projectTitle: 'Hair &amp; Body &amp; Me',
    projectCountry: 'AUSTRALIA',
    projectDescription: 'Hair&amp;Me | Body&amp;Me',
    projectTags: ['Packaging Design', ],
    images: [
      '/portfoimages/freelance/Hair-Body-Me3.jpg',
      '/portfoimages/freelance/Hair-Body-Me1.jpg',
      '/portfoimages/freelance/Hair-Body-Me2.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Dental Clinic',
    projectCountry: 'NORWAY',
    projectDescription: 'Mjosa Tannklinikk',
    projectTags: ['3D Poster Design',],
    images: [
      '/portfoimages/freelance/Mjosa Tannklinikk 1.png',
      '/portfoimages/freelance/Mjosa Tannklinikk 2.jpg',
      '/portfoimages/freelance/Mjosa Tannklinikk 3.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Atomic Fireballs',
    projectCountry: 'USA',
    projectDescription: 'frame design for home decoration',
    projectTags: ['3D Modeling', 'Frame Design',],
    images: [
      '/portfoimages/freelance/ATOMIC-FIRE-BALLS-2.jpg',
      '/portfoimages/freelance/ATOMIC-FIRE-BALLS-1.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Fashion Scarfing',
    projectCountry: 'IRAN, TURKEY',
    projectDescription: 'HijabMe Company',
    projectTags: ['Scarf Design', 'Pattern Design',],
    images: [
      '/portfoimages/freelance/HijabMe1.gif',
      '/portfoimages/freelance/HijabMe2.gif',
      '/portfoimages/freelance/HijabMe3.gif',
      '/portfoimages/freelance/HijabMe4.gif',
    ],
  videos: []
  },
  { projectTitle: 'Runners for Mercedes',
    projectCountry: 'CANADA',
    projectDescription: 'Mercedes Benz Burlington',
    projectTags: ['Poster Design',],
    images: [
      '/portfoimages/freelance/Mercedes-Benz.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Data Optimization',
    projectCountry: 'USA',
    projectDescription: 'Crosslake Tech Company',
    projectTags: ['3D Design', ],
    images: [
      '/portfoimages/freelance/Crosslake.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Fashion Network',
    projectCountry: 'INTERNATONAL',
    projectDescription: 'FASHION NETWORK',
    projectTags: ['Magazine Design',],
    images: [
      '/portfoimages/freelance/FASHION NETWORK 1.jpg',
      '/portfoimages/freelance/FASHION NETWORK 2.jpg',
      '/portfoimages/freelance/FASHION NETWORK 3.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Health Care N.G.O',
    projectCountry: 'NEW ZEALAND',
    projectDescription: 'National Hauora Coalition',
    projectTags: ['Magazine Design',],
    images: [
      '/portfoimages/freelance/NGO-Mag-1.jpg',
      '/portfoimages/freelance/NGO-Mag-2.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Day and Night Jewel',
    projectCountry: 'RUSSIA',
    projectDescription: 'Safiya Alexandrites Jewellery',
    projectTags: ['3D Design', 'Banner Design',],
    images: [
      '/portfoimages/freelance/safyia.jpg',
      '/portfoimages/freelance/safyia-Small.jpg',
    ],
  videos: []
  },
  { projectTitle: 'La Passion De Bien Nourrir',
    projectCountry: 'CAMEROON',
    projectDescription: 'Broli Company',
    projectTags: ['Billboard Design', ],
    images: [
      '/portfoimages/freelance/Broli-bilbord-2.jpg',
      '/portfoimages/freelance/Broli-bilbord-1.jpg',
      '/portfoimages/freelance/Broli-bilbord-3.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Hook-N-Cook Off',
    projectCountry: 'USA',
    projectDescription: 'Vyve Broadband Company',
    projectTags: ['Poster Design',],
    images: [
      '/portfoimages/freelance/Hook-N-Cook-Off.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Pets Toys',
    projectCountry: 'USA',
    projectDescription: 'Doggy Mailbox',
    projectTags: ['Packaging Design', ],
    images: [
      '/portfoimages/freelance/DoggyMailbox-1.jpg',
      '/portfoimages/freelance/DoggyMailbox-2.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Ultimate Heal',
    projectCountry: 'USA',
    projectDescription: '',
    projectTags: ['Label Design',],
    images: [
      '/portfoimages/freelance/Bowel-Restore-LBL-2.jpg',
      '/portfoimages/freelance/Bowel-Restore-LBL-3.jpg',
      '/portfoimages/freelance/Bowel-Restore-LBL-4.jpg',
      '/portfoimages/freelance/Bowel-Restore-LBL-1.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Certificate and Diploma',
    projectCountry: 'USA, SPAIN',
    projectDescription: 'Wise Athena Company',
    projectTags: ['Certificate Design', '3D Design',],
    images: [
      '/portfoimages/freelance/WISE-ATHENA-ALEN-CERTIFICATE.jpg',
      '/portfoimages/freelance/WISE-ATHENA-ALEN-CERTIFICATE2.jpg',
    ],
  videos: []
  },
  { projectTitle: 'Deck Patterns',
    projectCountry: 'USA',
    projectDescription: 'Deck Pattern for Kayak',
    projectTags: ['3D Modeling', 'Texture Design',],
    images: [
      '/portfoimages/freelance/deck-pattern-for-kayak.jpg',
    ],
  videos: []
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

      </div>
    </main>
    );
  }
