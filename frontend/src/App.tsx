import { useState } from 'react';  
import { mockDrugs } from './data/drugs';  
import SearchBar from './components/SearchBar';  
import ResultsTable from './components/ResultsTable';  

export default function App() {  
  const [searchTerm, setSearchTerm] = useState('');  

  const filteredDrugs = mockDrugs.filter(drug =>  
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );  

  return (  
    <div className="min-h-screen bg-gray-100">  
      <div className="container mx-auto py-8">  
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">  
          MedPrice  
        </h1>  
        <SearchBar onSearch={setSearchTerm} />  
        <ResultsTable drugs={filteredDrugs} />  
      </div>  
    </div>  
  );  
}  