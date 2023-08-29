'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Fardus Ahmed Resume.pdf', '_blank')}>
      Resume
    </Button>
  );
};

export default DownloadCV;
