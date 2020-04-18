import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'

export default ({ app }, inject) => {
  inject('dateFormat', (date = new Date(), formatStr) => {
    return format(date, formatStr, {
      locale: ja
    })
  })
}
