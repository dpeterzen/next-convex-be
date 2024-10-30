'use client';

import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const [text, setText] = useState("");
  const createTodo = useMutation(api.todos.createTodo);
  const todos = useQuery(api.todos.getTodos);
  // how convex communicates with react: getting notifications from a subscription on the web socket,
  // query is listening for table/data changes
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          {todos?.map(todo => {
            return <div key={todo._id}>{todo.text}</div>;
          })}
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            // TODO: call the mutation here
            createTodo({
              text,
            });
            setText(""); // empty input field
          }}
        >
          
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className="text-black"
          />
          <button>create</button>

        </form>

      </main>
    </div>
  );
}
