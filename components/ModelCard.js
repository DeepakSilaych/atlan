import styles from '@/styles/modelCard.module.css';
import { Star } from 'lucide-react';
import Link from 'next/link';

const ModelCard = ({ model }) => {
  return (
    <div className={styles.modelCard}>
      <div className={styles.left}>
        <img src={model.image} alt={model.name} />
      </div>
      <div className={styles.middle}>
        <h3>{model.name}</h3>
        <p>{model.shortdescription}</p>
        <div className={styles.tags}>
          {model.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <span>
          <Star />
          {model.stared}
        </span>
        <Link href={`/models/${model.id}`}>View</Link>
      </div>
    </div>
  );
};

export default ModelCard;
