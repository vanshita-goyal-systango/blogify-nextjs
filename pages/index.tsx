import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/users");
  }, [router]);

  return <div></div>;
};

export default Page;


