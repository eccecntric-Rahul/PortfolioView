import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import {FaCaretRight,FaCaretDown} from 'react-icons/fa'
import styled from "styled-components";
import "./MyAccordion.css"
const MyAccordion = (props) => {
    const {heading,content}=props;
    const [visible,setVisible]=useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
<Accordion activeIndex={0} collapseIcon={"none"} expandIcon={"none"} style={props?.style} activeIndex={activeIndex}
          onTabChange={(e) => {setActiveIndex(e.index); setVisible(!visible)}}>
    <AccordionTab header={<span className="accordion_heading_container"> <ToggleIcon active={visible}/> <span className="accordion_heading">{heading}</span></span> } >
        <p className="m-0">
            {content}
        </p>
    </AccordionTab>
</Accordion>
    </>
  )
}

export const ToggleIcon = styled(FaCaretRight).attrs(
    (props) => ({})
  )`
    color: var(--red);
    cursor: pointer;
    transition: all ease-in-out 0.4s;    
    font-size:1.4rem;
    margin:0 1rem 0 0;
    ${(props) =>
      props.active &&
      `
        transform: rotate(90deg);
      `}
  `;


export default MyAccordion