import { useState } from "react";


function Products({ products, selectedProducts, addToCard, removeFromCard }) {


    const selectIdFun = (id) => {
        addToCard(id);
    };

    const disSelectIdFun = (id) => {
        removeFromCard(id)
    };    

    return products.map((elem) => (
        <Product
            key={elem.id}
            selectedProducts={selectedProducts}
            toDisSelect={disSelectIdFun}
            toSelectClick={selectIdFun}
            {...elem}
        />
    ));
}

function Product({ amount, id, price, selectedProducts, title,toDisSelect, toSelectClick, }) {
    const isIncludeInSelectedLists = ()=> selectedProducts.includes(id)

    const [disabled, setDisable] = useState(isIncludeInSelectedLists());

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
