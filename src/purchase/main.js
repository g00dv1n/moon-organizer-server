import { WayForPay } from './way-for-pay'
import config from 'config'

let WPF
if (config.get('IS_TEST_MERCHANT')) {
  WPF = new WayForPay('test_merch_n1', 'flk3409refn54t54t*FNJRET')
} else {
  WPF = new WayForPay('moonorganizer_com', 'e44341eec1c061e426e1a1efa22fafe588610bff')
}
export {
    WPF
}
