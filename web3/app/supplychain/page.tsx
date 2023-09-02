"use client";

import React, { useState } from 'react'
import StagesTable from '@/components/StagesTable'

export default function SupplyChain() {

  const [productId, setProductId] = useState('');
  const [productIdSearched, setProductIdSearched] = useState('');

  const saveProductId = () => {
    setProductIdSearched(productId);
  };

  return (
    <div className="flex flex-col justify-between min-w-[50rem]">
      <div className="flex justify-between space-x-2 mb-8">
        <h2 className="text-2xl font-bold">Product Stages List</h2>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Product Id"
            className="w-64 px-2 h-10 mr-3 border border-gray-300 rounded"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <button
            onClick={saveProductId}
            className="px-6 py-2 bg-lime-500 text-white rounded hover:bg-lime-600"
          >
            Search
          </button>
        </div>
      </div>
      <StagesTable productId={productIdSearched}/>
    </div>
  )
}
