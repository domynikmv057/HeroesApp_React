import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroCard from "../heroCard/HeroCard";
import './hero.css';
import Testa from "../../service/testa";

function Heros () {
    

    const [ heroes, setHeroes ] = useState([]);
    const [ Loading, updateLoading] = useState(true);
    const [ isError, updateError ] = useState('');
    const [ busca, setBusca ] = useState('');



useEffect(() => {
    axios
    .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
    .then((response) => {
        setHeroes(response.data)
        updateLoading( false )
    })
    .catch(() => {
        updateError(isError.message)
        updateLoading( false )
    })

}, []);

if (Loading){
    return <div className="loadComponent"><h1> Buscando Metahumans ...</h1></div> 
}
if (isError) {
    return <h1>Deu alguma coisa errada: {isError}</h1>
}

    const filterHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(busca.toLowerCase()))
    
    return (
        <div  className='containerMain'>
            <div className="containerGeral">

                <div className="imputContainer">
                    <h1  className='titulo'>Metahumans List</h1>
                    <span>Pesquise: </span>
                    <input 
                        type="text"
                        value={busca}
                        onChange={(evet) => setBusca(evet.target.value)}
                    />
                </div>
                <ul className="herosBox">
                    { filterHeroes.map(heros =>(
                        HeroCard(heros)
                    )) }
                </ul>
            </div>
        </div>
    );
}
export default Heros;






// const [{ data, loading, error, response  }, refetch] = useAxios(
//     "http://homologacao3.azapfy.com.br/api/ps/metahumans"
// )

// if (loading) {
//     return(<h1>Carregando...</h1>)
// }
// if (error) {
//     return(<h1>Erro!</h1>)  
// }