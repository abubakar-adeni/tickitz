import React from 'react'
import { isMobile } from 'react-device-detect'

export default function Test() {
  return (
   <>
   {isMobile ? (
        <p>Anda menggunakan perangkat mobile.</p>
      ) : (
        <p>Anda tidak menggunakan perangkat mobile.</p>
      )}
   
   </>
  )
}
