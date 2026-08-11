import Image from "next/image";

export function PhotoBand({
  src,
  alt,
  caption,
  credit,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  priority?: boolean;
}) {
  return (
    <div className="photo-band">
      <Image src={src} alt={alt} fill sizes="100vw" priority={priority} quality={78} />
      <div className="band-caption">
        <div className="wrap">
          <p>{caption}</p>
          <small>Photo: {credit} / Unsplash</small>
        </div>
      </div>
    </div>
  );
}
