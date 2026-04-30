const resp = await fetch('https://www.disneyplus.com', { redirect: 'manual' });
const location = resp.headers.get('location') || '';
const ok = resp.status === 200 || (resp.status === 302 && !location.includes('unavailable'));

$done({ title: 'Disney+', content: ok ? '✅ 可用' : '❌ 不可用', icon: 'sparkles.tv.fill', backgroundColor: ok ? '#113CCF' : '#555555' });
