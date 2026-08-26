export function hideOnError(event: Event) {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
