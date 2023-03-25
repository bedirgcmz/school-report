/**
 * Tum ogrencilerin bilgilerinin tutuldugu data
 */
const allClassLectureNotes = [
  {
    className: "Class B",
    studentNameSurname: "Bedir Gocmez",
    lactureNotes: {
      maths: 86,
      physics: 75,
      chemical: 90,
      geometry: 85,
    },
  },
  {
    className: "Class B",
    studentNameSurname: "M.Kadir Gocmez",
    lactureNotes: {
      maths: 80,
      physics: 70,
      chemical: 60,
      geometry: 65,
    },
  },
  {
    className: "Class B",
    studentNameSurname: "Rana Lina Gocmez",
    lactureNotes: {
      maths: 82,
      physics: 78,
      chemical: 93,
      geometry: 88,
    },
  },
  {
    className: "Class A",
    studentNameSurname: "Erkan Arsalan",
    lactureNotes: {
      maths: 86,
      physics: 75,
      chemical: 90,
      geometry: 85,
    },
  },
  {
    className: "Class A",
    studentNameSurname: "Tevfik Arslan",
    lactureNotes: {
      maths: 80,
      physics: 72,
      chemical: 67,
      geometry: 80,
    },
  },
  {
    className: "Class A",
    studentNameSurname: "Betul Arslan",
    lactureNotes: {
      maths: 70,
      physics: 78,
      chemical: 87,
      geometry: 88,
    },
  },
  {
    className: "Class A",
    studentNameSurname: "Rana Arslan",
    lactureNotes: {
      maths: 66,
      physics: 56,
      chemical: 79,
      geometry: 98,
    },
  },
  {
    className: "Class C",
    studentNameSurname: "Gizem Bulut",
    lactureNotes: {
      maths: 85,
      physics: 78,
      chemical: 93,
      geometry: 88,
    },
  },
  {
    className: "Class C",
    studentNameSurname: "Halit Bulut",
    lactureNotes: {
      maths: 80,
      physics: 75,
      chemical: 56,
      geometry: 78,
    },
  },
  {
    className: "Class C",
    studentNameSurname: "Eylem Bulut",
    lactureNotes: {
      maths: 65,
      physics: 54,
      chemical: 87,
      geometry: 96,
    },
  },
  {
    className: "Class A",
    studentNameSurname: "Hatem Polat",
    lactureNotes: {
      maths: 86,
      physics: 90,
      chemical: 75,
      geometry: 88,
    },
  },
  {
    className: "Class B",
    studentNameSurname: "Ruveyda Isin",
    lactureNotes: {
      maths: 49,
      physics: 92,
      chemical: 55,
      geometry: 78,
    },
  },
];

/*A sinifi ogrencileri*/
const classA = allClassLectureNotes.filter((student) => student.className == "Class A");
/*B sinifi ogrencileri*/
const classB = allClassLectureNotes.filter((student) => student.className == "Class B");
/*C sinifi ogrencileri*/
const classC = allClassLectureNotes.filter((student) => student.className == "Class C");
/*A Sinifinin ders isimleri */
const AclassCourseNames = classA.map((student) => Object.keys(student.lactureNotes))[0]; //[ 'maths', 'physics', 'chemical', 'geometry' ]
/*B Sinifinin ders isimleri */
const BclassCourseNames = classB.map((student) => Object.keys(student.lactureNotes))[0]; //[ 'maths', 'physics', 'chemical', 'geometry' ]
/*C Sinifinin ders isimleri */
const CclassCourseNames = classC.map((student) => Object.keys(student.lactureNotes))[0]; //[ 'maths', 'physics', 'chemical', 'geometry' ]
