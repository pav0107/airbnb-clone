import Image from 'next/image';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/airbnb.png"
          width={140}
          height={10}
          // layout="fill"
          // objectFit="contain"
          // objectPosition="left"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div></div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
