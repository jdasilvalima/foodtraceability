"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Web3 from 'web3';

export default function Home() {

  const router = useRouter();

  const loadWeb3 = async () => {
    // checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.ethereum !== "undefined") {
      // use MetaMask's provider
      const web3 = new Web3(window.ethereum);
      try {
        // request the user to connect their MetaMask account to the web application
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        // TODO save user
        router.push("/products");
      } 
      catch (error) {
        console.error("User denied account access:", error);
      }
    } else {
      console.error("MetaMask is not installed.");
    }
  };

  return (
    <div className="flex p-2">
      <div className="flex-1 self-center mr-10">
        <div className="text-3xl">
          Food traceability from <br />
          farmer to customer
        </div>
        <button 
          className="bg-lime-200 hover:bg-lime-300 font-bold rounded-lg p-3 mt-5"
          onClick={loadWeb3}
        >
          Connect to Metamask
        </button>
      </div>
      <div className="flex-1">
        <Image
          src="/main_avocado.png"
          alt="Image Description"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
