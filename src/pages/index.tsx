import Head from 'next/head';
import { ThemeSwitch } from '@/components/theme-switch/theme-switch';
import useSize from '@/hooks/use-size';

export default function Home() {
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
        
        <ThemeSwitch />
      </div>
    </>
  );
}
