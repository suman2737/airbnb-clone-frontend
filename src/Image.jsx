export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://airbnb-backend-two.vercel.app/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }