export default function SelectedProducts({ cards, products, ...props }) {
    return (
        <>
            {cards.map((el) => (
                <p key={el}>{el}</p>
            ))}
        </>
    );
}
