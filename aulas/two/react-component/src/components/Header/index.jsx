import java from '../../assets/images/java-logo.webp'
import './styles.css'

export default function Header() {
    return(
    <header>
    {/* Jeito correto de chamar a imgaem, importanto ela */}
        <img src={java} alt="" />
        <nav>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
        </nav>
        <div className="btn-wrapper">
            <button type="button">Sign in</button>
            <button type="button">Sign up</button>
        </div>
    </header>
    )
}