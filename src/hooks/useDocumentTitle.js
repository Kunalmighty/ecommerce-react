import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Yagga - Premium Indo-Centric Lifestyle Wear';
    }
  }, [title]);
};

export default useDocumentTitle;
