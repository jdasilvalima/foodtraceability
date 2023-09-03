import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex p-2">
      <div className="flex-1 self-center mr-10">
        <div className="text-3xl">
          Food traceability from <br />
          farmer to customer
        </div>
        <Link href="/products">
          <button className="bg-lime-200 hover:bg-lime-300 font-bold rounded-lg p-3 mt-5">
            Connect to Metamask
          </button>
        </Link>
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
