function ThumbnailGallery({id, src, familyLink}) {
  return (
    <a key={id} href={familyLink} target="_blank" className="flex p-0 border border-1 border-success rounded">
        <div className="flex-fill">
          <img src={src} alt={'Placeholder'} width="100%" height="100%" />
          <title>Placeholder</title>
        </div>
      </a>
  );
}

export default ThumbnailGallery;
