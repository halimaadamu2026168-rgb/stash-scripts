const url = 'https://www.netflix.com/title/81280792';
const resp = await fetch(url, { redirect: 'manual' });

let content, color;
if (resp.status === 200) { content = '✅ 完整解锁'; color = '#1DB954'; }
else if (resp.status === 403) { content = '⚠️ 仅自制剧'; color = '#FF9500'; }
else { content = '❌ 未解锁'; color = '#E50914'; }

$done({ title: 'Netflix', content, icon: 'play.tv.fill', backgroundColor: color });
