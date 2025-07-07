# DataOculus Monorepo

This monorepo contains the DataOculus applications:

- **Apps/Docs** (`apps/docs`): Docusaurus documentation site
- **Apps/Site** (`apps/site`): Main Next.js website

## Project Structure

```
DataOculus/
├── .github/
│   └── workflows/     # GitHub Actions workflows
├── apps/
│   ├── docs/          # Docusaurus documentation (Port 3000)
│   ├── site/          # Next.js main website (Port 3001)
│   └── ...
└── package.json       # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >=18.0.0
- npm >=9.0.0

### Installation

```bash
# Install dependencies for all workspaces
npm install
```

### Development

#### Run both applications simultaneously:
```bash
npm run dev
```

This will start:
- Documentation site on http://localhost:3000
- Main website on http://localhost:3001

#### Run applications individually:

**Documentation site only:**
```bash
npm run dev:docs
```

**Main website only:**
```bash
npm run dev:site
```

### Building

#### Build all applications:
```bash
npm run build
```

#### Build individually:
```bash
# Build documentation
npm run build:docs

# Build main website
npm run build:site

# Build for GitHub Pages
npm run build:docs    # Docs (always static)
cd apps/site && npm run build:github  # Site (static export)
```

### Production

#### Start applications in production:
```bash
# Start documentation site
npm run start:docs

# Start main website
npm run start:site
```

## Deployment

### Automated Deployment (GitHub Actions)

The repository includes automated deployment workflows:

#### GitHub Pages Deployment
- **Documentation**: Automatically deploys to GitHub Pages on push to `main`
- **Site**: Automatically deploys to GitHub Pages with static export
- **URL**: `https://<username>.github.io/<repository>/`

#### Manual Deployment
All deployment workflows can be triggered manually from the GitHub Actions tab.

### Local Testing of GitHub Pages Build

```bash
# Test docs build (always static)
cd apps/docs
npm run build

# Test site build for GitHub Pages
cd apps/site
GITHUB_PAGES=true npm run build:github
```

### Configuration

#### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Workflows will automatically deploy on push to `main`

#### Custom Domain (Optional)
To use a custom domain instead of GitHub Pages default:
1. Update `apps/site/next.config.js` to remove base paths
2. Add CNAME file to `apps/site/public/`
3. Configure DNS settings
4. Enable custom domain in repository settings

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both apps in development mode |
| `npm run dev:docs` | Start documentation site only (port 3000) |
| `npm run dev:site` | Start main website only (port 3001) |
| `npm run build` | Build all applications |
| `npm run build:docs` | Build documentation site |
| `npm run build:site` | Build main website |
| `npm run start` | Start both apps in production mode |
| `npm run start:docs` | Start documentation in production mode |
| `npm run start:site` | Start website in production mode |
| `npm run lint` | Run linting for all workspaces |
| `npm run clean` | Clean all build artifacts and node_modules |
| `npm run install:all` | Install dependencies for all apps |

## Workspace Management

This monorepo uses npm workspaces. Each application in the `apps/` directory is a separate workspace with its own `package.json` and dependencies.

### Working with workspaces:

```bash
# Run a command in a specific workspace
npm run <script> --workspace=apps/docs
npm run <script> --workspace=apps/site

# Install a dependency in a specific workspace
npm install <package> --workspace=apps/docs
npm install <package> --workspace=apps/site

# Install a dependency for all workspaces
npm install <package> --workspaces
```

## Ports

- **Documentation**: http://localhost:3000
- **Main Website**: http://localhost:3001

## GitHub Actions

The repository includes comprehensive CI/CD workflows:

- **Continuous Integration**: Automated testing and linting
- **Documentation Deployment**: Automatic GitHub Pages deployment
- **Site Deployment**: Next.js static export to GitHub Pages
- **OpenAPI Updates**: Daily API specification updates

See [`.github/README.md`](.github/README.md) for detailed workflow documentation.

## Development Workflow

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run dev`
4. **Make changes** in the appropriate app directory
5. **Test locally**: `npm run build`
6. **Commit and push**: Automatic deployment on push to `main`

## Contributing

1. Make your changes in the appropriate workspace
2. Test locally using the development scripts
3. Build to ensure everything works correctly
4. Submit your pull request

## Architecture

- **Monorepo**: Single repository containing multiple related applications
- **Workspaces**: Each app is an independent workspace with its own dependencies
- **Shared Dependencies**: Common dependencies are hoisted to the root when possible
- **Independent Deployment**: Each app can be built and deployed independently
- **Centralized CI/CD**: All GitHub Actions workflows managed at the repository root

## Environment Support

### Development
- Local development with hot reloading
- Independent port configuration
- Shared development dependencies

### Production
- Optimized builds for each application
- Static export support for GitHub Pages
- Docker deployment support (standalone mode)

### GitHub Pages
- Automatic static export for Next.js
- Proper asset path configuration
- Custom domain support 