import React, { useState } from "react";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Logo from "../assets/Fun Fox Logo-01 copy 1 (1).png";
import Week from "../assets/Group 1180.png";
import Pencil from "../assets/Group 1462.png";
import Bag from "../assets/Group 1460.png";
import Book from "../assets/Group 1461.png";
import Scale from "../assets/Group 61.png";
import Book2 from "../assets/Group 1458.png";
import Cap from "../assets/Group 1459.png";
import Bell from "../assets/Group 37.png";
import Person from "../assets/Group 36.png";
import ModalView from "../assets/Group 53.png";
import Pre from "../assets/Layer_7.png";
import Next from "../assets/Layer_7 (1).png";
import Arrow from "../assets/Vector (4).png";
import Clock from "../assets/Frame (5).png";
import Home from "../assets/Frame (6).png";
import { Button, Modal } from "antd";
const ParentComponent = () => {
  const [currentChild, setCurrentChild] = useState(1);
  const [open, setOpen] = useState(false);
  const handleNext = () => {
    setCurrentChild(2);
  };

  const handlePrev = () => {
    setCurrentChild(1);
  };

  return (
    <React.Fragment>
      <div className="main_container">
        <nav>
          <img src={Logo} alt="logo" />
          <img className="week_" src={Week} alt="logo" />
        </nav>
        <div className="main_layout">
          <div className="layout1">
            <div className="_layout1">
              <img src={Pencil} alt="" />
              <img src={Bag} alt="" />
              <img src={Book} alt="" />
            </div>
          </div>
          <div className="layout2">
            {currentChild === 1 ? <Screen1 /> : <Screen2 />}
          </div>
          <div className="layout3">
            <div className="_layout1">
              <img src={Scale} alt="" />
              {currentChild === 1 ? (
                <img src={Book2} alt="Book" />
              ) : (
                <img
                  onClick={() => setOpen(true)}
                  className="modelview"
                  src={ModalView}
                  alt="Model"
                />
              )}

              <img src={Cap} alt="" />
            </div>
          </div>
        </div>
        <Modal
          title=""
          centered
          open={open}
          onCancel={() => setOpen(false)}
          footer={[]}
          width={1000}
        >
          <div className="mid sty">Guide Sheet</div>
          <div className="midle">
            <div>
              <p className="p_head_sccc sty ">
                So, what do you think the definition of setting is?
              </p>
            </div>
            <div className="p flexing">
              <p className="p_head_sccc sty">Any guesses?</p>
              <div className="inputt2">
                <input
                  placeholder="> Setting is the time and place of a story."
                  type="text"
                />
              </div>
              <p className="p_head_sccc sty">Hint:</p>
              <img src={Clock} alt="Clock" />
              <img src={Home} alt="Home" />
            </div>
          </div>
        </Modal>
      </div>

      <div className="menu_section">
        <img className="bell" src={Bell} alt="bell" />
        <div className="menus">
          <img src={Next} onClick={handlePrev} disabled={currentChild === 1} />
          <div className="arrow">
            <div className="value">{currentChild}</div>
            <div className="value2">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <img src={Pre} onClick={handleNext} disabled={currentChild === 2} />
        </div>
        <img className="bell" src={Person} alt="bell" />
      </div>
    </React.Fragment>
  );
};

export default ParentComponent;
