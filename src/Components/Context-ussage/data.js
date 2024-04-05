const dummyApiResponse = {
  showLightAndDarkMode: true,
  showAccordian: true,
  showtreeVie: true,
  showTictactoeBoard: true,
  showrandomcolor: true,
};

function featureflagdataservicecall() {
  return new Promise((res, rej) => {
    if (dummyApiResponse) {
      res(dummyApiResponse)
    } else {
      rej("some error occured");
    }
  });
}

export default featureflagdataservicecall;
