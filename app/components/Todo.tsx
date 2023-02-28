import React from 'react';

type propType = {
    title: string,
    isCompleted: boolean
}

const Todo = ({title, isCompleted}:propType) => {
    return (
        <div className="py-6 px-6 my-4 text-2xl bg-gray-800 rounded-lg">
            {title} {isCompleted}
        </div>
    );
};

export default Todo;