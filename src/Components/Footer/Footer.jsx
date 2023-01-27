import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer_content_container">
                <div className="footer_row">
                    <p><FaFacebookF className="footer_icon" ><a href="https://www.facebook.com/profile.php?id=100009120165927"></a></FaFacebookF>
                        <FaInstagram className="footer_icon"><a href="https://www.instagram.com/rahul_kr_._/"></a> </FaInstagram>
                        <FaTwitter className="footer_icon"><a href="https://twitter.com/RahulKu51580399"></a></FaTwitter>
                    </p>
                </div>
                <div className="footer_row"></div>
                <div className="footer_row"></div>
            </div>
        </div>
    )
}

export default Footer