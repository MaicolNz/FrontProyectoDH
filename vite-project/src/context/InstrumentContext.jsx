// InstrumentContext.js
import React, { createContext, useState, useContext } from 'react';

const InstrumentContext = createContext();

export const useInstruments = () => useContext(InstrumentContext);

export const InstrumentProvider = ({ children }) => {
    const [instruments, setInstruments] = useState([]);
    const [availableInstruments, setAvailableInstruments] = useState([]);

    const updateInstruments = (newInstruments) => {
        setInstruments(newInstruments);
    };

    const updateAvailableInstruments = (newAvailableInstruments) => {
        setAvailableInstruments(newAvailableInstruments);
    };

    return (
        <InstrumentContext.Provider value={{ instruments, availableInstruments, updateInstruments, updateAvailableInstruments }}>
            {children}
        </InstrumentContext.Provider>
    );
};
