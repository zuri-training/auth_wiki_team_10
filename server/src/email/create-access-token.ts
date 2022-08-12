import { oAuth2Client } from './email.module';

export class CreateAccessToken {
  async generateAccessToken() {
    try {
      return await oAuth2Client.getAccessToken();
    } catch (error) {
      console.log(error);
    }
  }
}
