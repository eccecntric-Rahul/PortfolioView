import React, { useRef, useState } from 'react'
import Card from '../Card';
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import './Row.css'

const Row = (props) => {
    const { title ,cards} = props;
    const scrollRef=useRef(null);
    const [scrollOffset,setScrollOffset]=useState()
    const scrollPrev=()=>{
        if(scrollRef && scrollRef.current)
        scrollRef.current.scrollLeft -= 200
    }
    const scrollNext=()=>{
        if(scrollRef && scrollRef.current)
        scrollRef.current.scrollLeft += 200
    }
    const handleScroll=()=>{
        setScrollOffset(scrollRef?.current?.scrollLeft)
    }
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
                <div  className={scrollOffset!==0?"left_arrow_container show_left_arrow":"left_arrow_container"}>
                <Arrow type="left" onClick={() => scrollPrev()} />
                </div>
                <div className={scrollOffset>=0?"right_arrow_container show_right_arrow":"right_arrow_container"}>
                <Arrow type="right" onClick={() => scrollNext()} />
                </div>
            <div className="card_section"  ref={scrollRef} onScroll={handleScroll}>
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

function Arrow (props){
    const {type}=props;
    switch(type){
        case 'left': return <BsChevronLeft {...props}  className="left_arrow arrow"/>
        case 'right': return <BsChevronRight {...props} className="right_arrow arrow"/>
    }
}

export default Row

