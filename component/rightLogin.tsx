import React from "react";
import Link from "next/link"; // Import Link from Next.js

interface RightLoginProps {
  identifier: string;
  password: string;
  setIdentifier: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => void;
}

function RightLogin({ identifier, password, setIdentifier, setPassword, handleLogin }: RightLoginProps) {
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
        <h2>Login To Your Account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleLogin(); // Call the login handler
          }}
          style={{ width: "100%", marginTop: "1.5rem" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="identifier" style={{ display: "block", marginBottom: "0.3125rem", color: "#555", fontSize: "0.875rem" }}>
              Username/Email:
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)} // Update identifier state
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
            Sign In
          </button>
        </form>
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#555" }}>
            Create a new account?{" "}
            <Link style={{ color: "#28a745", textDecoration: "underline" }} href="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightLogin;