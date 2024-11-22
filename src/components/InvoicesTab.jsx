
export default function InvoicesTab(){

  const invoices = [
    {
      serialNumber: "INV-001",
      customerName: "John Doe",
      productName: "Wireless Mouse",
      qty: 2,
      tax: "$2.50",
      totalAmount: "$52.50",
      date: "2024-11-01",
    },
    {
      serialNumber: "INV-002",
      customerName: "Jane Smith",
      productName: "Bluetooth Keyboard",
      qty: 1,
      tax: "$3.00",
      totalAmount: "$63.00",
      date: "2024-11-03",
    },
    {
      serialNumber: "INV-003",
      customerName: "Michael Brown",
      productName: "USB-C Hub",
      qty: 3,
      tax: "$5.40",
      totalAmount: "$105.40",
      date: "2024-11-10",
    },
    {
      serialNumber: "INV-004",
      customerName: "Emily Davis",
      productName: "External Hard Drive",
      qty: 1,
      tax: "$4.50",
      totalAmount: "$94.50",
      date: "2024-11-15",
    },
    {
      serialNumber: "INV-005",
      customerName: "Chris Johnson",
      productName: "Monitor Stand",
      qty: 2,
      tax: "$3.20",
      totalAmount: "$83.20",
      date: "2024-11-20",
    },
  ];
  
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Serial Number</th>
              <th className="border px-4 py-2">Customer Name</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Tax</th>
              <th className="border px-4 py-2">Total Amount</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="bg-gray-50 hover:opacity-75">
                <td className="border px-4 py-2">{invoice.serialNumber}</td>
                <td className="border px-4 py-2">{invoice.customerName}</td>
                <td className="border px-4 py-2">{invoice.productName}</td>
                <td className="border px-4 py-2">{invoice.qty}</td>
                <td className="border px-4 py-2">{invoice.tax}</td>
                <td className="border px-4 py-2">{invoice.totalAmount}</td>
                <td className="border px-4 py-2">{invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
