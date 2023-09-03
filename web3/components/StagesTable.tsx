"use client";

import React, { useState, useEffect } from 'react'
import { Stage } from '@/models/Stage';
import { User } from '@/models/User';
import productStages from '@/data/productStages.json'
import mappingUserEthAddress from '@/data/mappingUserEthAddress.json'
import { ethereumDateToJsDate } from '@/service/utils';

const StagesTable: React.FC = ({ productId }) => {

  const [stages, setStages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const stagesPerPage = 5;

  const indexOfLastProduct = currentPage * stagesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - stagesPerPage;
  const currentStages = stages.slice(indexOfFirstProduct, indexOfLastProduct);

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

  useEffect(() => {
    const searchIdProduct = parseInt(productId);
    setStages([]);

    if(searchIdProduct >= 0) {
      const filteredStages = productStages.filter((stage) => stage.productId === searchIdProduct);
      setStages(filteredStages);
    }

  }, [productId]); 

  const getUserProfileName = (ethereumAddress: string) : string => {
    const user: User = mappingUserEthAddress[ethereumAddress];
    if(user)
      return user.name;
    else
      return ethereumAddress;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-h-[20rem]">
        <table className="overflow-x-auto min-w-[50rem]">
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
            {currentStages.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                  No data
                </td>
              </tr>
            ) : (
              currentStages.map((stage: Stage) => (
                <tr key={stage.timestamp}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{stageMapping[stage.stage]}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{getUserProfileName(stage.productOwner)}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ethereumDateToJsDate(stage.timestamp)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <ul className="pagination flex justify-end">
          {Array.from({ length: Math.ceil(stages.length / stagesPerPage) }, (_, index) => (
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
