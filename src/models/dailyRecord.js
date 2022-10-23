/**
 * An object represenation of a daily record.
 * @param date {String} The date.
 * @param books {Array[DailyBook]} The books.
 */
export class DailyRecord {
  constructor(date, books) {
    this.date = date;
    this.books = books;
  }
}

/**
 *
 */
export class DailyBook {
  constructor(title, start, end, unit) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.unit = unit;
  }
}
