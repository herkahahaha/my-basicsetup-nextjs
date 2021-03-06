import cn from "classnames";
import Link from "next/link";

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: CoverImageProps) => {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={`Cover for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      src={src}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
