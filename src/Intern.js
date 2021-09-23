import './Intern.css';
import { interdata } from './interndata';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import galley_img from "./assets/silicon-valley-quiz.png";



function Intern() {
    let [data, setData] = useState(interdata);
    console.log(data)
    function all_c() {
        setData(interdata)
    }
    function graphic_c() {
        setData(interdata.filter(char => char.category == "graphic design"))
    }
    function photo_c() {
        setData(interdata.filter(char => char.category == "photography"))
    }
    function web_c() {
        setData(interdata.filter(char => char.category == "web designer"))
    }
    function video_c() {
        setData(interdata.filter(char => char.category == "video graphy"))
    }
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={galley_img}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={galley_img}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={galley_img}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="filter">
                <ul>
                    <li onClick={all_c}>all</li>
                    <li onClick={graphic_c}>graphic design</li>
                    <li onClick={photo_c}>photography</li>
                    <li onClick={web_c}>webdesigner</li>
                    <li onClick={video_c}>videography</li>
                </ul>
            </div>

            <div className="interns">
                {
                    data.map(char => {
                        const { name, id, img, avatar, category } = char;
                        return (
                            <div className="item" key={id}>
                                <div className="img">
                                    <img src={img ? img : avatar} />
                                </div>
                                <p>
                                    {name}
                                </p>
                                <span className="category">
                                    {category}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Intern;