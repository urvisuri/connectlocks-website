# Deployment Guide for ConnectLocks Website

Congratulations on finishing the website updates! Here is how you can connect your domain.

## Option 1: Vercel (Easiest & Best Performance)
This is the modern standard for React apps. It handles SSL (HTTPS) automatically and serves your site globally.

### 1. Push to GitHub
1. Create a Repository on GitHub.
2. In your VS Code terminal:
   ```bash
   git init
   git add .
   git commit -m "Deploy version"
   git branch -M main
   # remote add command from github...
   git push -u origin main
   ```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and Login (you can use your GitHub account).
2. Click **Add New...** -> **Project**.
3. Select your `connectlocks-website` repository.
4. **Important**: In "Build & Development Settings" or "Root Directory", click Edit and select `client` (since your React app is inside the client folder).
5. Click **Deploy**.

### 3. Connect Your Domain
1. Once deployed, go to the Project Dashboard.
2. Click **Settings** (top tab) -> **Domains** (left sidebar).
3. Type your domain name (e.g., `connectlocks.com`) and click **Add**.
4. Vercel will verify it. It will provide **DNS Records** (usually an **A Record** pointing to `76.76.21.21` and a **CNAME** for www).
5. Log in to your Domain Provider (GoDaddy, Namecheap, BigRock, etc.).
6. Go to **DNS Management**.
7. Add/Update the A Record and CNAME as shown by Vercel.
8. Wait a few minutes (up to 24h) for propagation. Vercel will automatically generate an SSL certificate.

---

## Option 2: Traditional Hosting (cPanel / Hostinger)
Use this if you already paid for shared hosting.

### 1. Build the App
Run the following command in your terminal inside the `client` folder:
```bash
cd client
npm run build
```
This generates a `build` folder.

### 2. Upload Files
1. Go to your Hosting Control Panel (cPanel) -> **File Manager**.
2. Open `public_html` (or your domain folder).
3. Upload the **contents** of the `client/build` folder.
   - You should see `index.html` and a `static` folder in the root of `public_html`.

### 3. Fix Routing (Prevent 404s)
React apps need a specific configuration file to handle page refreshing.
1. In `public_html`, create a new file named `.htaccess`.
2. Paste this code inside:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```
3. Save.

Your site is now live!
