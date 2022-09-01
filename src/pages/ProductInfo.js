import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireconfig";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const [product, setProduct] = useState();
  const[loading,setLoading]=useState(false)
  const params = useParams();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true)
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      console.log(productTemp.data());
      setProduct(productTemp.data());
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            
        {product && (
             <div>
             <p><b>{product.name}</b></p>
             <img src={product.imageURL} alt="image" className="product-img-info"/>
             <hr/>
            <p>{product.description}</p>
            <div className="d-flex justify-content-end mt-3">
              <button>ADD TO CART</button>
            </div>
            </div>
          
         )}
          </div>

        </div>
          
          </div>
     
    </Layout>
  );
}

export default ProductInfo;
