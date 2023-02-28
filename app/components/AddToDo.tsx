'use client'
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast"


export default function AddToDo(){
    const [title, setTitle] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const queryClient = useQueryClient()
    let toastPostID : string
    const {mutate} = useMutation(
        async (title: string)=>
            await axios.post("/api/todo/addToDo", {
                title,
            }),
        {
            onSuccess:(data)=>{
                toast.success("Todo Added🔥", {id: toastPostID})
                // queryClient.invalidateQueries(["todos"])
                setTitle("")
                setIsDisable(false);
            },
            onError:(error)=>{
                toast.error("Error adding your todo", {id: toastPostID})
                setIsDisable(false)
            }
        }
    )
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        toastPostID = toast.loading("Adding your todo")
        setIsDisable(true);
        mutate(title)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className={'py-6 px-4 bg-gray-800 rounded-lg'}>
            <div className={'flex justify-between items-center'}>
                <input
                    className={'text-white w-full text-center py-2 mx-2 bg-gray-800 border-none focus:outline-none'}
                    name={'title'}
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder={'Enter your todo'}
                />
                <button
                    disabled={isDisable}
                    type={"submit"}
                    className={'bg-green-500 text-white px-4 py-2 text-xl rounded-md'}
                >Add</button>
            </div>
        </form>
    )
}