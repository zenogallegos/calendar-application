# 05 Third-Party APIs: Work Day Scheduler

## Task

Create a simple calendar application that allows a user to save events for hours in the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The application also utilizes day.js and bootstrap. The user can input text on the hourly sections and can save their input with the save button on the right of each hour bar. The content saves to local storage and is retrieved on page refresh

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with hourly timeblocks
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
