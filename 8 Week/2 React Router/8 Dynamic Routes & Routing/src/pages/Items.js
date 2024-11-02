import { Link } from "react-router-dom";
import itemData from '../data/itemData'

function Items() {
  return (
    <>
      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Items Page</h1>
      </main>
      {/* <ul>
        <Link to="/items/item-1"><li>Item-1</li></Link>
        <Link to="/items/item-2"><li>Item-2</li></Link>
        <Link to="/items/item-3"><li>Item-3</li></Link>
      </ul> */}
      <ul>
        {itemData.map((item, index) => (
          <Link key={index} to={`/items/${item.id}`}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>


    </>
  );
}

export default Items;
