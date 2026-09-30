# KISAN CARTS - Fresh Fruits & Vegetables Exporter

A modern, mobile-first responsive web platform for KISAN CARTS, a leading exporter of farm-fresh fruits and vegetables based in Mumbai, India. Built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI.

## ✨ Features

* **Mobile-First Design:** Fully responsive layout optimized for all devices and network conditions.
* **Modern UI:** Clean, glassmorphic aesthetic built with ShadCN UI components and Tailwind CSS.
* **Smooth Animations:** Framer Motion integrated for engaging, lightweight user interactions.
* **SEO Optimized:** Complete meta tags, structured JSON-LD data, and semantic HTML for high B2B visibility.
* **Performance:** Optimized image loading and caching strategies using Next.js App Router.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Components:** ShadCN UI & Radix Primitives
* **Animations:** Framer Motion
* **Icons:** Lucide React

## 🚀 Local Development Setup

Follow these steps to get the project running on your local machine:

**1. Clone the repository**
bash
git clone [https://github.com/bug-void/kisan-carts.git](https://github.com/bug-void/kisan-carts.git)
cd kisan-carts
2. Install dependencies

Bash
npm install
3. Set up Environment Variables
Create a .env.local file in the root directory and add the required keys (see the Environment Variables section below).

4. Start the development server

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

🔐 Environment Variables
Create a .env.local file in the root of your project. Use the following template:

Code snippet
# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# API & Integrations (Add your keys here for local testing)
# NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
# AIRTABLE_API_KEY=your_airtable_api_key
# AIRTABLE_BASE_ID=your_base_id
🏗️ Folder Structure
An overview of the core project architecture:

Plaintext
kisan-carts/
├── public/                 # Static assets (images, icons, fonts)
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, api routes)
│   │   ├── api/            # Serverless API endpoints
│   │   ├── globals.css     # Global Tailwind styles
│   │   ├── layout.tsx      # Root layout & SEO metadata
│   │   └── page.tsx        # Main landing page
│   ├── components/         # Reusable React components
│   │   ├── ui/             # ShadCN UI base components
│   │   ├── navbar.tsx      # Navigation header (Glassmorphic)
│   │   ├── hero-section.tsx
│   │   └── footer.tsx
│   └── lib/                # Utility functions, helpers, and configurations
│       └── utils.ts        # Tailwind merge utilities (cn)
├── components.json         # ShadCN configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
🤝 Contribution Guidelines
We welcome contributions! Please follow this workflow to ensure smooth collaboration:

1. Branch Naming Convention
Create a new branch for every feature or bug fix. Use the following prefixes:

feat/ - For new features (e.g., feat/add-razorpay-checkout)

fix/ - For bug fixes (e.g., fix/mobile-nav-hydration)

docs/ - For documentation updates (e.g., docs/update-readme)

ui/ - For design/styling updates (e.g., ui/navbar-refactor)

2. Commit Message Standard
Write clear and concise commit messages. We recommend the Conventional Commits format:

feat: add WhatsApp floating button

ui: center navbar links and add CTA button

docs: update setup instructions

3. Pull Request Process
Fork the repository and create your branch from main.

Ensure your code passes standard linting (npm run lint) and builds successfully (npm run build).

Open a Pull Request against the main branch.

Link the PR to the relevant GitHub Issue (e.g., Closes #30 in the PR description).

Request a review from the maintainers.

📄 License
This project is proprietary to KISAN CARTS. All rights reserved. For business or technical inquiries, please contact the development team.
