const targets = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Cloudflare', url: 'https://1.1.1.1' },
];

const results = await Promise.all(targets.map(async t => {
  const start = Date.now();
  try { await fetch(t.url, { method: 'HEAD' }); return `${t.name}: ${Date.now() - start}ms`; }
  catch { return `${t.name}: 超时`; }
}));

$done({ title: '网络延迟', content: results.join('\n'), icon: 'speedometer', backgroundColor: '#34C759' });
