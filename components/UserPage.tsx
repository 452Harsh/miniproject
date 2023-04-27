import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const UserPage = ({ toggleLogin }:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogIn, setIsLogIn] = useState(true);
  const { login, signup, currentUser } = useAuth();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { logout } = useAuth();

  function handlelogin() {
    setIsLogIn(true);
  }
  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter valid email and password");
      return;
    }
    if (isLogIn) {
      try {
        await login(email, password);
        setIsLoggedIn(false)
      } catch (err) {
        setError("Incorrect email and password");
      }
      return;
    }

    await signup(email, password);
  }
  console.log();
  return (
    <div>
      {isLoggedIn ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="flex flex-col p-6 border rounded-md gap-3 bg-white">
            <div className="flex justify-end">
              <CloseIcon onClick={toggleLogin} className="h-5" />
            </div>
            <div className="flex  flex-col gap-5 border border-gray-200 p-6 pt-0 rounded ">
              <div className="grid grid-cols-2">
                <span
                  onClick={() => setIsLogIn(!isLogIn)}
                  className={
                    "flex justify-center text-xl font-serif p-2 " +
                    (isLogIn ? "border-t-4 border-indigo-500" : " bg-gray-100")
                  }
                >
                  Sign In
                </span>
                <span
                  onClick={() => setIsLogIn(!isLogIn)}
                  className={
                    "flex justify-center text-xl font-serif p-2 " +
                    (!isLogIn ? "border-t-4 border-indigo-500" : " bg-gray-100")
                  }
                >
                  Sign Up
                </span>
              </div>
              {error && (
                <div className="w-full max-w-[35ch] border-rose-300 text-rose-300 py-2 border border-solid text-center">
                  {error}
                </div>
              )}

              <div className="inline-flex gap-1 border border-gray-300 rounded-md p-2 w-96 ">
                <PersonIcon className="text-gray-400" sx={{ fontSize: 34 }} />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none"
                  placeholder="E-Mail"
                />
              </div>
              <div className="inline-flex gap-1 border border-gray-300 rounded-md p-2 w-96">
                <LockIcon className="text-gray-400" sx={{ fontSize: 34 }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="outline-none w-full max-w-[35ch]"
                />
              </div>

              <button
                onClick={submitHandler}
                className="border rounded text-bold bg-green-600 text-white p-3 font-serif text-xl"
              >
                {isLogIn ? <div>Sign in</div> : <div>Sign up</div> }
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Logout</div>
      )}
    </div>
  );
};

export default UserPage;
