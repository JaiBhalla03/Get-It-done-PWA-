import React from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type propType = {
    title: string,
    isCompleted: boolean,
    id: string
}

const Todo = ({title, isCompleted, id}:propType) => {
    let deleteToastId: string
    const queryClient = useQueryClient()
    const {mutate} = useMutation(
        async (id: string)=>await axios.delete('/api/todo/deleteToDo', {data: id}),
        {
            onError:(error)=>{
                console.log(error)
                toast.error("Error while deleting the todo!", {id: deleteToastId})
            },
            onSuccess:(data)=>{
                console.log(data)
                queryClient.invalidateQueries(["todos"])
                toast.success("Your todo has been deleted", {id: deleteToastId})
            }
        }
    )
    const deletePost = ()=>{
        deleteToastId = toast.loading("Deleting your todo", {id:deleteToastId})
        mutate(id);
    }
    return (
        <div className="flex justify-between items-center py-6 px-6 my-4 text-xl bg-gray-800 rounded-lg text-white">
            <h1>{title}</h1>
            <button onClick={deletePost} className={'bg-red-500 px-2 md:px-4 lg:px-6  py-4 rounded-md'}>Delete</button>
        </div>
    );
};

export default Todo;