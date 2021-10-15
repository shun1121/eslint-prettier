import React, { useState } from 'react'

const Hello: React.VFC = () => {
  const [increment, setIncrement] = useState<number>(0)

  const greetingText: (date: Date) => string = (date) => {
    const hours = date.getHours() + 1
    console.log(new Date().getHours())
    if (4 < hours && hours < 11) {
      console.log(hours)
      return 'Good Morning!!'
    } else if (11 < hours && hours < 17) {
      console.log(hours)
      return 'Good Afternoon!!'
    } else {
      console.log(hours)
      return 'Good Evening!!'
    }
  }
  const countUp = (): void => {
    setIncrement(increment + 1)
  }

  const countDown = (): void => {
    setIncrement(increment - 1)
  }
  return (
    <>
      <h2>Lets learn eslint-prettier setups</h2>
      <h1>{greetingText(new Date())}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <p>{increment}</p>
    </>
  )
}

export default Hello
