import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/Ai'
import './Footer.scss'

export function Footer() {
    return(
        <footer>
            <div className="content-footer">
                <div className="nets">
                    <div className="method">
                        <a href='https://github.com/frontRocha' target='_blank'><i><AiFillGithub /></i></a>
                    </div>
                    <div className="method">
                        <a href='https://www.linkedin.com/in/frontrocha' target='_blank'><i><AiFillLinkedin /></i></a>
                    </div>
                    <div className="method">
                        <a href='https://api.whatsapp.com/send?phone=5543998293565&text=Ol%C3%A1!' target='_blank'><i><AiOutlineWhatsApp /></i></a>
                    </div>
                </div>
                <p>Entre em contato comigo</p>
            </div>
        </footer>
    )
}