import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header:"2021 Season Stats",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Team",
            accessor: "team"
          },

          {
            Header: "At Bats",
            accessor: "abs.$numberLong"
          },
        
          {
            Header: "Hits",
            accessor: "hits.$numberLong"
          
          },
          {
            Header: "Batting Avg",
            accessor: "avg.$numberDouble"
          
          },

          {
            Header: "Singles",
            accessor: "singles.$numberLong"
          },
          {
            Header: "Doubles",
            accessor: "doubles.$numberLong"
          },
          {
            Header: "Triples",
            accessor: "triples.$numberLong"
          },
          {
            Header: "Home Runs",
            accessor: "hr.$numberLong",
          },
          {
            Header: "Walks",
            accessor: "walks.$numberLong"
          },
          {
            Header: "Hit By Pitch",
            accessor: "hbp.$numberLong"
          },
          {
            Header: "Strikeouts",
            accessor: "so.$numberLong"
          },
          {
            Header: "Stolen Bases",
            accessor: "sb.$numberLong"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/baseballstats-ovlbt/service/players/incoming_webhook/player-findall");
      console.log(result)
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;