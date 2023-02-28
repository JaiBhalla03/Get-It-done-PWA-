'use client'

import AddToDo from "@/app/components/AddToDo";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Todo from "@/app/components/Todo";
import Empty from "@/app/components/Empty";

const fetchTodos = async()=>{
    const response = await axios.get("/api/todo/getToDo")
    return response.data;
}

type todoType = {
    email: string,
    id: string,
    image: string,
    name: string,
    todo:{
        createdAt: string,
        id: string,
        isCompleted: boolean,
        title: string,
    }[]
}

export default function Home() {
    const {data, isLoading} = useQuery<todoType>({
        queryFn: fetchTodos,
        queryKey: ["todos"]
    })
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data);
    const todo_length = data?.todo.length;
  return (
    <main>
      <AddToDo/>
        {
            data?.todo.map((todo_single)=>(
                <Todo
                    id={todo_single.id}
                    title={todo_single.title}
                    isCompleted={todo_single.isCompleted}
                />
            ))
        }
    </main>
  )
}
