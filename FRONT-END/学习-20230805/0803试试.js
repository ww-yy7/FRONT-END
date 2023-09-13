    var alarmData = [
    { time: '2023-07-01 10:00:00', deviceType: '设备A', faultType: '故障类型1' },
    { time: '2023-07-02 14:30:00', deviceType: '设备B', faultType: '故障类型2' },
    { time: '2023-07-03 08:15:00', deviceType: '设备C', faultType: '故障类型3' }
    // 添加更多的报警数据...
];
    function generateAlarmTable() {
  var tableContainer = document.getElementById('table-container');
  var table = document.createElement('table');

  // 添加表格标题（可选）
  var caption = document.createElement('caption');
  caption.textContent = '报警数据';
  table.appendChild(caption);

  // 添加表头
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headerCell1 = document.createElement('th');
  headerCell1.textContent = '故障时间';
  var headerCell2 = document.createElement('th');
  headerCell2.textContent = '设备类型';
  var headerCell3 = document.createElement('th');
  headerCell3.textContent = '故障类型';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 添加数据行
  var tbody = document.createElement('tbody');
  alarmData.forEach(function(alarm) {
    var dataRow = document.createElement('tr');
    var dataCell1 = document.createElement('td');
    dataCell1.textContent = alarm.time;
    var dataCell2 = document.createElement('td');
    dataCell2.textContent = alarm.deviceType;
    var dataCell3 = document.createElement('td');
    dataCell3.textContent = alarm.faultType;
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
    dataRow.appendChild(dataCell3);
    tbody.appendChild(dataRow);
  });
  table.appendChild(tbody);

  tableContainer.appendChild(table);
}

// 页面加载完成时调用函数
window.addEventListener('load', generateAlarmTable);

// 或者在收到新的报警数据时调用函数
// ...

// 当收到新的报警数据时，可以更新 `alarmData` 数组，然后调用 `generateAlarmTable()` 函数来重新生成表格
// ...

