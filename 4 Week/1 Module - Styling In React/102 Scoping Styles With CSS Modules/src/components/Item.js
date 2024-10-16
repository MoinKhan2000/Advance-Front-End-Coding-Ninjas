import Item from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={Item.container}>
      <h3 className={Item.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={Item.image} />
      <p>
        <strong className={Item.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
