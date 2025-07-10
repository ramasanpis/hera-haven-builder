# AIHaven - AI Companion Platform

A modern AI companion platform built with React, TypeScript, Tailwind CSS, and Firebase.

## Features

- 🤖 AI Companion Gallery
- 🔐 Firebase Authentication
- 🔥 Real-time Database with Firestore
- 📱 Responsive Design
- 🎨 Modern Dark Theme
- ⚡ Admin Panel for Content Management

## Firebase Setup

1. Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Copy your Firebase config from Project Settings
5. Replace the config in `src/lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Admin Panel

- Login with your Firebase account
- Access the admin panel via the Settings button in the header
- Manage companions, content, and site settings in real-time

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Icons**: Lucide React
- **State Management**: React Hooks

## Project Structure

```
src/
├── components/         # React components
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries
├── pages/             # Page components
└── assets/            # Static assets
```

## Firebase Collections

- `companions` - AI companion data
- `settings` - Site configuration
- `users` - User profiles

Replace the Firebase configuration with your own project credentials to get started!

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/45e2f203-8925-4fff-a3f6-1362f54e1544) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
