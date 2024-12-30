import React from 'react';
import { Flame } from 'lucide-react';
import { Facebook, Linkedin } from 'lucide-react';

const SignupForm = () => {
  return (
    <div className="min-h-screen flex p-6 items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="w-full  max-w-3xl bg-slate-900/90 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative">
          {/* Curved background with logo */}

          <div className="absolute  -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
            <div className="absolute bottom-12 right-12 p-4">
              <Flame size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white pt-12 pl-60 mb-8">Blaze Gear</h1>
        </div>

        <form className="p-14 w-full max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="firstName"
              />
              <label
                htmlFor="firstName"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                First Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="lastName"
              />
              <label
                htmlFor="lastName"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Repeat the same pattern for other inputs */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
              peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
              peer-focus:bg-slate-900"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
              id="password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
              peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
              peer-focus:bg-slate-900"
            >
              Password
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="country"
              />
              <label
                htmlFor="country"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                Country
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone no."
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="phone"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                Phone no.
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="state"
              />
              <label
                htmlFor="state"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                State
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="city"
              />
              <label
                htmlFor="city"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                City
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Street"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="street"
              />
              <label
                htmlFor="street"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                Street
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Zip code"
                className="w-full p-3 pl-4 rounded-xl bg-slate-800/50 border-2 border-blue-900/30 text-white placeholder-transparent peer focus:outline-none focus:border-blue-600"
                id="zipcode"
              />
              <label
                htmlFor="zipcode"
                className="absolute left-4 -top-2.5 text-sm text-blue-400 bg-slate-900 px-2 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400
                peer-focus:bg-slate-900"
              >
                Zip code
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold 
            hover:from-blue-700 hover:to-blue-900 transition-all transform hover:-translate-y-0.5"
          >
            Create Account
          </button>
        </form>

        <div className="pb-8 text-center text-white">
          <p className="mb-4">Already have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Login</a></p>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-3">or sign up with</p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                <Facebook size={20} className="text-white" />
              </button>
              <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                <Linkedin size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;