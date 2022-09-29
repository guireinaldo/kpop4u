import Card from "../Card";
import "./MaisVendidos.css";

export default function MaisVendidos() {
    const listaDeAlbuns = [
        {
            grupo: "Twice",
            album: "Between 1&2",
            preco: "75,00",
            imagem: "/imagens/imgcard.png",
        },
        {
            grupo: "Loona",
            album: "Flip That",
            preco: "90,00",
            imagem: "/imagens/loona2.jpg",
        },        
        {
            grupo: "VIVIZ",
            album: "LOVEADE",
            preco: "50,00",
            imagem: "/imagens/loveade.jpg",
        },        
        {
            grupo: "Billlie",
            album: "The Collective Soul",
            preco: "80,00",
            imagem: "/imagens/billlie.jpg",
        },
        {
            grupo: "Kep1er",
            album: "Doublast",
            preco: "25,00",
            imagem: "/imagens/kepler.jpg",
        },
        {
            grupo: "Brave Girls",
            album: "Rollin",
            preco: "40,00",
            imagem: "/imagens/bravegirls.jpg",
        },
        {
            grupo: "IU",
            album: "LILAC",
            preco: "80,00",
            imagem: "/imagens/iu.jpg",
        },
    ]

    return(
        <div className="mais-vendidos">
            <h3 className="mais-vendidos__titulo">Mais Vendidos</h3>
            <div className="mais-vendidos__cards">
                {listaDeAlbuns.map((item) => <Card grupo={item.grupo} album={item.album} preco={item.preco} imagem={item.imagem} />)}
            </div>
        </div>
    )
}