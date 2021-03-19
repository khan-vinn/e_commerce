import { useState } from "react";
import { ConnectedProductListToCount } from "./container";
export default function SelectedProducts({ selectedProducts, products }) {
    return (
        <>
            {products.map((el) => (
                <ProductMapper key={el.id} {...el} {...selectedProducts} />
            ))}
            <button
                id="btn"
                onClick={() =>
                    alert(
                        "Should be null in selected and count reducer store/ push to '/cards' and show how cost all shopping"
                    )
                }
            >
                Order
            </button>
        </>
    );
}
function ProductMapper(props) {
    const { id, title, amount, price, ...selectedId } = props;
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
    const {
        id,
        title,
        amount,
        price,
        addCountToCard,
        initializeProductCount,
        productCount,
    } = props;
    const thisProductCount = productCount.filter((elem) => elem.id === id);
    const [count, setCount] = useState(
        thisProductCount[0] ? thisProductCount[0].count : 0
    );
    const addToCount = () => {
        // amount > count && setCount(count + 1)
        if (amount > count) {
            if (count === 0) {
                initializeProductCount({ id, count: count + 1 });
                setCount(count + 1);
            } else {
                addCountToCard({ id, count: count + 1 });
                setCount(count + 1);
            }
        }
    };
    const removeFromCount = () => {
        if (count > 0) {
            addCountToCard({ id, count: count - 1 });
            setCount(count - 1);
        }
    };

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
