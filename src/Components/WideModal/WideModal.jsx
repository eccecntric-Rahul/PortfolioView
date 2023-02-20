import React from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './WideModal.css'
import {RxCross2} from "react-icons/rx"
const modalStyle={width: "60vw",
minHeight: "100vh",
borderRadius: "1%",
marginTop: "10vh",
backgroundColor:"rgb(20,20,20)",
overflowY:"scroll",
padding:0
}

const WideModal = (props) => {
    const { setModalVisible, modalVisible } = props;
    return (
        <div>
            <Rodal visible={modalVisible} onClose={()=>{}} className="modal" customStyles={modalStyle} showCloseButton={false}>
                <span className="modal_cross">
                <RxCross2 className="modal_cross_icon" onClick={()=>setModalVisible(false)}/>
                </span>
                {props.children}
            </Rodal>
        </div>
    )
}

export default WideModal