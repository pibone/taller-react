import Head from 'next/head'
import { UserDetail } from '@/views/user-detail'
import { useRouter } from 'next/router'

export default function Detail() {
    const router = useRouter()
    const userId = router.query['user-id'] as string

    console.log(router.query)

    return (
        <>
            <Head>
                <title>User details</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserDetail userId={userId} />
        </>
    )
}

export const getServerSideProps = () => ({ props: {} })
