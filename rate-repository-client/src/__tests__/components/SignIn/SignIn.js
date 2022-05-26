import { render, fireEvent, waitFor } from '@testing-library/react-native'
import SignIn from '../../../components/SignIn/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const handleSubmit = jest.fn()
      const { debug, getByPlaceholderText, getByText } = render(
        <SignIn onSubmit={handleSubmit} />
      )

      fireEvent.changeText(getByPlaceholderText('username'), 'pablo')
      fireEvent.changeText(getByPlaceholderText('password'), 'password')
      fireEvent.press(getByText('Sign In'))

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(handleSubmit).toHaveBeenCalledTimes(1)

        expect(handleSubmit.mock.calls[0][0]).toEqual({
          username: 'pablo',
          password: 'password',
        })
      })
    })
  })
})
