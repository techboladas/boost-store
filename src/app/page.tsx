import { Contact } from "@/components/Contact/Contact";
import { Main } from "@/components/Main/Main";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Package } from "@/components/Package/Package";
export default function Home() {
  return (
    <main>
      <Main />
      <Package />
      <PriceTable />
      <Contact />
    </main>
  );
}
