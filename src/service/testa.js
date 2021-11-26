import React from "react";

let itens = []
function Testa(duelListSectHero) {
    let power1 = 0
    let power2 = 0
    itens = duelListSectHero

    power1 = power1 + itens[0].powerstats.combat
    power1 = power1 + itens[0].powerstats.durability
    power1 = power1 + itens[0].powerstats.intelligence
    power1 = power1 + itens[0].powerstats.power
    power1 = power1 + itens[0].powerstats.speed
    power1 = power1 + itens[0].powerstats.strength

    power2 = power2 + itens[1].powerstats.combat
    power2 = power2 + itens[1].powerstats.durability
    power2 = power2 + itens[1].powerstats.intelligence
    power2 = power2 + itens[1].powerstats.power
    power2 = power2 + itens[1].powerstats.speed
    power2 = power2 + itens[1].powerstats.strength

    if (power1 > power2) {
       return(
        console.log(`${itens[0].name} Ganhou!`)
       ) 
    }else if (power2 > power1) {
        return(
            alert(`${itens[1].name} Ganhou!`)
        ) 
     }else  if (power1 === power2) {
        return(
            <h1>{itens[0].name} Enpatou com {itens[0].name}</h1>
        ) 
     }
    
}
export default Testa

