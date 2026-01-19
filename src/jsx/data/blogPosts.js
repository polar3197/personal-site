// Shared blog posts data
// You can later move this to an API or database
export const blogPosts = [
  {
      id: 1,
      title: 'That\'s it! I\'m SCALING my MUNI App',
      description: 'Before I can add all the awesome features I want this thing to be rock solid.',
      tags: ['MUNI!', 'Planning'],
      date: "01/04/26",
      slug: "planning1",
      content: `That's it, I'm suring up the foundations of this MUNI app. In less than a month's time (by mid february 2026) I want everything automated, logged and documented.
      
      It will require 6 core steps:
      
      1. Add Redis cache to enforce rate limiting and to store static data to minimize DB I/O
      
      2. Write SQLAlchemy models for entire database schema

      3. Automate fetching MUNI Agency's ~3 month updated routes/shapes/trips/schedules
      
      4. Implement centralized logging for I/O w.r.t. database: 
          a) success/timestamps/metrics of new weekly partitions being made
          b) success/timestamps/metrics of weekly partitions being exported to S3
          c) count of vehicles records per week
          d) when MUNI Agency new routes are published and integrated into database
          e) number of unique users/traffic per week
          f) probably more...
      
      5. Research NGINX and Cloudflared Tunnel and decide on way to migrate off of Vercel

      6. Implement login and users with auth

      I have my work cut out for me. But luckily this shiiii is fun af.
          `,
  },
  {
      id: 2,
      title: 'Database Schema + Documentation',
      description: 'Addressing pain points in MUNI App',
      tags: ['MUNI!', 'SQLAlchemy', 'GTFS', 'PostgreSQL', 'Cron'],
      date: "01/18/26",
      slug: "planning1-0-1",
      content: ""
  },
  
];

export default blogPosts;

