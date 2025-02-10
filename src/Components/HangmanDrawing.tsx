import React from 'react'

const Head = () => {
  return(
    <div
    style={{
      width: "1.2rem",
      height: "1.2rem",
      borderRadius: "50%",
      border: "1rem solid blue",
      position: "absolute",
      backgroundColor: "blue",
      top: "5.5rem",
      right: "-1.1rem"

    }}
    ></div>
  )
}

const Body = () => {
  return(
    <div
    style={{
      width: "1rem",
      height: "8rem",
      position: "absolute",
      backgroundColor: "blue",
      top: "7rem",
      right: "0"
    }}
    ></div>
  )
}

const RightArm = () => {
  return(
    <div
    style={{
      width: "5rem",
      height: "1rem",
      position: "absolute",
      backgroundColor: "blue",
      top: "11rem",
      right: "-4rem",
      rotate: "20deg"
    }}
    ></div>
  )
}

const RightLeg = () => {
  return(
    <div
    style={{
      width: "5rem",
      height: "1rem",
      position: "absolute",
      backgroundColor: "blue",
      top: "15.5rem",
      right: "-3rem",
      rotate: "65deg"
    }}
    ></div>
  )
}

const LeftArm = () => {
  return(
    <div
    style={{
      width: "5rem",
      height: "1rem",
      position: "absolute",
      backgroundColor: "blue",
      top: "11rem",
      right: "0rem",
      rotate: "-20deg",
    }}
    ></div>
  )
}

const LeftLeg = () => {
  return(
    <div
    style={{
      width: "5rem",
      height: "1rem",
      position: "absolute",
      backgroundColor: "blue",
      top: "15.5rem",
      right: "-1rem",
      rotate: "-65deg"
    }}
    ></div>
  )
}



const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((Part, index) => (
  <Part key={index} />
))}
      <div
        style={{
          height: "3rem",
          width: "1rem",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "1rem",
          width: "12rem",
          background: "black",
          marginLeft: "7rem",
        }}
      />
      <div
        style={{
          height: "20rem",
          width: "1rem",
          background: "black",
          marginLeft: "7rem",
        }}
      />
      <div
        style={{
          height: "1rem",
          width: "15rem",
          background: "black",
        }}
      />
    </div>
  )
}



export default HangmanDrawing