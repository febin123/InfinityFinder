import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyBg3qozwqgWbx1YrfkLoKPXzDEHCzp3FZ8",
    cx: "8390aadd287f74eba",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};;
