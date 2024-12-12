#! /usr/bin/env node

import { Command } from 'commander';
import nodeFetch from 'node-fetch';

const program = new Command();

program
  .command('show')
  .argument('<city>')
  .action(async (city) => {
    const timeNow = new Date();
    const hour = timeNow.getHours();
    const minutes = timeNow.getMinutes();

    try {
      const res = await nodeFetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
      );

      if (!res.ok) throw new Error('invalid city name');
      const weather = await res.json();

      console.log(`Temperature: ${weather.main.temp} at ${hour}:${minutes}`);
    } catch (err) {
      console.error(err);
    }
  });

program.parse();
