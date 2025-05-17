"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AuthForm = () => {
  const [step, setStep] = useState<
    "sign-in" | "sign-up" | "otp" | "forgot-password" | "forgot-otp"
  >("sign-in");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    agree?: string;
  }>({});

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      (step === "sign-in" || step === "sign-up") &&
      !validatePassword(password)
    ) {
      newErrors.password =
        "Password must be 8+ chars, include upper/lowercase, number & symbol.";
    }

    if (step === "sign-up" && !agreed) {
      newErrors.agree = "You must agree to continue.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (step === "sign-up") {
        setStep("otp");
      } else if (step === "sign-in") {
        console.log("Sign In Success:", { email, password });
      } else if (step === "forgot-password") {
        setStep("forgot-otp");
      } else if (step === "forgot-otp") {
        console.log("OTP Verified, allow to reset password.");
      } else if (step === "otp") {
        console.log("Sign Up OTP Verified");
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bggradient.svg"
          alt="gradient"
          fill
          className="object-cover object-center"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#616161]/[0.13] border border-white/10 backdrop-blur-4xl rounded-xl shadow-xl w-full max-w-md px-8 py-10 space-y-6 transition-all duration-500"
      >
        <h2 className="text-xl font-semibold text-center capitalize">
          {
            {
              "sign-in": "Sign In",
              "sign-up": "Sign Up",
              otp: "Enter OTP",
              "forgot-password": "Forgot Password",
              "forgot-otp": "Enter OTP",
            }[step]
          }
        </h2>

        {/* Sign-Up Name Input */}
        {step === "sign-up" && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 w-full bg-white/10 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
        )}

        {/* Email Input */}
        {step !== "otp" && (
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full bg-white/10 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            {errors.email && (
              <p className="text-sm text-[#FECACA] mt-1">{errors.email}</p>
            )}
          </div>
        )}

        {/* Password */}
        {(step === "sign-in" || step === "sign-up") && (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 w-full bg-white/10 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/30 pr-10 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-white/60"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-sm text-[#FECACA] mt-1">{errors.password}</p>
            )}
          </div>
        )}

        {/* OTP Field */}
        {(step === "otp" || step === "forgot-otp") && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="px-4 py-2 w-full bg-white/10 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep("sign-in")}
              className="w-full text-white "
            >
              Back to Login
            </Button>
          </>
        )}

        {/* Terms and Conditions */}
        {step === "sign-up" && (
          <label className="flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => {
                setAgreed(!agreed);
                if (errors.agree) setErrors((e) => ({ ...e, agree: "" }));
              }}
              className="accent-[#4CFFAB] rounded bg-transparent border-white/20"
            />
            I agree to all Terms and Conditions.
          </label>
        )}
        {errors.agree && (
          <p className="text-sm text-[#FECACA]">{errors.agree}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#4CFFAB] hover:bg-[#00FF67] text-black rounded-sm"
        >
          {
            {
              "sign-in": "Sign In",
              "sign-up": "Sign Up",
              otp: "Verify OTP",
              "forgot-password": "Send OTP",
              "forgot-otp": "Verify OTP",
            }[step]
          }
        </Button>

        {/* Forgot Password Link */}
        {step === "sign-in" && (
          <div className="text-center text-sm text-white/70">
            <button
              onClick={() => {
                setStep("forgot-password");
                setErrors({});
              }}
              type="button"
              className="hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        )}

        {/* Toggle Sign-In/Sign-Up */}
        {step !== "otp" && step !== "forgot-otp" && (
          <div className="text-sm text-white/80 text-center">
            {step === "sign-in"
              ? "New to Stuzip?"
              : step === "sign-up"
              ? "Already have an account?"
              : "Remembered your password?"}
            <button
              type="button"
              onClick={() => {
                setStep(step === "sign-in" ? "sign-up" : "sign-in");
                setErrors({});
              }}
              className="text-white font-semibold hover:underline ml-1"
            >
              {step === "sign-in" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        )}

        {/* Footer */}
        <p className="text-xs text-white/60 text-center mt-2">
          This page is protected by reCAPTCHA to ensure you're not a bot.
        </p>
        <div className="text-xs text-blue-500 hover:underline text-center">
          <a href="#">Learn More</a>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
