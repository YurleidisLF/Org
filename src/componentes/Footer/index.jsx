import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://github.com/YurleidisLF'>
            <img src="/img/github.png" alt='Git Hub' />
        </a>
        <a href='https://www.instagram.com/fuentesyurleidys'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' className="logo" alt='org' />
    <strong>Desarrollado por: Yurleidis López</strong>
</footer>
}

export default Footer
