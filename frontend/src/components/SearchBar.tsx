import { useState } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full max-w-2xl mx-auto my-8">
            <input
            type="text"
            placeholder="Search for a drug (e.g., Insulin)..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
            }}
            />
        </div>
    );
}