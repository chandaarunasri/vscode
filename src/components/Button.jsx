import react from 'react';
 function Button() {
    return (
    <button onClick={() => alert("Button clicked!")}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Click Me
        </button>
        );
}