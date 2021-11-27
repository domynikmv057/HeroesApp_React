const powerCalc = (hero) =>
  Object.values(hero.powerstats).reduce((acc, stat) => {
    acc += stat;
    return acc;
  }, 0);

export default powerCalc;
