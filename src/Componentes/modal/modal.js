import { useEffect, useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const { showModal, modalCallBack, powerUm, powerDois, modalHero } = props;
  const [modalClasses, setModalClasses] = useState("modal-container");

  const toggleModalVisibilite = () => {
    return showModal
      ? setModalClasses("modal-container show-modal")
      : setModalClasses("modal-container");
  };

  const toggleModal = () => {
    modalCallBack();
  };

  useEffect(() => {
    toggleModalVisibilite();
  }, [showModal]);

  function winner(powerUm, powerDois) {
    let win = "";
    if (powerUm > powerDois) {
      return (win = `Winner ${modalHero[0].name}`);
    } else if (powerUm < powerDois) {
      return (win = `Winner ${modalHero[1].name}`);
    } else if (powerUm === powerDois) {
      return (win = `${modalHero[0].name} e ${modalHero[1].name} Empataram !!`);
    }
  }

  if (modalHero === undefined) {
    return (
      <div className={modalClasses} onClick={toggleModal}>
        <div className="modal">
          <button className="modal-close-button" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    );
  } else if (modalHero !== undefined) {
    return (
      <div className={modalClasses} onClick={toggleModal}>
        <div className="modal">
          <button className="modal-close-button" onClick={toggleModal}>
            X
          </button>
          <div className="containerDuel">
            <ul id="camp1" className="modalCard">
              <li className="liGeral" key={modalHero[0].id}>
                <div className="selectHero"></div>
                <div className="heroesPhoto">
                  <img src={modalHero[0].images.sm} />
                </div>
                <div className="heroStatus">
                  <div>
                    <h1 className="heroName"> {modalHero[0].name} </h1>
                  </div>

                  <div className="heroPower">
                    <p>PowerStatus</p>
                    <ul>
                      <li>Combat: {modalHero[0].powerstats.combat}</li>
                      <li>Durability: {modalHero[0].powerstats.durability}</li>
                      <li>
                        Intelligence: {modalHero[0].powerstats.intelligence}
                      </li>
                      <li>Power: {modalHero[0].powerstats.power}</li>
                      <li>Speed: {modalHero[0].powerstats.speed}</li>
                      <li>Strength: {modalHero[0].powerstats.strength}</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="ganhador">
              <h1> {winner(powerUm, powerDois)} </h1>
            </div>
            <ul id="camp2" className="modalCard">
              <li className="liGeral" key={modalHero[1].id}>
                <div className="selectHero"></div>
                <div className="heroesPhoto">
                  <img src={modalHero[1].images.sm} />
                </div>
                <div className="heroStatus">
                  <div>
                    <h1 className="heroName"> {modalHero[1].name} </h1>
                  </div>

                  <div className="heroPower">
                    <p>PowerStatus</p>
                    <ul>
                      <li>Combat: {modalHero[1].powerstats.combat}</li>
                      <li>Durability: {modalHero[1].powerstats.durability}</li>
                      <li>
                        Intelligence: {modalHero[1].powerstats.intelligence}
                      </li>
                      <li>Power: {modalHero[1].powerstats.power}</li>
                      <li>Speed: {modalHero[1].powerstats.speed}</li>
                      <li>Strength: {modalHero[1].powerstats.strength}</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
