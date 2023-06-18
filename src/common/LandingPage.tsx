import React, { ReactNode } from 'react';
import "../common_css/StyleSheet.css"

//Why wont toggleLayout be accepted as function?
//Please fix, any is not good
function LandingPage(props: { toggleLayout: any, decrement: any, increment: any, count: number }) {


    return (
        //Should probably? propably?, probaply? add failsafes for count
        //Incase some smartass decides that there should be a negative amount of players
        <div id="landing">
            <h1>Davids Blackjack</h1>
            <div>
                <button onClick={props.decrement}>-</button>{props.count}<button onClick={props.increment} >+</button>
            </div>
            <button onClick={props.toggleLayout}>Start</button>
      </div>
  );
}

export default LandingPage;