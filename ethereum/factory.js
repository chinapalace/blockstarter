import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x643d2Cd9372b0e2993A36Bf905DC0462732b08c5'
);

export default instance;