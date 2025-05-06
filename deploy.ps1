# GitHub Pages deployment script

# Build the project
npm run build

# Save the current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

# Create a .nojekyll file to bypass Jekyll processing
New-Item -Path "dist/.nojekyll" -ItemType File -Force

# Navigate to the dist directory
Set-Location -Path "dist"

# Initialize git in the dist directory
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch of the repository
git push -f "https://github.com/ajpisco/eramos-um-website-portal.git" master:gh-pages

# Go back to the project root
Set-Location -Path ".."

# Return to the original branch
git checkout $currentBranch

echo "Deployed successfully to GitHub Pages!" 