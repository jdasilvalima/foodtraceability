"use client";

import React, { useState } from 'react'
import { Product } from '@/models/Product';
import productList from '@/data/products.json'
import { ethereumDateToJsDate } from '@/service/utils';

const ProductsTable: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const unitMapping = {
    0: 'Kg',
    1: 'Gram',
    2: 'Pound',
    3: 'Ounce',
    4: 'Ton',
    5: 'Liter',
    6: 'Milliliter',
    7: 'Gallon',
    8: 'Piece',
  };

   const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-8">Products List</h2>
      <div className="min-h-[21rem]">
        <table className="min-w-[53rem]">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Product ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Origin
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Unit
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {currentProducts.map((product: Product) => (
              <tr key={product.productId}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.productId}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.origin}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.quantity}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{unitMapping[product.unit]}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ethereumDateToJsDate(product.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <ul className="pagination flex justify-end">
          {Array.from({ length: Math.ceil(productList.length / productsPerPage) }, (_, index) => (
            <li
              key={index}
              className={`px-3 py-1 cursor-pointer ${
                index + 1 === currentPage ? 'bg-lime-400 text-white' : 'hover:bg-lime-200'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsTable;
