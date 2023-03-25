/**
 *B sinifi ogrencilerini sayfaya render edilmesi
 */
renderClass(StudentsClassBContainer, classB);
renderclassName(classNameBContainer, "Class B", classB);
/**
 *B sinifi derslerin genel ortalamasinin render edilmesi (footer kismi)
 */
renderClassCourseAverage(classAvrMathsContainer, AclassCourseNames[0], averageNoteMaths(classB));
renderClassCourseAverage(
  classAvrPhysicsContainer,
  AclassCourseNames[1],
  averageNotePhysics(classB)
);
renderClassCourseAverage(
  classAvrChemicalContainer,
  AclassCourseNames[2],
  averageNoteChemical(classB)
);
renderClassCourseAverage(
  classAvrGeometriContainer,
  AclassCourseNames[3],
  averageNoteGeometry(classB)
);
