import './eachPixel.css';

export const EachPixel = (props) => {
    // let a = [
    //     0,1,2,3,4,5,6,7,8,9,
    //     160,161,162,163,164,165,166,167,168,169,
    //     320,321,322,323,324,325,326,327,328,329,
    //     480,481,482,483,484,485,486,487,488,489,
    //     640,641,642,643,644,645,646,647,648,649,
    //     800,801,802,803,804,805,806,807,808,809,
    //     960,961,962,963,964,965,966,967,968,969,
    //     1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,
    //     1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,
    //     1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,
    // ]
    function hoverPaint(event) {
        if(props.isHover === true) {
            if(props.isErase === true){
                event.target.style.backgroundColor = "whitesmoke";            
            } else {
                event.target.style.backgroundColor = props.paintColor;
            }
        }
    }
    function clickPaint(event) {
        if(props.isHover === false) {
            if(props.isErase === true){
                event.target.style.backgroundColor = "whitesmoke";            
            } else {
                event.target.style.backgroundColor = props.paintColor;
            }
        }
    }
    return (
        <div className={props.index < 0 ? "drawn" : "pixelInit"} onMouseOver={hoverPaint} onClick={clickPaint}>
        </div>
    );
}