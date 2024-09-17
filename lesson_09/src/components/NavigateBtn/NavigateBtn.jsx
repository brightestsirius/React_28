import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateBtn({ path, title }) {
  const navigation = useNavigate();

  return <button onClick={() => navigation(path)}>{title}</button>;
}
