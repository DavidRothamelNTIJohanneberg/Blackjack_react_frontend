import React from 'react';
import Card from './Card';
import '../common_css/StyleSheet.css'

function Hand(props: { name: string }) {
    //Every card should be its own div
    //There should be a function that takes arguments
    //It needs to know value and color
    //Does maybe need to know amount
    //But could fix it by calling it that amount of times
    //Has to remember previous cards
    //So the hand remains the same
    const cardsInHand = [
        { color: "h", value: 3 },
        { color: "s", value: 11 },
    ]

    const listOfCards = cardsInHand.map(
        card => {
            //Change key to something more reliable in the future
            return <Card color={card.color} value={card.value}/>;
        }
    )

    return (
        <div className="hand">
            <h3>{props.name }</h3>
            <div>
                {listOfCards}
            </div>
        </div>

  );
}

export default Hand;