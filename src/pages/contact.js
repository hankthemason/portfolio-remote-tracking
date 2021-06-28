import React from 'react'
import Layout from '../components/layout'
import { formBox, child, submit, emailLink } from './contact.module.css'

const Contact = () => {

  return (
    <Layout>
      <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqvzgqg" method="post">
        <div className={formBox}>
          <div className={child}>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
          </div>
          <div className={child}>
            <label htmlFor="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
          </div>
          <div className={child}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your message here" required=""></textarea>
          </div>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          <div className={submit}>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
      </form>
      <div className={emailLink}>
        <strong>email me:</strong>
        <p>
          <svg viewBox="0 0 512 512" width="20" fill="#ffffff" title="envelope">
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
          </svg><span style={{marginLeft: '.5rem', marginBottom: '1rem'}}>hankthemaston (at) gmail.com </span>
        </p>
      </div>
    </Layout>
  )
}

export default Contact