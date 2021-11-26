import React from "react";

let elementsSelec = []
function AddClas(elemetHtml){
    
    elemetHtml.target.classList.toggle("active")
    elementsSelec.push(elemetHtml);
    setTimeout(function() {
        if (elementsSelec.length === 2){
            for (let i = elementsSelec.length; i > 0; i--) {
                elementsSelec.map(item => {
                    item.target.classList.remove("active");
                })
                elementsSelec.pop();
            }
        }
      }, 2000)
}
export default AddClas;