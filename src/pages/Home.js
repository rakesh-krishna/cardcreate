import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";

import { useHistory } from "react-router-dom";
import logo from './grfone.png';
export default function Reports() {
    const history = useHistory();
    const idata1 = "https://example.com"
    const idata2 = "https://example.com"
    const idata3 = "https://example.com"
    function handleClick(e) {
        history.push({
            pathname: "/iframeScreen",
            state: {
                response: e
            }
        });
    }
    return (
        <div className="reports">
            {/* <Navbar /> */}

            <section class="ptr-1">
                <div class="container">
                    <div class="head">
                        <h2>Links</h2>
                    </div>

                    <div class="item">
                        <div class="item-box">

                            <div class="icon-wrapper">
                                <img src="https://icon-library.com/images/archive-icon-png/archive-icon-png-8.jpg" alt="" />
                            </div>
                            <div class="textButton">
                                <button  class="button " type="button" onClick={() => handleClick(idata1)}>
                                    Go home
                                </button>
                            </div>

                        </div>

                    
                        <div class="item-box">

                            <div class="icon-wrapper">

                                <img src={logo} />
                            </div>
                         
                                <div class="textButton">
                                   <button  class="button" type="button" onClick={() => handleClick(idata2)}>
                                        Go home
                                    </button>
                                </div>
                       

                        </div>
                        <div class="item-box">

                            <div class="icon-wrapper">

                                <img src={logo} />
                            </div>
                          
                                <div class="textButton">
                                   <button  class="button" type="button" onClick={() => handleClick(idata3)}>
                                        Go home
                                    </button>
                                </div>
                        

                        </div>
                        <div class="item-box">

                            <div class="icon-wrapper">

                                <img src={logo} />
                            </div>
                          
                                <div class="textButton">
                                   <button  class="button" type="button" onClick={() => handleClick(idata1)}>
                                        Go home
                                    </button>
                                </div>
                          

                        </div>

                    </div>


                    <div class="btn-container">
                        <div class="btn">
                            <span>Add Link</span>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}
