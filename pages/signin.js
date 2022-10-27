import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const signin = () => {
  const { googleSignIn, user } = UserAuth();

  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <div className="signin">
        <h1>Sign In</h1>
      </div>
      <div className="signin">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </>
  );
};

export default signin;
