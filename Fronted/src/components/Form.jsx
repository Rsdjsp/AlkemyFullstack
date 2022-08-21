import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalChange } from "../features/operSlice";

const ContainerForm = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #01162787;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewForm = styled.form`
  border: 2px solid #011627;
  border-radius: 5px;
  width: 40%;
  background-color: #fafafa;
  margin: auto;
  height: 90%;
  display: flex;
  flex-direction: column;
  color: #011627;
  padding-top: 10px;

  & > h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  & > input {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    height: 25px;
    margin-bottom: 10px;
    border: 1px solid #011627;
    border-radius: 4px;
  }

  & > label {
    width: 71%;
    margin-left: auto;
    margin-right: auto;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-weight: 500;
  }

  & > select {
    width: 71%;
    margin-left: auto;
    margin-right: auto;
    height: 28px;
    margin-bottom: 10px;
    border: 1px solid #011627;
    border-radius: 4px;
  }

  & > #buttonContainer {
    width: 71%;
    margin: auto;
    display: flex;

    & > #ok,
    #cancel {
      width: 50%;
      margin: 2px;
      height: 30px;
      color: #fafafa;
      text-transform: capitalize;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      border: 1px solid #4b8f8c;
      border-radius: 8px;
      background-color: #4b8f8c;
      cursor: pointer;
      :hover {
        color: #4b8f8c;
        background-color: #fafafa;
      }
    }
    & #cancel {
      background-color: #cc444b;
      border: 1px solid #cc444b;
      :hover {
        :hover {
          color: #cc444b;
          background-color: #fafafa;
        }
      }
    }
  }
`;

export default function Form() {
  const dispatch = useDispatch();
  return (
    <ContainerForm>
      <NewForm>
        <h2>Enter a new Operation</h2>
        <label htmlFor="concepto">Concepto</label>
        <input type="text" name="concepto" id="concepto" />
        <label htmlFor="monto">monto</label>
        <input type="text" name="monto" id="monto" placeholder="$" />
        <label htmlFor="tipo">Tipo</label>
        <select name="tipo" id="tipo">
          <option value="1">INGRESO</option>
          <option value="2">EGRESO</option>
        </select>
        <label htmlFor="categoria">Categoria</label>
        <input type="text" name="categoria" id="categoria" />
        <div id="buttonContainer">
          <button
            id="cancel"
            onClick={() => {
              dispatch(modalChange(false));
            }}
          >
            Cancel
          </button>
          <button id="ok">Add</button>
        </div>
      </NewForm>
    </ContainerForm>
  );
}
