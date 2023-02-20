var cart=document.querySelectorAll('.add-carts');
let product=[
    {
        Name : 'Cartoon  ',
        tag: 'Arrival1',
        price: 43,
        inCart: 0
    },
    {
        Name : 'Cartoon  ',
        tag: 'Arrival2',
        price: 53,
        inCart: 0
    },
    {
        Name : 'Cartoon  ',
        tag: 'Arrival3',
        price: 47,
        inCart: 0
    },
    {
        Name : 'Cartoon  ',
        tag: 'Arrival4',
        price: 29,
        inCart: 0
    },
    {
        Name : 'Cartoon  ',
        tag: 'Arrival5',
        price: 39,
        inCart: 0
    },
    {
        Name : 'Cartoon  Shirt6',
        tag: 'Arrival6',
        price: 33,
        inCart: 0
    },
    {
        Name : 'Cartoon  Shirt7',
        tag: 'Arrival7',
        price: 35,
        inCart: 0
    },
    {
        Name : 'Cartoon  Shirt8',
        tag: 'Arrival8',
        price: 28,
        inCart: 0
    },
];

for(let i=0;i<cart.length;i++){
   cart[i].addEventListener('click',()=>{
    CartNumber(product[i]);
    totalCost(product[i]);
   })
}

function onLoadCart(){
    let ProductNumber=localStorage.getItem('CartNumber');
    if(ProductNumber){
    document.querySelector('.carts span').textContent=ProductNumber;   
    }
}

function CartNumber(product){
   // console.log("the product is",product);
    let ProductNumber=localStorage.getItem('CartNumber');
    ProductNumber=parseInt(ProductNumber);

    if(ProductNumber){
        localStorage.setItem('CartNumber',ProductNumber + 1);
        document.querySelector('.carts span').textContent=ProductNumber+1;   
    }
    else{
        localStorage.setItem('CartNumber',1);
        document.querySelector('.carts span').textContent=1;   
    }
    setItems(product);
}

function setItems(product)
{
let cartItem=localStorage.getItem('ProductsInCart');

cartItem=JSON.parse(cartItem);
if(cartItem != null)
{
if(cartItem[product.tag] == undefined )
{
cartItem={
    ...cartItem,
    [product.tag]:product
}
}
    cartItem[product.tag].inCart +=1;
}
else{
    product.inCart=1;
    cartItem={
        [product.tag] : product
    }
}
localStorage.setItem('ProductsInCart',JSON.stringify(cartItem));
}


function totalCost(product)
{

let cartCost=localStorage.getItem('totalCost');
//console.log('My cost is: ',cartCost);
//console.log(typeof cartCost);

if(cartCost != null){
    cartCost=parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost + product.price);
}
else{
   
    localStorage.setItem("totalCost",product.price); 
}
}

function displayCart(){
    let cartItem=localStorage.getItem('ProductsInCart');
    cartItem=JSON.parse(cartItem);
    let productContainer=document.querySelector('.products');
    let cartCost=localStorage.getItem('totalCost');
   // console.log(cartItem);

    if(cartItem && productContainer ){
        productContainer.innerHTML='';
        Object.values(cartItem).map(item =>{
            productContainer.innerHTML +=

           `<div class=products>

           <ion-icon name="backspace-outline"></ion-icon>
           <img src="./images/${item.tag}.jpg">
           <span class="Name">${item.Name}</span>
           </div>
         <div class="price">$${item.price}</div>

         <div class="quantity">
         <ion-icon name="caret-back-outline"></ion-icon>
         ${item.inCart}
         <ion-icon name="caret-forward-outline"></ion-icon>
         </div>
         <div class="total">
         $${item.inCart * item.price},00
         </div>
         <div class=line>
         <hr>
         </div>
        `
        });

        productContainer.innerHTML +=`
        <div class=basketTotalContainer>
        <h4 class="basketTotalTitle>
       
        </h4>
        <h4 class="basketTotal>
        <h4>TOTAL PRICE = </h4>
       <h4> $${cartCost}</h4>
        </h4>
        </div>
        
        `;
    }
}

displayCart();
onLoadCart();