export default function SafeImg({ src, alt = '', ...props }) {
  const FALLBACK = 'https://placehold.co/1600x900?text=DriveMint+Image'
  const onError = e => { if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK }
  return <img src={src} alt={alt} onError={onError} {...props} />
}
