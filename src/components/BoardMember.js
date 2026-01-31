class BoardMember {
  constructor() {
    this.name = "";
    this.position = "";
    this.major = "";
    this.grade = "";
    this.hometown = "";
    this.hobbies = "";
    this.funFact = "";
    this.imageUrl = "";
    this.netid = "";
  }

  populate(data) {
    Object.assign(this, data);
  }
}

export default BoardMember;
