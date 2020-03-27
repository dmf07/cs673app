import { AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

export function socialLoginConfig() {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        '877838349004-ka1mre5i58qgtojgikvnp3v73bk2tvkc.apps.googleusercontent.com'
      )
    }
  ]);
}
