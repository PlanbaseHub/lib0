/* eslint-env browser */
import { polyfillWebCrypto } from 'expo-standard-web-crypto'
polyfillWebCrypto()

export const subtle = crypto.subtle
export const getRandomValues = crypto.getRandomValues.bind(crypto)
