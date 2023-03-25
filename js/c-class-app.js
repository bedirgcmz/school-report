/**
 * C sinifi ogrencilerini sayfaya render edilmesi
 */
renderClass(StudentsClassCContainer, classC);
renderclassName(classNameCContainer, "Class C", classC);
/**
 * C sinifi derslerin genel ortalamasinin render edilmesi (footer kismi)
 */
renderClassCourseAverage(classAvrMathsContainer, AclassCourseNames[0], averageNoteMaths(classC));
renderClassCourseAverage(
  classAvrPhysicsContainer,
  AclassCourseNames[1],
  averageNotePhysics(classC)
);
renderClassCourseAverage(
  classAvrChemicalContainer,
  AclassCourseNames[2],
  averageNoteChemical(classC)
);
renderClassCourseAverage(
  classAvrGeometriContainer,
  AclassCourseNames[3],
  averageNoteGeometry(classC)
);
