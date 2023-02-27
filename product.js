function createDivChild(x){
    // const x = document.getElementById("test");
    var icon = x.children[1];
    const div = x.nextElementSibling;
    let check = true;
    if(div === null || div.tagName !== "DIV")
        check = false;
    
        if(icon.className === "fa-solid fa-caret-down"){
        icon.className = "fa-solid fa-caret-up";
        if(check){
            div.classList.add("menu_active");
        }
    }
    else{
        icon.className = "fa-solid fa-caret-down";
        if(check){
            div.classList.remove("menu_active");
        }
            
    }
    
}


const parent = document.getElementById("product");
getProduct();
async function getProduct(){

    const api = "https://63fb0a377a045e192b61c296.mockapi.io/products"
    const res = await fetch(api);
    const data = await res.json();

    for(let i = 0; i < data.length; i++){
        const product = data[i];

        const {img , name, cost} = product;
        const product_element = document.createElement("div");

        product_element.classList.add("detail");

        const product_ele_content = `
        <a href="###">
            <div class="pic">
                <img src=${img}
                alt="picture">
                <span>Chọn sản phẩm</span>    
            </div>
            
            <p>${name}</p>
            <span>${cost}</span>
            <i class="fa-thin fa-dollar-sign"></i>
        </a>
        `;

        product_element.innerHTML = product_ele_content;
        parent.appendChild(product_element);
    }

}
