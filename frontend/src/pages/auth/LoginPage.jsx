import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-8 px-4">
      
      {/* Logo & Tagline */}
      <div className="flex flex-col gap-3 justify-center items-center text-secondary text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playball">Refuge</h1>
        <p className="font-playfair text-sm sm:text-base md:text-lg lg:text-xl px-4">
          You're not alone—find wisdom, encouragement, and Refuge in Christ and community.
        </p>
      </div>

      {/* Card */}
      <div className="card border-secondary border-[3px] text-neutral-content w-9/12 sm:w-96 min-w-[280px]">
        <div className="card-body items-center text-center gap-4">
          
          {/* Sign-in Form */}
          <LoginForm />

          {/* Divider with Text */}
          <div className="flex items-center w-full">
            <div className="flex-grow h-[2px] bg-secondary"></div>
            <span className="px-2 text-xs sm:text-sm text-secondary font-playfair">
              Have no account? <Link to="/signup" className="font-bold">Sign Up</Link>
            </span>
            <div className="flex-grow h-[2px] bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage