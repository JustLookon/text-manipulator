import React from 'react'

export default function Alert(props) {
  const Capital1stChar=(word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert &&<div>
      <div className="alert alert-success" role="alert">
        <strong>{Capital1stChar(props.alert.type)}</strong> : {props.alert.msg}
    </div>
    </div>
  )
}
