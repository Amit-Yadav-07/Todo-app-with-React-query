import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customFetch from "./utils";
import { toast } from "react-toastify";

const Form = () => {
    const [input, setInput] = useState('');
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (inputValue) => customFetch.post('/', { item: inputValue }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            toast.success('task added successfully');
            setInput('')
            console.log(success);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.massage)
        },
    });


    const HandleSubmit = (e) => {
        e.preventDefault();
        mutate(input);
        // toast.success('Task added successfully')
    }

    return (
        <form action="" onSubmit={HandleSubmit}>
            <input type="text" id="" placeholder="Add your item" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button type="submit" className="btn" disabled={isPending}>Add</button>
        </form>
    )
}


export default Form;