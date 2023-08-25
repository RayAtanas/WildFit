
import "../CSS/Clothes.css"

type ClothesProps = {
    name : string
    img : string
    alt: string
    price: number
    size: string
    type: string
    className: string,
}


function Clothes(props: ClothesProps){
    return(
    <div className={`clothes  ${props.className}`}>
            <h2>{props.name}</h2>
            <img src = {props.img} alt = {props.alt}/>
            <p>{props.price}</p>
            <p>{props.size}</p>
            <p>{props.type}</p>

        </div>


    )
}export default Clothes 