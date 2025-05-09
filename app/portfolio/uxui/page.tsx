import ProjectCard from "@/app/components/projectCard";

const projects = [
  {  projectTitle: 'Ali Baba Mobile Game',
    projectCountry: 'International',
    projectDescription: 'Ali Baba & the 40 Thieves WORD Connect',
    projectTags: [],
    images: [
      '/portfoimages/uxui/alibaba/ali-baba_banner-play-2.webp',
      '/portfoimages/uxui/alibaba/image1.webp',
      '/portfoimages/uxui/alibaba/play-screen-test.webp',
      '/portfoimages/uxui/alibaba/splash-1-test.webp',
      '/portfoimages/uxui/alibaba/image2.webp',
      '/portfoimages/uxui/alibaba/splash-2.webp',
      '/portfoimages/uxui/alibaba/view_old-bg-test.webp',
    ],
    videos: [
      '/portfoimages/uxui/alibaba/alibaba-game.mp4',
    ]
  },
  // {  projectTitle: 'Ali Baba Mobile Game',
  //   projectCountry: 'International',
  //   projectDescription: 'Ali Baba & the 40 Thieves WORD Connect',
  //   projectTags: [],
  //   images: [
  //     '/portfoimages/uxui/alibaba/ali-baba_banner-play-2.webp',
  //     '/portfoimages/uxui/alibaba/image1.webp',
  //     '/portfoimages/uxui/alibaba/play-screen-test.webp',
  //     '/portfoimages/uxui/alibaba/splash-1-test.webp',
  //     '/portfoimages/uxui/alibaba/image2.webp',
  //     '/portfoimages/uxui/alibaba/splash-2.webp',
  //     '/portfoimages/uxui/alibaba/view_old-bg-test.webp',
  //   ],
  //   videos: [
  //     '/portfoimages/uxui/alibaba/alibaba-game.mp4',
  //   ]
  // },
  {  projectTitle: 'NonStop Web and Calculator',
    projectCountry: 'USA',
    projectDescription: 'NonStop Signs Company, Website retouching',
    projectTags: [],
    images: [
      '/portfoimages/uxui/NonStop.jpg',
    ],
    videos: []
  },
  { projectTitle: 'PNX Team',
    projectCountry: 'IRI',
    projectDescription: 'Phoenix Startup Website design',
    projectTags: [],
    images: [],
  videos: [
    '/portfoimages/uxui/PNX-Upgrade.mp4',
  ]
  },
  { projectTitle: 'Baham',
    projectCountry: 'IRI',
    projectDescription: 'Crowdfunding Platform',
    projectTags: [],
    images: [
      '/portfoimages/uxui/baham/ui.webp',
      '/portfoimages/uxui/baham/Home.webp',
      '/portfoimages/uxui/baham/Projects.webp',
      '/portfoimages/uxui/baham/Modules.webp',
    ],
    videos: []
  },
  { projectTitle: 'Arra',
    projectCountry: 'IRI',
    projectDescription: 'online Survey Platform design',
    projectTags: [],
    images: [
      '/portfoimages/uxui/araa/Android.webp',
      '/portfoimages/uxui/araa/Web-1366.webp',
    ],
    videos: []
  },
  { projectTitle: 'bismuth Launcher',
    projectCountry: 'International',
    projectDescription: 'Android Mobile Launcher',
    projectTags: [],
    images: [
      '/portfoimages/uxui/bismuth/3-1.webp',
      '/portfoimages/uxui/bismuth/5-1.webp',
      '/portfoimages/uxui/bismuth/8.webp',
      '/portfoimages/uxui/bismuth/7.webp',
    ],
    videos: []
  },
  { projectTitle: 'Membersgram',
    projectCountry: 'International',
    projectDescription: 'Retouching Telegram Member finder/joiner',
    projectTags: [],
    images: [
      '/portfoimages/uxui/member/membersgram.webm',
    ],
    videos: [
      '/portfoimages/uxui/member/thumbnail.webp',
    ]
  },
  { projectTitle: 'Gramista',
    projectCountry: 'International',
    projectDescription: 'Instagram Downloader mobile app',
    projectTags: [],
    images: [
      '/portfoimages/uxui/gramista/Capture.webp',
      '/portfoimages/uxui/gramista/Screenshot_20180730-215223.webp',
      '/portfoimages/uxui/gramista/Screenshot_20180730-214258.webp',
      '/portfoimages/uxui/gramista/Screenshot_20180730-163211.webp',
      '/portfoimages/uxui/gramista/Screenshot_20180730-160424.webp',
      '/portfoimages/uxui/gramista/Screenshot_20180730-160152.webp',
    ],
    videos: []
  },
  // { projectTitle: '',
  //   projectCountry: 'USA',
  //   projectDescription: '',
  //   projectTags: ['', '',],
  //   images: [
  //     '',
  //   ],
  // videos: [
  //   '',
  // ]
  // },
];

export default function FreelancePage() {
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-semibold bg-gradient-to-l from-blue-200 via-violet-600 to-cyan-200 bg-clip-text text-transparent">
        UX / UI 
        </h1>
        <p className="text-2xl font-light">Analyzing and Designing</p>
      </div>

      {/* Subtitle */}
      <div className="text-center text-xl font-medium mb-8">
      Mobile Apps / Web Apps
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
