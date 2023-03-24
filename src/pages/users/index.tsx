import Head from 'next/head'
import { UserList } from '@/views/user-list'

export default function Home() {
    return (
        <>
            <Head>
                <title>User list</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserList />
        </>
    )
}

export const getServerSideProps = () => ({ props: {} })
