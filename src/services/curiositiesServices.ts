import { fetchCuriosities } from "../repositoiries/curiositiesRepository.js";

export async function selectCuriosities(){
    const listCuriosities = await fetchCuriosities();

    return listCuriosities
}