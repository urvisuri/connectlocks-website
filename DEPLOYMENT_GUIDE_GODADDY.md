# Deploying ConnectLocks to GoDaddy Domain (connectlock.in)

Since you have purchased the domain `connectlock.in` from GoDaddy, you have two main options to launch your website.

---

## Option 1: Vercel (Recommended - Free & Fast)
**Best if:** You **only** bought the domain name and do not have a paid "Web Hosting" plan with GoDaddy. Vercel is free for this type of site and very fast.

### Steps:
1.  **Push Code to GitHub**:
    *   Ensure your latest code is pushed to your GitHub repository.
2.  **Deploy on Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up/login.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository (`connectlocks-website`).
    *   **Important**: In the configuration settings:
        *   **Root Directory**: Click "Edit" and select `client` (since your React app is inside the client folder).
        *   **Framework Preset**: Create React App.
    *   Click **Deploy**.
3.  **Connect Domain**:
    *   Once deployed, go to the Vercel Project Dashboard -> **Settings** -> **Domains**.
    *   Enter `connectlock.in` and click Add.
    *   Vercel will give you **DNS Records** (usually an A Record `76.76.21.21` or a CNAME).
4.  **Update GoDaddy DNS**:
    *   Log in to GoDaddy -> My Products -> `connectlock.in` -> **DNS**.
    *   Add/Edit the **A Record** for `@` to point to Vercel's IP (`76.76.21.21`).
    *   Add a **CNAME Record** for `www` pointing to `cname.vercel-dns.com`.

---

## Option 2: GoDaddy Web Hosting (cPanel)
**Best if:** You have already paid for a "Linux Hosting" or "cPanel" plan with GoDaddy.

### Steps:
1.  **Build the Project**:
    *   I have already added a `.htaccess` file to your public folder to handle routing.
    *   Run the build command in your terminal (I ran this for you):
        ```bash
        cd client
        npm run build
        ```
    *   This creates a folder named `build` inside `client`. This folder contains your production website.

2.  **Upload to GoDaddy**:
    *   Log in to GoDaddy -> My Products -> Web Hosting -> **Manage**.
    *   Open **cPanel Admin**.
    *   Go to **File Manager**.
    *   Navigate to `public_html`.
    *   **Delete** default files (if any).
    *   **Upload** the *contents* of your local `client/build` folder (not the folder itself, but the files inside: `index.html`, `static`, `.htaccess`, etc.).
    *   Ensure `.htaccess` is uploaded (it might be hidden; enable "Show Hidden Files" in cPanel settings if you don't see it).

3.  **Test**:
    *   Visit `connectlock.in`. Your site should be live.

---

**Note**: Since your app uses Client-Side Routing (e.g. `/downloads`, `/contact`), the `.htaccess` file I created in `client/public/.htaccess` is critical for Option 2. It ensures users don't get "404 Not Found" when refreshing a page.
