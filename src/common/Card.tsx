import React from 'react';
import "../common_css/StyleSheet.css";

function Card(props: { color: string, value: number }) {
    const Cards = [
        "1_of_spades.png",
        "2_of_spades.png",
        "3_of_spades.png",
        "4_of_spades.png",
        "5_of_spades.png",
        "6_of_spades.png",
        "7_of_spades.png",
        "8_of_spades.png",
        "9_of_spades.png",
        "10_of_spades.png",
        "11_of_spades.png",
        "12_of_spades.png",
        "13_of_spades.png",
        "1_of_clubs.png",
        "2_of_clubs.png",
        "3_of_clubs.png",
        "4_of_clubs.png",
        "5_of_clubs.png",
        "6_of_clubs.png",
        "7_of_clubs.png",
        "8_of_clubs.png",
        "9_of_clubs.png",
        "10_of_clubs.png",
        "11_of_clubs.png",
        "12_of_clubs.png",
        "13_of_clubs.png",
        "1_of_hearts.png",
        "2_of_hearts.png",
        "3_of_hearts.png",
        "4_of_hearts.png",
        "5_of_hearts.png",
        "6_of_hearts.png",
        "7_of_hearts.png",
        "8_of_hearts.png",
        "9_of_hearts.png",
        "10_of_hearts.png",
        "11_of_hearts.png",
        "12_of_hearts.png",
        "13_of_hearts.png",
        "1_of_diamonds.png",
        "2_of_diamonds.png",
        "3_of_diamonds.png",
        "4_of_diamonds.png",
        "5_of_diamonds.png",
        "6_of_diamonds.png",
        "7_of_diamonds.png",
        "8_of_diamonds.png",
        "9_of_diamonds.png",
        "10_of_diamonds.png",
        "11_of_diamonds.png",
        "12_of_diamonds.png",
        "13_of_diamonds.png",
        "black_joker.png"
    ];

    function renderCards(color: String, value: number) {
        let card: number = 53;

        switch (color) {
            case "s": {
                card = value;
                break;
            }
            case "c": {
                card = value + 13;
                break;
            }
            case "h": {
                card = value + 26;
                break;
            }
            case "d": {
                card = value + 39;
                break;
            }
        }
        return "/cards/" + Cards[card - 1];
    }

    return (
        <img src={renderCards(props.color, props.value) } alt="A card"/>
    );
}

export default Card;