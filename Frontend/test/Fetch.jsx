import { useEffect } from "react";
import { useState } from "react";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const Fetch = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [products, setProducts] = useState(null);


    const fetchData = async () => {
        try {

            const response = await fetch(url);
            if (!response.ok) {
                setIsError(true)
                setIsLoading(false)
                return;
            }
            const data = await response.json();
            setProducts(data);

        } catch (error) {
            setIsError(true)
            console.log(error);

        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (isError) {
        return <h1>Something wrong please check</h1>
    }



    return (
        <div>
            <h3>Products</h3>
            {products.map((product) => {
                return <div key={product.id}>
                    <img style={{ height: "150px" }} src={product.img} alt="" />
                    <strong>$ {product.price}</strong>
                </div>
            })}
        </div>
    )
}

export default Fetch;