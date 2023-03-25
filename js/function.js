/**
 * Her sinif icin ders ders ortalama bulan fonksiyonlar
 */
const averageNoteMaths = (pClass, pLesson) => {
  const noteList = pClass.reduce((sum, student) => sum + student.lactureNotes.pLesson, 0);
  return Math.round(noteList / pClass.length);
};
const averageNotePhysics = (pClass) => {
  const noteList = pClass.reduce((sum, student) => sum + student.lactureNotes.physics, 0);
  return Math.round(noteList / pClass.length);
};
const averageNoteChemical = (pClass) => {
  const noteList = pClass.reduce((sum, student) => sum + student.lactureNotes.chemical, 0);
  return Math.round(noteList / pClass.length);
};
const averageNoteGeometry = (pClass) => {
  const noteList = pClass.reduce((sum, student) => sum + student.lactureNotes.geometry, 0);
  return Math.round(noteList / pClass.length);
};

let ortalama = 0;
let aaa = (pClass, xxx) => {
  let bb = pClass.map((student) => student.lactureNotes.xxx);
  bb.forEach((not) => (ortalama += not));
  return ortalama / bb.length;
};

console.log(aaa(classA, "maths"));

/**
 * Sinif ogrencilerinin notlarini render eden fonksiyon
 * @param {*} pClassContainer
 * @param {*} pClass
 */
const renderClass = (pClassContainer, pClass) => {
  pClassContainer.innerHTML = pClass
    .map((student) => {
      return `
    <div class="card mb-3 col-sm-12 col-md-4 col-lg-3 p-0 me-2" style="max-width: 18rem">
          <div class="card-header bg-primary text-white">
            ${student.studentNameSurname} (${Object.keys(student.lactureNotes).length} lesson)
          </div>
          <div class="card-body text-black p-0">
            <div class="d-flex justify-content-between p-2 align-items-center">
              <h6 class="card-title m-0">${Object.keys(student.lactureNotes)[0]}:</h6>
              <h6 class="card-title m-0">${student.lactureNotes.maths}</h6>
            </div>
            <div class="d-flex justify-content-between p-2">
              <h6 class="card-title m-0">${Object.keys(student.lactureNotes)[1]}:</h6>
              <h6 class="card-title m-0">${student.lactureNotes.physics}</h6>
            </div>
            <div class="d-flex justify-content-between p-2">
              <h6 class="card-title m-0">${Object.keys(student.lactureNotes)[2]}:</h6>
              <h6 class="card-title m-0">${student.lactureNotes.chemical}</h6>
            </div>
            <div class="d-flex justify-content-between p-2">
              <h6 class="card-title m-0">${Object.keys(student.lactureNotes)[3]}:</h6>
              <h6 class="card-title m-0">${student.lactureNotes.geometry}</h6>
            </div>
          </div>
      </div>
    
    `;
    })
    .join("");
};

/**
 * Sinif ogrencilerinin ders notlarini tutan sayfalara sinif isimlerini yazan fonksiyon
 * @param {*} pClassName
 */
const renderclassName = (pClassNameContainer, pStringClassName, pClassName) => {
  pClassNameContainer.innerHTML = `<h5 class="border-bottom border-primary border-3 pb-2">${pStringClassName} (${pClassName.length} Student)</h5> `;
};

/**
 * siniflarin ders ortalamasini gosteren chart barin text alanini yazdiran fonksiyon
 */
const rendermyChartText = (pMyChartText, pClassName, pClassCourseName) => {
  pMyChartText.innerHTML = `
  <p class="m-0">All Students: ${pClassName.length}</p>
  
  `;
};

/**
 * Okulun genel ders ortalamalari icin chart barin text alanini yazdiran fonksiyon
 */
const rendermyChartTextAll = (pMyChartText, pClassName) => {
  pMyChartText.innerHTML = `
  <p class="m-0">All Students: ${pClassName.length}</p>
  
  `;
};

/**
 * Okulun ders ders genel ortalamalarini bulan fonksiyonlar
 * @param {*} pClassA
 * @param {*} pClassB
 * @param {*} pClassC
 * @returns
 */
const allSchoolMathsAverage = (pClassA, pClassB, pClassC) => {
  return Math.round(
    (averageNoteMaths(pClassA) + averageNoteMaths(pClassB) + averageNoteMaths(pClassC)) / 3
  );
};
const allSchoolPhysicsAverage = (pClassA, pClassB, pClassC) => {
  return Math.round(
    (averageNotePhysics(pClassA) + averageNotePhysics(pClassB) + averageNotePhysics(pClassC)) / 3
  );
};
const allSchoolChemicalAverage = (pClassA, pClassB, pClassC) => {
  return Math.round(
    (averageNoteChemical(pClassA) + averageNoteChemical(pClassB) + averageNoteChemical(pClassC)) / 3
  );
};
const allSchoolGeometryAverage = (pClassA, pClassB, pClassC) => {
  return Math.round(
    (averageNoteGeometry(pClassA) + averageNoteGeometry(pClassB) + averageNoteGeometry(pClassC)) / 3
  );
};
/**
 * Bu fonksiyon her sinif icin ders ortalamalarini sayfalara render eder (Footer alani)
 * @param {*} pContainer
 * @param {*} pLactureName
 * @param {*} pAvaregeCourseFunc
 */
const renderClassCourseAverage = (pContainer, pLactureName, pAvaregeCourseFunc) => {
  pContainer.innerHTML = `
      <p class="">${pLactureName}</p>
      <p class="ms-2 px-4 bg-success border border-success text-white">${pAvaregeCourseFunc}</p>
  `;
};

/**
 * chart bar olusturan fonksiyon
 * @param {*} pId
 * @param {*} pLactureNotesClass
 * @param {*} pClassName
 */
const chartBar = (pId, pLactureNotesClass, pClassName) => {
  new Chart(pId, {
    type: "bar",
    data: {
      labels: ["maths", "physics", "chemical", "geometry"],
      datasets: [
        {
          backgroundColor: ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
          data: pLactureNotesClass,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: `
          Maths Avrg: ${averageNoteMaths(pClassName)}
          Physics Avrg: ${averageNotePhysics(pClassName)}
          Chemical Avrg: ${averageNoteChemical(pClassName)}
          Geometry Avrg: ${averageNoteGeometry(pClassName)}
            `,
      },
    },
  });
};
