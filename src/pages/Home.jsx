import Layout from "../components/Layout";

export function Home() {
    return <>
        <h1>Главная страница</h1>
        <Layout mb={2} dt={1} gap="small"></Layout>
        <Layout mb={4} dt={2} gap="none"></Layout>
        <Layout mb={4} dt={4}></Layout>
    </>
}
