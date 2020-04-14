/*** Dummy Array********* */

const fruits = [
  ["oranges", 2],
  ["apples", 5],
  ["cherries", 7],
  ["mangos", 4],
];

/******************************************************* */

/***** Select Elements  */

const viewFruitsBtn = document.getElementById("viewFruits");

const getCountBtn = document.getElementById("getCount");

const getFruitVal = document.getElementById("getFruitValue");

const addBtn = document.getElementById("add");

const getNewFruitValue = document.getElementById("getNewFruitValue");

const getNewFruitCount = document.getElementById("getNewFruitCount");

/********************************************************************* */

viewFruitsBtn.onclick = () => {
  const newFruitsCont = document.getElementById("newContainer");
  const viewMyFruits = document.createElement("div");
  viewMyFruits.setAttribute("class", "item fruitList");
  viewMyFruits.innerHTML =
    `<div class="viewFruitFirstDiv"> 
    <h2 class="item_input viewFruitH2"> Fruit</h2>
 <ul>
     <li class="fruitsLi">` +
    fruits[0][0] +
    `</li>
     <li class="fruitsLi">` +
    fruits[1][0] +
    `</li>
     <li class="fruitsLi">` +
    fruits[2][0] +
    `</li>
     <li class="fruitsLi">` +
    fruits[3][0] +
    `</li>
     </ul>
   </div>

   <div class="viewFruitSectDiv"> 
     <h2 class="item_input viewFruitH2"> Count</h2>
  <ul>
      <li class="fruitsLi">` +
    fruits[0][1] +
    `</li>
      <li class="fruitsLi">` +
    fruits[1][1] +
    `</li>
      <li class="fruitsLi">` +
    fruits[2][1] +
    `</li>
      <li class="fruitsLi">` +
    fruits[3][1] +
    `</li>
      </ul>
    </div>  `;

  newFruitsCont.appendChild(viewMyFruits);
  viewFruitsBtn.setAttribute("disabled", true);
};

/**************************************************************** */

getCountBtn.onclick = () => {
  const fruitValue = getFruitVal.value;

  const myFruits = [];

  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits[i].length; j++) {
      myFruits.push(fruits[i][j]);
    }
  }

  if (myFruits.includes(fruitValue) && fruitValue )  {
    const countVal = myFruits[myFruits.indexOf(fruitValue) + 1];
    const newFruitsCount = document.getElementById("newContainerCount");
    const viewMyFruitsCount = document.createElement("h1");
    viewMyFruitsCount.setAttribute("class", "item fruitList textOfCount");

    viewMyFruitsCount.innerHTML = countVal;

    newFruitsCount.appendChild(viewMyFruitsCount);

    getCountBtn.setAttribute("disabled", true);
  } else alert("fruit not found or No Entry");

  document.getElementById("getFruitValue").value = "";
};

/*********************************************************************** */

addBtn.onclick = () => {

    newFruitValue = getNewFruitValue.value ;
    newCountValue = getNewFruitCount.value;

    const newFruitsArray = [...fruits ,[newFruitValue,newCountValue]];

    if (newFruitValue && newCountValue){
        const newFruitsContAdd = document.getElementById("newContainerAdd");
        const viewMyFruitsAdd = document.createElement("div"); 
        viewMyFruitsAdd.setAttribute("class", "item fruitList newAdd");
        viewMyFruitsAdd.innerHTML =
    `<div class="viewFruitFirstDiv"> 
    <h2 class="item_input viewFruitH2"> Fruit</h2>
 <ul>
     <li class="fruitsLi">` +
     newFruitsArray[0][0] +
    `</li>
     <li class="fruitsLi">` +
     newFruitsArray[1][0] +
    `</li>
     <li class="fruitsLi">` +
     newFruitsArray[2][0] +
    `</li>
     <li class="fruitsLi">` +
     newFruitsArray[3][0] +
   ` <li class="fruitsLi">` +
     newFruitsArray[4][0] +
    `</li> 
    
     </ul>
   </div>

   <div class="viewFruitSectDiv"> 
     <h2 class="item_input viewFruitH2"> Count</h2>
  <ul>
      <li class="fruitsLi">` +
      newFruitsArray[0][1] +
    `</li>
      <li class="fruitsLi">` +
      newFruitsArray[1][1] +
    `</li>
      <li class="fruitsLi">` +
      newFruitsArray[2][1] +
    `</li>
      <li class="fruitsLi">` +
      newFruitsArray[3][1] +
    `<li class="fruitsLi">` +
      newFruitsArray[4][1] +
    `</li>
      </ul>
    </div>  `;

    newFruitsContAdd.appendChild(viewMyFruitsAdd);

    addBtn.setAttribute("disabled", true);

    }
    else alert('Enter Fruit & Count');

    document.getElementById("getNewFruitValue").value="";

    document.getElementById("getNewFruitCount").value="";
};

/************************************************************************* */
