import Image from "next/image";

export default function HeroCard({ title, desc, btnText, bgColor, image }) {
  return (
    <div className={`rounded-2xl p-6 text-white flex justify-between items-center w-full`} style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col gap-2 max-w-[40%]">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm opacity-80">{desc}</p>
        <button className="mt-2 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold text-sm w-max">
          {btnText}
        </button>
      </div>
      <Image src={image} alt="car" width={150} height={60} />
    </div>
  );
}