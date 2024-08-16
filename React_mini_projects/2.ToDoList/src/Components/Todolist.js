import { useState, useRef } from "react";

const TodoList = () => {
    // useRef is used to keep track of the next unique ID for tasks
    const nextId = useRef(0);
    const [name, setName] = useState('');  // For input field
    const [items, setItems] = useState([]);  // For list of items (tasks)
    const [editId, setEditId] = useState(null);  // For editing an item

    // Adding item Function
    const handleAddItem = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (name.trim() !== '') { // .trim for removing extra whitespace
            if (editId !== null) {
                // If editing, update the existing item
                setItems(items.map(item => item.id === editId ? { id: item.id, name } : item));
                setEditId(null);
            } else {
                // If not editing, add a new item
                setItems([...items, { id: nextId.current++, name }]);
            }
            setName(''); // Clear the input field after adding/updating the task
        }
    };

    // Deleting item Function
    const handleDeleteItem = (id) => {
        // Update the items state by filtering out the item with the given ID
        setItems(items.filter(item => item.id !== id));
    };

    // 
    const handleEdit = (id, name) => {
        setName(name);  // puts the task's current name into the input box
        setEditId(id);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: " #352f44" }}>
            <div className="container border p-4 text-center" style={{ backgroundColor: "#5c5470", width: "40%", outline: "none"}}>
                <form onSubmit={handleAddItem}>
                    {/* Heading */}
                    <h1 style={{ color: "#e3e3e3" }}>To-Do List</h1>
                    {/* Input field for adding new tasks */}
                    <div className="input-group mb-4">
                        <input
                            type="text"
                            className="todo-input form-control"
                            placeholder="What is the task today?"
                            value={name} // Bind input value to the state variable 'name'
                            onChange={(e) => setName(e.target.value)} // Update the state variable 'name' as the user types
                        />
                        <button type="submit" className="btn btn-primary">
                            {editId !== null ? "Update" : "Add"}
                        </button>
                    </div>
                </form>

                {/* List of tasks */}
                <ul className="list-group">
                    {items.map((item, index) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {/* Display the index and task name */}
                            <span>{index + 1}. {item.name}</span>
                            <div>
                                {/* Edit button */}
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(item.id, item.name)}>
                                    Edit
                                </button>
                                {/* Delete button */}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteItem(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
