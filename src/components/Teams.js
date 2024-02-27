import React from "react";
import { Link } from "react-router-dom";
import "./Teams.css";

export default function Teams() {
  return (
    <>
      <h1 id="heading">SHOP BY TEAMS</h1>
      <section id="clients" class="section-bg">
        <div className="container">
          <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div className="col">
              <Link to={"/page-2"}>
                <div className="image">
                  <img src="Axios.png" id="img-fluid1" alt="" />
                  <div>AXIOS</div>
                </div>
              </Link>
            </div>
            <div className="col">
              <div className="image">
                <img src="ECell.png" id="img-fluid1" alt="" />
                <div>ECell</div>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="Eifer.png" id="img-fluid1" alt="" />
                <div>Eifer</div>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="AfterDark.png" id="img-fluid1" alt="" />
                <div>AfterDark</div>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="Utkrisht.png" id="img-fluid1" alt="" />
                <div>Utkrisht</div>
              </div>
            </div>
          </div>
          <div
            id="second"
            class="row no-gutters clients-wrap clearfix wow fadeInUp"
          >
            <div class="col">
              <div className="image">
                <img src="Estrella.png" id="img-fluid1" alt="" />
                <div>Estrella</div>
              </div>
            </div>
            <div class="col">
              <div className="image">
                <img src="Zephyr.png" id="img-fluid1" alt="" />
                <div>Zephyr</div>
              </div>
            </div>
            <div class="col">
              <div className="image">
                <img src="Crotonia.png" id="img-fluid1" alt="" />
                <div>Crotonia</div>
              </div>
            </div>
            <div class="col">
              <div className="image">
                <img src="goonj.png" id="img-fluid1" alt="" />
                <div>Goonj</div>
              </div>
            </div>
            <div class="col">
              <div className="image">
                <img src="iiitl.png" id="img-fluid1" alt="" />
                <div>IIITL</div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-2.5">okk
              <div class="client-logo">
                <img src="goonj.png" class="img-fluid" alt="" />
              </div>
            </div> */}

          {/* <div class="col-lg-2.5">okkkbhj
              <div class="client-logo">
                <img src="ECell.png" class="img-fluid" alt="" />
              </div>
            </div> */}

          {/* <div class="col-lg-2.5">
              <div class="client-logo">
                <img src="Eifer.png" class="img-fluid" alt="" />
              </div>
            </div> */}
          {/* 
            <div class="col-lg-2.5 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="AfterDark.png" alt="" />
              </div>
            </div> */}

          {/* <div class="col-lg-2.5 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="Estrella.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-2.5 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="Zephyr.png" class="img-fluid" alt="" />
              </div>
            </div> */}

          {/* <div class="col-lg-2.5 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="Crotonia.png" class="img-fluid" alt="" />
              </div>
            </div> */}

          {/* <div class="col-lg-2.5 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="iiitl.png" class="img-fluid" alt="" />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
