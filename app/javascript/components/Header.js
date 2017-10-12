import React from 'react'

export default function Header(props) {
  return (
    <header>
      <h1>Packnova</h1>
      <p>Rails/Webpacker/Hypernova example</p>
      <div>
        Links:
        <a href="/">home</a>
        /
        <a href="/about">about</a>
      </div>
      <hr />
    </header>
  )
}
