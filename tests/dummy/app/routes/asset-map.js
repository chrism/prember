import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject } from '@ember/service';

export default Route.extend({
  fastboot: inject(),

  async model() {
    let url;
    if (this.get('fastboot.isFastBoot')) {
      url = `http://${this.get('fastboot.request.host')}/assets/assetMap.json`;
    } else {
      url = '/assets/assetMap.json';
    }
    let response = await fetch(url);
    let json = await response.json();
    return json;
  }
});
