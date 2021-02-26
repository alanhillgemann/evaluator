const validateURL = (evaluateURL) => {
    /*
    * URL per RFC 3886 https://tools.ietf.org/html/rfc3986
    * MeaningCloud API only supports non-authenticated http requests:
    * https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/request
    */
    let url
    try {
      url = new URL(evaluateURL)
    } catch {
      return false
    }
    return url.protocol === "http:"
}

export {validateURL}
