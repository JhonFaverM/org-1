import "./Footer.css"
import footerImage from "./Image/footer.png"; 

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: `url(${footerImage})` }}>
        <div className='redes'>
        <a href='https://www.aluracursos.com/'>
                <img src={footerImage} alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Jhon Machado</strong>
    </footer>
}

export default Footer
