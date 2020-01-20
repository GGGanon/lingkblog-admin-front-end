import moment from 'moment'

export function formatDate(date) {
    return moment(new Date(date * 1000).toISOString()).format('YYYY/MM/DD hh:mm A')
}