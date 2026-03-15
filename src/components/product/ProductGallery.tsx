interface ProductGalleryProps {
  image: string;
  title: string;
}

export function ProductGallery({ image, title }: ProductGalleryProps) {
  return (
    <div className="sticky top-24 flex h-[50vh] min-h-[400px] items-center justify-center rounded-2xl bg-white p-12 shadow-sm border border-border/40 transition-transform duration-500 hover:shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
