import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils.js";


const Items = () => {
    const { isLoading, data, error, isError } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await customFetch.get('/')
            return data;
        }

    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>There was an error</h1>
    }

    return data?.products.map((product) => {

        return <div className='items' key={product.id}>
            <SingleItem product={product} />
        </div>
    })
}

export default Items;