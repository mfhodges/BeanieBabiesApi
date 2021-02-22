import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default class ExampleDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
    };
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

  render() {
    const FORMAT = 'MM/dd/yyyy';
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
    <>
     <p>
          {isEmpty && 'Please type or pick a day'}
          {!isEmpty && !selectedDay && 'This day is invalid'}
          {selectedDay && isDisabled && 'This day is disabled'}
          {selectedDay &&
            !isDisabled &&
            `You chose ${selectedDay.toLocaleDateString()}`}
        </p>
      <form className="form-inline">
       
        <DayPickerInput
          value={selectedDay}
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
          onDayChange={this.handleDayChange}
          keepFocus={true}
          dayPickerProps={{
            selectedDays: selectedDay,
          }}
        /> <button>Submit</button>
      </form>
      </>
    );
  }
}