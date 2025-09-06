import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  ui: {
    strategy: 'class',
    darkMode: false,
    
    colors: {
      primary: 'primary',
      neutral: 'neutral'
    },
    
    button: {
      slots: {
        base: 'font-medium transition-all duration-200'
      },
      variants: {
        color: {
          primary: {
            solid: 'bg-primary-500 hover:bg-primary-600 text-white ring-primary-500/25',
            outline: 'text-primary-500 ring-primary-500 border-primary-500 hover:bg-primary-50',
            ghost: 'text-primary-500 hover:bg-primary-50',
            soft: 'text-primary-600 bg-primary-50 hover:bg-primary-100'
          }
        }
      }
    },
    
    input: {
      slots: {
        base: 'transition-colors duration-200'
      },
      variants: {
        color: {
          primary: {
            outline: 'focus:ring-primary-500 focus:border-primary-500'
          }
        }
      }
    },
    
    textarea: {
      slots: {
        base: 'transition-colors duration-200'
      },
      variants: {
        color: {
          primary: {
            outline: 'focus:ring-primary-500 focus:border-primary-500'
          }
        }
      }
    },
    
    formGroup: {
      slots: {
        label: 'text-default font-medium'
      }
    },
    
    navigation: {
      slots: {
        base: 'transition-colors duration-200'
      }
    }
  }
})