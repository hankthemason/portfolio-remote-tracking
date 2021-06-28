import React from 'react'
import Layout from '../components/layout'
import { formBox, child, submit } from './contact.module.css'

const Contact = () => {

  return (
    <Layout>
      <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqvzgqg" method="post">
        <div className={formBox}>
          <div className={child}>
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
          </div>
          <div className={child}>
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
          </div>
          <div className={child}>
            <label for="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your message here" required=""></textarea>
          </div>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          <div className={submit}>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Contact