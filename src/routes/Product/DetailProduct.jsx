import React from 'react'
import { useParams } from 'react-router-dom';

export default function DetailProduct() {
  const { id } = useParams();
  return (
    <div>DetailProduct {id}</div>
  )
}
