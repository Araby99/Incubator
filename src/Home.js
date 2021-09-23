import './Home.css';
import { infodata } from './infodata';
import { Carousel } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/silicon-valley-quiz.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/silicon-valley-quiz.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/silicon-valley-quiz.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="welcome">
                <p className="title">
                    welcome
                </p>
                <p className="description">
                    we love working with both local and national companies. It is our mission to provide refreshing
                </p>
            </div>
            <div className="about" id="about">
                <div className="text">
                    <p className="title">about us</p>
                    <p className="description">we love working with both local and national companies. It is our mission to provide
                        refreshing, <br />
                        modern design so that our clients get the most saturation out of their target markets.
                    </p>
                </div>
                <div className="img">
                    <img src="assets/about.png" alt="Team" id="about_img" />
                    <div id="overlay"></div>
                </div>
            </div>
            <div className="about-2">
                <div className="img">
                    <img src="assets/about-2.png" alt="Team" />
                </div>
                <div className="text">
                    <p>
                        we love working with both local and national companies. It is our mission to provide refreshing modern design so
                        that our clients get the most saturation out of their target markets.
                    </p>
                </div>
            </div>

            <div className="contact" id="contact">
                <div className="form">
                    <p className="title">
                        contact us
                    </p>
                    <form action="javscript:void(0)">
                        <div className="mb-3">
                            <input type="input" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Message" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div className="more-info">
                    <p className="title">more info</p>
                    <div id="theinfo">
                        <ul>
                            {
                                infodata.map(char => {
                                    const { name, id, info } = char;
                                    return (
                                        <li key={id}>
                                            <span>{name}</span> : {info}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;