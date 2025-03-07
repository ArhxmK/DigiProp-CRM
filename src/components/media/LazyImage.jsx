export const LazyImage = ({ src, alt, className, style  }) => (
    <img src={src} alt={alt} className={className} style={style} loading="lazy" />
);
export default LazyImage;