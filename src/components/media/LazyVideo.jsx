export const LazyVideo = ({ src, type, muted, autoPlay, loop, className, height, width }) => (
    <video  controls preload="none" muted autoPlay loop className height width>
        <source src={src}  type={type} />
        Your browser does not support the video tag.
    </video>
);
export default LazyVideo