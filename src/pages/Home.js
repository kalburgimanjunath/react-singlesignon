import React from 'react';
import { Banner, Cards } from '../components';
import { PRODUCTS } from '../data/Products';
export default function Home() {
  return (
    <div className="home">
      <Banner url={'https://picsum.photos/200/300'} />
      <Cards title="popular products" data={PRODUCTS} />
      <Cards title="Today Deals" data={PRODUCTS} />
      <Cards title="Top Deals" data={PRODUCTS} />
    </div>
  );
}
