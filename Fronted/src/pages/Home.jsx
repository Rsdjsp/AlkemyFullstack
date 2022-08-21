import React from "react";
import { useSelector } from "react-redux";
import Balance from "../components/Balance";
import Form from "../components/Form";
import History from "../components/History";

export default function Home() {
  const { modal } = useSelector((state) => state.operations);
  return (
    <>
      <Balance />
      <History />
      {modal && <Form />}
    </>
  );
}
