import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Copyright Reserved</p>
            
                <Link to = '/about'>About</Link><br/>
                <Link to= '/contact'>Contact</Link>
           
        </footer>
    )
}

export default Footer
