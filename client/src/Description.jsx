import React from 'react'

const Description = ({show, description}) => {
    return (
      <tr><td className="description" colSpan="2">{show && show ? <p>{description}</p> : null}</td></tr>
    )
}

export default Description