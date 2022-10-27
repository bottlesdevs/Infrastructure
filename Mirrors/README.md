# Mirrorlist YAML
## What is this?
This is a simple yaml list of our mirrors (Hosted by us and not)

## How did you split the yaml file?
I splitted the mirror section in seven elements
- mirrorName: This is our codename for the mirror, usually is the ICAO code for the nearest airport and the hosting provider
- mirrorLink: This is the subdomain linked to the mirror
- mirrorIPv4: IPv4 address of the mirror
- mirrorIPv6: IPv6 address of the mirror
- bottlesOwned: If the mirror is provided by us (bottles) or provided by a third-party entity (ex: garr)
- mirrorTier: If the mirror provides a synchronization system with our dependencies with a minimum uptime of 99% (tier 1) , however, if the mirror synchronization depends on one of our mirrors, or is hosted by a third party (tier 2)
