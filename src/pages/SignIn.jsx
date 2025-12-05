import React, { useState } from "react";
import { Shield, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import styles from "./SignIn.module.css";
import PageNav from "../components/PageNav";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    studentId: "",
    role: "student",
  });

  const handleSubmit = () => {
    if (isSignUp) {
      console.log("Sign Up:", formData);
      // Add sign up logic here
    } else {
      console.log("Sign In:", {
        email: formData.email,
        password: formData.password,
      });
      // Add sign in logic here
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      studentId: "",
      role: "student",
    });
  };

  return (
    <div>
      <PageNav />
      <div className={styles.page}>
        <div className={styles.authCard}>
          {/* Left Side - Branding */}
          <div className={styles.leftPanel}>
            <div className={styles.leftInner}>
              <div className={styles.brandRow}>
                <div className={styles.brandIcon}>
                  <span className={styles.brandEmoji}>🛡️</span>
                  <Shield className={styles.brandShieldIcon} />
                </div>
                <h1 className={styles.brandTitle}>GearGuard</h1>
              </div>

              <h2 className={styles.mainHeading}>
                {isSignUp ? "Join GearGuard" : "Welcome Back"}
              </h2>

              <p className={styles.mainSubtitle}>
                {isSignUp
                  ? "Create your account to start renting sports equipment from your university gym."
                  : "Sign in to manage your equipment rentals and track your activity."}
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureEmoji}>📦</span>
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>500+ Equipment</h3>
                    <p className={styles.featureText}>
                      Wide range of sports gear
                    </p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureEmoji}>⚡</span>
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>Quick Access</h3>
                    <p className={styles.featureText}>
                      Rent in just a few clicks
                    </p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureEmoji}>🔒</span>
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>
                      Secure &amp; Reliable
                    </h3>
                    <p className={styles.featureText}>
                      Track everything safely
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className={`${styles.decorCircle} ${styles.decorCircleTop}`} />
            <div
              className={`${styles.decorCircle} ${styles.decorCircleBottom}`}
            />
          </div>

          {/* Right Side - Form */}
          <div className={styles.rightPanel}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>
                {isSignUp ? "Create Account" : "Sign In"}
              </h3>
              <p className={styles.formSubtitle}>
                {isSignUp
                  ? "Fill in your details to get started"
                  : "Enter your credentials to continue"}
              </p>
            </div>

            <div className={styles.formBody}>
              {/* Name Field (Sign Up only) */}
              {isSignUp && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <div className={styles.inputWrapper}>
                    <User className={styles.inputIconLeft} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={styles.input}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              {/* Student ID (Sign Up only) */}
              {isSignUp && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Student ID</label>
                  <div className={styles.inputWrapper}>
                    <Shield className={styles.inputIconLeft} />
                    <input
                      type="text"
                      value={formData.studentId}
                      onChange={(e) =>
                        setFormData({ ...formData, studentId: e.target.value })
                      }
                      className={styles.input}
                      placeholder="Enter your student ID"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIconLeft} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={styles.input}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password</label>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIconLeft} />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`${styles.input} ${styles.inputWithToggle}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={styles.passwordToggle}
                  >
                    {showPassword ? (
                      <EyeOff className={styles.passwordToggleIcon} />
                    ) : (
                      <Eye className={styles.passwordToggleIcon} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me / Forgot Password (Sign In only) */}
              {!isSignUp && (
                <div className={styles.rememberRow}>
                  <label className={styles.rememberLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Remember me</span>
                  </label>
                  <button className={styles.forgotButton}>
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button onClick={handleSubmit} className={styles.submitButton}>
                {isSignUp ? "Create Account" : "Sign In"}
              </button>

              {/* Toggle Sign In/Sign Up */}
              <div className={styles.toggleRow}>
                <p>
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}{" "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className={styles.toggleLink}
                  >
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </button>
                </p>
              </div>

              {/* Divider */}
              <div className={styles.divider}>
                <div className={styles.dividerLine} />
                <span className={styles.dividerText}>Or continue with</span>
                <div className={styles.dividerLine} />
              </div>

              {/* Social Login Buttons */}
              <div className={styles.socialGrid}>
                <button className={styles.socialButton}>
                  <svg className={styles.socialIcon} viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </button>
                <button className={styles.socialButton}>
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
