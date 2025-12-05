# 🚀 Quick Deployment Instructions

## Option 1: Using PowerShell Script (Recommended)

1. **Install Git** (if not installed):
   - Download from: https://git-scm.com/download/win
   - Install with default settings
   - Restart your terminal/PowerShell

2. **Run the deployment script**:
   ```powershell
   .\deploy.ps1
   ```

3. **Follow the prompts** - you may need to enter your GitHub credentials

## Option 2: Using GitHub Desktop

1. **Install GitHub Desktop**: https://desktop.github.com/

2. **Open GitHub Desktop**:
   - File → Add Local Repository
   - Select this folder: `C:\Users\drkad\OneDrive\Variety\Desktop\dots portfolio`
   - Click "Add Repository"

3. **Publish to GitHub**:
   - Click "Publish repository" button
   - Repository name: `portfolio`
   - Owner: `Yassine92-cyber`
   - Make sure "Keep this code private" is **unchecked**
   - Click "Publish Repository"

4. **Enable GitHub Pages**:
   - Go to: https://github.com/Yassine92-cyber/portfolio/settings/pages
   - Under "Source", select **"GitHub Actions"**
   - Click **Save**

## Option 3: Using VS Code

1. **Open VS Code** in this folder

2. **Open Source Control** (Ctrl+Shift+G)

3. **Initialize Repository**:
   - Click "Initialize Repository" if prompted
   - Or run: `git init` in terminal

4. **Stage All Files**:
   - Click "+" next to "Changes"
   - Or run: `git add .`

5. **Commit**:
   - Enter message: "Deploy portfolio with dark mode"
   - Click "Commit" or press Ctrl+Enter

6. **Add Remote**:
   - Open terminal (Ctrl+`)
   - Run: `git remote add origin https://github.com/Yassine92-cyber/portfolio.git`

7. **Push**:
   - Click "..." menu in Source Control
   - Select "Push" → "Push to..."
   - Select `origin/main`
   - Or run: `git push -u origin main`

8. **Enable GitHub Pages**:
   - Go to: https://github.com/Yassine92-cyber/portfolio/settings/pages
   - Under "Source", select **"GitHub Actions"**
   - Click **Save**

## Option 4: Manual Git Commands

If Git is installed, open PowerShell in this folder and run:

```powershell
git init
git add .
git commit -m "Deploy portfolio with dark mode to GitHub Pages"
git remote add origin https://github.com/Yassine92-cyber/portfolio.git
git branch -M main
git push -u origin main
```

## After Pushing

1. **Enable GitHub Pages**:
   - Visit: https://github.com/Yassine92-cyber/portfolio/settings/pages
   - Under "Source", select **"GitHub Actions"**
   - Click **Save**

2. **Wait for Deployment**:
   - Go to: https://github.com/Yassine92-cyber/portfolio/actions
   - Wait for the workflow to complete (usually 2-3 minutes)

3. **Visit Your Site**:
   - Your portfolio will be live at: https://Yassine92-cyber.github.io/portfolio

## Troubleshooting

### Git Not Found
- Install Git: https://git-scm.com/download/win
- Restart your terminal after installation

### Authentication Issues
- Use GitHub Personal Access Token instead of password
- Generate token: https://github.com/settings/tokens
- Use token as password when prompted

### Repository Already Exists
- If the repository already exists, you may need to pull first:
  ```powershell
  git pull origin main --allow-unrelated-histories
  ```

### Push Permission Denied
- Make sure you have write access to the repository
- Check that the repository name is correct: `Yassine92-cyber/portfolio`

---

**Need Help?** Check the GitHub Actions logs if deployment fails: https://github.com/Yassine92-cyber/portfolio/actions

