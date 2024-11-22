import { useState } from 'react'
import InvoicesTab from '../components/InvoicesTab';
import ProductsTab from '../components/ProductsTab';
import CustomersTab from '../components/CustomersTab';

export default function TablePage() {

    const [activeTab, setActiveTab] = useState('invoices');
    return (
        <div className="bg-zinc-800 w-sceen h-screen p-4">
            <div className="flex space-x-4">
                <button className={`bg-white font-bold px-4 py-1 rounded-md hover:opacity-75 ${activeTab === `invoices` && `opacity-75`}`} onClick={() => setActiveTab('invoices')}>Invoices</button>
                <button className={`bg-white font-bold px-4 py-1 rounded-md hover:opacity-75 ${activeTab === `products` && `opacity-75`}`} onClick={() => setActiveTab('products')}>Products</button>
                <button className={`bg-white font-bold px-4 py-1 rounded-md hover:opacity-75 ${activeTab === `customers` && `opacity-75`}`} onClick={() => setActiveTab('customers')}>Customers</button>
            </div>
            {activeTab === 'invoices' && <InvoicesTab />}
            {activeTab === 'products' && <ProductsTab />}
            {activeTab === 'customers' && <CustomersTab />}
        </div>
    )
}
