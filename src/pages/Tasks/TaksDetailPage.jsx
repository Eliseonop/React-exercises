import React from 'react'
import { useParams } from 'react-router-dom'
export default function TaksDetailPage () {
  const { id } = useParams()
  return (
    <div>
      <h1>Task detail - {id}</h1>
    </div>
  )
}
