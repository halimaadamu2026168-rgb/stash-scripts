const resp = await fetch('https://www.spotify.com', { redirect: 'manual' });
const ok = resp.status === 200 || resp.status === 302;

$done({ title: 'Spotify', content: ok ? '✅ 可用' : '❌ 不可用', icon: 'music.note', backgroundColor: ok ? '#1DB954' : '#555555' });
