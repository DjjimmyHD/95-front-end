import React from 'react'
import Student from './Student'

const StudentList = (props) => {
  console.log(props)
  const student = props.students.map((student, index) => {
    return (<Student key={index} info={student} />)
  })
  return (
    <section>
      <h2>Job Listings</h2>
      <ul >
        {student}
      </ul>
    </section>
  )
}
export default StudentList
