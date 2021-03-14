import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = 'https://app.us1.list-manage.com/subscribe/post?u=6194f620cfb4c32f086eaa88e&amp;id=280abc9f93';
  
function MailSubscription() {
  return (
    <div>
      <MailchimpSubscribe url={url} />
    </div>
  )
}

export default MailSubscription
