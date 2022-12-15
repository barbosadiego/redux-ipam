export default async function fetchCidadeInfo(id) {
  const data = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}/distritos`,
  );
  const res = await data.json();
  return res;
}
