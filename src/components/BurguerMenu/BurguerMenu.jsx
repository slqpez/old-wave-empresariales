import React from 'react'
import burguerMenuStyles from "./burguerMenu.module.css"

function BurguerMenu({handleShowMenu}) {
  return (
    <div>
      <div className={burguerMenuStyles.btnBurguer} onClick={handleShowMenu}></div>
    </div>
  )
}

export default BurguerMenu
