const utils = {
   formatter (val) {
    return val < 10 ? '0' + val : val
  },
  getDataTime (val) {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    if (month===0) {
      month = 12
      year--
    }
    return year+'-'+ this.formatter(month)
  }
}

export default utils
