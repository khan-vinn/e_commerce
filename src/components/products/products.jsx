import { useState, useEffect } from "react";

let selectedIdToR = [];

function Products({ products, addToCard, removeFromCard }) {

    let [selectedId, setId] = useState([]);

    const selectIdFun = (id) => {
        setId([...selectedId, id]);
    };
    const disSelectIdFun = (id) => {
        removeFromCard(id)
    };

    useEffect(() => {
        selectedIdToR = [...selectedId];
    }, [selectedId]);

    useEffect(() => {
        return () => {
            addToCard(selectedIdToR);
        };
    }, []);

    return products.map((elem) => (
        <Product
            key={elem.id}
            toDisSelect={disSelectIdFun}
            toSelectClick={selectIdFun}
            {...elem}
        />
    ));
}

function Product({ amount, id, price, title,toDisSelect, toSelectClick }) {

    const [disabled, setDisable] = useState(false);

    const onNameSelected = () => {
        toSelectClick(id);
        amount > 0 && setDisable(true);
    };
    const onNameDesSelected = ()=> {
        toDisSelect(id)
        amount > 0 && setDisable(false);
    }

    return (
        <>
            <h1>
                {title} - {price}$
            </h1>
            {!disabled && (
                <button disabled={disabled} onClick={onNameSelected}>
                    Select
                </button>
            )}
            {disabled && (
                <button onClick={onNameDesSelected}>
                    Remove
                </button>
            )}
        </>
    );
}

export default Products;
