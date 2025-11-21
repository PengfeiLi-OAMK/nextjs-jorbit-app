# Jorbit 🚀

**Jorbit** is a modern, full-stack Job Application Tracking System designed to help job seekers organize, track, and analyze their job hunt progress. Built with the latest **Next.js 14 App Router** architecture, it leverages server-side rendering and robust database management to provide a seamless user experience.
<img width="1916" height="885" alt="a2e4c7a9-7720-4f02-818f-03c80906b164" src="https://github.com/user-attachments/assets/291f8715-0f00-437c-bc89-3e1e9ad3cf85" />


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
## ✨ More Screenshots

<img width="1896" height="813" alt="26145934-9e10-47bc-9217-9e44360eb8b1" src="https://github.com/user-attachments/assets/9b18d828-4109-4170-8432-e337c1665c94" />

<img width="1878" height="780" alt="8441bb19-39cd-48d9-810b-d08d1c4aff95" src="https://github.com/user-attachments/assets/5e4421d4-c220-435e-8cc8-93100969c30e" />

<img width="1481" height="804" alt="090176ec-aef7-4aef-91c2-599ceed0560d" src="https://github.com/user-attachments/assets/6082543e-fe22-4d1a-8cfb-9f08d7ed109b" />

