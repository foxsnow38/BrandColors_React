import React from 'react'

export default function Copied({color}) {
    return (
        <div className='copied'>
          Copied To <b>{'#'+color}</b> Clipboard
        </div>
    )
}
