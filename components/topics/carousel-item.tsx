import React from 'react'

interface CarouselValue {
  names: Array<string>
  rows: number
}

const CarouselItem: React.FC<CarouselValue> = ({ names, rows }) => {
  const namesLen = names.length
  return (
    <div>
      Item
    </div>
  )
}

export default CarouselItem
