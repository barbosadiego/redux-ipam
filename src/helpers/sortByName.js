export default function sortByName(data) {
  return data.sort((a, b) => {
    const nameA = a.nome.toLowerCase();
    const nameB = b.nome.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}
