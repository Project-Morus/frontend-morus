export async function GetInformation(api) {
  const ret = await api.get("/api/ListarInformacao");

  return ret.data;
}
