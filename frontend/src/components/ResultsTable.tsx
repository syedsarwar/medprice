import { Drug } from '../data/drugs';  

interface ResultsTableProps {  
  drugs: Drug[];  
}  

export default function ResultsTable({ drugs }: ResultsTableProps) {  
  return (  
    <div className="overflow-x-auto mx-4">  
      <table className="min-w-full bg-white border-collapse">  
        <thead>  
          <tr className="bg-gray-50">  
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Drug</th>  
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Dosage</th>  
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>  
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pharmacy</th>  
          </tr>  
        </thead>  
        <tbody>  
          {drugs.map((drug) => (  
            <tr key={drug.id} className="hover:bg-gray-50">  
              <td className="px-6 py-4 border-b">{drug.name}</td>  
              <td className="px-6 py-4 border-b">{drug.dosage}</td>  
              <td className="px-6 py-4 border-b">${drug.price.toFixed(2)}</td>  
              <td className="px-6 py-4 border-b">{drug.pharmacy}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
}  