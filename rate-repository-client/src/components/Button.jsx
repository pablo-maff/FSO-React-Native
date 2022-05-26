import { Pressable } from 'react-native'
import theme from '../theme'
import Text from './Text'

const Button = ({ type, text, style, ...props }) => {
  const buttonStyle = [
    type === 'large' && theme.buttons.largeButton,
    type === 'small' && theme.buttons.smallButton,
    style,
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
