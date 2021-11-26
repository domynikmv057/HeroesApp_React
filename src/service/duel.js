// import React from "react";
// import { useState } from "react/cjs/react.development";

import AddClas from "./addClas";
import Testa from "./testa";

    
let duelListSectHero = []
let provisorio = []
function Duelo(selectHero, elemetHtml) {
    
    console.log(selectHero);
    duelListSectHero.push(selectHero)


    if (duelListSectHero.length === 2){
        console.log('tem 2');
        Testa(duelListSectHero)
        setTimeout(function() {
            for (let i = duelListSectHero.length; i > 0; i--) {
                duelListSectHero.pop();
            }
          }, 2000)
    }


    /// Coloca classe selecionado, e retira caso tenha 2 
    AddClas(elemetHtml)
}

export default Duelo;