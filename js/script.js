// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  let currentDay = dayjs();

  const saveBtn = $(".btn.saveBtn");
  const hour6 = $("#hour-6a");
  const hour7 = $("#hour-7a");
  const hour8 = $("#hour-8a");
  const hour9 = $("#hour-9a");
  const hour10 = $("#hour-10a");
  const hour11 = $("#hour-11a");
  const hour12 = $("#hour-12p");
  const hour13 = $("#hour-1p");
  const hour14 = $("#hour-2p");
  const hour15 = $("#hour-3p");
  const hour16 = $("#hour-4p");
  const hour17 = $("#hour-5p");
  const hour18 = $("#hour-6p");
  const hour19 = $("#hour-7p");
  const hour20 = $("#hour-8p");
  const hour21 = $("#hour-9p");
  const hour22 = $("#hour-10p");

  let hours = [
    hour6,
    hour7,
    hour8,
    hour9,
    hour10,
    hour11,
    hour12,
    hour13,
    hour14,
    hour15,
    hour16,
    hour17,
    hour18,
    hour19,
    hour20,
    hour21,
    hour22,
  ];

  // let hourArr = [
  //   6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  // ];

  retreiveData();

  // const hours = [
  //   hour6a.time = dayjs().hour(6),
  //   hour7a.time = dayjs().hour(7),
  //   hour8a.time = dayjs().hour(8),
  //   hour9a.time = dayjs().hour(9),
  //   hour10a.time = dayjs().hour(10),
  //   hour11a.time = dayjs().hour(11),
  //   hour12p.time = dayjs().hour(12),
  //   hour1p.time = dayjs().hour(13),
  //   hour2p.time = dayjs().hour(14),
  //   hour3p.time = dayjs().hour(15),
  //   hour4p.time = dayjs().hour(16),
  //   hour5p.time = dayjs().hour(17),
  //   hour6p.time = dayjs().hour(18),
  //   hour7p.time = dayjs().hour(19),
  //   hour8p.time = dayjs().hour(20),
  //   hour9p.time = dayjs().hour(21),
  //   hour10p.time = dayjs().hour(22)
  // ];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  function retreiveData() {
    const storageKeys = Object.keys(localStorage);
    for (let i = 0; i < storageKeys.length; i++) {
      const divId = $('#' + storageKeys[i]);
      storedUserInput = JSON.parse(localStorage.getItem(storageKeys[i]));
      divId.children('.col-8.description').html(storedUserInput)
    };
    
  };


  saveBtn.click(function saveInfo() {
    const saveBtnRef = $(this);
    const btnParent = saveBtnRef.parent();
    const userInputField = saveBtnRef.siblings(".col-8.description");
    const parentIdString = String(btnParent.attr("id"));

    let hourCont = {
      hour: parentIdString,
      input: userInputField.val(),
    };

    if (hourCont.input === "") {
      return;
    }

    console.log(
      hourCont.hour + " Input Description:  " + "'" + hourCont.input + "'"
    );
    localStorage.setItem(hourCont.hour, JSON.stringify(hourCont.input));

    // retrieveSavedData(hourCont, saveBtnRef);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function blockColor() {

    for (let i = 6; i <= 22; i++) {
        if (currentDay.$H === i) {
          hours[i - 6].addClass('present');
        } else if (currentDay.$H > i) {
          hours[i - 6].addClass('past');
        } else if (currentDay.$H < i) {
          hours[i - 6].addClass('future');
          console.log(hours[i]);
        };
      };
  };
      

  //     if (currentDay.$H === dayjs().hour(6).$H) {
  //       hour6a.addClass("present");
  //     } else if (currentDay.$H > dayjs().hour(6).$H) {
  //       hour6a.addClass("past");
  //     } else if (currentDay.$H < dayjs().hour(6).$H) {
  //       hour6a.addClass("future");
  //     }

  //     if (currentDay.$H === dayjs().hour(7).$H) {
  //       hour7a.addClass("present");
  //     } else if (currentDay.$H > dayjs().hour(7).$H) {
  //       hour7a.addClass("past");
  //     } else if (currentDay.$H < dayjs().hour(7).$H) {
  //       hour7a.addClass("future");
  //     }

  //     if (currentDay.$H === dayjs().hour(8).$H) {
  //       hour8a.addClass("present");
  //     } else if (currentDay.$H > dayjs().hour(8).$H) {
  //       hour8a.addClass("past");
  //     } else if (currentDay.$H < dayjs().hour(8).$H) {
  //       hour8a.addClass("future");
  //     }
  // }
  blockColor();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function retrieveSavedData(hourCont, saveBtnRef) {
    storedUserInput = JSON.parse(localStorage.getItem(hourCont.hour));
    saveBtnRef.siblings(".col-8.description").html(storedUserInput);

    console.log(storedUserInput);
  }

  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDay() {
    $("#currentDay").text(currentDay.format("dddd, MMM D, YYYY "));
    $("#currentTime").text(currentDay.format("h:mm A"));
    $("#currentDay").attr("style", "font-size: 25px;");
    $("#currentTime").attr("style", "font-size: 35px;");
  }

  displayCurrentDay();
});
