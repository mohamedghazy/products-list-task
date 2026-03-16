# 🛍️ Modern Product Management Dashboard

A high-performance, responsive web application designed to display and manage a product catalog[cite: 3]. [cite_start]Built with **Next.js 14**, **TypeScript**, and **Shadcn UI**, this project demonstrates a complete frontend workflow, including secure authentication, real-time filtering, and advanced state management.

## 🚀 Live Demo
**[Live Demo](https://products-list-task.vercel.app/login)** 

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router) 
* **Language:** TypeScript for type-safe development 
* **Styling:** Tailwind CSS & Shadcn UI 
* **State Management:** React Context / TanStack Query 
* **Icons:** Lucide React
* **Authentication:** JWT/Token based with secure caching 

---

## ✨ Features

### 1. Authentication & Security
* Full user registration and login functionality.
* JWT/Token management and session caching[.

### 2. Product Experience
* **Responsive Grid:** Seamless transitions between mobile and desktop views.
* **Smart Search:** Real-time filtering by product title.
* **Category Filtering:** Dynamic sorting based on product categories.
* **Detailed Views:** Dedicated pages showing product images, titles, descriptions, and prices.

### 3. Performance & UX
* **Loading States:** Implementation of loaders for improved user feedback.
* **Error Handling:** Robust handling for API and navigation errors.
* **Component Architecture:** Modular structure for scalability and readability.

---

## 🏗️ Getting Started

### Prerequisites
* Node.js 20.x or later
* npm 

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mohamedghazy/products-list-task.git
    cd repository-name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Open the app:** Navigate to `http://localhost:3000`.

---

## 🔗 API Documentation
This project consumes a public API for product data.
* [cite_start]**Postman Collection:** [Insert Your Postman Link Here] [cite: 11]

---

## 📂 Project Structure
```text
├── app/               # Next.js App Router (Pages & Layouts)
├── components/        # Reusable UI components (Shadcn & Custom)
├── hooks/             # Custom React hooks for logic
├── lib/               # Utility functions and API clients
├── types/             # TypeScript interfaces
└── public/            # Static assets
