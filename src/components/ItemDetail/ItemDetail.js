import ItemCount from "../ItemCount/itemCount"


const ItemDetail = ({ id, name, category, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                 {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">  
                    Categoria: {category}
                </p>        
                <p className="Info">  
                    Descripcion: {description}
                </p> 
                <p className="Info">  
                    Precio: ${price}
                </p> 
            </section>
            <footer className="ItemFooter">
            <ItemCount initial={1} stock={stock} onAddd={(quantity)} => console.log('Cantidad agregada') console.log(1)>
            </footer>
        </article>
    )
}
