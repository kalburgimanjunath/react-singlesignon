import React from 'react';
export default function Card({ item }) {
  return (
    <div>
      <>
        <div>{item.title}</div>
        <div>{item.detail}</div>
      </>
    </div>
  );
}
