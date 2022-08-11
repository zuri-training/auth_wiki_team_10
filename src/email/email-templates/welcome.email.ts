import { User } from 'src/auth/user.entity';
import { Contact } from '../entities/contact-us.entities';
import { Newsletter } from '../entities/newsletter.entities';

export function getWelcomeEmailTemplate(user: User) {
  return {
    html: `
    <h1>The Auth Wiki platform is glad to have you.</h1>
    <p>Hello, ${user.name}. We are glad to have you on board.</p>
    <p>You have successful created an acount with us. We are hoping you make the most out of our platform as we provide you with already test code to ease your life as a developer.</p>
    <br>
    <p>Regards, Auth Wiki Team 10 Support.</p>
  `,
    text: `Hello ${user.name}, We are glad to have you on board.\nYou have successful created an acount with us. We are hoping you make the most out of our platform as we provide you with already test code to ease your life as a developer.\n\nRegards, Auth Wiki Team 10 Support.`,
  };
}

export function getContactUsEmailTemplate(user: Contact) {
  return {
    html: `
    <h1>You reached out. Yay!</h1>
    <p>Hello, ${user.name}. We are glad you got in touch.</p>
    <p>We just received you get-in-touch message. We'll gladly reach to you shortly</p>
    <br>
    <p>Regards, Auth Wiki Team 10 Support.</p>
  `,
    text: `Hello, ${user.name}. We are glad you got in touch.\nWe just received you get-in-touch message. We'll gladly reach to you shortly\n\nRegards, Auth Wiki Team 10 Support.`,
  };
}

export function getPasswordResetEmailTemplate(user: User) {
  return {
    html: `
    <h1>Forogt your password?</h1>
    <p>Click on this link to to reset your password <a href="${user.name}">${user.name}.</a></p>
    <p>This link expired in 5 minutes!</p>
    <br>
    <p>Regards, Auth Wiki Team 10 Support.</p>
  `,
    text: `Forogt your password?\n Click on this link to to reset your password <a href="${user.name}">${user.name}\nThis link expired in 5 minutes!\n\nRegards, Auth Wiki Team 10 Support.`,
  };
}

export function getNewsletterEmailTemplate(user: User | Newsletter) {
  return {
    html: `
    <h1>Newsletter subscription</h1>
    <p>Hello. This email ${user.email} has been added to our newsletter mailing list.</p>
    <p>You'll be receiving updates from us.</p>
    <br>
    <p>Regards, Auth Wiki Team 10 Support.</p>
  `,
    text: `Newsletter subscription\n Hello. You've been added to our newsletter mailing list.\n You'll be receiving updates from us.\n\nRegards, Auth Wiki Team 10 Support.`,
  };
}
