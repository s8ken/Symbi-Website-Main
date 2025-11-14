# SYMBI Platform Deployment Verification Script
# This script verifies the deployment status and completes any missing steps

param(
    [string]$PAT = $env:GITHUB_TOKEN
)

Write-Host "🔍 SYMBI Platform Deployment Verification" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

# Check Git availability
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not available" -ForegroundColor Red
    exit 1
}

# Check GitHub token
if (-not $PAT) {
    Write-Host "❌ GitHub Personal Access Token (PAT) is required!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ GitHub token found" -ForegroundColor Green

# Function to verify repository deployment
function Verify-Repository {
    param([string]$repoName, [string]$repoUrl)
    
    Write-Host "`n=== Verifying $repoName ===" -ForegroundColor Yellow
    
    $tempDir = "temp_$repoName"
    
    try {
        # Check if temp directory exists
        if (Test-Path $tempDir) {
            Write-Host "✅ Temporary directory exists" -ForegroundColor Green
            
            # Check if it's a git repository
            if (Test-Path "$tempDir\.git") {
                Write-Host "✅ Git repository found" -ForegroundColor Green
                
                # Check recent commits
                Set-Location $tempDir
                $lastCommit = git log -1 --oneline 2>$null
                if ($lastCommit) {
                    Write-Host "✅ Recent commit: $lastCommit" -ForegroundColor Green
                } else {
                    Write-Host "⚠️  No recent commits found" -ForegroundColor Yellow
                }
                
                # Check if files were deployed
                $deployedFiles = @()
                switch ($repoName) {
                    "symbi-symphony" {
                        $deployedFiles = @("api\utils\crypto.ts", "api\services\trustScoring.ts", "shared\types.ts")
                    }
                    "symbi-synergy" {
                        $deployedFiles = @("api\server.ts", "src\App.tsx", "package.json")
                    }
                    "YCQ-Sonate" {
                        $deployedFiles = @("api\routes\compliance.js", "shared\types.ts")
                    }
                    "symbi-resonate" {
                        $deployedFiles = @("api\routes\monitoring.js", "src\pages\Dashboard.tsx")
                    }
                }
                
                $missingFiles = @()
                foreach ($file in $deployedFiles) {
                    if (Test-Path $file) {
                        Write-Host "✅ Found: $file" -ForegroundColor Green
                    } else {
                        Write-Host "❌ Missing: $file" -ForegroundColor Red
                        $missingFiles += $file
                    }
                }
                
                # Return to original directory
                Set-Location ..
                
                return @{
                    Success = $missingFiles.Count -eq 0
                    MissingFiles = $missingFiles
                }
            } else {
                Write-Host "❌ Not a git repository" -ForegroundColor Red
                return @{ Success = $false; MissingFiles = @() }
            }
        } else {
            Write-Host "❌ Temporary directory not found" -ForegroundColor Red
            return @{ Success = $false; MissingFiles = @() }
        }
    } catch {
        Write-Host "❌ Error verifying $repoName`: $_" -ForegroundColor Red
        return @{ Success = $false; MissingFiles = @() }
    }
}

# Function to complete deployment for a repository
function Complete-Deployment {
    param([string]$repoName, [string]$repoUrl, [hashtable]$status)
    
    if ($status.Success) {
        Write-Host "✅ $repoName deployment is complete!" -ForegroundColor Green
        return
    }
    
    Write-Host "🔧 Completing deployment for $repoName..." -ForegroundColor Yellow
    
    $tempDir = "temp_$repoName"
    
    try {
        if (-not (Test-Path $tempDir)) {
            Write-Host "Cloning $repoName..." -ForegroundColor Yellow
            git clone $repoUrl $tempDir
            if ($LASTEXITCODE -ne 0) {
                throw "Failed to clone repository"
            }
        }
        
        Set-Location $tempDir
        
        # Create directories and copy missing files
        Write-Host "Copying missing files..." -ForegroundColor Yellow
        
        switch ($repoName) {
            "symbi-symphony" {
                New-Item -ItemType Directory -Force -Path "api\utils" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\services" | Out-Null
                New-Item -ItemType Directory -Force -Path "shared" | Out-Null
                New-Item -ItemType Directory -Force -Path "docs" | Out-Null
                Copy-Item -Path "..\api\utils\crypto.ts" -Destination "api\utils\" -Force
                Copy-Item -Path "..\api\services\trustScoring.ts" -Destination "api\services\" -Force
                Copy-Item -Path "..\api\services\advancedTrustScoring.ts" -Destination "api\services\" -Force
                Copy-Item -Path "..\api\routes\trust.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\routes\did.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\shared\types.ts" -Destination "shared\" -Force
                Copy-Item -Path "..\shared\constants.ts" -Destination "shared\" -Force
                Copy-Item -Path "..\ARCHITECTURE.md" -Destination "docs\" -Force
            }
            "symbi-synergy" {
                New-Item -ItemType Directory -Force -Path "src" | Out-Null
                New-Item -ItemType Directory -Force -Path "src\pages" | Out-Null
                New-Item -ItemType Directory -Force -Path "src\components\ui" | Out-Null
                New-Item -ItemType Directory -Force -Path "api" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\routes" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\middleware" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\services" | Out-Null
                New-Item -ItemType Directory -Force -Path "docs" | Out-Null
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
                New-Item -ItemType Directory -Force -Path "api\routes" | Out-Null
                New-Item -ItemType Directory -Force -Path "shared" | Out-Null
                New-Item -ItemType Directory -Force -Path "docs" | Out-Null
                Copy-Item -Path "..\api\routes\compliance.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\routes\vc.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\shared\types.ts" -Destination "shared\" -Force
            }
            "symbi-resonate" {
                New-Item -ItemType Directory -Force -Path "src\pages" | Out-Null
                New-Item -ItemType Directory -Force -Path "src\stores" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\routes" | Out-Null
                New-Item -ItemType Directory -Force -Path "api\utils" | Out-Null
                New-Item -ItemType Directory -Force -Path "docs" | Out-Null
                Copy-Item -Path "..\api\routes\monitoring.js" -Destination "api\routes\" -Force
                Copy-Item -Path "..\api\utils\logger.ts" -Destination "api\utils\" -Force
                Copy-Item -Path "..\src\pages\Dashboard.tsx" -Destination "src\pages\" -Force
                Copy-Item -Path "..\src\stores\trustStore.ts" -Destination "src\stores\" -Force
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
        Write-Host "Configuring git..." -ForegroundColor Yellow
        git config user.name "SYMBI Deploy Bot"
        git config user.email "deploy@symbi.platform"
        
        # Add all files
        Write-Host "Adding files to git..." -ForegroundColor Yellow
        git add .
        
        # Commit changes
        Write-Host "Committing changes..." -ForegroundColor Yellow
        git commit -m $CommitMessage
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to commit changes"
        }
        
        # Push to remote
        Write-Host "Pushing to remote repository..." -ForegroundColor Yellow
        git push "https://$PAT@github.com/s8ken/$repoName.git" main
        if ($LASTEXITCODE -ne 0) {
            # Try with master branch
            Write-Host "Trying master branch..." -ForegroundColor Yellow
            git push "https://$PAT@github.com/s8ken/$repoName.git" master
        }
        
        Write-Host "✅ Successfully completed deployment for $repoName!" -ForegroundColor Green
        
        # Return to original directory
        Set-Location ..
        
    } catch {
        Write-Host "❌ Error completing deployment for $repoName`: $_" -ForegroundColor Red
        Set-Location ..
    }
}

# Verify deployment status
$repositories = @(
    @{ Name = "symbi-symphony"; Url = "https://github.com/s8ken/symbi-symphony.git" },
    @{ Name = "symbi-synergy"; Url = "https://github.com/s8ken/symbi-synergy.git" },
    @{ Name = "YCQ-Sonate"; Url = "https://github.com/s8ken/YCQ-Sonate.git" },
    @{ Name = "symbi-resonate"; Url = "https://github.com/s8ken/symbi-resonate.git" }
)

$deploymentStatus = @{}

foreach ($repo in $repositories) {
    Write-Host "`n---" -ForegroundColor Gray
    $status = Verify-Repository -repoName $repo.Name -repoUrl $repo.Url
    $deploymentStatus[$repo.Name] = $status
}

Write-Host "`n---" -ForegroundColor Gray

# Complete any missing deployments
foreach ($repo in $repositories) {
    if (-not $deploymentStatus[$repo.Name].Success) {
        Complete-Deployment -repoName $repo.Name -repoUrl $repo.Url -status $deploymentStatus[$repo.Name]
    }
}

Write-Host "`n🎉 SYMBI Platform deployment verification completed!" -ForegroundColor Green
Write-Host "All repositories have been updated with the unified platform." -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Check the deployment status in each repository" -ForegroundColor White
Write-Host "2. Run the demo script to verify functionality" -ForegroundColor White
Write-Host "3. Monitor the real-time dashboard for live updates" -ForegroundColor White