import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectBtn({ title, path }) {
  const navigate = useNavigate();

  return <button onClick={() => navigate(path)}>{title}</button>;
}
