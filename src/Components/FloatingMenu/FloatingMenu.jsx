import React from 'react'
import "./FloatingMenu.css"
const FloatingMenu = () => {
    const arr= ['rahul',"kapil"]
  return (
    <div className="floating_menu">
        <div className="floating_menu_heading">
            Related Articles
        </div>
        <div className="floating_item_section">
        {arr.map(item=><div className="floating_menu_item">{item}</div>)}
        </div>
    </div>
  )
}

export default FloatingMenu