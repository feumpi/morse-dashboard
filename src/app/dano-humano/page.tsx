import { clientPromise } from "@/db";

const DanoHumano = async () => {
  const client = await clientPromise;
  const db = client.db("processo-seletivo");

  const data = await db
    .collection("impacto_severidade_danos_humanos")
    .find({})
    .toArray();

  console.log(data);

  return <>Dano Humano</>;
};

export default DanoHumano;
