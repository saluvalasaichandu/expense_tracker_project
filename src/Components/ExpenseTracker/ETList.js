import React from 'react'

const ETList = (props) => {
  return (
    <div>
        <div >{props.amount}</div>
        <div>{props.description}</div>
        <div >{props.category}</div>
    </div>
  )
}

export default ETList