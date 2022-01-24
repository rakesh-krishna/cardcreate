import React from "react";
import "./home.css";
import logo from './grfone.png';
export default function Reports() {
  return (
    <div className="reports">
     <section class="ptr-1">
    <div class="container">
        <div class="head">
            <h2>Links</h2>
        </div>

        <div class="item">
            <div class="item-box">
            <a href="https://example.url.com">
                <div class="icon-wrapper">
                    <img src="https://icon-library.com/images/archive-icon-png/archive-icon-png-8.jpg" alt=""/>
                </div>
                <div class="text">
                    <h3>Links
                    </h3>
                </div>
                </a>
            </div>
            <div class="item-box">
            <a href="https://google.com">
                <div class="icon-wrapper">
                    <img src="https://icon-library.com/images/archive-icon-png/archive-icon-png-8.jpg" alt=""/>
                </div>
                
                </a>
                <div class="text">
                    <h3>Links
                    </h3>
                </div>
            </div>
            <div class="item-box">
            <a href="https://example.url.com">
                <div class="icon-wrapper">
                    <img src="https://icon-library.com/images/archive-icon-png/archive-icon-png-8.jpg" alt=""/>
                </div>
                <div class="text">
                    <h3>Links
                    </h3>
                </div>
                </a>
            </div>
            <div class="item-box">
            <a href="https://example.url.com">
                <div class="icon-wrapper">
                    <img src="https://icon-library.com/images/archive-icon-png/archive-icon-png-8.jpg" alt=""/>
                </div>
                <div class="text">
                    <h3>Links
                    </h3>
                </div>
                </a>
            </div>
            <div class="item-box">
                <div class="icon-wrapper" >
                <a href="https://example.url.com">
                    <img src="https://www.pngrepo.com/png/4046/512/archive.png" alt="https://www.google.com/"/>
                    </a>
                </div>
                <div class="text">
                    <h3>Links
                    </h3>
                </div>
            </div>
            <div class="item-box">
            <a href="https://example.url.com">
                <div class="icon-wrapper">
                  
                    <img src={logo}  />
                </div>
                <div class="text">
                    <h3>Links name is been taken from the source of main imsg and 
                    </h3>
                </div>
                </a>
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
