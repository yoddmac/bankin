import { useEffect, useState } from "react";
import getAccounts from "../services/serviceAccounts";

const Dashboard = () => {
  const [data, setData] = useState();

  const sumAccounts = () => {
    let sum = 0;
    data.resources?.forEach((account) => {
        sum += account.balance;
    });
    return sum;
    };

  useEffect(() => {
    getAccounts().then((res) => {
        setData(res.data);
        }
    );
  }, []);
  return (
    <div>
      <h1>Bankin</h1>
      <h2>Accounts</h2>
      <ul>
        {data &&
          data.resources?.map((account) => (
            <li key={account.id}>{account.name} {account.balance}</li>
          ))}
      </ul>
        <h2>Total</h2>
        <p>{data && sumAccounts()}</p>
    </div>
  );
};

export default Dashboard;
