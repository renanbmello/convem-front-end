"use client";
import React, { useState, useEffect } from 'react';

import dynamodb from "./utils/aws"

export default function MyData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const params = {
      TableName: 'transactions', 
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      setData(result.Items);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <li key={item.idempotencyId.S}>
          <p>ID: {item.idempotencyId.S}</p>
          <p>Valor: R$ {item.amount.N}</p>
          <p>Tipo: {item.type.S}</p>
        </li>
      ))}
    </div>
  );
}
