import { Person, ShoppingCart } from '@mui/icons-material';
import "./Cabecalho.css";


export default function Cabecalho() {
    return (
        <div className="cabecalho"> 
            <img className="cabecalho__logo" src="/imagens/kpop4u1.png" alt="Logo da Kpop4u" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item">Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <Person className="cabecalho__perfil" />
            <ShoppingCart className="cabecalho__carrinho" />
        </div>
    )
}

