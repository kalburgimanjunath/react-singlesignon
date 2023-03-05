import React from 'react';
export default function Banner({ url }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: '30%',
        opacity: 0.7,
        width: '100%',
      }}
    >
      <img src={url} width="100%" height="100%" />
    </div>
  );
}
