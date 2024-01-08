import { Card } from "./components/Card";
import { GoldList } from "./components/Gold";
import { LitleList } from "./components/Litle";
import { MegaList } from "./components/Mega";
import { SuperList } from "./components/Super";
export const Package = () => {
  return (
    <section id="package" className="grid  bg-boost-30 justify-center">
      <h2 className=" justify-self-center mt-10 text-4xl font-extrabold text-boost-60 h-10">
        Pacotes Boost
      </h2>
      <article className="p-10 flex flex-col gap-8  md:flex-row">
        <Card
          title="Mega boost"
          list={<MegaList />}
          price={15000}
          border="border-boost-mega"
          buttonBg="bg-boost-mega"
        />
        <Card
          title="Gold boost"
          list={<GoldList />}
          price={6000}
          border="border-boost-gold"
          buttonBg="bg-boost-gold"
        />
        <Card
          title="Super boost"
          list={<SuperList />}
          price={1500}
          border="border-boost-super"
          buttonBg="bg-boost-super"
        />
        <Card
          title="Litle boost"
          list={<LitleList />}
          price={1500}
          border="border-boost-litle"
          buttonBg="bg-boost-litle"
        />
      </article>
    </section>
  );
};
