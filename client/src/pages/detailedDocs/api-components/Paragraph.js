import React from 'react'



const Paragraph = ({ content }) => {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </>
  )
}

export default Paragraph