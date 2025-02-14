import React from "react";
import Link from "next/link"; // Import Link from Next.js

interface RightRegisterProps {
  username: string;
  email: string;
  password: string;
  setUsername: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleRegister: () => void;
}

function RightRegister({ username, email, password, setUsername, setEmail, setPassword, handleRegister }: RightRegisterProps) {
  return (
    <div className="bg-white min-h-screen md:rounded-tl-lg text-black flex items-center justify-center w-full borders">
      <div
      className="content-center"
        style={{
          paddingTop: "2.4rem",
          fontSize: "1.5rem", // Reduced font size for the heading
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem", // Add padding for mobile
          width: "100%",
          maxWidth: "25rem", // Set max width for the form container
        }}
      >
        <h2>Create Your Account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleRegister(); // Call the register handler
          }}
          style={{ width: "100%", marginTop: "1.5rem" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "0.3125rem", color: "#555", fontSize: "0.875rem" }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
              style={{
                width: "100%",
                padding: "0.5rem", // Reduced padding
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
                fontSize: "0.875rem", // Reduced font size for input
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.3125rem", color: "#555", fontSize: "0.875rem" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              style={{
                width: "100%",
                padding: "0.5rem", // Reduced padding
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
                fontSize: "0.875rem", // Reduced font size for input
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "0.3125rem", color: "#555", fontSize: "0.875rem" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              style={{
                width: "100%",
                padding: "0.5rem", // Reduced padding
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
                fontSize: "0.875rem", // Reduced font size for input
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem", // Reduced padding
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              fontSize: "0.875rem", // Reduced font size for button
            }}
          >
            Sign Up
          </button>
        </form>
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#555 " }}>
            Already have an account?{" "}
            <Link style={{ color: "#28a745", textDecoration: "underline" }} href="/login">
             Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightRegister;