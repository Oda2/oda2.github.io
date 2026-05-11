# Renato Oda - Personal Page

A modern, SRE-inspired personal portfolio page featuring a terminal interface and interactive experience viewer.

## Features

- **SRE Dashboard Style** - Observability-themed design with metrics and live indicators
- **Interactive Terminal** - Full-featured CLI with commands: `help`, `about`, `skills`, `contact`, `status`, `projects`, `experience`
- **Experience Modal** - Click on any experience to view detailed logs (Kibana/Prometheus style)
- **Multi-language** - Supports PT, EN, ES with persistent preference
- **Dynamic GitHub Integration** - Fetches real repositories and avatar

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Chart.js for metrics visualization
- Google Fonts (Inter, JetBrains Mono)
- GitHub API for repositories

## Commands

```
help       - Show available commands
about      - About me
skills     - Tech stack
contact    - Contact information
status     - System status
experience - Work history
projects   - GitHub repositories (live)
clear      - Clear terminal
```

## Running

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`