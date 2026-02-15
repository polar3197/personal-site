// Shared blog posts data
// You can later move this to an API or database
export const blogPosts = [
  // {
  //     id: 1,
  //     title: 'That\'s it! I\'m SCALING my MUNI App',
  //     description: 'Before I can add all the awesome features I want this thing to be rock solid.',
  //     tags: ['MUNI', 'Planning'],
  //     date: "01/18/26",
  //     slug: "planning1",
  //     content: () => import('./blog-content/scaling-muni.md?raw')
  // },
  {
      id: 1,
      title: 'Documenting experience with new CMS Backdrop Paragraph Layout',
      description: 'a novice trying to use them',
      tags: ['Web Dev', 'CMS Backdrop'],
      date: "02/09/26",
      slug: "fibo-1",
      content: () => import('./blog-content/backdrop-paragraphs.md?raw')
  },
  {
      id: 2,
      title: 'LLM document extraction for Stanford Security Litigations Analytics',
      description: 'Legal document parsing tool.',
      tags: ['AI', 'prompt-engineering', 'Stanford Law'],
      date: "01/28/26",
      slug: "ssla-1",
      content: () => import('./blog-content/ssla-1.md?raw')
  },
  {
      id: 3,
      title: 'PDF extraction score function',
      description: 'how to best score LLM output?',
      tags: ['AI', 'Stanford Law'],
      date: "01/31/26",
      slug: "ssla-2",
      content: () => import('./blog-content/extraction_evaluation.md?raw')
  },
//   {
//       id: 3,
//       title: 'Prompt Engineering for Legal Document Extraction',
//       description: 'evaluating multiple models',
//       tags: ['Fibonacci Web Studio', 'AI', 'Stanford Law School'],
//       date: "01/29/26",
//       slug: "ssla-2",
//       content: () => import('./blog-content/ssla-2.md?raw')
//   },
  {
      id: 4,
      title: 'Defining the Goals of the MUNI Project',
      description: 'This project has a million avenues. Bringing it over the finish line will require a clear delineation of goals.',
      tags: ['MUNI', 'Planning'],
      date: "01/24/26",
      slug: "planning2",
      content: () => import('./blog-content/pragmatic-look.md?raw')
  },
//   {
//       id: 2,
//       title: 'Redis Tabula Rasa',
//       description: 'How much can Redis actually help? Locust Stress Testing my API.',
//       tags: ['Locust', 'FastAPI', 'Redis', 'PostGIS'],
//       date: "01/18/26",
//       slug: "blog-everyday-1",
//       content: () => import('./blog-content/Wednesday-jan-21.md?raw')
//   },
//   {
//       id: 3,
//       title: 'Redis? Waste of time.',
//       description: 'Caching on client side, adjusting schema for path-finding algo',
//       tags: ['GTFS', 'PostgreSQL', "FastAPI", "React"],
//       date: "01/18/26",
//       slug: "blog-everyday-2",
//       content: () => import('./blog-content/Thursday-jan-22.md?raw')
//   },
//   
//   {
//       id: 2,
//       title: '1. Database Schema + Documentation',
//       description: 'You can\'t make it clean if ya can\'t see it!',
//       tags: ['SQLAlchemy', 'GTFS', 'PostgreSQL'],
//       date: "01/18/26",
//       slug: "planning1-0-1",
//       content: () => import('./blog-content/database-schema.md?raw')
//   },
//   {
//       id: 3,
//       title: '2. Redis Caching',
//       description: 'Rate limiting and taking a huge weight off DB ops.',
//       tags: ['Redis', 'FastAPI', 'Rate-limiting'],
//       date: "01/18/26",
//       slug: "planning1-0-2",
//       content: () => import('./blog-content/redis-cache.md?raw')
//   },
//   {
//       id: 4,
//       title: '3. SFMTA Published Route Changes',
//       description: 'Sporadically, SFMTA will update fundamental entities — like trip IDs, route shape IDs, etc. So, I must ensure the map is up to date and always fetching the most recent release when they drop.',
//       tags: ['GTFS', 'PostgreSQL', 'Cron'],
//       date: "01/18/26",
//       slug: "planning1-0-3",
//       content: () => import('./blog-content/MUNI-route-updates.md?raw')
//   },
//   {
//       id: 5,
//       title: '4. Centralized Logging',
//       description: 'To monitor the system\'s health as it grows and reliability is more important, I need to be able to go to a single main report in order to see metrics are as they should be.',
//       tags: ['GTFS', 'PostgreSQL', 'Cron'],
//       date: "01/18/26",
//       slug: "planning1-0-3",
//       content: () => import('./blog-content/database-schema.md?raw')
//   },
//   {
//       id: 6,
//       title: '5. Middleware? NGINX? Cloudflared?',
//       description: 'As of now, it\'s all Greek to me.',
//       tags: ['GTFS', 'PostgreSQL', 'Cron'],
//       date: "01/18/26",
//       slug: "planning1-0-3",
//       content: () => import('./blog-content/database-schema.md?raw')
//   },
  
  
];

export default blogPosts;

