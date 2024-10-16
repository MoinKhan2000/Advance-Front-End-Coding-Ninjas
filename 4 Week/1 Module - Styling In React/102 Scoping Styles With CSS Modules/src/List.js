import List from "./list.module.css";
import Item from "./components/Item";
import { data } from "./data";

export default function List() {
  return (
    <>
      <h3 className={List.title}>Items Listed for Sale</h3>
      <div className={List.container}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
