import React,{useState, useEffect} from 'react';

function ProductInfo({userdata}) {
    // eslint-disable-next-line 
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/image')
          .then(response => response.json())
          .then(data => setImageData(data));
      }, []);
    return (
        <div>
              <table cellPadding={10} style={{width:"70%",boxShadow:"0 0 10px blue",margin:"50px auto",backgroundColor:"aqua"}}>
                  <thead>
                      <tr style={{background:"black",color:"white"}}>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th>
                      </tr>
                  </thead>
                  <tbody align="left">
                 {
                     userdata.map((ele)=>{
                         
                       return <tr>
                        <td>
                        <img src={ele.image} alt={ele.name} width={160} height={160}/>
                        </td>
                         <td>{ele.title}</td>
                         <td>{ele.price}</td>
                         <td>{ele.category}</td>
                       </tr>
                     })
                 }
                  </tbody>
              </table>
          </div>
    );
}

export default ProductInfo;