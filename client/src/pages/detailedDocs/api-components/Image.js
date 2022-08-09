import React from 'react'

const Image = ({ content }) => {
  return (
    <>
      <img
        style={{
          display: "block",
          objectFit: "contain",
          margin: "3rem 0"
        }}
        src={content}
        alt="code"
        width={"100%"}

      />
    </>
  )
}

export default Image