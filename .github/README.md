# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for the DataOculus monorepo. All workflows have been abstracted to the top level to provide centralized CI/CD management.

## Workflows

### 🚀 Deployment Workflows

#### `deploy-docs.yml`
- **Trigger**: Push to `main` branch with changes to `apps/docs/**` or manual dispatch
- **Purpose**: Builds and deploys the documentation site to GitHub Pages
- **Deploy URL**: `https://<username>.github.io/<repository>/` (docs subdirectory)
- **Process**:
  1. Installs dependencies for both root and docs app
  2. Builds the Docusaurus documentation site
  3. Deploys to GitHub Pages

#### `deploy-site.yml`
- **Trigger**: Push to `main` branch with changes to `apps/site/**` or manual dispatch
- **Purpose**: Builds and deploys the Next.js marketing site to GitHub Pages
- **Deploy URL**: `https://<username>.github.io/<repository>/` (main site)
- **Process**:
  1. Installs dependencies for both root and site app
  2. Builds the Next.js site with static export
  3. Adds `.nojekyll` file for proper GitHub Pages routing
  4. Deploys to GitHub Pages

### 🔄 Maintenance Workflows

#### `update-openapi.yml`
- **Trigger**: Daily at midnight (cron) or manual dispatch
- **Purpose**: Automatically updates the OpenAPI specification from the DataOculus API
- **Process**:
  1. Fetches the latest OpenAPI spec from `https://api.dataoculus.app/public/api/openapi.json`
  2. Processes the file to replace placeholders
  3. Commits and pushes changes to the docs app

### 🧪 Quality Assurance Workflows

#### `ci.yml`
- **Trigger**: Push to `main`/`develop` branches or pull requests
- **Purpose**: Continuous integration testing for both apps
- **Process**:
  1. **Matrix Strategy**: Tests both `docs` and `site` apps in parallel
  2. **Lint and Test**: Runs linting and testing for each app
  3. **Build Validation**: Ensures both apps build successfully
  4. **Security Scan**: Runs npm audit on all dependencies

## GitHub Pages Setup

### Repository Configuration

1. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"

2. **Site Deployment Options**:
   
   **Option A: Deploy Site to Root Domain**
   - The site will be available at `https://<username>.github.io/<repository>/`
   - Current configuration (recommended)
   
   **Option B: Deploy to Custom Domain**
   - Update `next.config.js` to remove `basePath` and `assetPrefix`
   - Add your custom domain in repository settings
   - The site will be available at your custom domain

### Environment Variables

The Next.js site automatically configures itself based on environment variables:

- `GITHUB_PAGES=true` - Enables static export mode
- `GITHUB_REPOSITORY` - Used to set correct base paths
- `NODE_ENV=production` - Production build optimization

### Dual Deployment Strategy

Both docs and site can be deployed to GitHub Pages:

1. **Docs**: Deploys to `/docs` path or subdomain
2. **Site**: Deploys to root domain or custom domain
3. **Conflicts**: If both deploy to the same path, the last deployment wins

**Recommended Setup**:
- Use separate repositories for separate domains
- Or deploy docs to a subdirectory/subdomain
- Or use different branches for different deployments

## Monorepo Structure

The workflows are designed to work with the monorepo structure:

```
monorepo/
├── .github/
│   └── workflows/          # ← Centralized workflows
│       ├── ci.yml
│       ├── deploy-docs.yml  # → GitHub Pages (docs)
│       ├── deploy-site.yml  # → GitHub Pages (site)
│       └── update-openapi.yml
├── apps/
│   ├── docs/              # Docusaurus documentation
│   └── site/              # Next.js marketing site
└── package.json           # Root package.json with monorepo scripts
```

## Key Features

### Path-Based Triggers
- Workflows only run when relevant files change
- `apps/docs/**` changes trigger docs deployment
- `apps/site/**` changes trigger site deployment

### Efficient Caching
- Node.js setup with npm caching per app
- Cache keys based on individual app `package-lock.json` files

### Working Directory Management
- Each workflow step specifies the correct working directory
- Root dependencies installed first, then app-specific dependencies

### Matrix Strategy
- CI workflow uses matrix strategy to test both apps efficiently
- Parallel execution reduces total build time

### GitHub Pages Optimization
- Static export for Next.js site
- Proper asset handling with base paths
- `.nojekyll` file to bypass Jekyll processing
- Automatic repository name detection

## Usage

### Local Development
```bash
# Start both apps in development
npm run dev

# Start individual apps
npm run dev:docs
npm run dev:site

# Build both apps
npm run build

# Test GitHub Pages build locally
cd apps/site
GITHUB_PAGES=true npm run build:github
```

### Manual Workflow Triggers
All workflows support manual triggering via GitHub's "workflow_dispatch" event. Go to the Actions tab in your repository and click "Run workflow".

## Environment Variables & Secrets

### Required Secrets
- `OPENAPI_BEARER_TOKEN`: Bearer token for accessing the DataOculus API (used in `update-openapi.yml`)

### Automatic Environment Variables
- `GITHUB_REPOSITORY`: Repository name (automatically provided by GitHub)
- `GITHUB_PAGES`: Set to `true` in deployment workflows
- `NODE_ENV`: Set to `production` for builds

## Deployment Paths

### Default GitHub Pages Paths
- **Repository**: `https://<username>.github.io/<repository>/`
- **Site**: `https://<username>.github.io/<repository>/` (root)
- **Docs**: `https://<username>.github.io/<repository>/docs/` (if using subdirectory)

### Custom Domain Configuration
To use a custom domain:
1. Add `CNAME` file to the `public` directory
2. Configure DNS to point to GitHub Pages
3. Update `next.config.js` to remove base paths
4. Enable custom domain in repository settings

## Adding New Apps

To add a new app to the monorepo:

1. Create the app in `apps/new-app/`
2. Update the CI workflow matrix to include the new app
3. Create deployment workflow for the new app
4. Add scripts to root `package.json`

## Troubleshooting

### Common Issues

1. **Build failures**: Check that all dependencies are properly installed
2. **Path issues**: Ensure working directories are correctly specified
3. **Asset loading**: Verify base paths are correctly configured for GitHub Pages
4. **Routing issues**: Add `.nojekyll` file and ensure trailing slashes

### GitHub Pages Specific Issues

1. **404 errors**: Check base path configuration in `next.config.js`
2. **Asset not loading**: Verify asset prefix matches repository name
3. **Routing problems**: Ensure `trailingSlash: true` for static export
4. **Jekyll processing**: Ensure `.nojekyll` file is present

### Debugging

- Check the "Actions" tab in your repository for detailed logs
- Each workflow step provides detailed output
- Use `workflow_dispatch` to manually test workflows
- Test GitHub Pages builds locally with environment variables 