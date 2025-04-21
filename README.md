# Payton--Crowd-Funding-App
# Payton - Crowdfunding Platform

Payton is a simple, full-stack crowdfunding platform where creators can showcase their projects and receive donations directly via Razorpay. Each creator gets a public profile page, and users can contribute to projects they believe in with a single click.

## Features

- User authentication (via Google OAuth)
- Creator dashboard for setting up projects
- Public profile pages for creators
- Donations handled through Razorpay Checkout
- MongoDB for storing user and payment data
- Real-time updates to profile and project info
- Image upload for profile picture and cover (supports JPG)
- Search functionality to find creators
- Secure API handling and Razorpay integration
- Minimalistic and responsive design

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js (via Next.js API routes)
- **Database**: MongoDB (Mongoose)
- **Auth**: NextAuth.js (Google Provider)
- **Payments**: Razorpay

## Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/payton.git
cd payton
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
GITHUB_ID=your_GitHub_id
GITHUB_SECRET=your_GitHub_secret
NEXT_PUBLIC_KEY_ID=
KEY_SECRET=your_razorpay_client_key
NEXT_PUBLIC_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 4. Start the Development Server

Run the development server using the following command:

```bash
npm run dev
```



