import ProjectCard from "@/app/components/projectCard";

const projects = [
  { projectTitle: 'Unstoppable Domains',
    projectCountry: 'International',
    projectDescription: 'Domains on the Blockchain',
    projectTags: [],
    images: [],
  videos: [
    '/portfoimages/logo/Unstoppable Domains.mp4',
  ]
  },
  { projectTitle: 'Argent',
    projectCountry: 'International',
    projectDescription: 'Argent Wallet / Blockchain Wallet',
    projectTags: [],
    images: [],
  videos: [
    '/portfoimages/logo/argent-logomotion.mp4',
  ]
  },
  { projectTitle: 'Curiosity Hack Blog',
    projectCountry: 'USA',
    projectDescription: '',
    projectTags: [],
    images: [],
    videos: [
      '/portfoimages/logo/curiosity-hack.mp4',
    ]
  },
  { projectTitle: 'Gottes Weg',
    projectCountry: 'GERMANY',
    projectDescription: 'Gottes Weg Church',
    projectTags: [],
    images: [
      '/portfoimages/logo/Business-Card-Gottes-Weg.webp',
    ],
  videos: []
  },
  { projectTitle: 'Bismuth',
    projectCountry: 'IRI',
    projectDescription: 'PNX Team / Android Launcher',
    projectTags: [],
    images: [
      '/portfoimages/logo/bismuth.webp',
    ],
  videos: []
  },
  { projectTitle: 'Araa Survey Platform',
    projectCountry: 'IRI',
    projectDescription: 'PNX Team / Web App',
    projectTags: [],
    images: [
      '/portfoimages/logo/araa-logo.webp',
    ],
  videos: []
  },
  { projectTitle: 'IX Game',
    projectCountry: 'IRI',
    projectDescription: 'Blockchain Gaming Platform',
    projectTags: [],
    images: [
      '/portfoimages/logo/xlogo1.webp',
      '/portfoimages/logo/xlogo2.webp',
    ],
  videos: []
  },
  { projectTitle: 'PNX Team',
    projectCountry: 'IRI',
    projectDescription: 'Iranian Startup Team',
    projectTags: [],
    images: [
      '/portfoimages/logo/pnx-logo-circle.webp',
    ],
  videos: [
    '/portfoimages/logo/pnx.mp4',
  ]
  },
  { projectTitle: '12 BORJI',
    projectCountry: 'IRI',
    projectDescription: 'Online Cultural Shopping',
    projectTags: [],
    images: [
      '/portfoimages/logo/12borji.jpg',
    ],
  videos: []
  },
  { projectTitle: 'MOKAZINO',
    projectCountry: 'International',
    projectDescription: 'Blockchain Casino based on Monero',
    projectTags: [],
    images: [
      '/portfoimages/logo/mokazino-logo.webp',
    ],
  videos: []
  },
  { projectTitle: 'Raising DAO',
    projectCountry: 'International',
    projectDescription: 'Blockchain DAO',
    projectTags: [],
    images: [
      '/portfoimages/logo/razing DAO1.jpg',
      '/portfoimages/logo/razing DAO2.jpg',
    ],
  videos: []
  },
  { projectTitle: 'TSI',
    projectCountry: 'International',
    projectDescription: 'Blockchain Startup',
    projectTags: [],
    images: [],
  videos: [
    '/portfoimages/logo/tsi.webm',
  ]
  },
];

export default function FreelancePage() {
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-semibold bg-gradient-to-l from-blue-200 via-violet-600 to-cyan-200 bg-clip-text text-transparent">
        Logo / Branding
        </h1>
        <p className="text-2xl font-light">and Logo Motion Design</p>
      </div>

      {/* Subtitle */}
      <div className="text-center text-xl font-medium mb-8">
      {/* Mobile Apps / Web Apps */}
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
