import { HexColorPicker } from "react-colorful";
import './tools.css'

export const Tools = (props) => {
    function setErase() {
        props.setErase(!props.isErase);
    }
    function setHover() {
        props.setHover(!props.isHover);
    }
    return (
        <div className="toolsContainer">
            {/* Pixel Stats */}
            <div className="pixelStats">
                <span className="username"> @{props.curUsername} </span> <br />
                <div style={{height: "5px"}}> </div>
                <span className="pixelsLeft"> Pixels Left: 1000/1000 </span>                    
            </div>
            {/* Tools */}
            <div className="place">
                <div style={{backgroundColor: "black", padding: "10px 10px 10px 12px"}}> 

                    {/* Color Picker */}
                    <HexColorPicker color={props.paintColor} onChange={props.setColor} />
                    <div style={{height: "10px"}}> </div>

                    {/* Buttons */}
                    <div style={{display: "flex"}}>
                        <div className={props.isErase ? "buttonStyle" : "buttonStyle chosenButton"} onClick={setErase}> Paint </div>
                        <div className={props.isErase ? "buttonStyle chosenButton" : "buttonStyle"} onClick={setErase}> Erase </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className={props.isHover ? "buttonStyle" : "buttonStyle chosenButton"} onClick={setHover}> Click </div>
                        <div className={props.isHover ? "buttonStyle chosenButton" : "buttonStyle"} onClick={setHover}> Hover </div>
                    </div>
                </div>
                {/* <div>
                    <div className="hideTools">
                    H
                    </div>
                </div> */}
            </div>
            {/* Tool Tips */}
            <div className="toolTips">
                <span> Shortcuts & Tips </span> <br />
                <span> • CTRL and + to Zoom In </span>  <br />
                <span> • CTRL and - to Zoom Out </span> <br />
                <span> • Right click to switch back and forth from Paint mode to Erase Mode  </span>
                </div>
        </div>
    );
};
