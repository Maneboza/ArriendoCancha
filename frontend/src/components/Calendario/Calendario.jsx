import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import { format, isBefore, startOfHour, addHours } from 'date-fns';

function App() {
    const [bloquesHorarios, setBloquesHorarios] = useState([]);

    useEffect(() => {
        axios.get('/cancha/:id/disponibilidad') // Otra ruta en el backend para obtener los bloques de horas
        .then(response => {
            setBloquesHorarios(response.data.map(bloque => ({
            // idCancha, start, end
            })));
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleDateClick = date => {
        const horaInicio = format(date, 'yyyy-MM-dd HH:mm:ss');
        const horaFin = format(addHours(date, 1), 'yyyy-MM-dd HH:mm:ss');
        // Enviar solicitud POST al servidor para reservar el bloque de horario
        // utilizando fetch o axios
    };

    const tileDisabled = ({ activeStartDate, date, view }) => {
        if (view !== 'month') {
        return false;
        }
        const horaInicio = format(startOfHour(date), 'yyyy-MM-dd HH:mm:ss');
        const bloqueHorario = bloquesHorarios.find(bloque => format(bloque.date, 'yyyy-MM-dd HH:mm:ss') === horaInicio);
        return !bloqueHorario || !bloqueHorario.disponible || isBefore(date, new Date());
    };

    return (
        <div>
        <h1>Calendario de Reservas</h1>
        <Calendar
            value={new Date()}
            // tileDisabled={tileDisabled}
            onClickDay={handleDateClick}
        />
        </div>
    );
    }

export default App;
