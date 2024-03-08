import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { getModels } from '@/utils/api';
import Layout from '@/components/Layout';
import ModelCard from '@/components/ModelCard';

const ModelsPage = () => {
  const [models, setModels] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      const data = await getModels(page);
      setModels(prevModels => [...prevModels, ...data]);
      setLoading(false);
      if (data.length === 0) {
        setHasMore(false);
      }
    };
    fetchModels();
  }, [page]);

  const handleScroll = () => {
    if (!loading && hasMore && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (hasMore) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stopInfiniteScroll = filteredModels.length === models.length;

  return (
    <Layout>
      <div className={styles.modelsContainer}>
          <BGSVG/>
        <div className={styles.herosection}>
          <h2>Available Machine Learning Models</h2>
          <p>Discover and explore a wide range of machine learning models contributed by our community. Find the perfect model for your needs and start building!</p>
        </div>
        <div className={styles.searchBarDiv}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search models..."
            className={styles.searchInput}
          />
        </div>
        {filteredModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
        {loading && <div>Loading...</div>}
        {!loading && stopInfiniteScroll && <div>All models have been loaded.</div>}
      </div>
    </Layout>
  );
};

export default ModelsPage;


const BGSVG = () => {
  return(
    <div className={styles.bgsvg}>
        <img src="images/svg.png" alt="" />
    </div>
  )
}