# WEB Assignment – IntelliToggle Landing Page

This project is a **frontend assignment** built with **Nuxt 3 + Vue 3 + TailwindCSS**.  
The goal was to recreate the given **Figma design** as closely as possible and verify fidelity using **Pixelay**.

---

## 🚀 Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install dependencies
```bash
npm install
```

### Run in development
```bash
npm run dev
```
Project will be available at: [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
```

---

## 📂 Project Structure

The page is divided into reusable Vue components:

- `Header.vue`
- `Hero.vue`
- `Features.vue`
- `OpenfeatureCTA.vue`
- `ControlPanelSection.vue`
- `FeatureComparison.vue`
- `DartCodeAISection.vue`
- `PricingSandboxSection.vue`
- `FeatureBenefitSection.vue`
- `CTA.vue`
- `Footer.vue`

Each section corresponds to a block in the Figma design.  

---

## 🖼️ Screenshots

Screenshots of the implementation have been added to the repo for reference:

### Header

<img width="1890" height="86" alt="header" src="https://github.com/user-attachments/assets/0f30a6d5-431d-43f1-8d00-b392155869e4" />


### Hero Section
<img width="1902" height="295" alt="Hero" src="https://github.com/user-attachments/assets/7bc09197-03cc-4951-97a1-8b54f23a899d" />

### Features Section
<img width="1860" height="607" alt="Features" src="https://github.com/user-attachments/assets/57e62551-53bc-4327-99c4-ce78a40bc514" />


### Pricing & Sandbox Plan
<img width="1896" height="638" alt="prcingSandbox" src="https://github.com/user-attachments/assets/3f8ddcb0-450d-4ae4-9462-c4c02bcadf5e" />

### Open Feature and other screen shots
<img width="1872" height="500" alt="openfeature" src="https://github.com/user-attachments/assets/278acb07-d386-4541-9930-cd07b7a12c6f" />
<img width="1860" height="461" alt="Dartcode" src="https://github.com/user-attachments/assets/f2570e8c-abb6-4268-b620-42faae9baa9c" />
<img width="1867" height="756" alt="FeatureBenifit" src="https://github.com/user-attachments/assets/099d4a74-1873-4639-ab85-a59a16b0c347" />
<img width="1888" height="514" alt="FeatureComparisin" src="https://github.com/user-attachments/assets/f1cf2e9b-44f1-44b2-8760-55efd053380b" />






### CTA + Footer
<img width="1835" height="289" alt="Cta" src="https://github.com/user-attachments/assets/b8be88cc-4482-4e34-ba14-c241e6b3dad6" />

<img width="1861" height="178" alt="Footer" src="https://github.com/user-attachments/assets/e6523243-2ad3-4f09-bea0-99749dec816f" />


the root of this repo.)*

---

## 🎨 Pixelay Comparison

We used **Pixelay** to compare the coded layout against the Figma design.  

### Steps:
1. Exported the Figma desktop design as PNG.  
2. Opened Pixelay extension in Chrome.  
3. Uploaded both the **Figma PNG** and the **live site screenshot**.  
4. Compared layouts with **overlay** and **diff mode**.  

### Notes:
- Minor pixel differences exist due to font rendering and Tailwind spacing defaults.  
- Tradeoff: Used Tailwind utilities instead of exact Figma values in a few places (e.g., padding/margin adjustments) for responsiveness.  
- Hero section background image had slight cropping differences on smaller viewports.  

---

## ⚖️ Tradeoffs & Decisions

- **Responsiveness:** Focused on desktop-first (per assignment) but also tested for tablet/mobile.  
- **Tailwind:** Preferred utility classes over inline styles for maintainability.  
- **Assets:** Images were imported into `~/assets/images` for proper bundling.  
- **Pixel perfection vs practicality:** In some cases, exact pixel values were adjusted for cleaner responsive breakpoints.  

---

## ✅ Conclusion

The landing page design from Figma was **successfully implemented** in Nuxt 3 + Vue 3 + TailwindCSS.  
Pixelay verification confirmed layout fidelity with only minor acceptable differences.  

---

👩‍💻 **Author:** Hania Jaffar  
📅 September 2025  
