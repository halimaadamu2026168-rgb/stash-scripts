const resp = await fetch('http://127.0.0.1:9090/traffic');
const data = await resp.json();
const toMB = b => (b / 1024 / 1024).toFixed(1);

$done({ title: '流量统计', content: `↑ ${toMB(data.up)} MB\n↓ ${toMB(data.down)} MB`, icon: 'chart.bar.fill', backgroundColor: '#FF9500' });
