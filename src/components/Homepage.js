import * as React from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./homepage.css"



const Homepage = ({children}) => {


    return (
        <div className="space">
            <ScrollContainer className="scroll-container vertical horizontal sun" style={{height: "100vh",    position: "relative"
            }}>
                <div className="container">
                    <div className="planete" id="earth"> </div>
                    <div className="planete" id="mars"> </div>
                    <div className="planete" id="moon"> </div>
                </div>
                <div className="container">
                    <div className="planete" id="earth"> </div>
                    <div className="planete" id="moon"> </div>
                </div>
            </ScrollContainer>
        </div>
    )
}

export default Homepage
