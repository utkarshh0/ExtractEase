export default function ProductsTab() {

  const products = [
    {
      "name": "Apple iPhone 14",
      "quantity": 10,
      "unitPrice": 799.99,
      "tax": 8.5,
      "priceWithTax": 868.99,
      "discount": 5
    },
    {
      "name": "Samsung Galaxy S23",
      "quantity": 15,
      "unitPrice": 699.99,
      "tax": 8.5,
      "priceWithTax": 759.99,
      "discount": 10
    },
    {
      "name": "Dell Inspiron Laptop",
      "quantity": 5,
      "unitPrice": 1200.00,
      "tax": 10,
      "priceWithTax": 1320.00
    },
    {
      "name": "Sony WH-1000XM4 Headphones",
      "quantity": 20,
      "unitPrice": 299.99,
      "tax": 8.5,
      "priceWithTax": 325.99,
      "discount": 15
    },
    {
      "name": "Logitech MX Master 3 Mouse",
      "quantity": 25,
      "unitPrice": 99.99,
      "tax": 5,
      "priceWithTax": 104.99
    },
    {
      "name": "Google Pixel Buds Pro",
      "quantity": 30,
      "unitPrice": 199.99,
      "tax": 8,
      "priceWithTax": 215.99,
      "discount": 20
    }
  ]
  
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Tax</th>
              <th className="border px-4 py-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={index} className="bg-gray-50 hover:opacity-75">
                <td className="border px-4 py-2">{prod.name}</td>
                <td className="border px-4 py-2">{prod.quantity}</td>
                <td className="border px-4 py-2">${prod.unitPrice.toFixed(2)}</td>
                <td className="border px-4 py-2">{prod.tax}%</td>
                <td className="border px-4 py-2">${prod.priceWithTax.toFixed(2)}</td>              
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

