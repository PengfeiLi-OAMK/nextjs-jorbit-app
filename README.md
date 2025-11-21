# Jorbit 🚀

**Jorbit** is a modern, full-stack Job Application Tracking System designed to help job seekers organize, track, and analyze their job hunt progress. Built with the latest **Next.js 14 App Router** architecture, it leverages server-side rendering and robust database management to provide a seamless user experience.


## ✨ Key Features

### 📊 Analytics Dashboard
- **Visual Insights:** Interactive monthly application charts powered by **Recharts**.
- **Quick Stats:** Real-time counters for pending applications, interviews scheduled, and declined offers.

### 💼 Job Management (CRUD)
- **Comprehensive Tracking:** Create, read, update, and delete job application entries.
- **Smart Categorization:** Organize jobs by status (Pending, Interview, Declined) and type (Full-time, Part-time, Internship).
- **Data Validation:** Robust form handling using **React Hook Form** and **Zod** schemas for both client and server-side validation.

### 🔍 Search & Filtering
- **Advanced Search:** Server-side search functionality to instantly find jobs by position or company.
- **Filtering:** Filter applications by specific status.
- **Pagination:** Optimized server-side pagination to handle large datasets efficiently.

### 🎨 User Experience & UI
- **Responsive Design:** Fully mobile-responsive layout with a custom sidebar and navigation.
- **Theming:** Built-in Dark/Light mode toggle using **next-themes**.
- **Modern UI Components:** Polished interface built with **shadcn/ui** and **Tailwind CSS**.

### 🔐 Security
- **Authentication:** Secure user authentication and session management via **Clerk**.
- **Middleware Protection:** Route protection ensuring private user data remains secure.

---

## 🛠️ Tech Stack

**Core:**
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

**Data & Backend:**
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **State Management:** [TanStack Query](https://tanstack.com/query/latest) (React Query)

**UI & Tools:**
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Forms:** React Hook Form + Zod
- **Auth:** [Clerk](https://clerk.com/)

---

## 🚀 Getting Started

Follow these steps to run Jorbit locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A PostgreSQL database instance (Local or Cloud, e.g., Neon/Supabase/Render)
- A Clerk account for authentication

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/jorbit.git](https://github.com/your-username/jorbit.git)
cd jorbit
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add the following keys:
```env
# Database Connection
DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```
### 4. Setup Database
Generate the Prisma client and push the schema to your database:

```Bash

npx prisma generate
npx prisma db push
```
### 5. Run the Development Server
```Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.
```
