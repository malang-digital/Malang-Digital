import Head from 'next/head'
import { Typography } from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography.Title className="text-red-500">Malang Digital</Typography.Title>
      </main>
    </div>
  )
}
