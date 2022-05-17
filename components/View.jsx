import { View as NativeView, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: theme.backgroundColors.primary,
  },
  backgroundColorAppBar: {
    backgroundColor: theme.backgroundColors.appBar,
  },
})

const View = ({ backgroundColor, style, ...props }) => {
  const textStyle = [
    styles.backgroundColor,
    backgroundColor === 'appBar' && styles.backgroundColorAppBar,
    style,
  ]

  return <NativeView style={textStyle} {...props} />
}

export default View
