/*** Dummy Array********* */

const fruits = [
  ["oranges", 2],
  ["apples", 5],
  ["cherries", 7],
  ["mangos", 4]

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
 <ul id="fruits-list"></ul>
   </div>

   <div class="viewFruitSectDiv"> 
     <h2 class="item_input viewFruitH2"> Count</h2>
  <ul id="fruits-list-count"> </ul> </div>  `;
   
    newFruitsCont.appendChild(viewMyFruits);
    const fruitsList = document.getElementById("fruits-list");
    const fruitListCount = document.getElementById ("fruits-list-count")

    for (let i = 0; i < fruits.length; i++) {
      const newListItem = document.createElement("li");
      newListItem.setAttribute("class", "fruitsLi");
      newListItem.innerText = fruits[i][0];
      fruitsList.appendChild(newListItem);

    }

    for (let i = 0; i < fruits.length; i++) {
      const newListItem = document.createElement("li");
      newListItem.setAttribute("class", "fruitsLi");
      newListItem.innerText = fruits[i][1];
      fruitListCount.appendChild(newListItem);

    }

 



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


  if(addBtn.getAttribute("name")=== "mainAtt"){

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
 <ul id="fruits-list-add"> </ul></div>

   <div class="viewFruitSectDiv"> 
     <h2 class="item_input viewFruitH2"> Count</h2>
  <ul id="fruits-list-count-add"></ul></div>  `;

    newFruitsContAdd.appendChild(viewMyFruitsAdd);

    const fruitsListAdd = document.getElementById("fruits-list-add");
    const fruitListCountAdd = document.getElementById ("fruits-list-count-add");

    for (let i = 0; i < newFruitsArray.length; i++) {
      const newListItem = document.createElement("li");
      newListItem.setAttribute("class", "fruitsLi");
      newListItem.innerText = newFruitsArray[i][0];
      fruitsListAdd.appendChild(newListItem);

    }

    for (let i = 0; i < newFruitsArray.length; i++) {
      const newListItem = document.createElement("li");
      newListItem.setAttribute("class", "fruitsLi");
      newListItem.innerText = newFruitsArray[i][1];
      fruitListCountAdd.appendChild(newListItem);

    }



    }
    else alert('Enter Fruit & Count');

    document.getElementById("getNewFruitValue").value="";

    document.getElementById("getNewFruitCount").value="";

    addBtn.setAttribute("name","attCahnged")
  }

  else {

    newFruitValue = getNewFruitValue.value ;
    newCountValue = getNewFruitCount.value;
    
    if (newFruitValue && newCountValue){

      const fruitsListAdd = document.getElementById("fruits-list-add");
      const fruitListCountAdd = document.getElementById ("fruits-list-count-add");

      const newListItem = document.createElement("li");
      const newListItemCount= document.createElement("li");
      newListItem.setAttribute("class", "fruitsLi");
      newListItemCount.setAttribute("class", "fruitsLi");
      newListItem.innerText = newFruitValue ;
      newListItemCount.innerText =newCountValue;
      fruitsListAdd.appendChild(newListItem);
      fruitListCountAdd.appendChild(newListItemCount);


    } else alert('Enter Fruit & Count');

    document.getElementById("getNewFruitValue").value="";

    document.getElementById("getNewFruitCount").value="";

  };
};

/************************************************************************* */
