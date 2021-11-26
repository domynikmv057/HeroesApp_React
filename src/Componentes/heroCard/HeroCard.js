import react  from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Duelo from "../../service/duel";

function HeroCard(dadosApi) {



    return (
        
        <li  onClick={(elemetHtml) => Duelo( dadosApi ,elemetHtml )} className='liGeral'  key={dadosApi.id}>
            <div className='selectHero'></div>
            <div className="heroesPhoto">
                <img src={dadosApi.images.sm}/>
            </div>
            <div className='heroStatus'>
                <div>
                    <h1 className='heroName'> {dadosApi.name} </h1>
                </div>
                
                <div className='heroPower'>
                    <p>PowerStatus</p>
                    <ul>
                        <li>Combat: {dadosApi.powerstats.combat}</li>
                        <li>Durability: {dadosApi.powerstats.durability}</li>
                        <li>Intelligence: {dadosApi.powerstats.intelligence}</li>
                        <li>Power: {dadosApi.powerstats.power}</li>
                        <li>Speed: {dadosApi.powerstats.speed}</li>
                        <li>Strength: {dadosApi.powerstats.strength}</li>
                    </ul>
                </div>    
            </div>
        </li>
    )
}
export default HeroCard

{/* <li className='liGeral' key={heros.id}>
<div className="heroesPhoto">
    <img onClick={console.log('test')}  src={heros.images.sm}/>
</div>
<div className='heroStatus'>
    <div>
        <h1 className='heroName'> {heros.name} </h1>
    </div>
    
    <div className='heroPower'> 
        <p>PowerStatus</p>
        <ul>
            <li>Combat: {heros.powerstats.combat}</li>
            <li>Durability: {heros.powerstats.durability}</li>
            <li>Intelligence: {heros.powerstats.intelligence}</li>
            <li>Power: {heros.powerstats.power}</li>
            <li>Speed: {heros.powerstats.speed}</li>
            <li>Strength: {heros.powerstats.strength}</li>
        </ul>
    </div>    
</div>

</li> */}