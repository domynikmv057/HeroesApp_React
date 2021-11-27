import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroCard from "../heroCard/HeroCard";
import "./hero.css";
import Modal from "../modal/modal";

function Heros() {
  const [heroes, setHeroes] = useState([]);
  const [Loading, updateLoading] = useState(true);
  const [isError, updateError] = useState("");
  const [busca, setBusca] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [powerUm, setPowerUm] = useState();
  const [powerDois, setPowerDois] = useState();
  const [modalHero, setModalHero] = useState([
    {
      id: "",
      name: "",
      images: { sm: "" },
      powerstats: {
        combat: "",
        durability: "",
        intelligence: "",
        powe: "",
        speed: "",
        strength: "",
      },
    },
    {
      id: "",
      name: "",
      images: { sm: "" },
      powerstats: {
        combat: "",
        durability: "",
        intelligence: "",
        powe: "",
        speed: "",
        strength: "",
      },
    },
  ]);
  useEffect(() => {
    axios
      .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((response) => {
        setHeroes(response.data);
        updateLoading(false);
      })
      .catch(() => {
        updateError(isError.message);
        updateLoading(false);
      });
  }, []);

  if (Loading) {
    return (
      <div className="loadComponent">
        <h1> Buscando Metahumans ...</h1>
      </div>
    );
  }

  const filterHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(busca.toLowerCase())
  );

  const toggleModal = (power1, power2, duelHero) => {
    setPowerUm(power1);
    setPowerDois(power2);
    setModalHero(duelHero);
    setShowModal(!showModal);
  };

  return (
    <div className="containerMain">
      <div className="containerGeral">
        <div className="imputContainer">
          <h1 className="titulo">Metahumans List</h1>
          <div>
            <span>Pesquise: </span>
            <input
              type="text"
              value={busca}
              onChange={(evet) => setBusca(evet.target.value)}
            />
          </div>
        </div>
        <Modal
          showModal={showModal}
          modalCallBack={toggleModal}
          powerUm={powerUm}
          powerDois={powerDois}
          modalHero={modalHero}
        />
        <ul className="herosBox">
          {filterHeroes.map((heros) => HeroCard(heros, toggleModal))}
        </ul>
      </div>
    </div>
  );
}
export default Heros;
