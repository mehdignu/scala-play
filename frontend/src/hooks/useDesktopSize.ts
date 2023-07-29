import { useState, useEffect } from 'react';

const DESKTOP_SIZE = 768;

export default function useDesktopSize() {
  const [desktopSize, setDesktopSize] = useState<boolean | null>(
    window.innerWidth > DESKTOP_SIZE
  );

  const handleResize = () => setDesktopSize(window.innerWidth >= DESKTOP_SIZE);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return desktopSize as boolean;
}
