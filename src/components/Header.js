import React from 'react';
export default function Header({ logo, menus, search, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className="header">
      {logo && logo ? <img src={logo} width="100" /> : null}
      {menus &&
        menus.map((item) => {
          return <div>{item}</div>;
        })}
      {search ? (
        <span>
          <input type="text" />
        </span>
      ) : null}
      {children}
    </div>
  );
}
