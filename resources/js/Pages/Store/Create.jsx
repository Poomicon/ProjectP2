import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia-react';
import './CSS/Create.css'; // นำเข้าไฟล์ CSS

const Create = () => {
  const [storeName, setStoreName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the backend using Inertia
    Inertia.post('/stores', {
      storeName,
      ownerName,
      phoneNumber,
      address,
    });
  };

  return (
    <div className="container">
      <h1>สร้างร้านค้าใหม่</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>ชื่อร้านค้า:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>ชื่อเจ้าของร้าน:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>หมายเลขโทรศัพท์:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>ที่อยู่:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">สร้างร้านค้า</button>
      </form>
    </div>
  );
};

export default Create;
