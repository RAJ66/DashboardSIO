import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Cardtext from "../../components/card/index";
import Pie from "../../components/pie/index";
import Header from "../../components/header/index";
import Bar from "../../components/bar/index";
import TableTest from "../../components/table/index";

import "./styles.css";

export default function Dasboard() {
  const [status, setStatus] = useState("");

  async function test() {
    const response = await api.get("/");
    console.log(response);
  }

  useEffect(() => {
    test();
  }, [status]);

  return (
    <div>
      <Header />
      <h1>Dasboard</h1>
      <Cardtext
        icon={"https://img.icons8.com/ios-filled/50/000000/price-tag-euro.png"}
        text={"Price:"}
        resolte={"125€"}
        alt={"Price"}
      />
      <Pie
        labels={`["January", "February", "March"]`}
        data={`[50, 60, 70]`}
        alt={"Pie Chart"}
      />
      <Bar
        labels={`["January", "February", "March"]`}
        data={`[50, 60, 70]`}
        set={"Users"}
      />

      <TableTest />
    </div>
  );
}
