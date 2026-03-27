import './index.css'

export default function Card({tittle, price, image, description, category}) {
    return (
        <article className="card">
            <img src={image} alt={tittle} />
            <h2>{tittle}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
        </article>
    )
}