# ShareBite

ShareBite is a community-driven food sharing platform built with React, Vite, Express, and MongoDB. It enables users to share surplus food, request meals, and help reduce food waste.

## Live Demo

- [share-bite](https://sharebite25.web.app/)

## Preview

![share-bite Screenshot](/public/sharebite.png)

## Features

- **Browse Available Foods:** View a list of surplus foods shared by the community.
- **Request Food:** Request available food items; requested foods are tracked and status updated.
- **Manage My Foods:** Donors can add, update, and delete their food listings.
- **My Requested Foods:** Users can view all foods they have requested.
- **Responsive Design:** Modern, mobile-friendly UI with grid and list layouts.
- **Authentication:** Secure login with Firebase Authentication.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, TanStack Query
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** Firebase

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)
- Firebase project with service account key

### Installation

1. **Clone the repository:**
   ```bash
   git clone hhttps://github.com/fuadhasan05/share-bite
   cd share-bite
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`.
   - Fill in your Firebase and Stripe credentials in `.env.local`.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open the app in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

6. **(Optional) Build for production:**
   ```sh
   npm run build
   ```

## Usage

- Register or log in with your email.
- Add food to share with the community.
- Browse and request available foods.
- Manage your own food listings and requests.


---

*Made with ❤️ for the community.*
