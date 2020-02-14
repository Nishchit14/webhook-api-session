const crypto = require('crypto')
const secret = "12345678";

const verifySignHeader = (body, sig="")=> {
    const payload = JSON.stringify(body)
    if (!payload) {
       throw 'Request body empty'
    }
  
    const hmac = crypto.createHmac('sha1', secret)
    const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8')
    const checksum = Buffer.from(sig, 'utf8')
    if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
      throw `Request body digest (${digest}) did not match ${sigHeaderName} (${checksum})`
    }
    
    return true
}

module.exports = verifySignHeader