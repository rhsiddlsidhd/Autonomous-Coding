import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  //회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navagate = useNavigate();

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in
        const user = userCredential.user;
        console.log(user.uid);
        alert("가입되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode} : ${errorMessage}`);
      });
  };

  //로그인
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        handleLogin();
        sessionStorage.setItem("userToken", user.accessToken);
        navagate("/detail");
        alert("로그인되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`로그인실패 ${errorCode}: ${errorMessage}`);
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
