
# Image Cropper - Upload, Crop, Resize & Download

A modern React component for uploading images, cropping them to specific shapes and dimensions, and downloading the results.

![Project Screenshot](https://via.placeholder.com/800x400?text=Image+Cropper+Component)

## 🚀 Features

### Image Upload
- **Drag & Drop** - Intuitive drag and drop interface for image selection
- **Click to Upload** - Traditional file selection via button click
- **File Validation** - Checks file type (PNG/JPEG) and size before processing
- **Error Handling** - Clear error messages for invalid files

### Image Cropping
- **Multiple Shape Options**:
  - **Circle** - Perfect for profile pictures and avatars
  - **Square** - For equal-dimension image requirements
  - **Rectangle** - For banner images, thumbnails with specific aspect ratios
- **Interactive Cropping** - Visual interface with real-time preview
- **Rule of Thirds** - Grid overlay for better composition
- **Zoom Control** - Adjust zoom level for precise cropping

### Image Processing
- **Dimension Presets**:
  - 50×50px (Square)
  - 100×100px (Square)
  - 200×200px (Square)
  - 50×75px (Rectangle)
  - Custom dimensions with manual input
- **Size Validation** - Checks if the output meets defined size constraints
- **Immediate Preview** - See the final result before downloading

### User Experience
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes
- **File Size Information** - Displays current file size vs maximum allowed
- **One-Click Download** - Easily download the cropped and resized image

## 📋 Props & Configuration

The main `ImageCropperContainer` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialShape` | `'circle' \| 'square' \| 'rectangle'` | `'square'` | Initial crop shape |
| `initialWidth` | `number` | `200` | Initial output width in pixels |
| `initialHeight` | `number` | `200` | Initial output height in pixels |
| `maxSizeMB` | `number` | `2` | Maximum file size in megabytes |
| `borderRadius` | `number` | `0` | Border radius for non-circular crops (in pixels) |

## 🛠️ Technology Stack

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [react-image-crop](https://github.com/DominicTobias/react-image-crop) - For the core cropping functionality
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - For icons

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd image-cropper

# Install dependencies
npm install
```

## 🚀 Running Locally

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`.

## 🔧 Usage

Here's a basic example of how to use the component in your React application:

```tsx
import ImageCropperContainer from '@/components/ImageCropper/ImageCropperContainer';

const MyPage = () => {
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

export default MyPage;
```

## 🧩 Component Structure

The project is organized into several key components:

1. `ImageCropperContainer.tsx` - Main container component that orchestrates the workflow
2. `ImageUploader.tsx` - Handles the file upload functionality
3. `ImageCropper.tsx` - Manages the cropping interface with react-image-crop
4. `CropperControls.tsx` - UI controls for adjusting crop settings
5. `canvasUtils.ts` - Utility functions for canvas manipulation and image processing

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
