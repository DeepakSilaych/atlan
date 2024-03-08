import Layout from '@/components/Layout';
import { useState } from 'react';
import styles from '@/styles/provider.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';

const ModelProvider = () => {
  const [formData, setFormData] = useState({
    modelName: '',
    shortDescription: '',
    longDescription: '',
    version: '',
    tags: '',
    providerName: '',
    inputForm: '',
    outputForm: '',
    isDemoAvailable: false,
    targetAudience: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      modelName: '',
      shortDescription: '',
      longDescription: '',
      version: '',
      tags: '',
      providerName: '',
      inputForm: '',
      outputForm: '',
      isDemoAvailable: false,
      targetAudience: '',
    });
    setShowForm(false); 
  };

  return (
    <Layout color={!showForm && '#0693E3'}>
      <Head>
        <title>ML Excange | Model Provider</title>
      </Head>
        {!showForm ? (
          <div className={styles.ProviderWindow}>
            <h2>Contribute to the Machine Learning Model Database</h2>
            <p>We value your expertise and contributions to the ever-growing library of machine learning models.</p>
            <button className={styles.addButton} onClick={() => setShowForm(true)}>Submit Your Model</button>
            <p>By submitting your model, you confirm that you hold full ownership and rights for its use and distribution.</p>
          </div>


        ) : (
          <>
          <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="modelName">Name of Model</label>
                <input
                  type="text"
                  id="modelName"
                  name="modelName"
                  value={formData.modelName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="shortDescription">Short Description</label>
                <input
                  type="text"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="longDescription">Long Description</label>
                <textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="version">Version</label>
                <input
                  type="text"
                  id="version"
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="providerName">Provider's Name</label>
                <input
                  type="text"
                  id="providerName"
                  name="providerName"
                  value={formData.providerName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="inputForm">Input Form</label>
                <select
                  id="inputForm"
                  name="inputForm"
                  value={formData.inputForm}
                  onChange={handleChange}
                >
                  <option value="">Select Input Form</option>
                  <option value="text">Text</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="data">Data</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="outputForm">Output Form</label>
                <select
                  id="outputForm"
                  name="outputForm"
                  value={formData.outputForm}
                  onChange={handleChange}
                >
                  <option value="">Select Output Form</option>
                  <option value="text">Text</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="data">Data</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Is Demo Available
                  <input
                    type="checkbox"
                    name="isDemoAvailable"
                    checked={formData.isDemoAvailable}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="targetAudience">Target Audience</label>
                <input
                  type="text"
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                />
              </div>
              {/* add upload image section */}
              <div className={styles.formGroup}>
                <label htmlFor="modelImage">Upload Model Image</label>
                <input type="file" id="modelImage" name="modelImage" />
              </div>
              <button type="submit" className={styles.submitBtn}>Submit</button>
            </form> 
          </div>
          <Footer />
          </>
        )}
    </Layout>
  );
};

export default ModelProvider;