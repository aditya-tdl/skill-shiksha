// src/lib/firebase.ts
import { initializeApp, getApps, getApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAnjPFnK8unKilnJzn3lhYl12c01G1A7ag",
  authDomain: "skillshiksha-4de0f.firebaseapp.com",
  projectId: "skillshiksha-4de0f",
  storageBucket: "skillshiksha-4de0f.firebasestorage.app",
  messagingSenderId: "70675834119",
  appId: "1:70675834119:web:e29f5aa875c3bfc0b951a2",
  measurementId: "G-VNMWJRQB7S"
};

// Initialize Firebase safely for Next.js SSR
const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

// Enable testing mode in development for OTP verification
if (
  process.env.NODE_ENV === "development" ||
  (typeof window !== "undefined" && window.location.hostname === "localhost")
) {
  auth.settings.appVerificationDisabledForTesting = true;
}

export { app, auth };
