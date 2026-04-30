const resp = await fetch('https://ios.chat.openai.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } });

let content, color;
if (resp.status === 200) { content = '✅ 可访问'; color = '#10A37F'; }
else if (resp.status === 403) { content = '❌ 已封锁'; color = '#E50914'; }
else { content = '⚠️ 异常'; color = '#FF9500'; }

$done({ title: 'ChatGPT', content, icon: 'brain.head.profile', backgroundColor: color });
