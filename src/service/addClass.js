let elementsSelec = [];
function AddClass(elemetHtml) {
  elemetHtml.target.classList.toggle("active");
  elementsSelec.push(elemetHtml);
  setTimeout(function () {
    if (elementsSelec.length === 2) {
      for (let i = elementsSelec.length; i > 0; i--) {
        elementsSelec.map((item) => {
          return item.target.classList.remove("active");
        });
        elementsSelec.pop();
      }
    }
  }, 1000);
}
export default AddClass;
