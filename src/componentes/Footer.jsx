import './Footer.css'
export default function Footer() {
    return (
        <footer>
        <p className="copyright">Todos los derechos reservados © - 
            Política de privacidad · Términos y condiciones - 
            Horario de atención: 10:00 AM - 10:00 PM
        </p>
        <div className="social-container">
            <a href="#" class="red-social" title="WhatsApp"><img src="/WHATSAPP.png" alt="WhatsApp"></img></a>
            <a href="#" class="red-social" title="Instagram"><img src="/INSTAGRAM.png" alt="Instagram"></img></a>
            <a href="#" class="red-social" title="TikTok"><img src="/TIKTOK.png" alt="TikTok"></img></a>
            <a href="#" class="red-social" title="Facebook"><img src="/FACEBOOK.png" alt="Facebook"></img></a>
        </div>
    </footer>
    )
}