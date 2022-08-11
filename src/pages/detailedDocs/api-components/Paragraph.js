import React from 'react'



const Paragraph = ({ content }) => {
  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </>
  )
}

export default Paragraph