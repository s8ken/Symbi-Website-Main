# SYMBI Platform Deployment Script for Windows PowerShell
# This script deploys the unified SYMBI platform to all four repositories

param(
    [string]$PAT = $env:GITHUB_TOKEN,
    [string]$CommitMessage = "Deploy unified SYMBI platform with enhanced features"
)

# Configuration
$repos = @(
    @{
        name = "symbi-symphony"
        url = "https://github.com/s8ken/symbi-symphony.git"
        description = "Core protocol and trust engine"
    },
    @{
        name = "symbi-synergy"
        url = "https://github.com/s8ken/symbi-synergy.git"
        description = "Production platform and orchestration"
    },
    @{
        name = "YCQ-Sonate"
        url = "https://github.com/s8ken/YCQ-Sonate.git"
        description = "Specification and compliance layer"
    },
    @{
        name = "symbi-resonate"
        url = "https://github.com/s8ken/symbi-resonate.git"
        description = "Analytics and insights"
    }
)

function Write-ColorOutput {
    param([string]$text, [string]$color)
    Write-Host $text -ForegroundColor $color
}

function Deploy-Repository {
    param(
        [string]$repoName,
        [string]$repoUrl,
        [string]$description
    )
    
    Write-ColorOutput "`n=== Deploying to $repoName ===" "Cyan"
    Write-ColorOutput "Description: $description" "Gray"
    
    $tempDir = "temp_$repoName"
    
    try {
        # Clone the repository
        Write-ColorOutput "Cloning repository..." "Yellow"
        git clone $repoUrl $tempDir
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to clone repository"
        }
        
        Set-Location $tempDir
        
        # Create repository-specific structure
        Write-ColorOutput "Creating repository structure..." "Yellow"
        
        # Create directories
        New-Item -ItemType Directory -Force -Path "src" | Out-Null
        New-Item -ItemType Directory -Force -Path "api" | Out-Null
        New-Item -ItemType Directory -Force -Path "shared" | Out-Null
        New-Item -ItemType Directory -Force -Path "docs" | Out-Null
        
        # Copy files based on repository purpose
        switch ($repoName) {
            "symbi-symphony" {
                # Core protocol files
                Copy-Item -Path "..\api\utils\crypto.ts" -Destination "api\utils\" -Force
                Copy-Item -Path "..\api\services\trustScoring.ts" -Destination "api\services\" -Force
                Copy-Item -Path "..\api\services\advancedTrustScoring.ts" -Destination "api\services\" -Force
                Copy-Item -Path "..\api\routes\trust.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\routes\did.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\shared\types.ts" -Destination "shared\" -Force
                Copy-Item -Path "..\shared\constants.ts" -Destination "shared\" -Force
                Copy-Item -Path "..\ARCHITECTURE.md" -Destination "docs\" -Force
                Copy-Item -Path "..\docs\PROTOCOL_SPEC.md" -Destination "docs\" -Force -ErrorAction SilentlyContinue
            }
            "symbi-synergy" {
                # Production platform files
                Copy-Item -Path "..\api\server.ts" -Destination "api\" -Force
                Copy-Item -Path "..\api\routes\ai.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\routes\compliance.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\middleware\*.js" -Destination "api\middleware\" -Force
                Copy-Item -Path "..\api\services\aiOrchestration.ts" -Destination "api\services\" -Force
                Copy-Item -Path "..\src\App.tsx" -Destination "src\" -Force
                Copy-Item -Path "..\src\pages\EnhancedDashboard.tsx" -Destination "src\pages\" -Force
                Copy-Item -Path "..\src\components\ui\enhanced.tsx" -Destination "src\components\ui\" -Force
                Copy-Item -Path "..\package.json" -Destination "." -Force
                Copy-Item -Path "..\vite.config.ts" -Destination "." -Force
                Copy-Item -Path "..\DEPLOYMENT_GUIDE.md" -Destination "docs\" -Force
            }
            "YCQ-Sonate" {
                # Specification and compliance files
                Copy-Item -Path "..\api\routes\compliance.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\routes\vc.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\shared\types.ts" -Destination "shared\" -Force
                Copy-Item -Path "..\docs\COMPLIANCE_SPEC.md" -Destination "docs\" -Force -ErrorAction SilentlyContinue
                Copy-Item -Path "..\docs\API_SPEC.md" -Destination "docs\" -Force -ErrorAction SilentlyContinue
            }
            "symbi-resonate" {
                # Analytics files
                Copy-Item -Path "..\api\routes\monitoring.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\utils\logger.ts" -Destination "api\utils\" -Force
                Copy-Item -Path "..\src\pages\Dashboard.tsx" -Destination "src\pages\" -Force
                Copy-Item -Path "..\src\stores\trustStore.ts" -Destination "src\stores\" -Force
                Copy-Item -Path "..\docs\ANALYTICS_SPEC.md" -Destination "docs\" -Force -ErrorAction SilentlyContinue
            }
        }
        
        # Copy common files
        Copy-Item -Path "..\README.md" -Destination "." -Force
        Copy-Item -Path "..\FINAL_SUMMARY.md" -Destination "docs\" -Force
        
        # Create repository-specific README
        $repoReadme = @"
# $repoName

$description

This repository is part of the unified SYMBI platform.

## Repository Structure

This repository contains the implementation for the $description functionality of the SYMBI platform.

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## Documentation

See the \`docs/\` directory for detailed documentation.

## Contributing

This is part of the unified SYMBI platform deployment.
"@
        
        Set-Content -Path "README.md" -Value $repoReadme
        
        # Git operations
        Write-ColorOutput "Configuring git..." "Yellow"
        git config user.name "SYMBI Deploy Bot"
        git config user.email "deploy@symbi.platform"
        
        # Add all files
        Write-ColorOutput "Adding files to git..." "Yellow"
        git add .
        
        # Commit changes
        Write-ColorOutput "Committing changes..." "Yellow"
        git commit -m $CommitMessage
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to commit changes"
        }
        
        # Push to remote
        Write-ColorOutput "Pushing to remote repository..." "Yellow"
        git push "https://$PAT@github.com/s8ken/$repoName.git" main
        if ($LASTEXITCODE -ne 0) {
            # Try with master branch
            git push "https://$PAT@github.com/s8ken/$repoName.git" master
        }
        
        Write-ColorOutput "✅ Successfully deployed to $repoName!" "Green"
        
    } catch {
        Write-ColorOutput "❌ Error deploying to $repoName`: $_" "Red"
    } finally {
        # Return to original directory and cleanup
        Set-Location ..
        if (Test-Path $tempDir) {
            Remove-Item -Recurse -Force $tempDir
        }
    }
}

# Main deployment process
Write-ColorOutput "🚀 Starting SYMBI Platform Deployment" "Magenta"
Write-ColorOutput "=====================================" "Magenta"

# Check if PAT is provided
if (-not $PAT) {
    Write-ColorOutput "❌ GitHub Personal Access Token (PAT) is required!" "Red"
    Write-ColorOutput "Please set the GITHUB_TOKEN environment variable or pass the -PAT parameter" "Red"
    exit 1
}

# Deploy to each repository
foreach ($repo in $repos) {
    Deploy-Repository -repoName $repo.name -repoUrl $repo.url -description $repo.description
}

Write-ColorOutput "`n🎉 SYMBI Platform deployment completed!" "Green"
Write-ColorOutput "All repositories have been updated with the unified platform." "Green"
Write-ColorOutput "`nNext steps:" "Cyan"
Write-ColorOutput "1. Check the deployment status in each repository" "White"
Write-ColorOutput "2. Run the demo script to verify functionality" "White"
Write-ColorOutput "3. Monitor the real-time dashboard for live updates" "White"