import axios from "axios";

const instance = axios.create({
  baseURL: "https://cat-fact.herokuapp.com",
});

export const getRandomFactsApi = async () => {
  const response = await instance
    .get("/facts/random?amount=100")
    .then((res) => res.data);
  return response;
};

export const getFactInfoApi = async (id) => {
  const response = await instance.get(`/facts/${id}`).then((res) => res.data);
  return response;
};
