import { useState, useEffect } from 'react';
import Layout from '../components/Layout.js';
import ModelCard from '../components/ModelCard';
import { getFeaturedModels } from '../utils/api';
import styles from '@/styles/featured.module.css';

const FeaturedPage = ({ featuredModels }) => {
  const [data, setData] = useState(featuredModels || []);
  const [activeTab, setActiveTab] = useState('trending');

  useEffect(() => {
    console.log("featuredModels:", featuredModels);
    console.log("data:", data);
  }, [featuredModels, data]);

  const handleSubNavClick = (type) => {
    setActiveTab(type);

    if (type === 'trending') {
      setData(featuredModels.trending);
    } else if (type === 'mostViewed') {
      setData(featuredModels.mostViewed);
    } else if (type === 'mostStarred') {
      setData(featuredModels.mostStarred);
    }
  };

  return (
    <Layout>
      <div className={styles.featuredContainer}>
        <div className={styles.top}>
          <h2>Featured Models</h2>
          <div className={styles.subNav}>
            <button
              className={activeTab === 'trending' ? styles.active : ''}
              onClick={() => handleSubNavClick('trending')}
            >
              Trending
            </button>
            <button
              className={activeTab === 'mostViewed' ? styles.active : ''}
              onClick={() => handleSubNavClick('mostViewed')}
            >
              Most Viewed
            </button>
            <button
              className={activeTab === 'mostStarred' ? styles.active : ''}
              onClick={() => handleSubNavClick('mostStarred')}
            >
              Most Starred
            </button>
          </div>
        </div>
        {data.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const featuredModels = await getFeaturedModels();
  return {
    props: {
      featuredModels,
    },
    revalidate: 1,
  };
}

export default FeaturedPage;
