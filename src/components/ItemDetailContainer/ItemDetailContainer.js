import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db, getNumericIdByDocumentId } from '../../service/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const docId = await getNumericIdByDocumentId(db, itemId);

            if (docId) {
                const docRef = doc(db, 'products', docId);

                getDoc(docRef)
                    .then(response => {
                        const data = response.data();
                        if (data) {
                            const productsAdapted = { id: response.id, ...data };
                            setProduct(productsAdapted);
                        } else {
                            console.error("No hay información.");
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    })

                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                console.error('No se encontró el producto con el ID numérico:', docId);
                setLoading(false);
            }
        };

        fetchData();

    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <div className="CartDetailMsn">Cargando el producto...</div>
            ) : (
                <ItemDetail {...product}/>
            )}
        </div>
    );
};

export default ItemDetailContainer;




