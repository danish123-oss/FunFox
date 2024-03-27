import React from "react";
import Head from "../assets/Rectangle 6.png";
import Child from "../assets/Group 925.png";
import Lower from "../assets/Group 152.png";
import Cloud1 from "../assets/Group (2).png";

const Screen1 = () => {
  return (
    <React.Fragment>
      <div className="screen_size">
        <div className="screen1">
          <div className="screen1_head">
            <div class="containersc">
              <div className="dotted_sc_12">
                <h3 class="">Elements of Story Writing</h3>
              </div>
            </div>
          </div>
          <div>
            <p className="p_head_sc">
              Welcome to term 2 of Writers Club. Are you excited for this
              amazing journey? Over the next week, we will be practicing the
              different elements of story writing. Our aim is to make stories
              more interesting and exciting.
            </p>
          </div>
          <div className="p">
            <div className="dotted_sc_1 ">
              <p>
                There are elements which make the foundation for story writing.
                An element is an essential part of something and every fiction
                story has the same key elements:
              </p>
              <img src={Child} alt="child" />
            </div>
          </div>
          <div className="p">
            <div className="main_cloud">
              <div className="cloud_position">
                <img src={Cloud1} alt="cloud" />
                <h4>SETTING</h4>
              </div>
              <div className="cloud_position">
                <img src={Cloud1} alt="cloud" />
                <h4>CHARACTERS</h4>
              </div>
              <div className="cloud_position">
                <img src={Cloud1} alt="cloud" />
                <h4>PLOT</h4>
              </div>
              <div className="cloud_position">
                <img src={Cloud1} alt="cloud" />
                <h4>PROBLEM OR CONFLICT</h4>
              </div>
              <div className="cloud_position">
                <img src={Cloud1} alt="cloud" />
                <h4>RESOLUTION</h4>
              </div>
            </div>
          </div>
          <div>
            <p className="p_head_sc">
              You must be familiar with some of these. If not, do not worry! we
              will cover all these elements as we go along.
            </p>
          </div>
          <div className="p">
            <div className="p containersc2">
              <img src={Lower} alt="" />
              <h4>
                For today’s lesson, we will try to understand and practice
                writing the setting for our stories. <br /> The setting is an
                important element of every fiction story.
              </h4>
            </div>
          </div>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Screen1;
