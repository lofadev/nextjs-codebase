import PageWrapper from './page-wrapper';
import ThemeControl from './theme-control';

const Header = () => {
  return (
    <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <PageWrapper className='flex h-14 items-center gap-2 md:gap-4'>
        Logo
        <div className='ml-auto flex items-center gap-2 md:flex-1 md:justify-end'>
          <div className='hidden w-full flex-1 md:flex md:w-auto md:flex-none'>Command Menu</div>
          <ThemeControl />
        </div>
      </PageWrapper>
    </header>
  );
};

export default Header;
