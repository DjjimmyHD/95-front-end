import React from 'react'

const Student = (props) => {
  console.log(props)
  return (
    <li>
      <h4>STUDENT INFO</h4>
      <small>{props.info.first}</small>
      <small>{props.info.last}</small>
      <p> Lat {props.info.lat} and Long {props.info.long}</p>
      <img src={props.info.favAnimal} alt={props.key} />
    </li>
  )
}
export default Student
