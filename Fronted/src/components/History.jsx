import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const TableReg = styled.table`
  border: 2px solid #011627;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  height: fit-content;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: scroll;
  border-radius: 5px;
`;

const Columns = styled.th`
  border-bottom: 2px solid #4b8f8c;
  text-transform: capitalize;
  width: fit-content;
  margin: 0;
`;

const Rows = styled.td`
  text-align: center;
  text-transform: capitalize;
`;

const Edit = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    color: #6c969d;
  }
`;

const Remove = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;

  cursor: pointer;
  :hover {
    color: #cc444b;
  }
`;

export default function History() {
  const { registers } = useSelector((state) => state.operations);

  return (
    <TableReg>
      <thead>
        <tr>
          <Columns>id</Columns>
          <Columns>concepto</Columns>
          <Columns>monto</Columns>
          <Columns>fecha</Columns>
          <Columns>tipo</Columns>
          <Columns>categoria</Columns>
          <Columns>user</Columns>
        </tr>
      </thead>
      <tbody>
        {registers.map(
          ({ id, concepto, monto, fecha, tipo, categoria, user }) => {
            return (
              <tr key={id}>
                <Rows>{id}</Rows>
                <Rows>{concepto}</Rows>
                <Rows>{monto}</Rows>
                <Rows>{fecha.slice(0, 10)}</Rows>
                <Rows>{tipo}</Rows>
                <Rows>{categoria}</Rows>
                <Rows>{user.name}</Rows>
                <Rows>
                  <Edit>
                    <AiOutlineEdit />
                  </Edit>
                </Rows>
                <Rows>
                  <Remove>
                    <FaTrash />
                  </Remove>
                </Rows>
              </tr>
            );
          }
        )}
      </tbody>
    </TableReg>
  );
}
