import face from "../content/facebook-icon.png";
import snap from "../content/snap-icon.png";
import insta from "../content/insta-icon.png";



const Fotter = () => {
    return(
        <>
        <div className="fotter">
            <div className="iconHolder">
                <img src={face}/>
                <img src={snap}/>
                <img src={insta}/>
            </div>
        </div>
        </>
    )
}

export default Fotter;