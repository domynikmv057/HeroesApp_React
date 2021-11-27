import Duelo from "./duelo";
import AddClass from "./addClass.js";

let duelListSectHero = [];
function PonteService(selectHero, elemetHtml, toggleModal) {
  duelListSectHero.push(selectHero);

  if (duelListSectHero.length === 2) {
    Duelo(duelListSectHero, toggleModal);
    setTimeout(function () {
      for (let i = duelListSectHero.length; i > 0; i--) {
        duelListSectHero.pop();
      }
    }, 2000);
  }

  /// Coloca classe selecionado, e retira caso tenha 2
  AddClass(elemetHtml);
}

export default PonteService;
