import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex p-8">
      <div className="flex-1 self-center">
        <div className="text-2xl">
          Food traceability from <br />
          farmer to customer
        </div>
        <button className="bg-lime-200 font-bold rounded-lg p-3 mt-5">
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
