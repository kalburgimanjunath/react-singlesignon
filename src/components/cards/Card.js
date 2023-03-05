import React from 'react';
export default function Card({ item }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '33%',
        padding: 10,
        minWidth: '300',
        backgroundColor: '#d0d0d0',
      }}
    >
      <>
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <div>{item.title}</div>
        <div>Price: {item.price}</div>
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'orange',
            padding: '5px',
            borderRadius: 20,
          }}
        >
          {item.discount}
        </div>
      </>
    </div>
  );
}
