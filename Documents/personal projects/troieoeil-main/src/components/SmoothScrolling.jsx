import React from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root>
    { children }
  </ReactLenis>
  )
}
