import React, { useState } from 'react';
import img from "../pages/1.jpg";
import img2 from "../pages/2.jpg";
import img3 from "../pages/3.jpg";
import img4 from "../pages/4.jpg";
import img5 from "../pages/IMG-20241214-WA0034.jpg";
import img6 from "../pages/IMG-20241214-WA0038.jpg";
import img7 from "../pages/IMG-20241214-WA0039.jpg";
import img8 from "../pages/IMG-20241214-WA0037.jpg";
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import vid4 from "../videos/vid4.mp4";

export default function MediaSection() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImageFiles([...imageFiles, ...newFiles]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setVideoFiles([...videoFiles, ...newFiles]);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[img, img2, img3, img4, img5, img6, img7, img8].map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} className="rounded-lg shadow-lg" />
          ))}
          {[...imageFiles].map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded Image ${index + 1}`} className="rounded-lg shadow-lg" />
          ))}
        </div>

        {/* Always show the image upload button */}
        <div className="mt-6">
          <label htmlFor="image-upload" className="inline-block text-sm font-medium text-gray-700 cursor-pointer">
            Upload Image
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="ml-4"
          />
        </div>
      </section>

      <section className="mt-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Our Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[vid1, vid2, vid3, vid4].map((url, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
              <video src={url} controls className="w-full h-full rounded-lg" />
            </div>
          ))}
          {[...videoFiles].map((file, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
              <video src={URL.createObjectURL(file)} controls className="w-full h-full rounded-lg" />
            </div>
          ))}
        </div>

        {/* Always show the video upload button */}
        <div className="mt-6">
          <label htmlFor="video-upload" className="inline-block text-sm font-medium text-gray-700 cursor-pointer">
            Upload Video
          </label>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="ml-4"
          />
        </div>
      </section>
    </div>
  );
}
