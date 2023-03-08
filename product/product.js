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

    var len = index + 18;
    if(len > data.length){
        len = data.length;
    }

    for(let i = index; i < len; i++){
        const product = data[i];

        const {img , name, cost, id} = product;
        const product_element = document.createElement("div");
        
        product_element.classList.add("detail");

        const product_ele_content = `
        <a href="/detail/detail.html" id="${id}" onfocus = "assignID(${id})">
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
            getProduct(18);

        }
        else{
            const button = document.getElementById("page_number_3");
            button.classList.add("page_number_active");
            page_number = 3;
            remove_product()
            getProduct(36);

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
    localStorage.setItem('ID', String(id));
}

function scrollToTop(){
    window.scrollTo(0, 0);
}
