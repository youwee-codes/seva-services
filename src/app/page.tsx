import SquareHero from "@/components/square/SquareHero";
import PhysicalCounterSpecs from "@/components/square/PhysicalCounterSpecs";
import SquareServicesBento from "@/components/square/SquareServicesBento";
import SquareRealEstate from "@/components/square/SquareRealEstate";
import SquareSLAPricing from "@/components/square/SquareSLAPricing";
import SquareFAQ from "@/components/square/SquareFAQ";
import SquareContact from "@/components/square/SquareContact";

export default function HomePage() {
  return (
    <>
      <SquareHero />
      <PhysicalCounterSpecs />
      <SquareServicesBento />
      <SquareRealEstate />
      <SquareSLAPricing />
      <SquareFAQ />
      <SquareContact />
    </>
  );
}
