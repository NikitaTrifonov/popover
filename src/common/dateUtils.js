export const getEventTimeMessage = (eventTime) => {
    const timeDifference = Date.now() - eventTime.getTime();

    if (timeDifference < 10_000) return `несколько секунд назад`;
    if (timeDifference > 10_000 && timeDifference < 60_000) return `${Math.floor(timeDifference / 1000)} сек. назад`;
    if (timeDifference > 60_000 && timeDifference < 60_000 * 60) return `${Math.floor(timeDifference / 60_000)} мин. назад`;
    if (timeDifference > 60_000 * 60) return `${Math.floor(timeDifference / (60_000 * 60))} ч. назад`;
};
