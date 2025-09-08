import Grid, {type GridEntry} from './Grid'
import brakes from '../assets/categories/brakes.webp';
import alternators from '../assets/categories/alternators.webp';
import autoBatteries from '../assets/categories/auto-batteries.webp';
import motorOil from '../assets/categories/motor-oil.webp';
import sparkPlugs from '../assets/categories/sparkplugs.webp';
import toolsets from '../assets/categories/toolsets.webp';
import wheels from '../assets/categories/wheels.webp';
import bodyParts from '../assets/categories/body-parts.webp';

export default function Home() {
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
    <section id='homepage' className='bg-white'>
      <Grid gridEntries={gridEntries}/>
    </section>
  );
}
