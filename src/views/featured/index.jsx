import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from '@/hooks';
import bannerImg from '@/images/yagga-featured.jpg';
import React from 'react';

const FeaturedProducts = () => {
  useDocumentTitle('Signature Drops | Yagga');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading,
    error
  } = useFeaturedProducts();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Signature Drops</h1>
            <p>
              Oversized silhouettes, crisp collars, lotus graphics, and peacock-bright details
              built for the gym-to-cafe lifestyle.
            </p>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="Yagga signature streetwear and activewear details" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {(error && !isLoading) ? (
              <MessageDisplay
                message={error}
                action={fetchFeaturedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={featuredProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
