class Restaurant {

  constructor() {
    this.reservations = [],
    this.waitlist = []
  }

  addToReservations(reservation) {
    if (this.reservations.length >= 5) {
      this.addToWaitList(reservation);
    } else {
      this.reservations.push(reservation);
    }
  }

  addToWaitList(reservation) {
    this.waitlist.push(reservation);
  }

  getReservations() {
    return this.reservations;
  }

  getWaitlist() {
    return this.waitlist;
  }

  clear() {
    this.waitlist.empty();
    this.five.empty();
  }

  writeReservations() {

  }

  writeWaitlist() {

  }

}

module.exports = Restaurant;
