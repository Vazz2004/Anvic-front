import React from 'react'

function Loader ({ text }) {
  return (
    <div className="loader">
      <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64"></rect>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="black"
          fontSize="24"
          fontWeight="bold"
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

function App () {
  return (
    <div>
      <Loader text="A" />
      <Loader text="N" />
      <Loader text="V" />
      <Loader text="I" />
      <Loader text="C" />
    </div>
  )
}

export default App
