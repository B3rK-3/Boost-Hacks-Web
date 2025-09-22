# 🚀 React Sponsor Showcase Project

This project is a **React-based web application** designed to display event sponsors, recaps, and supporting content in a modern, responsive format. It leverages reusable components, modular styling, and scalable assets for easy customization.

See it Live: https://boost-hacks-web.vercel.app/
---

## 📂 Project Structure

```
src/
 ├── App.js              # Main React app entry
 ├── index.js            # React DOM renderer
 ├── comps/              # Core UI components
 │    ├── Header/        # Site header, logo, banner, and nav
 │    ├── Footer/        # Footer with branding
 │    ├── Sponsors/      # Sponsors carousel, logos, slider
 │    └── Recap/         # Recap section with event highlights
 ├── assets/             # Fonts, images, and icons
 ├── App.css             # Global styles
 └── index.css           # Root styles
```

---

## 🛠️ Features

* **Sponsor Carousel** – Rotating logos with clickable links for partners.
* **Event Recap Section** – Highlighted event info and styled layouts.
* **Custom Header & Footer** – Responsive navigation and branding.
* **Reusable Components** – Modular React design for easy scaling.
* **SCSS + CSS Styling** – Component-scoped styles for flexibility.
* **Testing Support** – Pre-configured with Jest and React Testing Library.

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

---

## ▶️ Usage

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.
The app automatically reloads when you edit files.

---

## 🧪 Testing

Run unit tests with:

```bash
npm test
```

---

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The `build/` folder will contain optimized static assets, ready to deploy.

---

## 🎨 Customization

* **Logos/Images** → Replace files in `src/comps/Sponsors/images/`.
* **Fonts** → Update `src/comps/Header/fonts/`.
* **Colors/Theme** → Edit SCSS/CSS in component folders.

---

## 📄 License

This project is released under the **MIT License** – feel free to use and modify.
