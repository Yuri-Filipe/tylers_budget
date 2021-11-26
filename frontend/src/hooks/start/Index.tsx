import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";

const Index = () => {
  const dispatch = useDispatch();
    const [state, setState] = useState(() => {});

  return [state, setState];
};

export default Index;
