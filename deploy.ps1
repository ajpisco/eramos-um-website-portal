# GitHub Pages deployment script

# Build the project
npm run build

# Create and switch to a temporary branch
git checkout --orphan temp-gh-pages

# Add the dist contents
git add -f dist

# Create a commit with the built files
git commit -m "GitHub Pages deployment"

# Create a subtree with only the dist folder for the gh-pages branch
git subtree split --prefix dist -b gh-pages

# Force push to the gh-pages branch
git push -f origin gh-pages:gh-pages

# Switch back to the original branch
git checkout main

# Clean up the temporary branches
git branch -D temp-gh-pages
git branch -D gh-pages

echo "Deployed successfully to GitHub Pages!" 