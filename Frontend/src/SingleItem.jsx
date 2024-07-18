import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

const SingleItem = ({ product }) => {
    // edit functionality
    const queryClient = useQueryClient()
    const { mutate: editTask } = useMutation({
        mutationFn: ({ taskId, isDone }) => {
            return customFetch.patch(`/${taskId}`, { isDone })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
    })

    // delete functionality
    const { mutate: deleteTask } = useMutation({
        mutationFn: (taskId) => {
            return customFetch.delete(`/${taskId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        }
    })

    return (
        <div className='item'>
            <input type="checkbox" checked={product.isDone} onChange={() => editTask({ taskId: product.id, isDone: !product.isDone })} id="box" />
            <h3 style={{ textDecoration: product.isDone && 'line-through' }}>{product.item}</h3>
            <button type="button" onClick={() => deleteTask(product.id)}>Remove</button>
        </div>
    )
}

export default SingleItem;