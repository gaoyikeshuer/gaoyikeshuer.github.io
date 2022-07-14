import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/pictures/sun.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faHome, faPaintbrush, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'Logo' to = '/'>
            <img src = {LogoS} alt = 'Logo'/>
        
        </Link>

        <nav>
            <NavLink exact= "true" activeclassname = "active" to="/">
                <FontAwesomeIcon icon ={faHome} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact= "true" activeclassname = "active" className='about-link' to="/about">
                <FontAwesomeIcon icon ={faUser} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact= "true" activeclassname = "active" className='coding-link' to="/coding">
                <FontAwesomeIcon icon ={faCode} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact= "true" activeclassname = "active" className='design-link' to="/design">
                <FontAwesomeIcon icon ={faPaintbrush} color = '#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel ="noreferrer" href="https://www.linkedin.com/in/yikegaotcd/">
                    <FontAwesomeIcon icon="fab fa-linkedin-in" color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar