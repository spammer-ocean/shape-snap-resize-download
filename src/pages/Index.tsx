
import { useState, useEffect } from 'react';
import ImageCropperContainer from '@/components/ImageCropper/ImageCropperContainer';

const Index = () => {
  return (
    <ImageCropperContainer 
      initialShape="square"
      initialWidth={200}
      initialHeight={200}
      maxSizeMB={2}
      borderRadius={4}
    />
  );
};

export default Index;
