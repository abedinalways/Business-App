# 🌐 Scape-Syne

🔗 **Live Demo:** [https://scape-sync-beryl.vercel.app/](https://scape-sync-beryl.vercel.app/)

---

## ✨ Features

### Landing Page
- Pixel-perfect **Figma clone** using Next.js & TailwindCSS.  
- Fully responsive design with modern UI animations.  
- Navbar dynamically updates based on authentication state (Get Started / Logout / User account).  

### Authentication System
- **Register** with email and OTP verification.  
- **Login** with JWT token storage.  
- **Forgot Password** → verify OTP → reset new password → success.  
- **Logout** updates the navbar dynamically.  

### User Flow
1. User clicks **Get Started** in navbar.  
2. Registers an account → verifies email → success screen.  
3. Logs in → dashboard/business view.  
4. Can reset password if forgotten.  
5. Logout → navbar updates to show **Get Started** again.  

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15 + React  
- **Styling:** Tailwind CSS + daisyUI  
- **State & Hooks:** useState, useEffect  
- **API Integration:** Fetch with JWT-based authentication  
- **Notifications:** React Hot Toast  
- **Deployment:** Vercel  

---

## 📂 Folder Structure

```bash
.
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── pic/ (images & assets)
│   └── *.svg / *.png
├── README.md
│   ├── app/
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── Register/        # Register & Verify pages
│   │   │   ├── Login/           # Login page
│   │   │   ├── ForgotPass/      # Forgot + Verify + Update pages
│   │   │   ├── UpdatePassword/  # Reset password flow
│   │   │   └── layout.tsx
│   │   ├── (Identification)/    # User role & identification
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx             # Landing page
│   ├── Components/
│   │   ├── authentication/      # Auth forms & OTP verify components
│   │   ├── layout/              # Navbar, Footer
│   │   └── sections/            # Landing page sections (Banner, Features, FAQ, etc.)
├── tsconfig.json
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/scapesyne.git
cd scapesyne
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Development Server
```bash
npm run dev
```
App will be running at `http://localhost:3000`.

### 4️⃣ Build for Production
```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=https://apitest.softvencefsd.xyz/api
```

---

## 📌 Roadmap

- [x] Figma → Landing page clone  
- [x] Full authentication flow with Postman-tested APIs  
- [x] Navbar dynamic state (login/logout)  
- [ ] Business account features (future scope)  
- [ ] Dashboard pages (future scope)  

---

## 🤝 Contributing

Contributions are welcome. Please open an issue or pull request for major changes.

---

## 📜 License

This project is licensed under **MIT License**.

