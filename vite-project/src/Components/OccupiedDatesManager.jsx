import React, { useState, useEffect } from 'react';
import DatePickerComponent from '../Components/DatePickerComponent'; // Ajusta la ruta según sea necesario
import occupiedDatesData from '../Components/utils/occupiedDates.json'; // Ajusta la ruta según sea necesario

const OccupiedDatesManager = ({ instrumentId, onDatesSelected }) => {
    const [occupiedDates, setOccupiedDates] = useState([]);

    useEffect(() => {
        if (occupiedDatesData[instrumentId]) {
            const formattedDates = occupiedDatesData[instrumentId].map(([start, end]) => [
                new Date(start),
                new Date(end)
            ]);
            setOccupiedDates(formattedDates);
        }
    }, [instrumentId]);

    return (
        <DatePickerComponent
            onDatesSelected={onDatesSelected}
            occupiedRanges={occupiedDates}
        />
    );
};

export default OccupiedDatesManager;
