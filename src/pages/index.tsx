import Head from 'next/head';
import useSize from '@/hooks/use-size';
import { Main } from '@/components/main/main';
import { GetServerSidePropsContext } from 'next';
import absoluteUrl from 'next-absolute-url'

export default function Home(props: any) {
  const { size } = useSize();
  return (
    <>
      <Head>
        <title>Quick Notes</title>
        <meta
          name="description"
          content="Tool for quickly taking notes"
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: size.width, height: size.height }}>
        <Main origin={props.origin} />
      </div>
    </>
  );
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { origin } = absoluteUrl(context.req);
  return { props: { origin: origin } }
}