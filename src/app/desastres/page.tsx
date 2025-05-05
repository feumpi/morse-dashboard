import { clientPromise } from "@/db";

const Desastres = async () => {
  const client = await clientPromise;
  const db = client.db("processo-seletivo");

  const data = await db
    .collection("frequencia_cobrade_ranking_total")
    .find({})
    .toArray();

  console.log(data);

  return <>Desastres</>;
};

export default Desastres;
