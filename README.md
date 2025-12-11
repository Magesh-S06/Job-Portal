# Job Portal

A Job Portal application which helps to browse jobs for different companies based on their role and locations. 

## Features

- **Browsing Jobs**: Home page containing all the available jobs. 
- **Applied Jobs**: Checking the status of all applied jobs and updating resume. 
- **User Authentication**: Secure and personalized experience for each user.
- **Responsive UI**: Seamless usage on desktop and mobile devices.
- **Recruiter Page**: A login based on company's side to add more jobs, check for applicants for each job.

## Tech Stack

- **Frontend**: React.js
- **Database**: Mongo Atlas
- **Authentication**: JWT Tokens
- **User Login**: Clerk

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm 
- Mongo Atlas account
- Clerk Account
- Sentry Account
- Cloudinary Account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Magesh-S06/Job-Portal.git
   ```

2. Navigate to the project directory:
   ```
   cd Job-Portal
   ```

3. Install dependencies:
   #### Frontend: 
   ```
   cd client
   ```
   ```
   npm install
   ```
   #### Backend:
   ```
   cd server
   ```
   ```
   npm install
   ```

5. Set up environment variables:
   Create a `.env.local` file in the server directory to add Mongo and RazorPay credentials:
   ```
   MONGO_URI=your_mongo_cluster_id
   JWT_KEY=your_custom_jwt_key
   CLOUDINARY_NAME=your-cloudinary_name
   CLOUDINARY_SECRET=your_cloudinary_secret
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
   Create a `.env.local` file in the client directory to add the Razorpay credentials:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:4000
   ```

6. Run the development server:
   ```
   npm run dev
   ```

7. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.
