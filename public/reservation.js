class Reservation {

  constructor(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getPhone() {
    return this.phone;
  }

  getEmail() {
    return this.email;
  }

}

module.exports = Reservation;
