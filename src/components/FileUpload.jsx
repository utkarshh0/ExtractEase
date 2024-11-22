
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setInvoices } from '../features/invoiceSlices';
import { setProducts } from '../features/productsSlice';
import { setCustomers } from '../features/customerSlice';
import { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/extract', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { invoices, products, customers } = response.data;

      dispatch(setInvoices(invoices));
      dispatch(setProducts(products));
      dispatch(setCustomers(customers));

      alert('File uploaded and data extracted successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to extract data. Please check the file format and try again.');
    }
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        className="text-7xl flex items-center justify-center items-center bg-white text-blue-500 rounded-full cursor-pointer px-20 py-20 hover:opacity-75"
      >
        <IoCloudUploadOutline />
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.xlsx,.xls"
        />
      </label>
    </div>
  );
};

export default FileUpload;
