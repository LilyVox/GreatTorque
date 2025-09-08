import { Link } from 'react-router';
export interface GridEntry {
  caption: string;
  image: string;
  link: string;
}

const gridEntry = ({ caption, image, link }: GridEntry) => {
  return (
    <Link className='p-2 m-2 grid justify-center' key={caption} to={link}>
      <img src={image} alt={caption} />
      <p className='text-primary-text'>{caption}</p>
    </Link>
  );
};

export function Grid ({ gridEntries }: { gridEntries: GridEntry[] }) {
  return <div className='grid grid-cols-3'>{gridEntries.map((entry) => gridEntry(entry))}</div>;
};
export default Grid;
