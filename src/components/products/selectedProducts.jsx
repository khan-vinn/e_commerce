import { useState } from "react";
import { ConnectedProductListToCount } from "./container";
export default function SelectedProducts({ selectedProducts, products }) {
    return (
        <>
            {products.map((el) => (
                <ProductMapper key={el.id} {...el} {...selectedProducts} />
            ))}
        </>
    );
}
function ProductMapper(props) {
    const { id, title, amount, price, ...selectedId } = props
    return (
        <>
            {Object.entries(selectedId).map((e) => {
                return id === e[1] ? (
                    <ConnectedProductListToCount
                        key={id}
                        id={id}
                        title={title}
                        amount={amount}
                        price={price}
                    />
                ) : null;
            })}
        </>
    );
}

export function Product(props) {
    const { id, title, amount, price, addCountToCard, initializeProductCount } = props
    const [count, setCount] = useState(0);
    const addToCount = () => {
        // amount > count && setCount(count + 1)
        if (amount > count) {
            if (count === 0) {
                initializeProductCount({ id, count: count+1 });
                setCount(count + 1);
            } else {
                setCount(count + 1)
                addCountToCard({ id, count: count+1 })
            }
        }
    };
    const removeFromCount = () => count > 0 && setCount(count - 1);

    return (
        <>
            <h1>{title}</h1>
            <button disabled={count <= 0} onClick={removeFromCount}>
                Remove
            </button>
            {count}
            <button disabled={amount === count} onClick={addToCount}>
                Add
            </button>
            <br /> <p>There are only {amount} in ... </p>
            {`${count} x ${price}$ = ${count * price}.00$`}
        </>
    );
}
