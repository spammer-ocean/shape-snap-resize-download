
import { useState, useEffect } from 'react';
import ImageCropperContainer from '@/components/ImageCropper/ImageCropperContainer';

const Index = () => {
  return (
    <ImageCropperContainer 
      initialShape="rectangle"
      initialWidth={100}
      initialHeight={150}
      maxSizeMB={2}
      borderRadius={4}
    />
  );
};

export default Index;
