import img from "../content/Martin.jpg";
import Mette from "../content/MetteFrederiksen.jpg"
import Pernille from "../content/Pernile.jpg"

const Aboat = () => {
    return (
        <div className="aboat">
            <h1 className="TextCenter">
                THE BAND
            </h1>
            <span className="weLoveMusic">
                WE LOVE MUSIC
            </span>
            <div className="sidePadding">
                <p>
                    It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. You’re disgusting. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a
                    <span className="TextCenter"> good decision.</span>
                </p>
            </div>
            <div className="sidePadding BandMemberBox">
                <div className="BandMember">
                    <h2>
                        Martin
                    </h2>
                    <img src={img} />
                </div>
                <div className="BandMember">
                    <h2>
                        Mette
                    </h2>
                    <img src={Mette} />
                </div>
                <div className="BandMember">
                    <h2>
                        Pernille
                    </h2>
                    <img src={Pernille} />
                </div>
            </div>

        </div>
    )
}

export default Aboat;