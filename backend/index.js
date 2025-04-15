// Import necessary modules
const express = require('express'); // Web framework for Node.js
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing

// Initialize the Express application
const app = express();

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Ensure this matches your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware to parse JSON requests
app.use(express.json());

// Add a health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

const mockDrugs = [  
    {  
      id: 1,  
      name: "Insulin Glargine",  
      dosage: "10ml vial",  
      price: 25.99,  
      pharmacy: "CVS",  
      location: "New York, NY"  
    },  
    {  
      id: 2,  
      name: "Metformin",  
      dosage: "500mg tablet",  
      price: 4.99,  
      pharmacy: "Walgreens",  
      location: "Los Angeles, CA"  
    },  
    {  
      id: 3,  
      name: "Atorvastatin",  
      dosage: "20mg tablet",  
      price: 19.67,  
      pharmacy: "CVS Pharmacy",  
      location: "Chicago, Illinois"  
    },  
    {  
      id: 4,  
      name: "Lisinopril",  
      dosage: "10mg oral suspension",  
      price: 12.92,  
      pharmacy: "Rite Aid",  
      location: "Manchester, CT"  
    }  
  ];  
  
// Define the API endpoint for searching drugs
app.get('/api/drugs', (req, res) => {
    console.log('--- Request Received ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Query Parameters:', req.query);

    const searchTerm = req.query.search?.toLowerCase() || '';
    console.log('Search Term:', searchTerm);

    const results = mockDrugs.filter(drug =>
        drug.name.toLowerCase().includes(searchTerm)
    );
    console.log('Results Found:', results.length);

    res.setHeader('Content-Type', 'application/json');
    res.json(results);
    console.log('--- Response Sent ---');
});

// Define the port the server will listen on
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;