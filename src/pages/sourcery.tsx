import SourceryTemplate from "@modules/soucery"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Sourcery: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sourcery" description="Product Sourcery." />
      <SourceryTemplate />
    </>
  )
}

Sourcery.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Sourcery
