/**
 * A sinifinin notlarinin render edilmesi
 */
renderClass(StudentsClassAContainer, classA);
renderclassName(classNameAContainer, "Class A", classA);
/**
 * A sinifi derslerin genel ortalamasinin render edilmesi (footer kismi)
 */
renderClassCourseAverage(classAvrMathsContainer, AclassCourseNames[0], averageNoteMaths(classA));
renderClassCourseAverage(
  classAvrPhysicsContainer,
  AclassCourseNames[1],
  averageNotePhysics(classA)
);
renderClassCourseAverage(
  classAvrChemicalContainer,
  AclassCourseNames[2],
  averageNoteChemical(classA)
);
renderClassCourseAverage(
  classAvrGeometriContainer,
  AclassCourseNames[3],
  averageNoteGeometry(classA)
);
