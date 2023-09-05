import ProductsTable from '@/components/ProductsTable'
import { useEffect } from "react";


export default function Products() {

  useEffect(() => {
    console.log("import products from blockchain");
  }, []); 

  return (
    <div>
      <ProductsTable />
    </div>
  )
}
