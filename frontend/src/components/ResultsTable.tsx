import { useEffect, useState } from 'react';
import { Drug } from '../data/drugs';

interface ResultsTableProps {
  searchTerm: string;
}

export default function ResultsTable({ searchTerm }: ResultsTableProps) {
  const [drugs, setDrugs] = useState<Drug[]>([]);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await fetch(`https://medprice-api.onrender.com/api/drugs?search=${searchTerm}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDrugs(data);
      } catch (error) {
        console.error('Failed to fetch drugs:', error);
      }
    };

    fetchDrugs();
  }, [searchTerm]);

  return (
    <div className="overflow-x-auto mx-4">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Drug</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pharmacy</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug) => (
            <tr key={drug.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{drug.name}</td>
              <td className="px-6 py-4 border-b">${drug.price.toFixed(2)}</td>
              <td className="px-6 py-4 border-b">{drug.pharmacy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}