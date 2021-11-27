import PowerCalc from "./powerCalc";

function Duelo(duelListSectHero, toggleModal) {
  const power1 = PowerCalc(duelListSectHero[0]);
  const power2 = PowerCalc(duelListSectHero[1]);

  if (power1 >= 1 && power2 >= 1) {
    toggleModal(power1, power2, duelListSectHero);
  }
}
export default Duelo;
