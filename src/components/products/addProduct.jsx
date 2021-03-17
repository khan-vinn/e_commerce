import { useRef } from "react";

function AddProduct({ addProduct }) {
    const productName = useRef();
    const productPrice = useRef();
    const productAmount = useRef();

    const addValue = (e) => {
        e.preventDefault();
        addProduct({
            title: productName.current.value,
            price: productPrice.current.value,
            amount: productAmount.current.value,
        });
        productName.current.value = "";
        productPrice.current.value = "";
        productAmount.current.value = "";
    };
    return (
        <form onSubmit={addValue}>
            <div>
                <label htmlFor="productName">Product title</label>
                <br />
                <input
                    ref={productName}
                    name="productName"
                    type="text"
                    placeholder="Insert here product title"
                    required
                />
            </div>
            <br />
            <div>
                <label htmlFor="productPrice">Product Price</label>
                <br />
                <input
                    ref={productPrice}
                    name="productPrice"
                    type="number"
                    placeholder="Insert here product price"
                    required
                />
            </div>
            <br />
            <div>
                <label htmlFor="productAmount">Product Amount</label>
                <br />
                <input
                    ref={productAmount}
                    name="productAmount"
                    placeholder="Insert here product amount"
                    type="number"
                    required
                />
            </div>
            <br />
            <button id="btn">Add</button>
        </form>
    );
}
export default AddProduct;
