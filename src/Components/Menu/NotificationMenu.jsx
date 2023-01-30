import React from 'react'
import {FaRegBell,FaCaretUp} from 'react-icons/fa'
import './Menu.css'
const  NotificationMenu= () => {
    const notiData= [{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'},{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'},{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'},{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'},{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'},{imageSrc:'https://picsum.photos/800/1200?random=1',title:'Welcome !!',time:'Just now',type:'New Arrival'}]
  return (
    <div className="noti_menu">
    <FaRegBell className="navbar_icon"/>
    <FaCaretUp className="noti_menu_up_icon"/>
    <div className="noti_menu_list">
    {notiData?.map((noti)=>{
        return  <div className='noti_list_item' key={noti?.name}>
      <img src={noti?.imageSrc} alt={noti?.title} className="noti_list_image" />
      <div>
      <div className='noti_menu_title'>{noti?.type}</div>
      <div className='noti_menu_title'>{noti?.title}</div>
      <div className='noti_menu_time'>{noti?.time}</div>
      </div>
  </div> 
    })}
</div>
</div>
  )
}

export default NotificationMenu;