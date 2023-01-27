import React, { useEffect, useState } from 'react'
import Card from '../Card';
import './Row.css'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const Row = (props) => {
    const { title ,cards} = props;
    
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className="card_section">
                {cards?.map((card, index) => (
                  <Card
                  title={card.name}
                  key={card.name+index}
                  card={card}
                  index={index}
                  />
                  ))}
                  </div>
        </div>
    )
}
// function LeftArrow() {
//     const { isFirstItemVisible, scrollPrev } =
//       React.useContext(VisibilityContext);
  
//     return (
//       <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       </Arrow>
//     );
//   }
  
//   function RightArrow() {
//     const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
//     return (
//       <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       </Arrow>
//     );
//   }
// function Arrow (props){
//     const {type}=props;
//     switch(type){
//         case 'left': return <FaAngleLeft onClick={props.onClick} className="arrow"/>
//         case 'right': return <FaAngleRight onClick={props.onClick} className="arrow"/>
//     }
// }

export default Row


// https://ibb.co/YWFHq2j  <a href="https://imgbb.com/"><img src="https://i.ibb.co/1ntFwZ2/c-1.png" alt="c-1" border="0" /></a> done
// https://ibb.co/VMBb4St done
// https://ibb.co/Tt70dSt done
// https://ibb.co/h1Qzsw1 done
// https://ibb.co/vZshtTv done
// https://ibb.co/LNbbhcW done
// https://ibb.co/VxXjBJq done
// https://ibb.co/zZTqdf1 done
// https://ibb.co/XXfdT6j done
// https://ibb.co/mJ4qYXM done
// https://ibb.co/gWSVxSD done
// https://ibb.co/bN92mPY done
// https://ibb.co/Ln30yQv done
// https://ibb.co/S7pFCgS done
// https://ibb.co/sj9Jyqn done
// https://ibb.co/6ytJfZ5 done