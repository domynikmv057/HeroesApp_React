import PonteService from "../../service/ponteService";
function HeroCard(dadosApi, toggleModal) {
  return (
    <li
      onClick={(elemetHtml) => PonteService(dadosApi, elemetHtml, toggleModal)}
      className="liGeral"
      key={dadosApi.id}
    >
      <div className="selectHero" />
      <div className="heroesPhoto">
        <img src={dadosApi.images.sm} />
      </div>
      <div className="heroStatus">
        <div>
          <h1 className="heroName"> {dadosApi.name} </h1>
        </div>

        <div className="heroPower">
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
  );
}
export default HeroCard;
//
