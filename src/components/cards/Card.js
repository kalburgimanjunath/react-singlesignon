import React from 'react';
export default function Card({ item }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '33%',
        padding: 10,
        minWidth: '300',
      }}
    >
      <>
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <div>{item.title}</div>
        <div>Price: {item.price}</div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          {item.discount}
        </div>
      </>
    </div>
  );
}
