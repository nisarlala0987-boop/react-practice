import { runcontext } from "./context";
import { useContext } from "react";

import React from 'react'
function Data() {
  const data = useContext(runcontext)
  return (
    <div>
    {data}</div>
  )
}

export default Data