import axios from "axios";
import { useEffect } from "react";
import '../src/utils'

const url1 = 'https://www.course-api.com/react-store-products';
const url2 = 'https://randomuser.me/api';


let GlobalInstance = () => {

    const getData = async () => {
        try {
            const resp2 = await axios(url2);
            const resp1 = await axios(url1);
            console.log(resp2);
            console.log(resp1);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData();
    }, [])


    return <h1>global</h1>
}

export default GlobalInstance;