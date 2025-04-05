
import { PixelCrop } from "react-image-crop";

// This is to get a good quality image 
const TO_RADIANS = Math.PI / 180;

export async function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop,
  scale = 1,
  outputWidth: number,
  outputHeight: number,
  circular = false
) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  // Set canvas size to desired output size
  canvas.width = outputWidth;
  canvas.height = outputHeight;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a white background for images with transparency
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // If circular, create a circular clipping path
  if (circular) {
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width, canvas.height) / 2,
      0,
      2 * Math.PI
    );
    ctx.clip();
  }

  // Compute crop dimensions and position scaled according to the original image
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  
  const pixelRatio = window.devicePixelRatio;
  const scaledCropX = crop.x * scaleX;
  const scaledCropY = crop.y * scaleY;
  const scaledCropWidth = crop.width * scaleX;
  const scaledCropHeight = crop.height * scaleY;

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    scaledCropX,
    scaledCropY,
    scaledCropWidth,
    scaledCropHeight,
    0,
    0,
    canvas.width,
    canvas.height
  );
}

export function dataURLtoFile(dataurl: string, filename: string): File {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], filename, { type: mime });
}

// Function to calculate file size in KB
export function getFileSizeInKB(file: File | Blob): number {
  return file.size / 1024;
}

// Function to format file size nicely
export function formatFileSize(size: number): string {
  if (size < 1024) {
    return `${Math.round(size)} KB`;
  } else {
    return `${(size / 1024).toFixed(2)} MB`;
  }
}
