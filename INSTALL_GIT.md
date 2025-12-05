# Install Git for Windows

## Quick Installation Steps

1. **Download Git**:
   - Visit: https://git-scm.com/download/win
   - The download will start automatically
   - Or click "Click here to download" if it doesn't

2. **Run the Installer**:
   - Double-click the downloaded `.exe` file
   - Click "Next" through the installation wizard
   - **Important**: Keep default settings (especially "Git from the command line and also from 3rd-party software")
   - Click "Install"

3. **Verify Installation**:
   - Close and reopen PowerShell
   - Run: `git --version`
   - You should see something like: `git version 2.x.x`

4. **Configure Git** (first time only):
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

5. **Run Deployment**:
   ```powershell
   .\deploy.ps1
   ```

## Alternative: Git for Windows (Portable)

If you prefer not to install, you can use portable Git:
- Download: https://github.com/git-for-windows/git/releases/latest
- Extract to a folder
- Add the `bin` folder to your PATH temporarily

---

**After installing Git, come back and we'll run the deployment script!**

