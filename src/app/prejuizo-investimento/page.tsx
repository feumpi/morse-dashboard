import { clientPromise } from "@/db";

const PrejuizoInvestimento = async () => {
  const client = await clientPromise;
  const db = client.db("processo-seletivo");

  const data = await db
    .collection("investimento_prejuizo_por_ano")
    .find({})
    .toArray();

  console.log(data);

  return <>Prejuizo e Investimento</>;
};

export default PrejuizoInvestimento;
