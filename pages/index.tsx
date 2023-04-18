import { Main } from "next/document";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";

type TodosProps = {
  userId: number;
  title: string;
  id: number;
}

const getTodos = async () => {
  const response = await api.get<TodosProps>('/');
  return response.data;

}

export default function Home() {

  const { data, isLoading} = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })

  //const [data, setData] = useState<TodosProps[] | null>(null);
  //const [isLoading, setIsLoading] = useState(false);


  //const handleTodos = useCallback(async () => {

   // setIsLoading(true);
   // const response = await getTodos();

  //  setIsLoading(false);
  //  setData(response);
 // }, [])

 // useEffect(() => {
 //   handleTodos();
 // }, [handleTodos]);

  return (

   <>

    <h2>Home Page</h2>

    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
      {data?.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
      </>
    )}

   </>
  )
}
