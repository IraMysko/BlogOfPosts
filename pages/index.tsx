import 'antd/dist/antd.css';
import Head from 'next/head';

import MainLayout from '../components/MainLayout';
import Posts from '../components/Posts';

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <Posts />
    </MainLayout>
  );
};

export default Index;
