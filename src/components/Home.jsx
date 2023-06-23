import React from 'react';
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Welcome to <span>TechyStar</span>, the ultimate destination for all your tech solutions! As a leading tech website, we offer a wide range of services and resources to empower individuals and businesses alike. Whether you're seeking expert advice, troubleshooting guides, or the latest tech news, we have you covered. Our user-friendly interface and comprehensive content ensure that you'll find the answers you need quickly and easily. Join our community of tech enthusiasts and let TechyStar be your go-to platform for all things tech!</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <a href="https://www.google.com/" target='_blank' rel="noreferrer">
                            <AiFillGoogleCircle />
                            <p>Google</p>
                            </a>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <a href="https://www.amazon.com/" target='_blank' rel="noreferrer">
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                            </a>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <a href="https://www.youtube.com/" target='_blank' rel="noreferrer">
                            <AiFillYoutube />
                            <p>YouTube</p>
                            </a>
                        </div>
                        <div style={{
                            animationDelay: "0.9s",
                        }}>
                            <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                            <AiFillInstagram />
                            <p>Instagram</p>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;
