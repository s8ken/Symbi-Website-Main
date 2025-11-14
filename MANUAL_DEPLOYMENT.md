# SYMBI Platform Deployment - Manual Instructions

Since the GitHub Personal Access Token (PAT) is not available in the environment variables, please follow these manual deployment steps:

## Prerequisites

1. Ensure you have Git installed and configured
2. Ensure you have your GitHub Personal Access Token ready
3. Ensure you have write access to all four repositories

## Manual Deployment Steps

### Step 1: Set your GitHub token
```powershell
$env:GITHUB_TOKEN="your-personal-access-token-here"
```

### Step 2: Run the deployment script
```powershell
powershell -ExecutionPolicy Bypass -File deploy.ps1
```

### Alternative: Manual Repository Updates

If the automated script doesn't work, you can manually update each repository:

#### Repository 1: symbi-symphony (Core Protocol)
```bash
git clone https://github.com/s8ken/symbi-symphony.git temp_symphony
cd temp_symphony
# Copy the following files from your SYMBI-SYMPHONY directory:
# - api/utils/crypto.ts
# - api/services/trustScoring.ts  
# - api/services/advancedTrustScoring.ts
# - api/routes/trust.js
# - api/routes/did.js
# - shared/types.ts
# - shared/constants.ts
# - ARCHITECTURE.md
# - docs/PROTOCOL_SPEC.md (if exists)
git add .
git commit -m "Deploy unified SYMBI platform with enhanced features"
git push origin main
```

#### Repository 2: symbi-synergy (Production Platform)
```bash
git clone https://github.com/s8ken/symbi-synergy.git temp_synergy
cd temp_synergy
# Copy the following files:
# - api/server.ts
# - api/routes/*.js
# - api/middleware/*.js
# - api/services/aiOrchestration.ts
# - src/App.tsx
# - src/pages/EnhancedDashboard.tsx
# - src/components/ui/enhanced.tsx
# - package.json
# - vite.config.ts
# - DEPLOYMENT_GUIDE.md
git add .
git commit -m "Deploy unified SYMBI platform with enhanced features"
git push origin main
```

#### Repository 3: YCQ-Sonate (Specification & Compliance)
```bash
git clone https://github.com/s8ken/YCQ-Sonate.git temp_sonate
cd temp_sonate
# Copy the following files:
# - api/routes/compliance.js
# - api/routes/vc.js
# - shared/types.ts
# - docs/COMPLIANCE_SPEC.md (if exists)
# - docs/API_SPEC.md (if exists)
git add .
git commit -m "Deploy unified SYMBI platform with enhanced features"
git push origin main
```

#### Repository 4: symbi-resonate (Analytics)
```bash
git clone https://github.com/s8ken/symbi-resonate.git temp_resonate
cd temp_resonate
# Copy the following files:
# - api/routes/monitoring.js
# - api/utils/logger.ts
# - src/pages/Dashboard.tsx
# - src/stores/trustStore.ts
# - docs/ANALYTICS_SPEC.md (if exists)
git add .
git commit -m "Deploy unified SYMBI platform with enhanced features"
git push origin main
```

## Files to Deploy

Here are the key files that should be deployed to each repository:

### All Repositories (Common Files)
- README.md
- FINAL_SUMMARY.md (to docs/)

### symbi-symphony Specific
- api/utils/crypto.ts
- api/services/trustScoring.ts
- api/services/advancedTrustScoring.ts
- api/routes/trust.js
- api/routes/did.js
- shared/types.ts
- shared/constants.ts
- ARCHITECTURE.md

### symbi-synergy Specific  
- api/server.ts
- api/routes/ai.js
- api/routes/compliance.js
- api/middleware/*.js
- api/services/aiOrchestration.ts
- src/App.tsx
- src/pages/EnhancedDashboard.tsx
- src/components/ui/enhanced.tsx
- package.json
- vite.config.ts
- DEPLOYMENT_GUIDE.md

### YCQ-Sonate Specific
- api/routes/compliance.js
- api/routes/vc.js
- shared/types.ts

### symbi-resonate Specific
- api/routes/monitoring.js
- api/utils/logger.ts
- src/pages/Dashboard.tsx
- src/stores/trustStore.ts

## Verification

After deployment, verify:
1. All repositories have been updated
2. Files are properly organized in each repository
3. Commit messages are consistent
4. Documentation is available in each repository

## Next Steps

1. Test the deployment using the demo script
2. Verify the real-time dashboard functionality
3. Check that all API endpoints are working
4. Validate the trust scoring system
5. Test the AI orchestration features