import { useState } from 'react';

interface Worker {
  id: number;
  name: string;
}

interface Schedule {
  day: string;
  workers: Worker[];
}

const RotationSchedule = () => {
const [workers, setWorkers] = useState<Worker[]>([
     { id: 1, name: 'احربيل' },
    { id: 2, name: 'جامع' },
    { id: 3, name: 'فؤاد' },
    { id: 4, name: 'زيزي' },
    { id: 5, name: 'هشام' },
    { id: 6, name: 'رضا' },
    { id: 7, name: 'مجيد' },
    { id: 8, name: 'زكرياء' },
  ]);






  
  const [schedule, setSchedule] = useState<Schedule[]>([
    { day: 'الاثنين', workers: [workers[0], workers[1], workers[2]] },
    { day: 'الثلاتاء', workers: [workers[3], workers[4], workers[5]] },
    { day: 'الاربعاء', workers: [workers[6], workers[7], workers[0]] },
    { day: 'الخميس', workers: [workers[1], workers[2], workers[3]] },
    { day: 'الجمعة', workers: [workers[4], workers[5], workers[6]] },
  ]);

  const shuffleSchedule = () => {
    const shuffledWorkers = [...workers].sort(() => Math.random() - 0.5);
    const newSchedule: Schedule[] = [];

    for (let i = 0; i < 5; i++) {
      const day = ['الاثنين', 'الثلاتاء', 'الاربعاء', 'الخميس', 'الجمعة'][i];
      const worker1 = shuffledWorkers[(i * 3) % 8];
      const worker2 = shuffledWorkers[((i * 3) + 1) % 8];
      const worker3 = shuffledWorkers[((i * 3) + 2) % 8];

      newSchedule.push({ day, workers: [worker1, worker2, worker3] });
    }

    setSchedule(newSchedule);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-5">جدول التناوب</h1>
      <button
        className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
        onClick={shuffleSchedule}
      >
        اعادة التعيين
      </button>

      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">الايام</th>
            <th className="border border-gray-400 p-2">سائق 1</th>
            <th className="border border-gray-400 p-2">سائق 2</th>
            <th className="border border-gray-400 p-2">سائق 3</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{day.day}</td>
              <td className="border border-gray-400 p-2">{day.workers[0].name}</td>
              <td className="border border-gray-400 p-2">{day.workers[1].name}</td>
              <td className="border border-gray-400 p-2">{day.workers[2].name}</td>
            </tr>
          ))}
        </tbody>
      </table>
	  

	  
    </div>
  );
};

export default RotationSchedule;