export default function SelectedProducts({ selectedProducts, products }) {
    return (
        <>
            {products.map((el) => (
                <ProductMapper key={el.id} {...el} {...selectedProducts} />
            ))}
        </>
    );
}
function ProductMapper({ id, title, amount, price, ...selectedId }) {
    return (
        <>
            {Object.entries(selectedId).map((e) => {
                return id === e[1] ? <h1 key={id}>{title}</h1> : null;
            })}
        </>
    );
}
