import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const formatDate = (date?: string | Date, format?: string): string => {
  if (!date) {
    return '';
  }

  return dayjs(date).format(format ?? 'YYYY.MM.DD HH:mm');
};

export const getAMPM = (date: string | number): string => {
  const hours = dayjs(date).hour();
  return hours >= 12 ? 'PM' : 'AM';
};

export const formatDateAMPM = (date?: string | Date): string => {
  if (!date) {
    return '';
  }

  if (typeof date === 'string') {
    const dateNumber = Number(date);

    const hour = Math.floor(dateNumber / 100);
    const minute = dateNumber % 100;
    const AMPM = hour >= 12 ? 'PM' : 'AM';
    return `${AMPM} ${AMPM === 'PM' ? hour - 12 : hour}:${minute}`;
  } else if (date) {
    const parsedDate = dayjs(date);
    const AMPM = parsedDate.hour() >= 12 ? 'PM' : 'AM';

    return `${AMPM} ${parsedDate.hour() + 1}:${parsedDate.minute()}`;
  }
  return '';
};

export const formatDateAMPMByString = () => {};

export const getTimeText = (createdAtString: any): string => {
  const createdAt = dayjs(createdAtString);
  const now = dayjs();

  const diffDay = now.diff(createdAt, 'day');
  const diffHour = now.diff(createdAt, 'hour');
  const diffMinutes = now.diff(createdAt, 'minute');

  if (diffDay > 0) {
    return `${diffDay}일`;
  } else if (diffHour > 0) {
    return `${diffHour}시간`;
  } else if (diffMinutes) {
    return `${diffMinutes}분`;
  }

  return '';
};

export { dayjs, formatDate };
