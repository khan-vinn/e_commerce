import { Notyf } from "notyf";
import { useForm } from "react-hook-form";
import "notyf/notyf.min.css";

const notyf = new Notyf();

function AddProduct({ addProduct }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
 
    const addValue = (data) => {
        addProduct({
            title: data.productName,
            price: data.productPrice,
            amount: data.productAmount,
        });
        reset({ productName: "", productPrice: "", productAmount: "" });
        notyf.success("Product added");
    };
    return (
        <form
            className="product_add_from__style"
            onSubmit={handleSubmit(addValue)}
        >
            <div className="prod_name__style">
                <label htmlFor="productName">Product title</label>
                <input
                    name="productName"
                    type="text"
                    placeholder="Insert here product title"
                    {...register("productName", {
                        required: true,
                        maxLength: 15,
                    })}
                />
                {errors.productName && (
                    <span className="form__error">Error*</span>
                )}
            </div>
            <div className="prod_price__style">
                <label htmlFor="productPrice">Product Price</label>
                <input
                    name="productPrice"
                    type="number"
                    placeholder="Insert here product price"
                    {...register("productPrice", {
                        required: true,
                        min: 5,
                        max: 50000,
                    })}
                />
                {errors.productPrice && (
                    <span className="form__error">Error*</span>
                )}
            </div>
            <div className="prod_amount__style">
                <label htmlFor="productAmount">Product Amount</label>
                <input
                    name="productAmount"
                    placeholder="Insert here product amount"
                    type="number"
                    {...register("productAmount", {
                        required: true,
                        min: 1,
                        max: 50,
                    })}
                />
                {errors.productAmount && (
                    <span className="form__error">Error*</span>
                )}
            </div>
            <button className="add_submit__btn">Add</button>
        </form>
    );
}
export default AddProduct;
