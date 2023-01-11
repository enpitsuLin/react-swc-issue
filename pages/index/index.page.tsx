import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <p>change /pages/index/index.page.tsx to test HMR</p>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
