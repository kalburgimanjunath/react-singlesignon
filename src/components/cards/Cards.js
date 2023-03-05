import React from 'react';
import Card from './Card';
export default function Cards({ title, data }) {
  return (
    <div style={{ margin: 20 }}>
      <h1>{title.toUpperCase()}</h1>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {data &&
          data.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </div>
  );
}
