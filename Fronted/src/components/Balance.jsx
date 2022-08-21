import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalChange } from "../features/operSlice";

const Resume = styled.div`
  padding-top: 2%;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8%;

  & > h1 {
    font-size: 3rem;
    margin-bottom: auto;
    color: #011627;
  }

  & > h2 {
    font-size: 2.3rem;
    color: #6c969d;
    margin-top: auto;
  }

  & > button {
    color: #fafafa;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    font-size: 1.2rem;
    padding: 15px 12px 15px 12px;
    border: 1px solid #4b8f8c;
    border-radius: 8px;
    background-color: #4b8f8c;
    cursor: pointer;
    :hover {
      color: #4b8f8c;
      background-color: #fafafa;
    }
  }
`;

export default function Balance() {
  const dispatch = useDispatch();
  return (
    <>
      <Resume>
        <h1>Your acount balance is :</h1>
        <h2>$ 100,000.00</h2>
        <button
          onClick={() => {
            dispatch(modalChange(true));
          }}
        >
          New Entry
        </button>
      </Resume>
    </>
  );
}
