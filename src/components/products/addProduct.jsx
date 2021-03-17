import { useRef } from "react";

function AddProduct(params) {
    const productName = useRef();
    const productPrice = useRef();
    const productAmount = useRef();

   
    const addValue = (e) => {
        e.preventDefault();
        console.log(
            `{name: ${productName.current.value}, price: ${productPrice.current.value}, amount: ${productAmount.current.value} }`
        );
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
