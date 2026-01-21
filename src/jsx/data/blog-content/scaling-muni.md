That's it.

I'm shoring up the foundations of this MUNI app. 

In less than a month's time (by mid february 2026) I want everything automated, logged and documented. I will prepare it to handle 1000 users.

### It will require 6 core steps:

1. **Write SQLAlchemy models** for entire database schema

2. **Add Redis cache** to enforce rate limiting and to store static data to minimize DB I/O

3. **Automate fetching route updates** from MUNI Agency's ~3 month releases of new routes/shapes/trips/schedules

4. Implement **centralized logging** for I/O w.r.t. database:
   - success/timestamps/metrics of new weekly partitions being made
   - success/timestamps/metrics of weekly partitions being exported to S3
   - count of vehicles records per week
   - when MUNI Agency new routes are published and integrated into database
   - number of unique users/traffic per week
   - probably more...

5. Research NGINX and Cloudflared Tunnel and decide on if-I-should/how-to **migrate off of Vercel**

6. Implement **login and auth** for users

I have my work cut out for me. But luckily this shiiii is fun af.