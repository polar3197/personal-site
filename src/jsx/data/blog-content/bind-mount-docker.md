### Brief aside about infinitely useful docker compose practices
BIND MOUNT your codebase to your api service in docker compose!

While I was working I was overcome with joy at the fact that my containers don't need to be restarted to update key files. I made this modification recently by **adding volumes** to my muni-api container, and I'll tell you... **GAME CHANGER**.

It only takes 3 small steps:
1. First of all, I downloaded `watchfiles`: a library that uses event based triggers to reload data from modified files, especially useful for reloading data inside containers upon changes

2. I also added the entire codebase for db ops and the api as a volume for the api service:
```   
    volumes:
      - ./src:/app/src
```
this creates a direct link between the files in `./src` on the host machine, and the files int `/app/src` in the container.

3. The final step was to add the `--reload` and `--reload-dir` flags to the uvicorn command so that it knows to reload when those files are updated. Make sure to specify the location in the container, not the one on host:
`command: uvicorn src.api.api:app --host 0.0.0.0 --port 8000 --reload --reload-dir /app/src`