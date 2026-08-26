export function useVerification() {
  const verified = useCookie<boolean>('amino_verified', {
    default: () => false,
    maxAge: 60 * 60 * 24 * 365
  })

  function verify() {
    verified.value = true
  }

  return { verified, verify }
}
