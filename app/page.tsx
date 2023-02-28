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

export default function Home() {
    const {data, isLoading} = useQuery({
        queryFn: fetchTodos,
        queryKey: ["todos"]
    })
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data);
    const todo_length = data.todo.length;
  return (
    <main>
      <AddToDo/>
        {
            (todo_length > 0)?<Todo/>:<Empty/>
        }
    </main>
  )
}
