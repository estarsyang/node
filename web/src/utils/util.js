import jsencrypt from '@/assets/lib/jsencrypt.min';
jsencrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmOvTaySthoMQHR7eESEwKFKw
  yJoD1PhEjXxIZL5xxtgdvzq8dOo8torfJMhRlzumUc6SSHR3AweWONAEtJstJtbL
  6kJEsSA3DJ0YMoCERbimqyZUDa7MpR7PwprQKPg6Tnvd4hjV2tjIZfT4JMXe4IKe
  JGT9cG4Lrswcuk9pWQIDAQAB
  -----END PUBLIC KEY-----`);





export function encrypt(text) {
  return jsencrypt.encrypt(text);
}