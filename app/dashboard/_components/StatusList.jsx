import { getUniqueRecord } from '@/app/_services/service';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react';

function StatusList({ attendanceList }) {
  const [totalStudent, setTotalStudent] = useState(0);
  const [presentPerc, setPresentPerc] = useState(0);

  useEffect(() => {
    if (attendanceList && attendanceList.length > 0) {
      const uniqueStudents = getUniqueRecord(attendanceList);
      const totalStudentsCount = uniqueStudents.length;
      setTotalStudent(totalStudentsCount);

      const today = moment().format('D');
      const totalDays = Number(today);

      if (totalStudentsCount > 0 && totalDays > 0) {
        const presentPercentage = (attendanceList.length / (totalStudentsCount * totalDays)) * 100;
        setPresentPerc(presentPercentage);
      }
    }
  }, [attendanceList]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
      <Card
        icon={<GraduationCap className='text-primary' />}
        title='Total Student'
        value={totalStudent}
        className='bg-white text-gray-900'
      />
      <Card
        icon={<TrendingUp className='text-green-500' />}
        title='Total Present'
        value={presentPerc.toFixed(1) + '%'}
        className='bg-white text-gray-900'
      />
      <Card
        icon={<TrendingDown className='text-red-500' />}
        title='Total Absent'
        value={(100 - presentPerc).toFixed(1) + '%'}
        className='bg-white text-gray-900'
      />
    </div>
  );
}

export default StatusList;
