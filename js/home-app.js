/*A sinifinin ders ortalamalarini tutan dizi */
const lactureNotesClassA = [
  averageNoteMaths(classA),
  averageNotePhysics(classA),
  averageNoteChemical(classA),
  averageNoteGeometry(classA),
];
/*B sinifinin ders ortalamalarini tutan dizi */
const lactureNotesClassB = [
  averageNoteMaths(classB),
  averageNotePhysics(classB),
  averageNoteChemical(classB),
  averageNoteGeometry(classB),
];
/*C sinifinin ders ortalamalarini tutan dizi */
const lactureNotesClassC = [
  averageNoteMaths(classC),
  averageNotePhysics(classC),
  averageNoteChemical(classC),
  averageNoteGeometry(classC),
];
/*Tum siniflarin ders ortalamalarini tutan dizi */
const lactureNotesClassAll = [
  allSchoolMathsAverage(classA, classB, classC),
  allSchoolPhysicsAverage(classA, classB, classC),
  allSchoolChemicalAverage(classA, classB, classC),
  allSchoolGeometryAverage(classA, classB, classC),
];

/*A sinif icin chart bar olusturulmasi*/
chartBar("myChart1", lactureNotesClassA, classA);
/*B sinif icin chart bar olusturulmasi*/
chartBar("myChart2", lactureNotesClassB, classB);
/*c sinif icin chart bar olusturulmasi*/
chartBar("myChart3", lactureNotesClassC, classC);
/*Tum siniflar icin genel ortalama alan chart bar olusturulmasi*/
chartBar("myChart4", lactureNotesClassAll, classA, (classA, classB, classC));
/**
 * Butun Chart text alanlarinin yazdirilmasi
 */
rendermyChartText(myChart1Text, classA);
rendermyChartText(myChart2Text, classB);
rendermyChartText(myChart3Text, classC);
rendermyChartTextAll(myChart4Text, allClassLectureNotes);
