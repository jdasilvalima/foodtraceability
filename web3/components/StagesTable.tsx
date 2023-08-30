"use client";

import React, { useState } from 'react'
import productStages from '@/data/productStages.json'

const StagesTable: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const stagesPerPage = 5;

  const indexOfLastProduct = currentPage * stagesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - stagesPerPage;
  const currentStages = productStages.slice(indexOfFirstProduct, indexOfLastProduct);

  const stageMapping = {
    0: 'Created',
    1: 'Harvested',
    2: 'Processed',
    3: 'Packed',
    4: 'ForSale',
    5: 'Sold',
    6: 'Shipped',
    7: 'Received',
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const ethereumDateToJsDate = (ethereumTimestamp: string): string  => {
    return new Date((parseInt(ethereumTimestamp)) * 1000).toLocaleString();
  }

  return (
    <div className="max-h-[28rem] overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Stage
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Product Owner
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {currentStages.map((stage) => (
            <tr key={stage.productId}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{stageMapping[stage.stage]}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{stage.productOwner}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ethereumDateToJsDate(stage.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <ul className="pagination flex justify-end">
          {Array.from({ length: Math.ceil(productStages.length / stagesPerPage) }, (_, index) => (
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

export default StagesTable;
