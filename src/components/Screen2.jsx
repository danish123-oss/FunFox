import React from "react";
import Head from "../assets/Rectangle 6.png";
import Child from "../assets/Group 925.png";
import Lower from "../assets/Group 152.png";
import Cloud1 from "../assets/Group (2).png";
import Img1 from "../assets/Mask group.png";
import Img2 from "../assets/Group (5).png";
import Clock from "../assets/Frame (5).png";
import Home from "../assets/Frame (6).png";
const Screen2 = () => {
  return (
    <React.Fragment>
      <div className="screen_size">
        <div className="screen1">
          <div>
            <p className="p_head_scc">
              Can you figure out the definition of setting from the following
              examples?
            </p>
            <p className="p_head_sccc">(take a minute to think about this)</p>
          </div>

          <div className="p">
            <div className="d_flex_img">
              <div className="width__">
                <div className="style_cor">
                  <img src={Img1} alt="Image" />
                </div>
                <p>Sunny day at a beach</p>
              </div>
              <div className="width__">
                <div className="style_cor">
                  <img src={Img2} alt="Image" />
                </div>
                <p style={{ textAlign: "center" }}>
                  A cold rainy night in a haunted house in October
                </p>
              </div>
            </div>
          </div>
          <p className="p_head_sccc m-t">
            So, what do you think the definition of setting is? Any guesses ?
          </p>
          <div className="p flexing">
            <p className="p_head_sccc">Any guesses?</p>
            <div className="inputt">
              <input type="text" />
            </div>
            <p className="p_head_sccc">Hint:</p>
            <img src={Clock} alt="Clock" />
            <img src={Home} alt="Home" />
          </div>
          <div className="p">
            <div className="dotted_sc_122 ">
              Setting is the time
              <span>
                <img className="clocktag" src={Clock} alt="Clock" />
              </span>
              and place
              <img className="clocktag" src={Home} alt="Home" />
              of a story. It often answers the questions: when? and where?
            </div>
          </div>
          <p className="p_head_sccc">
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </p>

          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Screen2;
