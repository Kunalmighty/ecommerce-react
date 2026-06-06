import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { getYaggaFeaturedProducts } from '@/data/yaggaProducts';
import { isFirebaseConfigured } from '@/services/config';
import firebase from '@/services/firebase';

const useFeaturedProducts = (itemsCount) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchFeaturedProducts = async () => {
    if (!isFirebaseConfigured) {
      setFeaturedProducts(getYaggaFeaturedProducts(itemsCount));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const docs = await firebase.getFeaturedProducts(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setFeaturedProducts(getYaggaFeaturedProducts(itemsCount));
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setFeaturedProducts(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setFeaturedProducts(getYaggaFeaturedProducts(itemsCount));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (featuredProducts.length === 0 && didMount) {
      fetchFeaturedProducts();
    }
  }, []);

  return {
    featuredProducts, fetchFeaturedProducts, isLoading, error
  };
};

export default useFeaturedProducts;
