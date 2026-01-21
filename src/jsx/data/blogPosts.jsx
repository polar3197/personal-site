// Shared blog posts data
// You can later move this to an API or database
export const blogPosts = [
  {
      id: 1,
      title: 'That\'s it! I\'m SCALING my MUNI App',
      description: 'Before I can add all the awesome features I want this thing to be rock solid.',
      tags: ['MUNI!', 'Planning'],
      date: "01/18/26",
      slug: "planning1",
      content: () => import('./blog-content/scaling-muni.md?raw')
  },
  {
      id: 2,
      title: '1. Database Schema + Documentation',
      description: 'You can\'t make it clean if ya can\'t see it!',
      tags: ['SQLAlchemy', 'GTFS', 'PostgreSQL'],
      date: "01/18/26",
      slug: "planning1-0-1",
      content: () => import('./blog-content/database-schema.md?raw')
  },
  {
      id: 3,
      title: '2. Redis Caching',
      description: 'Rate limiting and taking a huge weight off DB ops.',
      tags: ['Redis', 'FastAPI', 'Rate-limiting'],
      date: "01/18/26",
      slug: "planning1-0-2",
      content: () => import('./blog-content/redis-cache.md?raw')
  },
  {
      id: 4,
      title: '3. SFMTA Published Route Changes',
      description: 'Sporadically, SFMTA will update fundamental entities — like trip IDs, route shape IDs, etc. So, I must ensure the map is up to date and always fetching the most recent release when they drop.',
      tags: ['GTFS', 'PostgreSQL', 'Cron'],
      date: "01/18/26",
      slug: "planning1-0-3",
      content: () => import('./blog-content/MUNI-route-updates.md?raw')
  },
  {
      id: 5,
      title: '4. Centralized Logging',
      description: 'To monitor the system\'s health as it grows and reliability is more important, I need to be able to go to a single main report in order to see metrics are as they should be.',
      tags: ['GTFS', 'PostgreSQL', 'Cron'],
      date: "01/18/26",
      slug: "planning1-0-3",
      content: () => import('./blog-content/database-schema.md?raw')
  },
  {
      id: 6,
      title: '5. Middleware? NGINX? Cloudflared?',
      description: 'As of now, it\'s all Greek to me.',
      tags: ['GTFS', 'PostgreSQL', 'Cron'],
      date: "01/18/26",
      slug: "planning1-0-3",
      content: () => import('./blog-content/database-schema.md?raw')
  },
  
];

export default blogPosts;

