import axios from "axios";

export async function getKata(kata_id: number) {
  const {
    data: { kata },
  } = await axios.get(`https://katatak.onrender.com/api/katas/${kata_id}`);
  return kata;
}

export async function postKata(kata_id: number, input: string) {
  const post = {
    user_id: 1,
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

export async function getAllKatas() {
  const data = await axios.get("https://katatak.onrender.com/api/katas");
  return data;
}

export async function getTopics(){
  const data=await axios.get("https://katatak.onrender.com/api/topics")  
  return data.data.topics
}