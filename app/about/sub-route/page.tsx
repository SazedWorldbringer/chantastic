"use client";

import { useState } from "react"

const SubRoute = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>count is {count}</p>
      <button onClick={handleClick}>inc</button>
    </>
  )
}

export default SubRoute;
