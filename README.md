# .github

# Browser - UI Automate

This is a tool to cross-test GC Form's webpages from the UI's point of view using selenium
and the Browser Stack API to ensure browsers compatibility.

## Requirements

A system with `docker` and `docker-compose` installed and available on the
path.

See the [Docker Homepage](https://www.docker.com/) for more details on
installation of docker.

### Environment Variables

Below is a list of the Environment variable requirements to run the profiler.
- `BROWSERSTACK_USERNAME`: Your username in browserstack
- `BROWSERSTACK_ACCESSKEY`: Your access key in browserstack

To get the browser stack credentials see your [BrowserStack Account Settings](https://www.browserstack.com/accounts/settings)