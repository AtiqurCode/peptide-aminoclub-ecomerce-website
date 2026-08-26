export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'rounded-full font-semibold'
      }
    },
    badge: {
      slots: {
        base: 'rounded-full'
      }
    },
    input: {
      slots: {
        base: 'rounded-full'
      }
    },
    select: {
      slots: {
        base: 'rounded-full'
      }
    },
    card: {
      slots: {
        root: 'rounded-2xl'
      }
    }
  }
})
