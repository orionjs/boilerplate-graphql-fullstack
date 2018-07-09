import {sendEmail} from '@orion-js/mailing'

export default async function(user, token) {
  const url = `${process.env.CLIENT_URL}/verify-email/${token}`
  await sendEmail({
    to: await user.email(),
    subject: 'Verify your email',
    text: `Hi, please verify your email by going to the following site: ${url}`
  })
}
