
const CustomersTab = () => {

  const customers = [
    {
      "name": "John Doe",
      "phone": "123-456-7890",
      "totalPurchaseAmount": 1200.50
    },
    {
      "name": "Jane Smith",
      "phone": "987-654-3210",
      "totalPurchaseAmount": 750.00
    },
    {
      "name": "Alice Johnson",
      "phone": "555-123-4567",
      "totalPurchaseAmount": 560.75
    },
    {
      "name": "Bob Brown",
      "phone": "111-222-3333",
      "totalPurchaseAmount": 980.00
    },
    {
      "name": "Emma Davis",
      "phone": "444-555-6666",
      "totalPurchaseAmount": 1120.25
    }
  ]
  
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Customer Name</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Total Purchase Amount</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="bg-gray-50 hover:opacity-75">
                <td className="border px-4 py-2">{customer.name}</td>
                <td className="border px-4 py-2">{customer.phone}</td>
                <td className="border px-4 py-2">{customer.totalPurchaseAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomersTab
