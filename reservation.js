class Reservation {

  constructor(name, phone, email, ID) {
    this.name = name,
    this.phone = phone
    this.ID = ID,
    this.email = email
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.ID;
  }

  getPhone() {
    return this.phone;
  }

  getEmail() {
    return this.email;
  }

}

module.exports = Reservation;