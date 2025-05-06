import BarChart from "@/components/BarChart";
import ChartCard from "@/components/ChartCard";
import { clientPromise } from "@/db";
import { ChartData } from "@/interfaces/ChartData";

const Desastres = async () => {
  const client = await clientPromise;
  const db = client.db("processo-seletivo");

  const data = await db
    .collection("frequencia_cobrade_ranking_total")
    .find({})
    .toArray();

  const uniqueDisasters = Array.from(
    new Set(data.map((item) => item.COBRADE).filter((item) => item !== null))
  );

  console.log(uniqueDisasters);

  const disasters = uniqueDisasters.map((disaster) => {
    const filteredData = data.filter((item) => item.COBRADE === disaster);

    return {
      name: disaster,
      data: filteredData
        .reduce((acc, item) => {
          const index = acc.findIndex((i) => i.label === item["Município"]);
          if (index !== -1) {
            acc[index].value += item["Frequência"];
          } else {
            acc.push({
              label: item["Município"],
              value: item["Ocorrências"],
            });
          }

          return acc;
        }, [] as ChartData)
        .sort((a, b) => b.value - a.value)
        .slice(0, 10),
    };
  });

  return (
    <>
      <div className="flex flex-col w-full gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl">
            Rankeamento de municípios por tipo de desastre
          </h2>
          <p className="text-2xl text-gray-500">2019 a 2025</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          {disasters.map((disaster) => (
            <ChartCard key={disaster.name} title={disaster.name}>
              <BarChart data={disaster.data} />
            </ChartCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Desastres;
