import React from 'react';
import Card from './Card';
export default function Cards({ title, data }) {
  return (
    <div>
      <h1>{title}</h1>
      {data &&
        data.map((item) => {
          return <Card item={item} />;
        })}
    </div>
  );
}
