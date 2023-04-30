import ProductInfo from "./ProductInfo"
import {useState } from "react";

function Product(props) {
   const [product,setProduct] = useState([]);
   

   const removeUser = ()=>{
         setProduct([])
   }
    const getUsers = ()=>{
              fetch("https://fakestoreapi.com/products")
              .then((res)=>res.json())
              .then((data)=>{
                console.log(data) 
                setProduct(data)
              })
    }
    return (
        <div style={{padding:"30px"}}>
            <h2>Products Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias et magni asperiores a ad consectetur excepturi sunt aspernatur odio maxime tempore, natus impedit quam mollitia id totam sed distinctio voluptatibus molestiae? Praesentium unde beatae itaque maxime eaque laudantium dolore! Rerum perferendis necessitatibus quae labore porro dolorem. Sint ullam libero a delectus, nam placeat aspernatur nobis sunt, fuga sed dignissimos excepturi enim deserunt, aperiam necessitatibus similique omnis impedit est nostrum harum nisi reiciendis eaque. Omnis odit quam distinctio totam quisquam exercitationem quia, iure assumenda consequuntur, nostrum nemo architecto perferendis neque temporibus, deleniti fugiat laborum nisi sit iusto voluptatum earum magni!</p>
           
           <button onClick={getUsers}>Get Products</button>&nbsp;&nbsp;&nbsp;
           <button onClick={removeUser}>Remove Products</button>
           {
              product.length > 0 &&  <ProductInfo userdata={product} />
           }

        </div>
    );
}

export default Product;