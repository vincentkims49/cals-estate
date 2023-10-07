import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="" >
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-gray-600 px-2">{subtitle}</p>
      </div>
    </>
  )
}

export default Heading