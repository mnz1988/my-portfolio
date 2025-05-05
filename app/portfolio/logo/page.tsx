import ProjectCard from "@/app/components/projectCard";

const projects = [
  
  { projectTitle: '1111',
    projectCountry: 'International',
    projectDescription: '111111',
    projectTags: [],
    images: [
      '/portfoimages/logo/img',
    ],
    videos: [
      '/portfoimages/logo/vid',
    ]
  },

  
  // { projectTitle: '',
  //   projectCountry: 'USA',
  //   projectDescription: '',
  //   projectTags: ['', '',],
  //   images: [
  //     '',
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
        Logo / Brand
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
