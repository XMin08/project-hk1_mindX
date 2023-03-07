let ID_product = 1;

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



async function getProduct(index){
    
    const api = "http://127.0.0.1:5500/list_product.json"
    const res = await fetch(api);
    const data = await res.json();
    const parent = document.getElementById("product");

    var len = index + 9;
    if(len > data.length){
        len = data.length;
    }

    for(let i = index; i < len; i++){
        const product = data[i];

        const {img , name, cost, id} = product;
        const product_element = document.createElement("div");
        
        product_element.classList.add("detail");

        const product_ele_content = `
        <a href="./detail.html" id="${id}" onload = "assignID(${id})">
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

function remove_product(){
    let to_remove = document.querySelectorAll('.detail');
    for(let i = 0; i < to_remove.length; i++){
        to_remove[i].parentNode.removeChild(to_remove[i]);
    }
}

var page_number = 1;
const max_page_number = 3;
const min_page_number = 1;
function switchPageNumber(number){

    if(number === 0){

        const button = document.getElementById("page_number_1");
        button.classList.add("page_number_active");
        getProduct(0);
    }
    else{

        let text = "page_number_";
        text += String(page_number);
        
        const remove_active = document.getElementById(text);
        remove_active.classList.remove("page_number_active");

        if(number === 1){

            const button = document.getElementById("page_number_1");
            button.classList.add("page_number_active");
            page_number = 1;
            remove_product()
            getProduct(0);

        }
        else if(number === 2){

            const button = document.getElementById("page_number_2");
            button.classList.add("page_number_active");
            page_number = 2;
            remove_product()
            getProduct(9);

        }
        else{
            const button = document.getElementById("page_number_3");
            button.classList.add("page_number_active");
            page_number = 3;
            remove_product()
            getProduct(18);

        }
    }
}


function switchByButton(name){
    
    if(name === "left" && page_number > min_page_number){
        switchPageNumber(page_number - 1);
    }

    if(name === "right" && page_number < max_page_number){
        switchPageNumber(page_number + 1);
    }
}

function assignID(id){
    ID_product = id;
}

async function getDetail(){
    const api = "http://127.0.0.1:5500/list_product.json"
    const res = await fetch(api);
    const data = await res.json();
    console.log(ID_product);
    let parent = document.getElementById("detail");

    const product = data[ID_product - 1];
    console.log(product)

    const {img , name, cost} = product;
    const img_element = document.createElement("div");
    img_element.classList.add("img_product");
    
    const img_element_content = `<img src="${img}" alt="picture">`;

   img_element.innerHTML = img_element_content;
   parent.insertBefore(img_element,document.getElementById("infor"));


   parent = document.getElementById("infor");
   const title_element = document.createElement("div");
   title_element.classList.add("name_title");
   const title_element_content = `
   <h1>${name}</h1>
   <span>${cost}</span>
   <i class="fa-thin fa-dollar-sign"></i>`;

   title_element.innerHTML = title_element_content;
   parent.insertBefore(title_element,document.getElementById("size"));


   parent = document.getElementById("infor");
   const ID_element = document.createElement("div");
   ID_element.classList.add("ID_product");
   const ID_element_content = `
   <p>Mã sản phẩm</p>
    <span>${ID_product}</span>`;

   ID_element.innerHTML = ID_element_content;
   parent.insertBefore(ID_element,document.getElementById("size"));
}

function createDivText(x){
    // const x = document.getElementById("test");
    var icon = x.children[1];
    const div = x.nextElementSibling;
    let check = true;
    if(div === null || div.tagName !== "DIV")
        check = false;
    
    if(icon.className === "fa-solid fa-plus"){
        
        icon.className = "fa-solid fa-minus";
        if(check){
            div.classList.add("text_active");
        }
    }
    else{

        icon.className = "fa-solid fa-plus";
        if(check){
            div.classList.remove("text_active");
        }
            
    }
    
}

function changeValueAmount(check){
    const parent = document.getElementById("amount");
    var input = parent.children[1];
    if(check === "minus" && input.value > 1){
        input.value = Number(input.value) - 1;
    }
    if(check === "plus"){
        input.value = Number(input.value) + 1;
    }
}

function fixSize(li){

    const list = document.getElementById("list_size");
    console.log(list.children.length);
    for(let i = 0; i < list.children.length; i++){
        if(list.children[i].className === "size_active"){
            list.children[i].classList.remove("size_active");
        }
    }

    li.classList.add("size_active");
}
