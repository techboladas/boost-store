export const PriceTable = () => {
  return (
    <section id="price-table" className="h-screen grid p-2 md:p-20  md:place-items-center ">
      <h2 className="pb-10 text-2xl font-extrabold text-boost-30 text-center">
        Preços avulsos
      </h2>
      <table className="table-fixed p-5 text-white gap-5 bg-gray-500 text-xs">
        <thead className="bg-gray-400 text-xs ">
          <tr>
            <th className="px-6 py-3 text-left" scope="col">
              Nome
            </th>
            <th className="px-6 py-3 text-left" scope="col">
              Descrição
            </th>
            <th className="px-6 py-3 text-left" scope="col">
              Preço
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Anuncio
            </td>
            <td className="px-6 py-4" scope="row">
              Anuncio para o seu negocio.
            </td>
            <td className="px-6 py-4" scope="row">
              50MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Site Basico
            </td>
            <td className="px-6 py-4" scope="row">
              Site para um pequeno emprendedor
            </td>
            <td className="px-6 py-4" scope="row">
              450MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Site Profissional
            </td>
            <td className="px-6 py-4" scope="row">
              Site para um emprendedor profissional
            </td>
            <td className="px-6 py-4" scope="row">
              1000MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Site Gold
            </td>
            <td className="px-6 py-4" scope="row">
              Site para pequenas empresas
            </td>
            <td className="px-6 py-4" scope="row">
              5500MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Site Mega
            </td>
            <td className="px-6 py-4" scope="row">
              Site para empresas de medio porte{" "}
            </td>
            <td className="px-6 py-4" scope="row">
              10000MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Dominio Anual
            </td>
            <td className="px-6 py-4" scope="row">
              O dominio personalizado aumenta a capacidade de encontrarem seu
              site
            </td>
            <td className="px-6 py-4" scope="row">
              5000MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Bot de atendimento
            </td>
            <td className="px-6 py-4" scope="row">
              Bot que ira facilitar a interação com os seus clientes
            </td>
            <td className="px-6 py-4" scope="row">
              1000MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Bot de atendimento com IA
            </td>
            <td className="px-6 py-4" scope="row">
              Um bot de atendimento mais com uma inteligencia artificial
            </td>
            <td className="px-6 py-4" scope="row">
              4000MT
            </td>
          </tr>
          <tr className="border-1 border-b-white">
            <td className="px-6 py-4" scope="row">
              Logotipo personalizado
            </td>
            <td className="px-6 py-4" scope="row">
              Logotipo que ira mostrar mais sobre a sua indentidade visual
            </td>
            <td className="px-6 py-4" scope="row">
              750MT
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
