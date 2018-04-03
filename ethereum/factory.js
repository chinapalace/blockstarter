import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x119aBCa0f66DD8C274Eb82C5cFdEC67b72F20232'
);

export default instance;