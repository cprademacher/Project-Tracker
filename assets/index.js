var updateTime = () => {
        var today = dayjs().format("MMM D, YYYY @ hh:mm:ss a");
        var showDateEl = $('#current-time');
        showDateEl.text(today);
};
updateTime();
setInterval(updateTime, 1000);