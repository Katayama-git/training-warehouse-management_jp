async function fetchMenus() {
    const menus = await fetch("http://localhost:8080/menus");
    if (!menus.ok) {
        throw new Error("Could not fetch menus");
    }
    const menusJson = await menus.json();
    console.log(menus.ok,"ok");
    console.log(menusJson);
    renderMenus(menusJson);
}




//ラムダ式　or アロー関数？
(a) => {引数aを用いた処理}
 
var object = {

    name : "name",

    age : 20,

    cal : function(){
        var result = this.age + 1;
        return result;
    }
}

function test(){
    alert(object.cal());
   // alert(object.name);
}

function renderMenus(menusJson) {
    const menus = document.getElementById("menu-list");
    if (!menus) {
        throw new Error("Could not find orders element");
    }
    menus.innerHTML = "";
    const menuTable = document.createElement("table");
    menuTable.innerHTML = "<th>Menu ID</th><th>Menu Name</th>";

    console.log(menusJson,"This is menusJson");
    console.log(menusJson.menus,"This is menus");
    
    menusJson.menus.forEach((menu) => {
        menuTable.innerHTML += `
        <tr>
            <td>${menu.id}</td><td>${menu.name}</td>
        </tr>
        `;
        menus.appendChild(menuTable)
    
    });
}

async function handleRegisterMenu(event) {
    event.preventDefault();
    const form = event.target.form;
    const formData = new FormData(form);
    const menu = {
        name: formData.get("name"),
    };
    
    // TODO: "fetch"を完成させる
    const response = await fetch("http://localhost:8080/menus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(menu)
    });
    if (!response.ok) {
        const error = await response.json();
        console.error(error);
        return;
    }

    fetchMenus();
}