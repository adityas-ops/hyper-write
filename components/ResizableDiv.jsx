import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useClient } from 'next';

const ResizableDiv = ({ videoUrl }) => {
  const [isInView, setIsInView] = useState(false);
  const [videoWidth, setVideoWidth] = useState('90vw');

  const handleIntersection = (inView) => {
    setIsInView(inView);
  };

  const handleScroll = () => {
    if (isInView) {
      const newWidth = Math.max(50, window.innerWidth - window.scrollY);
      setVideoWidth(`${newWidth}px`);
    }
  };

  // Get the client-side state and props
  const { error } = useClient();

  // Handle the error
  if (error) {
    // Do something to handle the error
  }

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
    onChange: handleIntersection,
  });

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: videoWidth,
          height: '50vh', // Adjust the height as needed
          margin: '0 auto',
          backgroundColor: 'lightgray',
          position: 'sticky',
          top: 0,
        }}
      >
        {/* Your video content */}
      </div>
      <div style={{ height: '200vh' }}>
        {/* Other content to create scrolling */}
      </div>
    </div>
  );
};

export { ResizableDiv } from './ResizableDiv';
// export default ResizableDiv;