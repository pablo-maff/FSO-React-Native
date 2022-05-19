import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textDarkBackground: 'white',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '500',
    bold: '700',
  },
  backgroundColors: {
    appBar: '#24292e',
    primary: '#e5e5e5',
    card: 'white',
    buttonPrimary: 'blue',
  },
  images: {
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 6,
      marginRight: 10,
    },
  },
  buttons: {
    largeButton: {
      marginTop: 10,
      padding: 20,
      borderRadius: 6,
    },
  },
}

export default theme
