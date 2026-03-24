// components
import { Hero } from "@/components/hero/hero";
import { Highlights } from "@/components/highlights/highlights";
import { SellerCTA } from "@/components/sellerCTA/seller-cta";
import { VehicleList } from "@/components/vehicleList/vehicle-list";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <VehicleList />
      <SellerCTA />
    </>
  );
}
