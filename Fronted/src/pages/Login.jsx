import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { loginUser, registerUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
// import Modal from "../components/Modal";

const LoginForm = styled.div`
  width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  background: linear-gradient(to right, #fcfeff 50%, #f2f2f2 100%);
  padding-top: 80px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > form {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
      text-align: center;
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 30px;
      color: #011627;
    }

    & > input {
      height: 35px;
      width: 45%;
      margin-bottom: 15px;
      outline: none;
      background-color: #fafafa;
      border: 1.5px solid #a6a6a6;
    }

    & > p {
      margin: 0;
      width: 45%;
      font-size: 11px;
      font-weight: 500;
      text-align: end;
      cursor: pointer;
      :hover {
        text-decoration-line: underline;
        text-underline-offset: 4px;
        font-weight: bolder;
      }
    }

    & > button {
      width: 45%;
      height: 35px;
      border: none;
      margin-top: 35px;
      font-size: 15px;
      text-transform: uppercase;
      color: #fafafa;
      background-color: #4b8f8c;
      border-radius: 0.125rem;
      box-shadow: 0px 11px 11px 0px rgba(50, 50, 50, 0.1);
      cursor: pointer;
      :hover {
        background-color: #fafafa;
        color: #4b8f8c;
        border: 1px solid #4b8f8c;
        font-size: 16px;
      }
    }
  }
  & > div {
    width: 22.17%;
    display: flex;
    flex-direction: column;

    & > h4 {
      margin-top: 50px;
      font-size: 13px;
      font-weight: 500;
    }
  }
  & > #account {
    background-color: transparent;
    border: none;
    margin-top: 50px;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-offset: 4px;
    :hover {
      font-weight: 600;
    }
  }
`;

export default function Login() {
  const [login, setLogin] = useState(true);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const signIn = (event) => {
    event.preventDefault();
    setModal(true);
    if (!login) {
      const {
        email: { value: email },
        password: { value: password },
        firstname: { value: firstname },
        lastname: { value: lastname },
      } = event.target;
      //   dispatch(registerUser({ firstname, lastname, email, password }));
    } else {
      const {
        email: { value: email },
        password: { value: password },
      } = event.target;
      //   dispatch(loginUser({ email, password }));
    }
    setTimeout(() => {
      navigate("/");
      setModal(false);
    }, 1500);
  };

  return (
    <>
      <LoginForm>
        <form onSubmit={signIn}>
          <h1>{login ? "Login" : "Create an Account"}</h1>
          {!login && (
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              required
            />
          )}
          {!login && (
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              required
            />
          )}
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          {login && <p>FORGOT PASSWORD?</p>}
          <button>{login ? "SIGN IN" : "SIGN UP"}</button>
        </form>

        <button onClick={() => setLogin(!login)} id="account">
          {login ? "Create Account" : "Login"}
        </button>
      </LoginForm>
      {/* {modal && <Modal message={"Welcome !"} />} */}
    </>
  );
}
