import AllProductsPage from "./all/page";
import Hero from "./components/hero";
import Newest from "./components/newarrivals";

//export const dynamic = "force-dynamic";  //for sanity

 export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <AllProductsPage />
    </div>
  );
}
