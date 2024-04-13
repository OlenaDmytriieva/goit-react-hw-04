export const ImageCard = ({ alt, urls }) => {
  return (
    <div>
      <img src={urls.small} alt={alt} />
    </div>
  );
};
