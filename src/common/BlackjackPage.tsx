import React, { useState } from "react";
import Hand from './Hand';

function BlackjackPage(props: { count: number }) {
    const [playerTurn, setPlayerTurn] = useState(1);

    const Hands = [
        { id: 1, name: "David" }, //Name skickas via input, s� sm�ningom, en vacker dag, allts� inte idag
        { id: 2, name: "Davve" },
        { id: 3, name: "Davveboi" },
        { id: 4, name: "Me" },
        { id: 5, name: "My self" },
        { id: 6, name: "I" }
    ];
    //Fix type
    let loopThrough: any = [{ id: 0, name: "temp" }];

    function incrementPlayerTurn() {
        setPlayerTurn(playerTurn + 1);
        console.log(loopThrough.length)
        console.log(playerTurn);
        if (playerTurn >= loopThrough.length) {
            console.log("change");
            setPlayerTurn(1);
        }
    }

    function amountOfPlayers(count: number) {
        loopThrough = Hands.slice(0, count);
    }

    return (
        <div id="blackjackPage">
            <div>
                <Hand key="0" name="Dealer" />
            </div>

            <hr/>

            <div id="playerHands">
                {amountOfPlayers(props.count)}
                {loopThrough.map(
                    (key:any) => (
                        <Hand key={key.id} name={key.name} />
                    )
                )}
            </div>
            <div>
                <h3>{loopThrough[playerTurn - 1].name}</h3>
                <button onClick={incrementPlayerTurn}>Stand</button>
                <button onClick={incrementPlayerTurn}>Hit</button>
                <button onClick={incrementPlayerTurn}>Split</button>
                <button onClick={incrementPlayerTurn}>Double</button>
            </div>
        </div>
    );
}

export default BlackjackPage;