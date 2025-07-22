
import HeroCard from "@/components/HeroCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 gap-6">
        <div className="flex flex-wrap gap-4 w-full max-w-7xl justify-between">
        <HeroCard
          title="The Best Platform for Car Rental"
          desc="Ease of doing a car rental safely and reliably. Of course at a low price."
          btnText="Rental Car"
          bgColor="#54A6FF"
          image="/car1.png"
        />
        <HeroCard
          title="Easy way to rent a car at a low price"
          desc="Providing cheap car rental services and safe and comfortable facilities."
          btnText="Rental Car"
          bgColor="#3563E9"
          image="/car2.png"
        />
      </div>
    </main>
  );
}
