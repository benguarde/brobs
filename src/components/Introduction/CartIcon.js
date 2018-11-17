import React from 'react'

const CartIcon = props => (
  <svg width={64} height={64} {...props}>
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={20}
      cy={57}
      r={6}
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={44}
      cy={57}
      r={6}
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M26 57h12M14 57L10 2H0M13 43l43-3 7-30H11M20 10l2-6h10l2 6"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M32 4l5-3h16l3 9"
    />
  </svg>
)

export default CartIcon
