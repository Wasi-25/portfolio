# Wasiullah Khalique - Portfolio

A modern dark portfolio built with **React + Vite + Tailwind CSS**.

---

## Project Structure

```
portfolio/
├── public/
│   └── Wasiullah_Khalique_CV.pdf     ← place your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx             ← separate section
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionHeader.jsx         ← shared heading component
│   ├── data/
│   │   └── index.js                  ← ALL your content lives here
│   ├── utils/
│   │   └── scroll.js                 ← smooth scroll helper
│   ├── styles/
│   │   └── index.css                 ← Tailwind directives + custom classes
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Setup (Step-by-Step)

### 1. Prerequisites
Make sure you have **Node.js v18+** installed.
Check with: `node -v`
Download from: https://nodejs.org

### 2. Get the project files
Copy the entire `portfolio/` folder to wherever you keep your projects.

### 3. Install dependencies
```bash
cd portfolio
npm install
```

### 4. Add your CV
Place your `Wasiullah_Khalique_CV.pdf` inside the `public/` folder.
The download buttons already point to `/Wasiullah_Khalique_CV.pdf`.

### 5. Add your photo
Replace the placeholder inside `src/components/Hero.jsx`.
Find the comment `TO ADD YOUR PHOTO` and replace it with:
```jsx
<img
  src="/photo.jpg"
  alt="Wasiullah Khalique"
  className="w-full h-full rounded-full object-cover"
/>
```
Then put `photo.jpg` inside the `public/` folder.

### 6. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Set up Formspree (Contact Form)

1. Go to https://formspree.io and create a free account
2. Click **New Form** → name it "Portfolio Contact"
3. Copy your Form ID (looks like `xyzabcde`)
4. Open `src/components/Contact.jsx`
5. Replace `YOUR_FORM_ID`:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabcde'
   ```
6. Submissions go straight to `wasiullahkhalique25@gmail.com`

---

## Update your content

All your personal data is in **one place**: `src/data/index.js`

| What to update       | Where                          |
|----------------------|--------------------------------|
| Projects             | `PROJECTS` array               |
| Work experience      | `EXPERIENCE` array             |
| Education            | `EDUCATION` array              |
| Skills               | `SKILLS` array                 |
| Testimonials         | `TESTIMONIALS` array           |
| Social/contact links | `CONTACT_LINKS` array          |

---

## Deploy to Netlify (your existing setup)

### Option A - Push to GitHub (recommended)
```bash
# In your portfolio folder:
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/Wasi-25/YOUR_REPO_NAME.git
git push -u origin main
```
Netlify will auto-build on every push.

**Important:** In your Netlify site settings, set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Option B - Manual deploy
```bash
npm run build
```
Then drag & drop the `dist/` folder into Netlify's manual deploy panel.

---

## Customisation tips

- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors`
- **Fonts:** Change the Google Fonts import in `index.html`
- **New section:** Create `src/components/Blog.jsx`, add it to `App.jsx`, add data to `src/data/index.js`
