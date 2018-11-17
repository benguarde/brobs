import React from 'react'

const ServerIcon = props => (
  <svg width={64} height={64} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="bevel"
      strokeMiterlimit={10}
      d="M59 56c0 3.866-11.641 7-26 7S7 59.866 7 56M59 40c0 3.866-11.641 7-26 7S7 43.866 7 40M59 24c0 3.866-11.641 7-26 7S7 27.866 7 24"
    />
    <ellipse
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="bevel"
      strokeMiterlimit={10}
      cx={33}
      cy={8}
      rx={26}
      ry={7}
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="bevel"
      strokeMiterlimit={10}
      d="M7 8v48M59 8v48"
    />
  </svg>
)

export default ServerIcon
