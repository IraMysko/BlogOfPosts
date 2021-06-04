import Link from 'next/link';
import { useRouter } from 'next/router';

import { Section, Header, LinkContainer, Paragraph, HeaderLogo } from './StyledMain';

type PropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<PropsType> = ({ children }) => {
  const { pathname } = useRouter();

  const isNewPostPage = pathname === '/posts/new';

  return (
    <Section>
      <Header>
        <Link href="/">
          <HeaderLogo>BLOG</HeaderLogo>
        </Link>

        {!isNewPostPage && (
          <Link href="/posts/new">
            <LinkContainer>
              <Paragraph>Create Post</Paragraph>
            </LinkContainer>
          </Link>
        )}
      </Header>
      <main>{children}</main>
    </Section>
  );
};

export default MainLayout;
