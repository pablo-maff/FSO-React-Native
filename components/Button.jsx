import { Pressable, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  large: {
    marginTop: theme.buttons.largeButton.marginTop,
    padding: theme.buttons.largeButton.padding,
    borderRadius: theme.buttons.largeButton.borderRadius,
  },
  backGround: {
    backgroundColor: theme.backgroundColors.buttonPrimary,
  },
})

const Button = ({ type, text, backGround, ...props }) => {
  const buttonStyle = [
    type === 'large' && styles.large,
    backGround === 'primary' && styles.backGround,
  ]
  return (
    <Pressable style={buttonStyle} {...props}>
      <Text
        fontSize='subheading'
        color='textDarkBackground'
        fontWeight='bold'
        style={{
          alignSelf: 'center',
        }}
      >
        {text}
      </Text>
    </Pressable>
  )
}

export default Button
