function addItem(event) {
  event.preventDefault();
  let text = document.getElementById('todo-input');
  db.collection("todo-items").add({
    text: text.value,
    status: "active"
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
  text.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    // console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    })
    generateItems(items);
  })
}

function generateItems(items) {

  let itemsHTML = "";
  items.forEach((item) => {
    console.log(item);
    itemsHTML += `     
        <div class="todo-item">
          <div class="check">
            <div class="check-mark">
              <img src="images/icon-check.svg" alt="check icon">
            </div>
          </div>
          <div class="todo-text">
            ${item.text}
          </div>
        </div>

    `
  })

  document.querySelector(".todo-items").innerHTML = itemsHTML;
}
getItems();