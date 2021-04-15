import React from "react";

function Cards(props) {
    const { cards, products } = props;
    return (
        <div>
            {cards.length < 1 && (
                <h1>
                    To see more, please insert button `Order` in previos section
                </h1>
            )}
            {cards.map((elem) => (
                <div key={elem.id}>
                    <h3>id: {elem.id}</h3>
                    <p>{elem.field.length}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
