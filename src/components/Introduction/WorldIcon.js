import React from 'react'

const WorldIcon = props => (
  <svg width={64} height={64} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M32.001.887C49.185.887 63.114 14.816 63.113 32 63.114 49.185 49.184 63.115 32 63.113 14.815 63.114.887 49.185.888 32.001.885 14.816 14.815.887 32.001.887zM32 1v62M63 32H1"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M30 1S16 12 16 32s14 31 14 31M34 1s14 11 14 31-14 31-14 31"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M8 12s5 10 24 10 24-10 24-10M8 52s5-10 24-10 24 10 24 10"
    />
  </svg>
)

export default WorldIcon
