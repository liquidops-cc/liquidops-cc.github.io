# LiqudOps | DevOps Consultancy Website

A premium, high-performance static website for a DevOps contractor specializing in Kubernetes (EKS/GKE), AWS, Google Cloud, GitOps, and CI/CD pipelines.

## Features

- **Modern Design**: Dark mode with neon accents and glassmorphism.
- **Fluid Animations**: Scroll-linked entry animations and parallax hero section.
- **Full Cloud Support**: Highlighting expertise in AWS and Google Cloud (GKE).
- **Responsive**: Fully optimized for mobile and desktop devices.
- **Micro-interactions**: Hover effects on service cards and tech stack items.

## Tech Stack

- HTML5
- CSS3 (Vanilla)
- ES6 Javascript
- FontAwesome Icons
- Google Fonts (Outfit)

## Development

### Pre-commit Hooks

This project uses `pre-commit` to ensure code quality and conventional commit messages.

1. **Install pre-commit**:

   ```bash
   pip install pre-commit
   ```

2. **Install the hooks**:
   ```bash
   pre-commit install
   pre-commit install --hook-type commit-msg
   ```

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for your commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools
