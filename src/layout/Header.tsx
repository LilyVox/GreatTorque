import Logo from '../assets/G_Logo.svg';
export default function Header() {
  // first line: hamburger, icon, searchbar, cart
  // at md break the hamburger spreads into the second line
  const TopBar = () => {
    // list icon will need to change to x button when clicked. probably state
    // TODO: lefthand modal, all same color
    return (
      <div className='flex flex-row items-center bg-primary text-primary-text'>
        <i className='pl-2 text-xl bi bi-list' />
        <img className='h-[2em] pl-4 pt-1' src={Logo} />
        <h1 className='text-lg font-semibold tracking-tight pl-0 p-2'>reatTorque</h1>
        <div className='flex flex-row justify-evenly w-full items-center'>
          <SearchBar />
          <i className="p-4 bi bi-person"></i>
          <i className='p-4 bi bi-cart'></i>
        </div>
      </div>
    );
  };
  const SearchBar = () => {
    return (
      <div className='p-2 w-full flex flex-row'>
        <input
          id='searchbar'
          className='bg-primary-soft border border-primary-text rounded-xs w-full flex flex-row justify-between'
          placeholder=' Search...'
          type='text'
        />
        <i className='text-accent bi bi-search pl-0 p-2 search_icon rounded-xs' />
      </div>
    );
  };
  return (
    <header className='top-0 z-50 border-b border-accent-soft/60'>
      <TopBar />
    </header>
  );
}
