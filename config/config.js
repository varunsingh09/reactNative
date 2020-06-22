const PORT = `3001`
const SERVER_PATH = `http://192.168.0.105:${PORT}`
export const GA_KEY = `UA-167493732-1`

export const BEARER = `Bearer `
export const TOKEN_KEY = 'foodapp_token';


const LOCATION_KEY = `Wu97f2ErT047065q_M1Hz021p78JWFigm_izGsPQ4lY`

export const CURRENT_LOCATION_API = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${LOCATION_KEY}`

export const KITCHEN_REGISTRATION_API = `${SERVER_PATH}/Kitchen/KitchenSignup`

export const STATE_CITY_FETCH_API = `${SERVER_PATH}/StateCities/AllStateCity`

export const KITCHEN_LOGIN_API = `${SERVER_PATH}/kitchen/KitchenLogin`

export const KITCHEN_LOGIN_VERIFY_API = `${SERVER_PATH}/kitchen/KitchenSendEmail`

export const KITCHEN_LOGOUT_API = `${SERVER_PATH}/kitchen/KitchenSignInLogout`

export const KITCHEN_PRODUCT_LIST_API = `${SERVER_PATH}/products/AllProducts`

export const KITCHEN_AND_ZIPCODE_API = `${SERVER_PATH}/ZipcodesKitchens/ZipcodeKitchensList`



