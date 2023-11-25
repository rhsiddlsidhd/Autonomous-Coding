import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  //회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in
        const user = userCredential.user;
        console.log("User registered:", user.uid);
        // You can perform additional actions here if needed
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          `Registration failed with error code ${errorCode}: ${errorMessage}`
        );
        // Handle specific error cases if needed
      });
  };

  //로그인
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User logged in:", user.uid);
        alert("로그인되었습니다");
        // You can perform additional actions here if needed
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          `Login failed with error code ${errorCode}: ${errorMessage}`
        );
        alert("실패하였습니다");
      });
  };

  return (
    <>
      <Logincontainer>
        <Loginform
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}
        >
          <h2>회원가입</h2>
          <div>
            email :{" "}
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            password :{" "}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              registerUser();
            }}
          >
            {" "}
            회원가입{" "}
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              loginUser();
            }}
          >
            로그인
          </button>
        </Loginform>
      </Logincontainer>
    </>
  );
};

export default Login;

const Logincontainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Loginform = styled.form``;
