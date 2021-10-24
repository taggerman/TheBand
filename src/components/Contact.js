import locaition from "../content/locaition-icon.png";
import phone from "../content/phone-icon.png";
import rmail from "../content/email-icon.png";

const Contact = () => {
    return (
        <>
            <div className="contactBox sidePadding">
                <h1>
                    CONTACT
                </h1>
                <h2>
                    Fan drop a note
                </h2>
                <div className="contactHolder">
                    <div>
                        <ul>
                            <li>
                                <img src={locaition} />
                                <h1>
                                    Grenå,DANMARK
                                </h1>
                            </li>
                            <li>
                                <img src={phone} />
                                <h1>
                                    Phone:+45 53692280
                                </h1>
                            </li>
                            <li>
                                <img src={rmail} />
                                <h1>
                                    Email: mail@mail.com
                                </h1>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form>
                            <table className="contactForm">
                                <tr>
                                    <td>
                                        <input placeholder="Name" />
                                    </td>
                                    <td>
                                        <input placeholder="Email" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input placeholder="Message"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button>SEND</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;