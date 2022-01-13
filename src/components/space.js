import * as React from "react";
import "./space-module.css"


const Space = () => {
    /*
    *                 <div className="mars">

                    </div>
                    <div className="phobos"></div>
                    <div className="deimos"></div>
    *  */
    return (
        <section>

            <div id="universe">
                <div id="system-alpha">

                    <div id="earth">
                    </div>

                    <div id="moon" className="orbit">
                        <div className="pos">
                            <div className="planet" id="moon-satellite"></div>
                        </div>
                    </div>

                </div>
                <div id="system-beta">
                    <div id="mars"></div>
                    <div id="phobos" className="satellite orbit">
                        <div className="pos">
                            <div className="planet" id="phobos-satellite"></div>
                        </div>
                    </div>
                    <div id="deimos" className="satellite orbit">
                        <div className="pos">
                            <div className="planet" id="deimos-satellite"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="container">Moi</h2>

        </section>
    )
}

export default Space

