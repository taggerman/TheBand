import newYork from "../content/newyork.jpg";
import paris from "../content/paris.jpg";
import sand from "../content/sanfran.jpg";



const Events = () => {
    return (
        <>
            <div className="events">
                <div className="space30">
                    <h2 className="TextCenter">
                        TOUR DATES
                    </h2>
                    <span className="TextCenter">
                        remenber to book your tickets
                    </span>
                </div>
                <div className="sidePadding">
                    <ul className="dates">
                        <li>
                            <span>
                                september
                            </span>
                            <span>
                                sold out
                            </span>
                        </li>
                        <li>
                            <span>
                                october
                            </span>
                            <span>
                                sold out
                            </span>
                        </li>
                        <li>
                            nomber
                        </li>
                    </ul>
                    <div className="cityBox">
                        <div className="eventBox">
                            <img src={newYork} />
                            <div className="contentBox">
                                <h1> NEW YORK</h1>
                                <h2>FRI 27 Nov 2016</h2>
                                <p>kom og køb</p>
                                <button>Buy tickets</button>
                            </div>
                        </div>
                        <div className="eventBox">
                            <img src={paris} />
                            <div className="contentBox">
                                <h1> paris</h1>
                                <h2>FRI 28 Nov 2016</h2>
                                <p>kom og køb</p>
                                <button>Buy tickets</button>
                            </div>
                        </div>
                        <div className="eventBox">
                            <img src={sand} />
                            <div className="contentBox">
                                <h1>San Francisco</h1>
                                <h2>FRI 27 Nov 2016</h2>
                                <p>kom og køb</p>
                                <button>Buy tickets</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Events;
