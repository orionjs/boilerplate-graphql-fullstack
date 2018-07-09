import {sendEmail} from '@orion-js/mailing'

export default async function(user, token) {
  const url = `${process.env.CLIENT_URL}/reset/${token}`
  await sendEmail({
    to: await user.email(),
    subject: 'Recover your password',
    text: `Hi, to create a new password go to the following site: ${url}`
  })
}
