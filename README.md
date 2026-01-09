## express app

Access with browser http://localhost:3000

## Watchtower note (Windows)

When running on Docker Desktop (Windows + WSL2), Watchtower may fail with:

client version 1.25 is too old

This is a known Docker API compatibility issue on Windows environments.
The Watchtower service is correctly configured and works as expected on Linux hosts.
