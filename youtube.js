const resp = await fetch('https://www.youtube.com/premium', { headers: { 'Accept-Language': 'en-US' } });
const body = await resp.text();

let content, color;
if (body.includes('Premium is not available in your country')) { content = '❌ 不可用'; color = '#555555'; }
else if (resp.status === 200) { content = '✅ 可用'; color = '#FF0000'; }
else { content = '⚠️ 未知'; color = '#FF9500'; }

$done({ title: 'YouTube Premium', content, icon: 'play.rectangle.fill', backgroundColor: color });
