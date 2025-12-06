function ImagePreview({ title, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="p-4 bg-gray-50">
        <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default ImagePreview

