import { getModels, } from '../../utils/api';
import styles from '../../styles/model.module.css';
import Layout from '@/components/Layout';
import { Star } from 'lucide-react';

function Model({ model }) {
  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Description</h2>
        <p>{model.longdescription}</p>
        <h2>Provider</h2>
        <p>{model.provider}</p>
        <h2>Tags</h2>
        <ul>
          {model.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <img src={model.image} alt={model.name} />
        <h2>{model.name}</h2>
        <p><strong>Input Type:</strong> {model.input}</p>
        <p><strong>Output Type:</strong> {model.outpt}</p>
        <div className={styles.stars}>

          <Star />
          {model.stared} Stars
        </div>
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const models = await getModels();
  const paths = models.map((model) => ({
    params: { id: model.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const models = await getModels();
  const model = models.find((model) => model.id.toString() === params.id);
  return { props: { model } };
}

export default Model;