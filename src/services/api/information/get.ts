export async function GetInformation(api) {
  const response = await api.get("/api/ListarInformacao");

  return response.data;
}
