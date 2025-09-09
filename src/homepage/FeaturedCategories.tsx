import Grid, {type GridEntry} from './Grid'
import {Link} from 'react-router'
import brakes from '../assets/categories/brakes.webp';
import alternators from '../assets/categories/alternators.webp';
import autoBatteries from '../assets/categories/auto-batteries.webp';
import motorOil from '../assets/categories/motor-oil.webp';
import sparkPlugs from '../assets/categories/sparkplugs.webp';
import toolsets from '../assets/categories/toolsets.webp';
import wheels from '../assets/categories/wheels.webp';
import bodyParts from '../assets/categories/body-parts.webp';

export default function FeaturedCategories() {
  // carosel of sponsored images or promotions
  // grid of featured categories
  const gridEntries: GridEntry[] = [
    {caption: 'Brakes', image: brakes, link: '/shop/brakes'},
    {caption: 'Auto Batteries', image: autoBatteries, link: '/shop/auto_batteries'},
    {caption: 'Motor Oil', image: motorOil, link: '/shop/motorOil'},
    {caption: 'Alternators', image: alternators, link: '/shop/alternators'},
    {caption: 'Spark Plugs', image: sparkPlugs, link: '/shop/sparkplugs'},
    {caption: 'Toolsets', image: toolsets, link: '/shop/toolsets'},
    {caption: 'Wheels', image: wheels, link: '/shop/wheels'},
    {caption: 'Body Parts', image: bodyParts, link: '/shop/bodyParts'},
  ]
  return (
    <section id='featCategories' className='flex flex-col items-center'>
      <h2 className='text-lg text-shadow-lg text-primary-text'>Featured Categories</h2>
      <Link to='/all' className='text-primary-text underline'>Shop All</Link>
      <Grid gridEntries={gridEntries}/>
    </section>
  );
}
