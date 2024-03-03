import axios from "axios";

export async function getKata(kata_id: number) {
  const {
    data: { kata },
  } = await axios.get(`https://katatak.onrender.com/api/katas/${kata_id}`);
  return kata;
}

export async function postKata(kata_id: number, input: string) {
  const post = {
    user_id: 3,
    kata_id: kata_id,
    solution_body: input,
  };

  const {
    data: { results },
  } = await axios.post(
    `https://katatak.onrender.com/api/test/${kata_id}`,
    post
  );
  return results;
}

export async function getAllKatas(topic: string, order_by: string) {
  const data = await axios.get(
    `https://katatak.onrender.com/api/katas?topic=${topic}&order_by=${order_by}`
  );
  return data;
}

export async function getUser(user_id : number) {
  const {data: user } = await axios.get(
    `https://katatak.onrender.com/api/users/${user_id}`
  );
  console.log(user);
  return user.user;
}

export async function getTopics() {
  const data = await axios.get("https://katatak.onrender.com/api/topics");
  return data.data.topics;
}

export async function getSolutionsByUserId(id: number) {
  const data = await axios.get(
    `https://katatak.onrender.com/api/users/${id}/solutions`
  );
  return data.data.solutions;
}
