import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
    const [view, setView] = useState("login"); // 'login' or 'forgotPassword'
    const [otpStep, setOtpStep] = useState(1); // 1: Phone Input, 2: OTP Input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert("Login Successful (Demo)\nEmail: " + email);
    };

    const handleSendOTP = (e) => {
        e.preventDefault();
        if (phoneNumber.length < 10) {
            alert("Please enter a valid phone number");
            return;
        }
        setOtpStep(2);
        alert(`OTP sent to ${phoneNumber}`);
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        if (otp.length < 4) {
            alert("Please enter valid OTP");
            return;
        }
        alert("Password Reset Successful! (Demo)");
        setView("login");
        setOtpStep(1);
        setPhoneNumber("");
        setOtp("");
    };

    return (
        <div className="login-container">
            {view === "login" ? (
                <div className="login-card">
                    <h2>Lab Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="action-btn">
                            Login
                        </button>
                        <button
                            type="button"
                            className="link-btn"
                            onClick={() => setView("forgotPassword")}
                        >
                            Forgot Password?
                        </button>
                    </form>
                </div>
            ) : (
                <div className="login-card">
                    <h2>Reset Password</h2>
                    <p style={{ fontSize: "13px", marginBottom: "20px", color: "#ddd" }}>
                        {otpStep === 1
                            ? "Enter your phone number to receive a verification code."
                            : `Enter the OTP sent to ${phoneNumber}`
                        }
                    </p>

                    {otpStep === 1 ? (
                        <form onSubmit={handleSendOTP}>
                            <div className="input-group">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="input-field"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    pattern="[0-9]{10}"
                                    title="10 digit phone number"
                                />
                            </div>
                            <button type="submit" className="action-btn">
                                Send OTP
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="input-field"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    maxLength="6"
                                />
                            </div>
                            <button type="submit" className="action-btn">
                                Verify OTP
                            </button>
                        </form>
                    )}

                    <button
                        type="button"
                        className="action-btn back-btn"
                        onClick={() => {
                            setView("login");
                            setOtpStep(1);
                        }}
                    >
                        Back to Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
