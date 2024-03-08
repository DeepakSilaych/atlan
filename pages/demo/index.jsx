import Layout from '@/components/Layout'
import styles from '@/styles/demo.module.css'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const models = [

]
function Demo() {
  return (
    <Layout>
      <Head>
        <title>ML Excange | Demo</title>
      </Head>
      <h2 className={styles.heading}>Demo Models</h2>
      <div className={styles.modelList}>
        <p>
          will be realised soon. Thanks for your patence.
        </p>
      </div>

    </Layout>
  )
}

export default Demo
