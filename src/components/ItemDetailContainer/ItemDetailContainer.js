import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  console.log("ItemId:", itemId); 
  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists) {
          const data = response.data();
          const productsAdapted = { id: response.id, ...data };
          setProduct(productsAdapted);
        } else {
          console.log("No se encontró el documento:", itemId);
        }
      })
      .catch((error) => {
        console.log("Error al obtener el documento:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
    <h1>itemId: {'tst'}</h1>
      {product ? (
        <ItemDetail product={product} />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>No se pudo cargar el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;