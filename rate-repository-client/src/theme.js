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
  },
  images: {
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 6,
      marginHorizontal: 10,
    },
  },
  buttons: {
    largeButton: {
      padding: 20,
      borderRadius: 6,
      backgroundColor: 'blue',
    },
    smallButton: {
      paddingHorizontal: 5,
      marginTop: 5,
      marginBottom: 10,
      alignSelf: 'flex-start',
      backgroundColor: 'blue',
      borderRadius: 5,
    },
  },
  itemSeparator: {
    marginBottom: 8,
  },
  container: {
    card: {
      paddingTop: 8,
      paddingBottom: 12,
      backgroundColor: 'white',
    },
    row: {
      flexDirection: 'row',
    },
    header: {
      justifyContent: 'center',
      flexShrink: 1,
    },
    itemSeparator: {
      paddingVertical: 4,
    },
  },

  forms: {
    inputFields: {
      borderColor: 'silver',
      borderRadius: 6,
      borderStyle: 'solid',
      borderWidth: 2,
      padding: 9,
      marginBottom: 8,
    },
    errorText: {
      marginTop: 5,
      marginBottom: 10,
      color: '#d73a4a',
    },
  },
}

export default theme
