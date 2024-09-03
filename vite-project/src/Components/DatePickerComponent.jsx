import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ onDatesSelected, occupiedRanges }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDatesSelected(start, end); // Notifica al componente padre sobre las fechas seleccionadas
  };

  // Función para deshabilitar fechas
  const isDateDisabled = (date) => {
    const today = new Date();
    // Deshabilitar fechas anteriores a hoy
    if (date < today) return true;

    // Deshabilitar fechas dentro de los rangos ocupados
    return occupiedRanges.some(([start, end]) => date >= start && date <= end);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        filterDate={(date) => !isDateDisabled(date)}
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePickerComponent;
