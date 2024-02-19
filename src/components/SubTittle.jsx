import React from 'react'

const SubTittle = ({ label, className }) => {
  return (
    <h3 className={`text-3xl ${className}`} >{label}</h3>
  )
}

export default SubTittle;