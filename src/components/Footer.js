const Footer = () => {
    return (
        <footer>
            <a href="https://api.whatsapp.com/send?phone=0123456789" className="btn-wsp" target="_blank" rel="noreferrer">
                <i className="fa fa-whatsapp icono"></i>
            </a>
            <div className="txtFooter">
                <p>Creado por <span className="negrita">Tom&aacute;s Dalla Bona</span>.</p>
            </div>
        </footer>
    );
}
export default Footer