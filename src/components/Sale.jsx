// InventoryTable.js
import React, { useState } from 'react';

const SaleTable = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim()) {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  return (
    <div>
      <h2>Sale Table</h2>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleTable;
