import React, { useState, useEffect } from 'react'
import productList from '@/data/products.json'

export default function Products() {
  return (
    <div className="max-h-[28rem] overflow-x-auto">
      <table>
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
          {productList.map((product) => (
            <tr key={product.productId}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.productId}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.origin}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.unit}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
