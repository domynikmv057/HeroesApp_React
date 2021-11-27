import React from "react";
import Modal from "../Componentes/modal/modal";

let duelHero = [];
function Duelo(duelListSectHero, toggleModal) {
  let power1 = 0;
  let power2 = 0;
  duelHero = duelListSectHero;

  power1 = power1 + duelHero[0].powerstats.combat;
  power1 = power1 + duelHero[0].powerstats.durability;
  power1 = power1 + duelHero[0].powerstats.intelligence;
  power1 = power1 + duelHero[0].powerstats.power;
  power1 = power1 + duelHero[0].powerstats.speed;
  power1 = power1 + duelHero[0].powerstats.strength;

  power2 = power2 + duelHero[1].powerstats.combat;
  power2 = power2 + duelHero[1].powerstats.durability;
  power2 = power2 + duelHero[1].powerstats.intelligence;
  power2 = power2 + duelHero[1].powerstats.power;
  power2 = power2 + duelHero[1].powerstats.speed;
  power2 = power2 + duelHero[1].powerstats.strength;

  if (power1 >= 1 && power2 >= 1) {
    toggleModal(power1, power2, duelHero);
  }
}
export default Duelo;
