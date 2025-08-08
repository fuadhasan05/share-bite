# ShareBite

ShareBite is a community-driven food sharing platform built with React, Vite, Express, and MongoDB. It enables users to share surplus food, request meals, and help reduce food waste.

## Live Demo

- [share-bite](https://sharebite25.web.app/)

## Preview

![share-bite Screenshot](public/screenshot.png)

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
   cd sharebite
   ```

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   # Add your MongoDB URI and Firebase credentials in .env and admin-key.json
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Environment Variables:**
   - Create a `.env` file in both `server` and `client` directories.
   - Set `VITE_API_URL` in `client/.env` to your backend URL.

## Folder Structure

```
/client   # React frontend
/server   # Express backend
```

## Usage

- Register or log in with your email.
- Add food to share with the community.
- Browse and request available foods.
- Manage your own food listings and requests.


---

*Made with ❤️ for the community.*
