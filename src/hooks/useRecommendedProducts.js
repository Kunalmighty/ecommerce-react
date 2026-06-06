import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { getYaggaRecommendedProducts } from '@/data/yaggaProducts';
import { isFirebaseConfigured } from '@/services/config';
import firebase from '@/services/firebase';

const useRecommendedProducts = (itemsCount) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchRecommendedProducts = async () => {
    if (!isFirebaseConfigured) {
      setRecommendedProducts(getYaggaRecommendedProducts(itemsCount));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const docs = await firebase.getRecommendedProducts(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setRecommendedProducts(getYaggaRecommendedProducts(itemsCount));
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setRecommendedProducts(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setRecommendedProducts(getYaggaRecommendedProducts(itemsCount));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (recommendedProducts.length === 0 && didMount) {
      fetchRecommendedProducts();
    }
  }, []);


  return {
    recommendedProducts, fetchRecommendedProducts, isLoading, error
  };
};

export default useRecommendedProducts;
