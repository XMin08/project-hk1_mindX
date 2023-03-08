async function getDetail(){
    const ID_product = Number(localStorage.getItem('ID'));
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