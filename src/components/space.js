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
                <div id="galaxy">

                    <div id="earth">
                    </div>

                    <div id="moon" className="orbit">
                        <div className="pos">
                            <div className="planet"></div>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className="container">Moi</h2>

        </section>
    )
}

export default Space

