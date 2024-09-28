import React from 'react';
import axios from 'axios';
import './PersonList.css';



const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '', age: '' });
    const [editingPerson, setEditingPerson] = useState(null);
    const [loading, setLoading] = useState(true);
  
   // READ operation
  const fetchPersons = async () => {
    try {
      const response = await axios.get(API_URL);
      setPersons(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching persons:', error);
      alert('Failed to fetch persons. Please try again.');
      setLoading(false);
    }
  };
}

export default PersonList;
